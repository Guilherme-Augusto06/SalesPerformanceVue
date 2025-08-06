# ApexColumnChart - Documentação de Uso Dinâmico

## Visão Geral

O componente `ApexColumnChart` exibe gráficos de colunas (barras verticais), recebendo dados via props. Ideal para integração futura com backend.

## Props Principais

- `title` (String): Título do gráfico.
- `series` (Array): Array de séries de dados, cada uma com `{ name, data }`.
- `categories` (Array): Rótulos do eixo X.
- `chartHeight` (Number): Altura do gráfico.
- `chartType` (String): Tipo do gráfico ("bar").
- `stacked` (Boolean): Gráfico empilhado.
- `stackType` (String): Tipo de empilhamento ("100%", "normal").
- `colors` (Array): Cores das séries.
- `showLegend` (Boolean): Exibe legenda.
- `legendPosition` (String): Posição da legenda.
- `fillOpacity` (Number): Opacidade do preenchimento.
- `showDataLabels` (Boolean): Exibe valores nas colunas.
- `responsive` (Boolean): Ativa responsividade.

## Exemplo de Uso Dinâmico

```vue
<ApexColumnChart
  :title="dados.title"
  :series="dados.series"
  :categories="dados.categories"
  :chartHeight="dados.chartHeight"
  :chartType="dados.chartType"
  :stacked="dados.stacked"
  :stackType="dados.stackType"
  :colors="dados.colors"
  :showLegend="dados.showLegend"
  :legendPosition="dados.legendPosition"
  :fillOpacity="dados.fillOpacity"
  :showDataLabels="dados.showDataLabels"
  :responsive="dados.responsive"
/>
```

## Estrutura Esperada dos Dados (Exemplo Dinâmico)

```js
const dados = {
  title: "Gráfico de Colunas",
  series: [
    { name: "PRODUTO A", data: [44, 55, 41, 67, 22, 43, 21, 49] },
    { name: "PRODUTO B", data: [13, 23, 20, 8, 13, 27, 33, 12] },
    { name: "PRODUTO C", data: [11, 17, 15, 15, 21, 14, 15, 13] },
  ],
  categories: [
    "2024 Q1",
    "2024 Q2",
    "2024 Q3",
    "2024 Q4",
    "2025 Q1",
    "2025 Q2",
    "2025 Q3",
    "2025 Q4",
  ],
  chartHeight: 350,
  chartType: "bar",
  stacked: true,
  stackType: "100%",
  colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
  showLegend: true,
  legendPosition: "right",
  fillOpacity: 1,
  showDataLabels: false,
  responsive: true,
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
