# MapPinPoint - Documentação de Uso Dinâmico

## Visão Geral

O componente `MapPinPoint` exibe um mapa do Brasil com pontos marcados usando Leaflet, recebendo dados via props ou data. Ideal para integração futura com backend.

## Props/Data Principais

- `pontos` (Array): Array de objetos com nome e coordenadas dos pontos, ex: `{ nome: 'São Paulo - SP', coords: [-23.55052, -46.633308] }`.
- O mapa é centralizado e limitado aos limites do Brasil.

## Exemplo de Uso Dinâmico

```vue
<MapPinPoint :pontos="dados.pontos" />
```

## Estrutura Esperada dos Dados (Exemplo Dinâmico)

```js
const dados = {
  pontos: [
    { nome: "São Paulo - SP", coords: [-23.55052, -46.633308] },
    { nome: "Rio de Janeiro - RJ", coords: [-22.906847, -43.172896] },
    { nome: "Belo Horizonte - MG", coords: [-19.916681, -43.934493] },
    { nome: "Manaus - AM", coords: [-3.119028, -60.021731] },
    // ...
  ],
};
```

## Integração com Backend

- Consuma os dados do backend (ex: via Axios ou Fetch) e monte o array de pontos conforme o exemplo acima.
- Passe o array como prop para o componente (adapte para receber via prop se necessário).
- Os marcadores serão renderizados automaticamente no mapa.

## Observações

- Para personalizar os pontos, altere o array `pontos` conforme necessário.
- O componente pode ser facilmente adaptado para receber outros dados (ex: vendas, clientes, etc) e exibir nos popups.
- Para múltiplos mapas, basta instanciar o componente com diferentes dados.
