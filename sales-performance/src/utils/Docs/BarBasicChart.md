# ApexBarBasicChart - Documentação de Uso Dinâmico

## Visão Geral

O componente `ApexBarBasicChart` exibe gráficos de barras horizontais simples, recebendo dados via props. Ideal para integração futura com backend.

## Props Principais

- `title` (String): Título do gráfico.

## Como Usar com Dados Dinâmicos

Este componente pode ser facilmente adaptado para receber dados dinâmicos do backend. Basta modificar o método `renderChart` para receber os dados via props ou via API.

## Exemplo de Uso Dinâmico

```vue
<ApexBarBasicChart :title="'Top 10 Produtos Mais Vendidos'" />
```

## Exemplo de Estrutura de Dados Dinâmicos

```js
const dados = {
  title: "Top 10 Produtos Mais Vendidos",
  series: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
  categories: [
    "Produto A",
    "Produto B",
    "Produto C",
    "Produto D",
    "Produto E",
    "Produto F",
    "Produto G",
    "Produto H",
    "Produto I",
    "Produto J",
  ],
};
```

## Como adaptar para backend

- Consuma os dados do backend (ex: via Axios ou Fetch) e monte o objeto conforme o exemplo acima.
- Passe os dados como props para o componente (adapte o método renderChart para usar props).
- O gráfico será renderizado automaticamente com os dados recebidos.

## Observações

- Para personalizar os dados, altere o array `series` e `categories` no método `renderChart`.
- O componente já está preparado para reatividade ao tema (dark/light).
- Para múltiplos gráficos, basta instanciar o componente com diferentes dados.
