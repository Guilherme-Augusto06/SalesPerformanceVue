# MapDrilldown - Documentação de Uso Dinâmico

## Visão Geral

O componente `MapDrilldown` exibe mapas interativos do Brasil usando Highcharts, recebendo dados via props. Ideal para integração futura com backend.

## Props Principais

- `title` (String): Título do mapa.
- `data` (Array): Array de dados para cada estado, ex: `{ key: 'br-sp', value: 100 }`.
- `seriesName` (String): Nome da série de dados.
- `colorStops` (Array): Gradiente de cores do mapa.
- `hoverColor` (String): Cor ao passar o mouse.
- `showDataLabels` (Boolean): Exibe rótulos nos estados.
- `dataLabelFormat` (String): Formato do rótulo.
- `minValue` (Number): Valor mínimo do gradiente.
- `maxValue` (Number): Valor máximo do gradiente.
- `height` (Number): Altura do mapa.
- `enableNavigation` (Boolean): Ativa navegação (zoom, pan).

## Exemplo de Uso Dinâmico

```vue
<MapDrilldown
  :title="dados.title"
  :data="dados.data"
  :seriesName="dados.seriesName"
  :colorStops="dados.colorStops"
  :hoverColor="dados.hoverColor"
  :showDataLabels="dados.showDataLabels"
  :dataLabelFormat="dados.dataLabelFormat"
  :minValue="dados.minValue"
  :maxValue="dados.maxValue"
  :height="dados.height"
  :enableNavigation="dados.enableNavigation"
/>
```

## Estrutura Esperada dos Dados (Exemplo Dinâmico)

```js
const dados = {
  title: "Mapa do Brasil",
  data: [
    { key: "br-sp", value: 120 },
    { key: "br-rj", value: 80 },
    // ...
  ],
  seriesName: "Vendas",
  colorStops: [
    [0, "#EFEFFF"],
    [0.5, "#4444FF"],
    [1, "#000022"],
  ],
  hoverColor: "#BADA55",
  showDataLabels: true,
  dataLabelFormat: "{point.code}",
  minValue: 0,
  maxValue: 200,
  height: 400,
  enableNavigation: true,
};
```

## Integração com Backend

- Consuma os dados do backend (ex: via Axios ou Fetch) e monte o objeto conforme o exemplo acima.
- Passe o objeto como props para o componente.
- O mapa será renderizado automaticamente com os dados recebidos.

## Observações

- Para personalizar os dados, altere o array `data` e as props visuais conforme necessário.
- O componente já está preparado para reatividade ao tema (dark/light).
- Para múltiplos mapas, basta instanciar o componente com diferentes dados.
