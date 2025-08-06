# ApexDonutChart - Documentação de Uso Dinâmico

## Visão Geral

O componente `ApexDonutChart` exibe gráficos do tipo donut ou pizza, recebendo dados via props. Ideal para integração futura com backend.

## Props Principais

- `title` (String): Título do gráfico.
- `chartData` (Array): Array de objetos `{ label, value }` para dados dinâmicos.
- `series` (Array): Valores das fatias (usado se `chartData` não for passado).
- `labels` (Array): Rótulos das fatias (usado se `chartData` não for passado).
- `chartType` (String): "donut" ou "pie".
- `chartHeight` (Number): Altura do gráfico.
- `colors` (Array): Cores das fatias.
- `showLegend` (Boolean): Exibe legenda.
- `legendPosition` (String): Posição da legenda.
- `showDataLabels` (Boolean): Exibe valores nas fatias.
- `dataLabelsStyle` (Object): Estilo dos data labels.
- `donutSize` (String): Tamanho do donut (ex: "70%").
- `strokeWidth` (Number): Espessura da borda.
- `strokeColor` (String): Cor da borda.
- `responsive` (Array): Configurações responsivas.
- `showTooltip` (Boolean): Exibe tooltip.
- `tooltipFormat` (String): "percentage" ou "value".

## Exemplo de Uso Dinâmico

```vue
<ApexDonutChart
  :title="dados.title"
  :chartData="dados.chartData"
  :chartType="dados.chartType"
  :chartHeight="dados.chartHeight"
  :colors="dados.colors"
  :showLegend="dados.showLegend"
  :legendPosition="dados.legendPosition"
  :showDataLabels="dados.showDataLabels"
  :dataLabelsStyle="dados.dataLabelsStyle"
  :donutSize="dados.donutSize"
  :strokeWidth="dados.strokeWidth"
  :strokeColor="dados.strokeColor"
  :responsive="dados.responsive"
  :showTooltip="dados.showTooltip"
  :tooltipFormat="dados.tooltipFormat"
/>
```

## Estrutura Esperada dos Dados (Exemplo Dinâmico)

```js
const dados = {
  title: "Meta vs Realizado",
  chartData: [
    { label: "Meta", value: 41 },
    { label: "Realizado", value: 59 },
  ],
  chartType: "donut",
  chartHeight: 350,
  colors: ["#008FFB", "#00E396"],
  showLegend: true,
  legendPosition: "bottom",
  showDataLabels: true,
  dataLabelsStyle: { fontSize: "14px", fontWeight: "bold" },
  donutSize: "70%",
  strokeWidth: 2,
  strokeColor: "#fff",
  responsive: [
    {
      breakpoint: 480,
      options: { chart: { width: 200 }, legend: { position: "bottom" } },
    },
  ],
  showTooltip: true,
  tooltipFormat: "percentage",
};
```

## Integração com Backend

- Consuma os dados do backend (ex: via Axios ou Fetch) e monte o objeto conforme o exemplo acima.
- Passe o objeto como props para o componente.
- O gráfico será renderizado automaticamente com os dados recebidos.

## Observações

- Para múltiplos gráficos, basta instanciar o componente com diferentes dados.
- O componente já está preparado para reatividade ao tema (dark/light).
- Para personalizar as fatias, altere os arrays `chartData`, `series` e `labels` conforme necessário.
