# ApexBarAlternativeChart - Documentação de Uso Dinâmico

## Visão Geral

O componente `ApexBarAlternativeChart` exibe gráficos de barras horizontais distribuídas, recebendo dados via props. Ideal para integração futura com backend.

## Props Principais

- `title` (String): Título do gráfico.
- `chartData` (Array): Array de séries de dados (opcional).
- `categories` (Array): Rótulos do eixo X.
- `values` (Array): Valores das barras.
- `seriesName` (String): Nome da série principal.
- `chartHeight` (Number): Altura do gráfico.
- `horizontal` (Boolean): Barras horizontais ou verticais.
- `distributed` (Boolean): Barras coloridas individualmente.
- `barHeight` (String): Altura das barras.
- `colors` (Array): Cores das barras.
- `showDataLabels` (Boolean): Exibe valores nas barras.
- `dataLabelColor` (String): Cor dos data labels.
- `showTitle` (Boolean): Exibe título.
- `titleText` (String): Texto do título.
- `showSubtitle` (Boolean): Exibe subtítulo.
- `subtitleText` (String): Texto do subtítulo.
- `showYAxisLabels` (Boolean): Exibe rótulos do eixo Y.
- `strokeWidth` (Number): Espessura da borda.
- `strokeColor` (String): Cor da borda.

## Exemplo de Uso Dinâmico

```vue
<ApexBarAlternativeChart
  :title="dados.title"
  :categories="dados.categories"
  :values="dados.values"
  :seriesName="dados.seriesName"
  :chartHeight="dados.chartHeight"
  :horizontal="dados.horizontal"
  :distributed="dados.distributed"
  :barHeight="dados.barHeight"
  :colors="dados.colors"
  :showDataLabels="dados.showDataLabels"
  :dataLabelColor="dados.dataLabelColor"
  :showTitle="dados.showTitle"
  :titleText="dados.titleText"
  :showSubtitle="dados.showSubtitle"
  :subtitleText="dados.subtitleText"
  :showYAxisLabels="dados.showYAxisLabels"
  :strokeWidth="dados.strokeWidth"
  :strokeColor="dados.strokeColor"
/>
```

## Estrutura Esperada dos Dados (Exemplo Dinâmico)

```js
const dados = {
  title: "Top 10 Produtos Mais Vendidos",
  categories: ["Produto 1", "Produto 2", ...],
  values: [400, 430, 448, ...],
  seriesName: "Vendas",
  chartHeight: 380,
  horizontal: true,
  distributed: true,
  barHeight: "100%",
  colors: ["#33b2df", "#546E7A", ...],
  showDataLabels: true,
  dataLabelColor: "#fff",
  showTitle: true,
  titleText: "Top 10 Produtos Mais Vendidos",
  showSubtitle: true,
  subtitleText: "Ranking de produtos por volume de vendas",
  showYAxisLabels: false,
  strokeWidth: 1,
  strokeColor: "#fff",
}
```

## Integração com Backend

- Consuma os dados do backend (ex: via Axios ou Fetch) e monte o objeto conforme o exemplo acima.
- Passe o objeto como props para o componente.
- O gráfico será renderizado automaticamente com os dados recebidos.

## Observações

- Para personalizar os dados, altere os arrays `categories`, `values` e as props visuais conforme necessário.
- O componente já está preparado para reatividade ao tema (dark/light).
- Para múltiplos gráficos, basta instanciar o componente com diferentes dados.
