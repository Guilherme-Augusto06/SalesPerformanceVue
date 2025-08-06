# ApexBoxPlot - Documentação de Uso Dinâmico

## Visão Geral

O componente `ApexBoxPlot` exibe gráficos do tipo boxplot, recebendo dados via props. Ideal para integração futura com backend.

## Props Principais

- `title` (String): Título do gráfico.
- `seriesName` (String): Nome da série principal.
- `chartData` (Array): Array de objetos `{ x, y, goals }` para cada boxplot.
- `chartHeight` (Number): Altura do gráfico.
- `colors` (Array): Cores do boxplot.
- `goalColor` (String): Cor das metas.
- `goalStrokeHeight` (Number): Altura da linha de meta.
- `goalStrokeLineCap` (String): Estilo da linha de meta.
- `showTitle` (Boolean): Exibe título.
- `titleAlign` (String): Alinhamento do título.
- `xAxisType` (String): Tipo do eixo X.
- `showLegend` (Boolean): Exibe legenda.
- `showTooltip` (Boolean): Exibe tooltip.
- `tooltipFormatter` (Function): Função para formatar valores do tooltip.

## Exemplo de Uso Dinâmico

```vue
<ApexBoxPlot
  :title="dados.title"
  :seriesName="dados.seriesName"
  :chartData="dados.chartData"
  :chartHeight="dados.chartHeight"
  :colors="dados.colors"
  :goalColor="dados.goalColor"
  :goalStrokeHeight="dados.goalStrokeHeight"
  :goalStrokeLineCap="dados.goalStrokeLineCap"
  :showTitle="dados.showTitle"
  :titleAlign="dados.titleAlign"
  :xAxisType="dados.xAxisType"
  :showLegend="dados.showLegend"
  :showTooltip="dados.showTooltip"
  :tooltipFormatter="dados.tooltipFormatter"
/>
```

## Estrutura Esperada dos Dados (Exemplo Dinâmico)

```js
const dados = {
  title: "BoxPlot - Análise de Ticket Médio",
  seriesName: "Ticket Médio",
  chartData: [
    {
      x: "Q1 2024",
      y: [1200, 1450, 1680, 1920, 2150],
      goals: [
        {
          value: 1000,
          strokeWidth: 0,
          strokeHeight: 13,
          strokeLineCap: "round",
          strokeColor: "#FEB019",
        },
        {
          value: 2300,
          strokeWidth: 0,
          strokeHeight: 13,
          strokeLineCap: "round",
          strokeColor: "#FF4560",
        },
      ],
    },
    {
      x: "Q2 2024",
      y: [1150, 1380, 1620, 1850, 2080],
      goals: [
        {
          value: 1100,
          strokeWidth: 0,
          strokeHeight: 13,
          strokeLineCap: "round",
          strokeColor: "#FEB019",
        },
        {
          value: 2200,
          strokeWidth: 0,
          strokeHeight: 13,
          strokeLineCap: "round",
          strokeColor: "#FF4560",
        },
      ],
    },
  ],
  chartHeight: 350,
  colors: ["#008FFB", "#FEB019"],
  goalColor: "#FEB019",
  goalStrokeHeight: 13,
  goalStrokeLineCap: "round",
  showTitle: true,
  titleAlign: "left",
  xAxisType: "category",
  showLegend: true,
  showTooltip: true,
  tooltipFormatter: (val) => `R$ ${val.toLocaleString("pt-BR")}`,
};
```

## Integração com Backend

- Consuma os dados do backend (ex: via Axios ou Fetch) e monte o objeto conforme o exemplo acima.
- Passe o objeto como props para o componente.
- O gráfico será renderizado automaticamente com os dados recebidos.

## Observações

- Para personalizar os dados, altere o array `chartData` e as props visuais conforme necessário.
- O componente já está preparado para reatividade ao tema (dark/light).
- Para múltiplos gráficos, basta instanciar o componente com diferentes dados.
