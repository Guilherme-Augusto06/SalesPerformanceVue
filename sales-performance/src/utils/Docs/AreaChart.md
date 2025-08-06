# ApexAreaChart - Documentação de Uso Dinâmico

## Visão Geral

O componente `ApexAreaChart` exibe gráficos de área ou linha de forma flexível, recebendo dados via props. Ideal para integração futura com backend.

## Props Principais

- `title` (String): Título do gráfico.
- `chartData` (Array): Array de séries de dados. Cada série deve ter `{ name, data }`.
- `categories` (Array): Rótulos do eixo X.
- `values` (Array): Dados para uma série única (usado se `chartData` não for passado).
- `seriesName` (String): Nome da série única.
- `chartHeight` (Number): Altura do gráfico.
- `chartType` (String): "line" ou "area".
- `primaryColor` (String/Array): Cor principal das linhas/áreas.
- Outras props para customização visual.

## Exemplo de Uso Dinâmico

```vue
<ApexAreaChart
  :title="dados.title"
  :chartData="dados.series"
  :categories="dados.meses"
  :chartHeight="dados.chartHeight"
  :primaryColor="dados.colors"
  :strokeCurve="dados.strokeCurve"
  :fillType="dados.fillType"
  :showDataLabels="dados.showDataLabels"
  :legendPosition="dados.legendPosition"
  :showGrid="dados.showGrid"
  :gridColors="dados.gridColors"
  :gridOpacity="dados.gridOpacity"
/>
```

## Estrutura Esperada dos Dados (Exemplo do Mockup)

```js
const dados = {
  title: "Comparação Real vs Meta",
  meses: ["Jan", "Fev", "Mar", ...],
  series: [
    { name: "Realizado", data: [485000, 512000, ...] },
    { name: "Meta Estabelecida", data: [500000, 520000, ...] }
  ],
  chartHeight: 450,
  colors: ["#4a148c", "#00C853"],
  strokeCurve: "smooth",
  fillType: "gradient",
  showDataLabels: false,
  legendPosition: "top",
  showGrid: true,
  gridColors: ["#f0f0f0", "transparent"],
  gridOpacity: 0.2,
}
```

## Integração com Backend

- Consuma os dados do backend (ex: via Axios ou Fetch) e monte o objeto conforme o exemplo acima.
- Passe o objeto como props para o componente.
- O gráfico será renderizado automaticamente com os dados recebidos.

## Observações

- Para múltiplas séries, utilize a prop `chartData` no formato do mockup.
- Para filtros dinâmicos (ex: por cliente), basta atualizar os dados e repassar ao componente.
- O componente já está preparado para reatividade e atualização automática ao mudar os dados.
