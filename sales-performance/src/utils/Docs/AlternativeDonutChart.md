# ApexAlternativeDonutChart - Documentação de Uso Dinâmico

## Visão Geral

O componente `ApexAlternativeDonutChart` exibe gráficos do tipo donut com preenchimento por padrões, recebendo dados via props. Ideal para integração futura com backend.

## Props Principais

- `title` (String): Título do gráfico.

## Como Usar com Dados Dinâmicos

Este componente pode ser facilmente adaptado para receber dados dinâmicos do backend. Basta modificar o método `renderChart` para receber os dados via props ou via API.

## Exemplo de Uso Dinâmico

```vue
<ApexAlternativeDonutChart :title="'Margem bruta vs margem líquida'" />
```

## Exemplo de Estrutura de Dados Dinâmicos

```js
const dados = {
  title: "Margem bruta vs margem líquida",
  series: [44, 55],
  labels: ["Margem Bruta", "Margem Líquida"],
  fill: {
    type: "pattern",
    opacity: 1,
    pattern: {
      enabled: true,
      style: [
        "verticalLines",
        "squares",
        "horizontalLines",
        "circles",
        "slantedLines",
      ],
    },
  },
};
```

## Como adaptar para backend

- Consuma os dados do backend (ex: via Axios ou Fetch) e monte o objeto conforme o exemplo acima.
- Passe os dados como props para o componente (adapte o método renderChart para usar props).
- O gráfico será renderizado automaticamente com os dados recebidos.

## Observações

- Para personalizar os dados, altere o array `series`, `labels` e o objeto `fill` no método `renderChart`.
- O componente já está preparado para reatividade ao tema (dark/light).
- Para múltiplos gráficos, basta instanciar o componente com diferentes dados.
