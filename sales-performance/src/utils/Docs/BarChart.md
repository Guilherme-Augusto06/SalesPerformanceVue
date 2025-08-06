# ApexBarChart - Documentação de Uso Dinâmico

## Visão Geral

O componente `ApexBarChart` exibe gráficos de barras dinâmicos, recebendo dados via props. Ideal para integração futura com backend.

## Props Principais

- `title` (String): Título do gráfico.
- `chartData` (Array): Array de objetos de dados para cada barra (com goals opcionais).
- `categories` (Array): Rótulos do eixo X.
- `values` (Array): Valores principais das barras.
- `goalValues` (Array): Valores de meta para cada barra.
- `seriesName` (String): Nome da série principal.
- `chartHeight` (Number): Altura do gráfico.
- `horizontal` (Boolean): Barras horizontais ou verticais.
- `primaryColor` (String): Cor principal das barras.
- `goalColor` (String): Cor das metas.
- `showLegend` (Boolean): Exibe legenda.
- `legendItems` (Array): Itens personalizados da legenda.
- Outras props para customização visual e de dados.

## Exemplo de Uso Dinâmico

```vue
<ApexBarChart
  :title="dados.title"
  :categories="dados.categories"
  :values="dados.values"
  :goalValues="dados.goalValues"
  :seriesName="dados.seriesName"
  :chartHeight="dados.chartHeight"
  :horizontal="dados.horizontal"
  :primaryColor="dados.primaryColor"
  :goalColor="dados.goalColor"
  :showLegend="dados.showLegend"
  :legendItems="dados.legendItems"
  :showDataLabels="dados.showDataLabels"
  :dataLabelFormat="dados.dataLabelFormat"
/>
```

## Estrutura Esperada dos Dados (Exemplo do Mockup)

```js
const dados = {
  title: "Ranking de Clientes - Volume",
  categories: ["TransLog Brasil", "Rodoviária Central", ...],
  values: [1250, 980, 875, ...],
  goalValues: [1300, 1000, 900, ...],
  seriesName: "Volume de Vendas (Unidades)",
  chartHeight: 400,
  horizontal: false,
  primaryColor: "#4a148c",
  goalColor: "#775DD0",
  showLegend: true,
  legendItems: ["Volume"],
  showDataLabels: true,
  dataLabelFormat: "value/goal",
}
```

## Integração com Backend

- Consuma os dados do backend (ex: via Axios ou Fetch) e monte o objeto conforme o exemplo acima.
- Passe o objeto como props para o componente.
- O gráfico será renderizado automaticamente com os dados recebidos.

## Observações

- Para múltiplas séries ou metas, utilize a prop `chartData` no formato do mockup.
- Para filtros dinâmicos (ex: por cliente ou período), basta atualizar os dados e repassar ao componente.
- O componente já está preparado para reatividade e atualização automática ao mudar os dados.
