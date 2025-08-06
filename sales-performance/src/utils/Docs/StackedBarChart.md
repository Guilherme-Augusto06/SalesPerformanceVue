# ApexStackedBarChart - Documentação de Uso Dinâmico

## Visão Geral

O componente `ApexStackedBarChart` exibe gráficos de barras empilhadas, recebendo dados via props. Ideal para integração futura com backend.

## Props Principais

- `title` (String): Título do gráfico.
- `series` (Array): Array de séries de dados, cada uma com `{ name, data }`.
- `categories` (Array): Rótulos do eixo X.
- `chartHeight` (Number): Altura do gráfico.
- `colors` (Array): Cores das séries.
- `horizontal` (Boolean): Barras horizontais ou verticais.
- `stacked` (Boolean): Gráfico empilhado.
- `strokeWidth` (Number): Espessura da borda.
- `strokeColors` (Array): Cores da borda.
- `showDataLabels` (Boolean): Exibe valores nas barras.
- `showTotal` (Boolean): Exibe total nas barras.
- `totalOffsetX` (Number): Offset do total.
- `totalFontSize` (String): Tamanho da fonte do total.
- `totalFontWeight` (String/Number): Peso da fonte do total.
- `xAxisFormatter` (Function): Formata valores do eixo X.
- `yAxisTitle` (String): Título do eixo Y.
- `tooltipFormatter` (Function): Formata valores do tooltip.
- `fillOpacity` (Number): Opacidade do preenchimento.
- `showLegend` (Boolean): Exibe legenda.
- `legendPosition` (String): Posição da legenda.
- `legendHorizontalAlign` (String): Alinhamento horizontal da legenda.
- `legendOffsetX` (Number): Offset X da legenda.
- `legendOffsetY` (Number): Offset Y da legenda.

## Exemplo de Uso Dinâmico

```vue
<ApexStackedBarChart
  :title="dados.title"
  :series="dados.series"
  :categories="dados.categories"
  :chartHeight="dados.chartHeight"
  :colors="dados.colors"
  :horizontal="dados.horizontal"
  :stacked="dados.stacked"
  :strokeWidth="dados.strokeWidth"
  :strokeColors="dados.strokeColors"
  :showDataLabels="dados.showDataLabels"
  :showTotal="dados.showTotal"
  :totalOffsetX="dados.totalOffsetX"
  :totalFontSize="dados.totalFontSize"
  :totalFontWeight="dados.totalFontWeight"
  :xAxisFormatter="dados.xAxisFormatter"
  :yAxisTitle="dados.yAxisTitle"
  :tooltipFormatter="dados.tooltipFormatter"
  :fillOpacity="dados.fillOpacity"
  :showLegend="dados.showLegend"
  :legendPosition="dados.legendPosition"
  :legendHorizontalAlign="dados.legendHorizontalAlign"
  :legendOffsetX="dados.legendOffsetX"
  :legendOffsetY="dados.legendOffsetY"
/>
```

## Estrutura Esperada dos Dados (Exemplo Dinâmico)

```js
const dados = {
  title: "Gráfico de Barras Empilhadas",
  series: [
    { name: "Marine Sprite", data: [44, 55, 41, 37, 22, 43, 21] },
    { name: "Striking Calf", data: [53, 32, 33, 52, 13, 43, 32] },
    { name: "Tank Picture", data: [12, 17, 11, 9, 15, 11, 20] },
    { name: "Bucket Slope", data: [9, 7, 5, 8, 6, 9, 4] },
    { name: "Reborn Kid", data: [25, 12, 19, 32, 25, 24, 10] },
  ],
  categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
  chartHeight: 350,
  colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
  horizontal: true,
  stacked: true,
  strokeWidth: 1,
  strokeColors: ["#fff"],
  showDataLabels: true,
  showTotal: true,
  totalOffsetX: 0,
  totalFontSize: "13px",
  totalFontWeight: 900,
  xAxisFormatter: (val) => val + "K",
  yAxisTitle: undefined,
  tooltipFormatter: (val) => val + "K",
  fillOpacity: 1,
  showLegend: true,
  legendPosition: "top",
  legendHorizontalAlign: "left",
  legendOffsetX: 40,
  legendOffsetY: 0,
};
```

## Integração com Backend

- Consuma os dados do backend (ex: via Axios ou Fetch) e monte o objeto conforme o exemplo acima.
- Passe o objeto como props para o componente.
- O gráfico será renderizado automaticamente com os dados recebidos.

## Observações

- Para personalizar os dados, altere os arrays `series`, `categories` e as props visuais conforme necessário.
- O componente já está preparado para reatividade ao tema (dark/light).
- Para múltiplos gráficos, basta instanciar o componente com diferentes dados.
