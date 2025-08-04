# MapDrilldown Component

Componente Vue.js dinâmico para renderizar mapas interativos do Brasil usando Highcharts Maps.

## Propriedades (Props)

| Prop               | Tipo    | Padrão           | Descrição                           |
| ------------------ | ------- | ---------------- | ----------------------------------- |
| `title`            | String  | 'Mapa do Brasil' | Título do mapa                      |
| `data`             | Array   | []               | Array de dados para o mapa          |
| `seriesName`       | String  | 'Dados'          | Nome da série de dados              |
| `colorStops`       | Array   | Gradiente azul   | Array de paradas de cor para o mapa |
| `hoverColor`       | String  | '#BADA55'        | Cor ao passar o mouse               |
| `showDataLabels`   | Boolean | true             | Mostrar labels dos dados            |
| `dataLabelFormat`  | String  | '{point.key}'    | Formato dos labels                  |
| `minValue`         | Number  | 0                | Valor mínimo da escala              |
| `maxValue`         | Number  | null             | Valor máximo da escala              |
| `height`           | Number  | 400              | Altura do mapa em pixels            |
| `enableNavigation` | Boolean | true             | Habilitar navegação no mapa         |

## Formato dos Dados

```javascript
const data = [
  {
    key: "br-sp", // Código do estado (obrigatório)
    state: "São Paulo", // Nome do estado (opcional)
    name: "São Paulo", // Nome para exibição (opcional)
    value: 2850, // Valor numérico (obrigatório)
  },
  // ... mais estados
];
```

## Exemplo de Uso

```vue
<template>
  <map-drilldown
    title="Vendas por Estado"
    :data="vendasData"
    series-name="Volume de Vendas"
    :color-stops="[
      [0, '#e8f5e8'],
      [0.3, '#4caf50'],
      [0.7, '#2e7d32'],
      [1, '#1b5e20'],
    ]"
    hover-color="#81c784"
    :min-value="0"
    :max-value="3000"
    :height="500"
    :show-data-labels="false"
    data-label-format="{point.name}"
    :enable-navigation="true"
  />
</template>

<script>
import MapDrilldown from "./components/Scaffold/MapDrilldown.vue";
import { mapDrilldownData } from "./utils/mockup/dashboard.js";

export default {
  components: {
    MapDrilldown,
  },
  data() {
    return {
      vendasData: mapDrilldownData.vendasPorEstado.data,
    };
  },
};
</script>
```

## Dados Mockados Disponíveis

O arquivo `dashboard.js` contém três conjuntos de dados prontos para uso:

### 1. `vendasPorEstado`

- Título: "Vendas por Estado - Brasil"
- Dados: Volume de vendas por estado
- Cores: Gradiente verde

### 2. `faturamentoPorEstado`

- Título: "Faturamento por Estado (R$ Milhares)"
- Dados: Valores de faturamento por estado
- Cores: Gradiente laranja

### 3. `participacaoMercado`

- Título: "Participação de Mercado por Estado (%)"
- Dados: Percentual de participação por estado
- Cores: Gradiente roxo

## Importação dos Dados

```javascript
import { mapDrilldownData } from "@/utils/mockup/dashboard.js";

// Usar dados específicos
const vendasData = mapDrilldownData.vendasPorEstado;
const faturamentoData = mapDrilldownData.faturamentoPorEstado;
const participacaoData = mapDrilldownData.participacaoMercado;
```

## Funcionalidades

- **Interativo**: Hover e navegação habilitados
- **Responsivo**: Ajusta-se ao contêiner pai
- **Customizável**: Cores, tamanhos e labels configuráveis
- **Tooltip**: Informações detalhadas ao passar o mouse
- **Watchers**: Atualiza automaticamente quando os dados mudam

## Dependências

- Highcharts Maps
- Highcharts Vue
- Mapa do Brasil (`@highcharts/map-collection`)
