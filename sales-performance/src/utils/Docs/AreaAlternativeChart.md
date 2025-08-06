# ApexAreaAlternativeChart - Documentação de Uso Dinâmico

## Visão Geral

O componente `ApexAreaAlternativeChart` exibe gráficos de área comparativos, recebendo dados via props. Ideal para integração futura com backend.

## Props Principais

- `title` (String): Título do gráfico.
- `series` (Array): Array de séries de dados, cada uma com `{ name, data }`.
- `categories` (Array): Rótulos do eixo X (datas ou categorias).
- `chartHeight` (Number): Altura do gráfico.
- `colors` (Array): Cores das séries.
- `strokeCurve` (String): Curva das linhas ('smooth', 'straight', etc).
- `strokeWidth` (Number): Espessura das linhas.
- `showDataLabels` (Boolean): Exibe valores nos pontos.
- `xAxisType` (String): Tipo do eixo X ('datetime', 'category', etc).
- `tooltipFormat` (String): Formato do tooltip para datas.
- `fillType` (String): 'solid' ou 'gradient'.
- `showLegend` (Boolean): Exibe legenda.
- `legendPosition` (String): Posição da legenda.
- `showGrid` (Boolean): Exibe grid.
- `gridColors` (Array): Cores do grid.
- `gridOpacity` (Number): Opacidade do grid.

## Exemplo de Uso Dinâmico

```vue
<ApexAreaAlternativeChart
  :title="dados.title"
  :series="dados.series"
  :categories="dados.meses"
  :chartHeight="dados.chartHeight"
  :colors="dados.colors"
  :strokeCurve="dados.strokeCurve"
  :strokeWidth="dados.strokeWidth"
  :showDataLabels="dados.showDataLabels"
  :xAxisType="dados.xAxisType"
  :tooltipFormat="dados.tooltipFormat"
  :fillType="dados.fillType"
  :showLegend="dados.showLegend"
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
  strokeWidth: 3,
  fillType: "gradient",
  showDataLabels: false,
  legendPosition: "top",
  showGrid: true,
  gridColors: ["#f0f0f0", "transparent"],
  gridOpacity: 0.2,
  xAxisType: "category",
  tooltipFormat: "dd/MM/yy HH:mm",
}
```

## Integração com Backend

- Consuma os dados do backend (ex: via Axios ou Fetch) e monte o objeto conforme o exemplo acima.
- Passe o objeto como props para o componente.
- O gráfico será renderizado automaticamente com os dados recebidos.

## Observações

- Para múltiplas séries, utilize a prop `series` no formato do mockup.
- Para filtros dinâmicos (ex: por cliente ou período), basta atualizar os dados e repassar ao componente.
- O componente já está preparado para reatividade e atualização automática ao mudar os dados.
