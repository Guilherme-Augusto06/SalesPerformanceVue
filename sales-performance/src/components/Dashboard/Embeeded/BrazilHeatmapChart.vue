<template>
  <div>
    <highcharts :options="chartOptions" ref="chartRef" />
  </div>
</template>

<script>
import Highcharts from 'highcharts';
import HighchartsMap from 'highcharts/modules/map';
import Drilldown from 'highcharts/modules/drilldown';
import HighchartsVue from 'highcharts-vue';

HighchartsMap(Highcharts);
Drilldown(Highcharts);

export default {
  name: 'BrazilHeatmapChart',
  components: {
    highcharts: HighchartsVue.component
  },
  data() {
    return {
      chartOptions: {},
      chartRef: null
    };
  },
  methods: {
    async loadMap() {
      const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/us/us-all.topo.json'
      ).then((res) => res.json());

      const data = Highcharts.geojson(topology);
      const mapView = topology.objects.default['hc-recommended-mapview'];

      data.forEach((d, i) => {
        d.drilldown = d.properties['hc-key'];
        d.value = i;
      });

      this.chartOptions = {
        chart: {
          map: topology,
          events: {
            drilldown: this.handleDrilldown,
            afterDrillUp: this.handleAfterDrillUp
          }
        },
        title: {
          text: 'Highcharts Map Drilldown'
        },
        colorAxis: {
          min: 0,
          minColor: '#E6E7E8',
          maxColor: '#005645'
        },
        mapView,
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },
        plotOptions: {
          map: {
            states: {
              hover: {
                color: '#EEDD66'
              }
            }
          }
        },
        series: [
          {
            data,
            name: 'USA',
            dataLabels: {
              enabled: true,
              format: '{point.properties.postal-code}'
            },
            custom: {
              mapView
            }
          }
        ],
        drilldown: {
          activeDataLabelStyle: {
            color: '#FFFFFF',
            textDecoration: 'none',
            textOutline: '1px #000000'
          },
          breadcrumbs: {
            floating: true
          },
          drillUpButton: {
            relativeTo: 'spacingBox',
            position: {
              x: 0,
              y: 60
            }
          }
        }
      };
    },

    async handleDrilldown(e) {
      if (!e.seriesOptions) {
        const chart = this.$refs.chartRef.chart;
        const mapKey = `countries/us/${e.point.drilldown}-all`;

        let fail = setTimeout(() => {
          if (!Highcharts.maps[mapKey]) {
            chart.showLoading(`
              <i class="icon-frown"></i>
              Failed loading ${e.point.name}
            `);
            fail = setTimeout(() => chart.hideLoading(), 1000);
          }
        }, 3000);

        chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>');

        const topology = await fetch(
          `https://code.highcharts.com/mapdata/${mapKey}.topo.json`
        ).then((res) => res.json());

        const data = Highcharts.geojson(topology);
        data.forEach((d, i) => {
          d.value = i;
        });

        chart.mapView.update(
          Highcharts.merge(
            {
              insets: undefined,
              padding: 0
            },
            topology.objects.default['hc-recommended-mapview']
          )
        );

        chart.hideLoading();
        clearTimeout(fail);
        chart.addSeriesAsDrilldown(e.point, {
          name: e.point.name,
          data,
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        });
      }
    },

    handleAfterDrillUp(e) {
      if (e.seriesOptions.custom && e.seriesOptions.custom.mapView) {
        e.target.mapView.update(
          Highcharts.merge(
            { insets: undefined },
            e.seriesOptions.custom.mapView
          ),
          false
        );
      }
    }
  },
  mounted() {
    this.loadMap();
  }
};
</script>
