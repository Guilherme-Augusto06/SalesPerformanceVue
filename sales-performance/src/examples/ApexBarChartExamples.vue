<template>
  <div class="pa-4">
    <h2 class="text-h4 mb-6">Exemplos de Uso do ApexBarChart</h2>
    
    <!-- Exemplo 1: Configuração Padrão -->
    <div class="mb-8">
      <h3 class="text-h5 mb-4">1. Configuração Padrão</h3>
      <ApexBarChart />
    </div>

    <!-- Exemplo 2: Vendas por Região -->
    <div class="mb-8">
      <h3 class="text-h5 mb-4">2. Vendas por Região</h3>
      <ApexBarChart
        title="Vendas por Região"
        :chart-data="vendasPorRegiao"
        series-name="Vendas"
        :chart-height="300"
        primary-color="#2196F3"
        goal-color="#FF5722"
        :legend-items="['Vendas', 'Meta']"
      />
    </div>

    <!-- Exemplo 3: Gráfico Vertical -->
    <div class="mb-8">
      <h3 class="text-h5 mb-4">3. Gráfico Vertical - Performance Trimestral</h3>
      <ApexBarChart
        title="Performance Trimestral"
        :chart-data="performanceTrimestral"
        series-name="Resultado"
        :chart-height="400"
        :horizontal="false"
        primary-color="#9C27B0"
        goal-color="#FFC107"
        :legend-items="['Resultado', 'Objetivo']"
      />
    </div>

    <!-- Exemplo 4: Vendas por Produto -->
    <div class="mb-8">
      <h3 class="text-h5 mb-4">4. Vendas por Produto (Sem Legenda)</h3>
      <ApexBarChart
        title="Top 5 Produtos Mais Vendidos"
        :chart-data="vendasPorProduto"
        series-name="Unidades Vendidas"
        :chart-height="350"
        primary-color="#4CAF50"
        goal-color="#FF9800"
        :show-legend="false"
      />
    </div>

    <!-- Exemplo 5: Dados Dinâmicos -->
    <div class="mb-8">
      <h3 class="text-h5 mb-4">5. Dados Dinâmicos com Botões</h3>
      <v-row class="mb-4">
        <v-col cols="12" md="6">
          <v-btn 
            @click="alterarDados" 
            color="primary" 
            class="mr-2"
          >
            Alterar Dados
          </v-btn>
          <v-btn 
            @click="alterarCores" 
            color="secondary"
          >
            Alterar Cores
          </v-btn>
        </v-col>
      </v-row>
      <ApexBarChart
        title="Dados Dinâmicos"
        :chart-data="dadosDinamicos"
        :series-name="serieDinamica"
        :chart-height="chartHeight"
        :primary-color="corPrimaria"
        :goal-color="corMeta"
        :legend-items="legendaDinamica"
      />
    </div>
  </div>
</template>

<script>
import ApexBarChart from '../components/DashboardGerencial/Embeeded/ApexBarChart.vue'

export default {
  name: 'ApexBarChartExamples',
  components: {
    ApexBarChart
  },
  data() {
    return {
      // Dados para exemplo 2
      vendasPorRegiao: [
        {
          x: 'Norte',
          y: 120,
          goals: [
            {
              name: 'Meta',
              value: 150,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#FF5722'
            }
          ]
        },
        {
          x: 'Sul',
          y: 200,
          goals: [
            {
              name: 'Meta',
              value: 180,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#FF5722'
            }
          ]
        },
        {
          x: 'Sudeste',
          y: 350,
          goals: [
            {
              name: 'Meta',
              value: 300,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#FF5722'
            }
          ]
        },
        {
          x: 'Nordeste',
          y: 280,
          goals: [
            {
              name: 'Meta',
              value: 250,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#FF5722'
            }
          ]
        }
      ],

      // Dados para exemplo 3
      performanceTrimestral: [
        {
          x: 'Q1 2024',
          y: 85,
          goals: [
            {
              name: 'Objetivo',
              value: 100,
              strokeWidth: 8,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#FFC107'
            }
          ]
        },
        {
          x: 'Q2 2024',
          y: 110,
          goals: [
            {
              name: 'Objetivo',
              value: 105,
              strokeWidth: 8,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#FFC107'
            }
          ]
        },
        {
          x: 'Q3 2024',
          y: 95,
          goals: [
            {
              name: 'Objetivo',
              value: 110,
              strokeWidth: 8,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#FFC107'
            }
          ]
        },
        {
          x: 'Q4 2024',
          y: 125,
          goals: [
            {
              name: 'Objetivo',
              value: 115,
              strokeWidth: 8,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#FFC107'
            }
          ]
        }
      ],

      // Dados para exemplo 4
      vendasPorProduto: [
        {
          x: 'Produto A',
          y: 1200,
          goals: [
            {
              name: 'Meta',
              value: 1000,
              strokeWidth: 12,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#FF9800'
            }
          ]
        },
        {
          x: 'Produto B',
          y: 850,
          goals: [
            {
              name: 'Meta',
              value: 900,
              strokeWidth: 12,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#FF9800'
            }
          ]
        },
        {
          x: 'Produto C',
          y: 950,
          goals: [
            {
              name: 'Meta',
              value: 800,
              strokeWidth: 12,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#FF9800'
            }
          ]
        },
        {
          x: 'Produto D',
          y: 720,
          goals: [
            {
              name: 'Meta',
              value: 750,
              strokeWidth: 12,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#FF9800'
            }
          ]
        },
        {
          x: 'Produto E',
          y: 680,
          goals: [
            {
              name: 'Meta',
              value: 700,
              strokeWidth: 12,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#FF9800'
            }
          ]
        }
      ],

      // Dados dinâmicos para exemplo 5
      dadosDinamicos: [
        {
          x: 'Janeiro',
          y: 65,
          goals: [
            {
              name: 'Meta',
              value: 70,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#E91E63'
            }
          ]
        },
        {
          x: 'Fevereiro',
          y: 78,
          goals: [
            {
              name: 'Meta',
              value: 75,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#E91E63'
            }
          ]
        },
        {
          x: 'Março',
          y: 92,
          goals: [
            {
              name: 'Meta',
              value: 85,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: '#E91E63'
            }
          ]
        }
      ],
      serieDinamica: 'Performance',
      chartHeight: 300,
      corPrimaria: '#00BCD4',
      corMeta: '#E91E63',
      legendaDinamica: ['Performance', 'Meta']
    }
  },
  methods: {
    alterarDados() {
      // Simula alteração de dados
      this.dadosDinamicos = [
        {
          x: 'Abril',
          y: 105,
          goals: [
            {
              name: 'Meta',
              value: 100,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: this.corMeta
            }
          ]
        },
        {
          x: 'Maio',
          y: 88,
          goals: [
            {
              name: 'Meta',
              value: 95,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: this.corMeta
            }
          ]
        },
        {
          x: 'Junho',
          y: 112,
          goals: [
            {
              name: 'Meta',
              value: 110,
              strokeWidth: 10,
              strokeHeight: 0,
              strokeLineCap: 'round',
              strokeColor: this.corMeta
            }
          ]
        }
      ]
      this.serieDinamica = 'Vendas Atualizadas'
    },

    alterarCores() {
      const cores = [
        { primaria: '#FF5722', meta: '#4CAF50' },
        { primaria: '#9C27B0', meta: '#FF9800' },
        { primaria: '#3F51B5', meta: '#F44336' },
        { primaria: '#00BCD4', meta: '#E91E63' }
      ]
      
      const corAleatoria = cores[Math.floor(Math.random() * cores.length)]
      this.corPrimaria = corAleatoria.primaria
      this.corMeta = corAleatoria.meta
      
      // Atualiza a cor das metas nos dados
      this.dadosDinamicos.forEach(item => {
        if (item.goals && item.goals.length > 0) {
          item.goals[0].strokeColor = this.corMeta
        }
      })
    }
  }
}
</script>

<style scoped>
.pa-4 {
  padding: 16px;
}

.mb-8 {
  margin-bottom: 32px;
}

.mb-6 {
  margin-bottom: 24px;
}

.mb-4 {
  margin-bottom: 16px;
}

.mr-2 {
  margin-right: 8px;
}
</style>
