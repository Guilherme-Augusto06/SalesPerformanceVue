# Sistema de Cores Automáticas - Dashboard

## Visão Geral

O sistema de cores automáticas foi implementado para eliminar a necessidade de definir cores manualmente em cada gráfico. Agora todos os componentes de gráfico podem usar cores geradas automaticamente com base em esquemas predefinidos.

## Como Usar

### 1. Ativando Cores Automáticas

Para usar cores automáticas em qualquer gráfico, adicione estas propriedades:

```vue
<ApexBarChart
  :data="chartData"
  :categories="categories"
  :auto-colors="true"
  :color-scheme="'modern'"
  :color-seed="'unique-identifier'"
/>
```

### 2. Esquemas de Cores Disponíveis

- **modern**: Cores modernas e equilibradas
- **vibrant**: Cores vibrantes e energéticas
- **pastel**: Cores suaves e pastéis
- **corporate**: Cores corporativas profissionais
- **material**: Baseado no Material Design
- **purple**: Tons de roxo e violeta
- **business**: Cores para ambiente empresarial

### 3. Parâmetros do Sistema

| Propriedade    | Tipo    | Descrição                             |
| -------------- | ------- | ------------------------------------- |
| `auto-colors`  | Boolean | Ativa/desativa cores automáticas      |
| `color-scheme` | String  | Esquema de cores a ser usado          |
| `color-seed`   | String  | Semente para gerar cores consistentes |

### 4. Exemplos Práticos

#### Gráfico de Barras com Cores Automáticas

```javascript
// No arquivo de mockup
rankingClientesVolumeAuto: {
  title: "Ranking de Clientes por Volume (Cores Automáticas)",
  chartData: [...],
  autoColors: true,
  colorScheme: "modern",
  colorSeed: "ranking-volume"
}
```

#### No Template Vue

```vue
<ApexBarChart
  :data="mockData.rankingClientesVolumeAuto.chartData"
  :auto-colors="mockData.rankingClientesVolumeAuto.autoColors"
  :color-scheme="mockData.rankingClientesVolumeAuto.colorScheme"
  :color-seed="mockData.rankingClientesVolumeAuto.colorSeed"
/>
```

### 5. Componentes Suportados

Todos os componentes de gráfico suportam o sistema de cores automáticas:

- `ApexBarChart.vue`
- `ApexAreaChart.vue`
- `ApexColumnChart.vue`
- `ApexAreaAlternativeChart.vue`
- `ApexDonutChart.vue`
- `ApexRadialChart.vue`

### 6. Vantagens

✅ **Consistência**: Cores harmoniosas automaticamente
✅ **Produtividade**: Não precisa escolher cores manualmente
✅ **Flexibilidade**: Múltiplos esquemas para diferentes contextos
✅ **Manutenibilidade**: Fácil mudança global de cores

### 7. Implementação Técnica

O sistema usa a classe `ColorGenerator` que:

- Gera cores baseadas em paletas predefinidas
- Usa seeds para garantir consistência
- Converte cores para formatos compatíveis com ApexCharts
- Fornece fallbacks automáticos

### 8. Demonstração no Dashboard

No arquivo `DashboardAnalysisByClient.vue`, você pode ver comparações lado a lado:

- Gráficos com cores manuais (método tradicional)
- Gráficos com cores automáticas (novo sistema)

### 9. Configuração Personalizada

Para criar novos esquemas de cores, edite o arquivo `colorGenerator.js`:

```javascript
static getColorPalette(scheme) {
  const palettes = {
    // Adicione seu esquema personalizado aqui
    custom: [
      '#FF6B6B', '#4ECDC4', '#45B7D1',
      '#96CEB4', '#FFEAA7', '#DDA0DD'
    ],
    // ... outros esquemas
  };
}
```

### 10. Migração de Gráficos Existentes

Para migrar gráficos existentes:

1. Remova a propriedade `:colors` manual
2. Adicione `:auto-colors="true"`
3. Escolha um `:color-scheme`
4. Defina um `:color-seed` único

O sistema mantém retrocompatibilidade - gráficos com cores manuais continuam funcionando normalmente.
