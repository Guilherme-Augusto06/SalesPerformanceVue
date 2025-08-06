# ApexRadialChart - Documentação de Uso Dinâmico

## Visão Geral

O componente `ApexRadialChart` exibe gráficos do tipo radialBar, recebendo dados via props ou data. Ideal para integração futura com backend.

## Props/Data Principais

- `title` (String): Título do gráfico.
- Os dados de vendas e rótulos podem ser adaptados para receber via props ou backend.

## Exemplo de Uso Dinâmico

```vue
<ApexRadialChart :title="dados.title" />
```

## Estrutura Esperada dos Dados (Exemplo Dinâmico)

```js
const dados = {
  title: "Vendas Totais",
  salesData: [850, 720, 650],
  labels: ["Mensal", "Trimestral", "Anual"],
  colors: ["#1ab7ea", "#0084ff", "#39539E"],
};
```

## Como adaptar para backend

- Consuma os dados do backend (ex: via Axios ou Fetch) e monte o array de vendas e rótulos conforme o exemplo acima.
- Passe os dados como prop para o componente (adapte para receber via prop se necessário).
- O gráfico será renderizado automaticamente com os dados recebidos.

## Observações

- Para personalizar os dados, altere o array `salesData`, `labels` e as cores conforme necessário.
- O componente pode ser facilmente adaptado para receber outros dados e exibir nos labels.
- Para múltiplos gráficos, basta instanciar o componente com diferentes dados.
