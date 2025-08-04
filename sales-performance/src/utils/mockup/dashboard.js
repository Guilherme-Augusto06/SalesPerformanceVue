export const dashboardAnalysisByClientData = {
  // Dados para ApexBarChart - Ranking de Clientes Volume
  rankingClientesVolume: {
    title: "Ranking de Clientes - Volume",
    categories: [
      "TransLog Brasil",
      "Rodoviária Central",
      "Frota Express",
      "Transportes Unidos",
      "Via Cargo",
      "RodoSul Ltda",
      "TransNorte",
      "Logística Prime",
    ],
    values: [1250, 980, 875, 720, 650, 540, 420, 380],
    goalValues: [1300, 1000, 900, 750, 700, 600, 500, 450],
    seriesName: "Volume de Vendas (Unidades)",
    chartHeight: 400,
    horizontal: false,
    primaryColor: "#4a148c",
    dataLabelFormat: "value",
    legendItems: ["Volume"],
  },

  // Dados para ApexBarChart - Comissções pagas vs estimadas
  ComissoesPagasEstimadas: {
    title: "Comissões estimadas",
    categories: [
      "TransLog Brasil",
      "Rodoviária Central",
      "Frota Express",
      "Transportes Unidos",
      "Via Cargo",
      "RodoSul Ltda",
      "TransNorte",
      "Logística Prime",
    ],
    values: [1250.0, 980.0, 875.0, 720.0, 650.0, 540.0, 420.0, 380.0],
    goalValues: [1300.0, 1000.0, 900.0, 750.0, 700.0, 600.0, 500.0, 450.0],
    seriesName: "Comissões Pagas",
    chartHeight: 400,
    horizontal: false,
    primaryColor: "#311b92",
    dataLabelFormat: "value",
    legendItems: ["Pagas", "Meta"],
  },

  // Dados para ApexBarChart - Desempenho por vendedor / representante
  DesempenhoVendedor: {
    title: "Desempenho por Vendedor",
    categories: [
      "TransLog Brasil",
      "Rodoviária Central",
      "Frota Express",
      "Transportes Unidos",
      "Via Cargo",
      "RodoSul Ltda",
      "TransNorte",
      "Logística Prime",
    ],
    values: [8450.0, 7200.0, 6500.0, 5400.0, 4200.0, 3800.0, 3000.0, 2700.0],
    seriesName: "Comissões Pagas",
    chartHeight: 400,
    horizontal: false,
    primaryColor: "#311b92",
    dataLabelFormat: "value",
    legendItems: ["Vendas"],
  },

  // Dados para ApexBarChart - Ranking de Clientes Valor
  rankingClientesValor: {
    title: "Ranking de Clientes - Valor",
    categories: [
      "TransLog Brasil",
      "Rodoviária Central",
      "Frota Express",
      "Transportes Unidos",
      "Via Cargo",
      "RodoSul Ltda",
      "TransNorte",
      "Logística Prime",
    ],
    values: [485000, 412000, 368000, 295000, 268000, 225000, 186000, 158000],
    seriesName: "Valor de Vendas (R$)",
    chartHeight: 400,
    horizontal: false,
    primaryColor: "#00C853",
    dataLabelFormat: "currency",
    legendItems: ["Valor (R$)"],
  },

  atingimentoMeta: {
    meses: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    series: [
      {
        name: "Vendas Realizadas",
        data: [
          485000, 512000, 468000, 525000, 498000, 545000, 518000, 562000,
          535000, 578000, 551000, 595000,
        ],
      },
      {
        name: "Meta Estabelecida",
        data: [
          500000, 520000, 480000, 540000, 510000, 560000, 530000, 580000,
          550000, 590000, 570000, 610000,
        ],
      },
    ],
    // Dados por cliente para filtro futuro
    clientesData: {
      "TransLog Brasil": {
        vendas: [
          485000, 512000, 468000, 525000, 498000, 545000, 518000, 562000,
          535000, 578000, 551000, 595000,
        ],
        meta: [
          500000, 520000, 480000, 540000, 510000, 560000, 530000, 580000,
          550000, 590000, 570000, 610000,
        ],
      },
      "Rodoviária Central": {
        vendas: [
          312000, 328000, 298000, 345000, 318000, 362000, 335000, 378000,
          351000, 395000, 368000, 412000,
        ],
        meta: [
          320000, 340000, 310000, 360000, 330000, 380000, 350000, 400000,
          370000, 420000, 390000, 440000,
        ],
      },
      "Frota Express": {
        vendas: [
          268000, 282000, 255000, 295000, 271000, 308000, 284000, 321000,
          297000, 334000, 310000, 347000,
        ],
        meta: [
          280000, 300000, 270000, 320000, 290000, 340000, 310000, 360000,
          330000, 380000, 350000, 400000,
        ],
      },
      "Transportes Unidos": {
        vendas: [
          185000, 198000, 172000, 211000, 187000, 224000, 201000, 237000,
          214000, 250000, 227000, 263000,
        ],
        meta: [
          200000, 210000, 190000, 230000, 210000, 250000, 230000, 270000,
          250000, 290000, 270000, 310000,
        ],
      },
      "Via Cargo": {
        vendas: [
          128000, 142000, 115000, 155000, 131000, 168000, 144000, 181000,
          157000, 194000, 170000, 207000,
        ],
        meta: [
          150000, 160000, 140000, 180000, 160000, 200000, 180000, 220000,
          200000, 240000, 220000, 260000,
        ],
      },
    },
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
  },

  // Dados para ApexAreaAlternativeChart - Comparação Real vs Meta
  ComparacaoRealVsMeta: {
    meses: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    series: [
      {
        name: "Realizado",
        data: [
          485000, 512000, 468000, 525000, 498000, 545000, 518000, 562000,
          535000, 578000, 551000, 595000,
        ],
      },
      {
        name: "Meta Estabelecida",
        data: [
          500000, 520000, 480000, 540000, 510000, 560000, 530000, 580000,
          550000, 590000, 570000, 610000,
        ],
      },
    ],
    // Dados por cliente para filtro futuro
    clientesData: {
      "TransLog Brasil": {
        vendas: [
          485000, 512000, 468000, 525000, 498000, 545000, 518000, 562000,
          535000, 578000, 551000, 595000,
        ],
        meta: [
          500000, 520000, 480000, 540000, 510000, 560000, 530000, 580000,
          550000, 590000, 570000, 610000,
        ],
      },
      "Rodoviária Central": {
        vendas: [
          312000, 328000, 298000, 345000, 318000, 362000, 335000, 378000,
          351000, 395000, 368000, 412000,
        ],
        meta: [
          320000, 340000, 310000, 360000, 330000, 380000, 350000, 400000,
          370000, 420000, 390000, 440000,
        ],
      },
      "Frota Express": {
        vendas: [
          268000, 282000, 255000, 295000, 271000, 308000, 284000, 321000,
          297000, 334000, 310000, 347000,
        ],
        meta: [
          280000, 300000, 270000, 320000, 290000, 340000, 310000, 360000,
          330000, 380000, 350000, 400000,
        ],
      },
      "Transportes Unidos": {
        vendas: [
          185000, 198000, 172000, 211000, 187000, 224000, 201000, 237000,
          214000, 250000, 227000, 263000,
        ],
        meta: [
          200000, 210000, 190000, 230000, 210000, 250000, 230000, 270000,
          250000, 290000, 270000, 310000,
        ],
      },
      "Via Cargo": {
        vendas: [
          128000, 142000, 115000, 155000, 131000, 168000, 144000, 181000,
          157000, 194000, 170000, 207000,
        ],
        meta: [
          150000, 160000, 140000, 180000, 160000, 200000, 180000, 220000,
          200000, 240000, 220000, 260000,
        ],
      },
    },
    chartHeight: 450,
    colors: ["#00695c", "#d2df26ff"],
    strokeCurve: "smooth",
    strokeWidth: 3,
    fillType: "gradient",
    showDataLabels: false,
    legendPosition: "top",
    showGrid: true,
    gridColors: ["#f0f0f0", "transparent"],
    gridOpacity: 0.2,
  },

  // Dados para ApexAreaAlternativeChart - Atingimento de Meta
  atingimentoMetaPorCanal: {
    meses: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    series: [
      {
        name: "Vendas por canal",
        data: [
          485000, 512000, 468000, 525000, 498000, 545000, 518000, 562000,
          535000, 578000, 551000, 595000,
        ],
      },
      {
        name: "Meta Estabelecida",
        data: [
          500000, 520000, 480000, 540000, 510000, 560000, 530000, 580000,
          550000, 590000, 570000, 610000,
        ],
      },
    ],
    // Dados por cliente para filtro futuro
    clientesData: {
      "TransLog Brasil": {
        vendas: [
          485000, 512000, 468000, 525000, 498000, 545000, 518000, 562000,
          535000, 578000, 551000, 595000,
        ],
        meta: [
          500000, 520000, 480000, 540000, 510000, 560000, 530000, 580000,
          550000, 590000, 570000, 610000,
        ],
      },
      "Rodoviária Central": {
        vendas: [
          312000, 328000, 298000, 345000, 318000, 362000, 335000, 378000,
          351000, 395000, 368000, 412000,
        ],
        meta: [
          320000, 340000, 310000, 360000, 330000, 380000, 350000, 400000,
          370000, 420000, 390000, 440000,
        ],
      },
      "Frota Express": {
        vendas: [
          268000, 282000, 255000, 295000, 271000, 308000, 284000, 321000,
          297000, 334000, 310000, 347000,
        ],
        meta: [
          280000, 300000, 270000, 320000, 290000, 340000, 310000, 360000,
          330000, 380000, 350000, 400000,
        ],
      },
      "Transportes Unidos": {
        vendas: [
          185000, 198000, 172000, 211000, 187000, 224000, 201000, 237000,
          214000, 250000, 227000, 263000,
        ],
        meta: [
          200000, 210000, 190000, 230000, 210000, 250000, 230000, 270000,
          250000, 290000, 270000, 310000,
        ],
      },
      "Via Cargo": {
        vendas: [
          128000, 142000, 115000, 155000, 131000, 168000, 144000, 181000,
          157000, 194000, 170000, 207000,
        ],
        meta: [
          150000, 160000, 140000, 180000, 160000, 200000, 180000, 220000,
          200000, 240000, 220000, 260000,
        ],
      },
    },
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
  },
  // Dados para ApexAreaAlternativeChart - Atingimento de Meta
  atingimentoMeta: {
    meses: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    series: [
      {
        name: "Vendas Realizadas",
        data: [
          485000, 512000, 468000, 525000, 498000, 545000, 518000, 562000,
          535000, 578000, 551000, 595000,
        ],
      },
      {
        name: "Meta Estabelecida",
        data: [
          500000, 520000, 480000, 540000, 510000, 560000, 530000, 580000,
          550000, 590000, 570000, 610000,
        ],
      },
    ],
    // Dados por cliente para filtro futuro
    clientesData: {
      "TransLog Brasil": {
        vendas: [
          485000, 512000, 468000, 525000, 498000, 545000, 518000, 562000,
          535000, 578000, 551000, 595000,
        ],
        meta: [
          500000, 520000, 480000, 540000, 510000, 560000, 530000, 580000,
          550000, 590000, 570000, 610000,
        ],
      },
      "Rodoviária Central": {
        vendas: [
          312000, 328000, 298000, 345000, 318000, 362000, 335000, 378000,
          351000, 395000, 368000, 412000,
        ],
        meta: [
          320000, 340000, 310000, 360000, 330000, 380000, 350000, 400000,
          370000, 420000, 390000, 440000,
        ],
      },
      "Frota Express": {
        vendas: [
          268000, 282000, 255000, 295000, 271000, 308000, 284000, 321000,
          297000, 334000, 310000, 347000,
        ],
        meta: [
          280000, 300000, 270000, 320000, 290000, 340000, 310000, 360000,
          330000, 380000, 350000, 400000,
        ],
      },
      "Transportes Unidos": {
        vendas: [
          185000, 198000, 172000, 211000, 187000, 224000, 201000, 237000,
          214000, 250000, 227000, 263000,
        ],
        meta: [
          200000, 210000, 190000, 230000, 210000, 250000, 230000, 270000,
          250000, 290000, 270000, 310000,
        ],
      },
      "Via Cargo": {
        vendas: [
          128000, 142000, 115000, 155000, 131000, 168000, 144000, 181000,
          157000, 194000, 170000, 207000,
        ],
        meta: [
          150000, 160000, 140000, 180000, 160000, 200000, 180000, 220000,
          200000, 240000, 220000, 260000,
        ],
      },
    },
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
  },

  // Dados para ApexAreaChart - Histórico de Compras
  historicoCompras: {
    title: "Histórico de Compras por Cliente",
    meses: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    chartData: [
      {
        name: "TransLog Brasil",
        data: [
          65000, 72000, 68000, 85000, 90000, 78000, 95000, 88000, 92000, 105000,
          98000, 110000,
        ],
      },
      {
        name: "Rodoviária Central",
        data: [
          45000, 52000, 48000, 58000, 62000, 55000, 68000, 61000, 65000, 72000,
          69000, 75000,
        ],
      },
      {
        name: "Frota Express",
        data: [
          38000, 42000, 39000, 48000, 52000, 45000, 55000, 50000, 53000, 58000,
          56000, 62000,
        ],
      },
      {
        name: "Transportes Unidos",
        data: [
          28000, 32000, 29000, 35000, 38000, 33000, 42000, 39000, 41000, 45000,
          43000, 48000,
        ],
      },
      {
        name: "Via Cargo",
        data: [
          22000, 25000, 23000, 28000, 31000, 27000, 34000, 32000, 33000, 36000,
          35000, 38000,
        ],
      },
    ],
    colors: [
      "#4a148c", // Purple para TransLog Brasil
      "#00C853", // Green para Rodoviária Central
      "#1565c0", // Blue para Frota Express
      "#ef6c00", // Orange para Transportes Unidos
      "#c62828", // Red para Via Cargo
    ],
    chartHeight: 400,
    chartType: "area",
    strokeCurve: "smooth",
    showGrid: true,
    gridColors: ["#e0e0e0", "transparent"],
    gridOpacity: 0.3,
    fillType: "gradient",
    fillOpacity: 0.2,
    showDataLabels: true,
  },

  // Dados para ApexColumnChart - Frequência de Pedidos
  frequenciaPedidos: {
    title: "Frequência de Pedidos por Cliente",
    meses: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    series: [
      {
        name: "TransLog Brasil",
        data: [18, 22, 19, 25, 21, 23], // Número de pedidos por mês
      },
      {
        name: "Rodoviária Central",
        data: [12, 15, 13, 16, 14, 17],
      },
      {
        name: "Frota Express",
        data: [8, 11, 9, 12, 10, 13],
      },
      {
        name: "Transportes Unidos",
        data: [6, 8, 7, 9, 8, 10],
      },
      {
        name: "Via Cargo",
        data: [4, 6, 5, 7, 6, 8],
      },
    ],
    colors: [
      "#4a148c", // Purple para TransLog Brasil
      "#00C853", // Green para Rodoviária Central
      "#1565c0", // Blue para Frota Express
      "#ef6c00", // Orange para Transportes Unidos
      "#c62828", // Red para Via Cargo
    ],
    chartHeight: 400,
    stacked: false,
    stackType: "normal",
    legendPosition: "bottom",
  },

  // Configurações e dados auxiliares
  // Exemplo de uso com cores automáticas para ApexAreaChart
  historicoComprasAuto: {
    title: "Histórico de Compras por Cliente (Cores Automáticas)",
    meses: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    chartData: [
      {
        name: "TransLog Brasil",
        data: [
          65000, 72000, 68000, 85000, 90000, 78000, 95000, 88000, 92000, 105000,
          98000, 110000,
        ],
      },
      {
        name: "Rodoviária Central",
        data: [
          45000, 52000, 48000, 58000, 62000, 55000, 68000, 61000, 65000, 72000,
          69000, 75000,
        ],
      },
      {
        name: "Frota Express",
        data: [
          38000, 42000, 39000, 48000, 52000, 45000, 55000, 50000, 53000, 58000,
          56000, 62000,
        ],
      },
    ],
    chartHeight: 400,
    chartType: "area",
    strokeCurve: "smooth",
    showGrid: true,
    gridColors: ["#e0e0e0", "transparent"],
    gridOpacity: 0.3,
    fillType: "gradient",
    fillOpacity: 0.2,
    showDataLabels: true,
    // Configurações de cores automáticas
    autoColors: true,
    colorScheme: "corporate",
    colorSeed: "historico-compras",
  },

  // Exemplo de uso com cores automáticas para ApexColumnChart
  frequenciaPedidosAuto: {
    title: "Frequência de Pedidos por Cliente (Cores Automáticas)",
    meses: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    series: [
      {
        name: "TransLog Brasil",
        data: [18, 22, 19, 25, 21, 23],
      },
      {
        name: "Rodoviária Central",
        data: [12, 15, 13, 16, 14, 17],
      },
      {
        name: "Frota Express",
        data: [8, 11, 9, 12, 10, 13],
      },
    ],
    chartHeight: 400,
    stacked: false,
    stackType: "normal",
    legendPosition: "bottom",
    // Configurações de cores automáticas
    autoColors: true,
    colorScheme: "vibrant",
    colorSeed: "frequencia-pedidos",
  },

  configuracoes: {
    clienteSelecionado: "Consolidado",
    dateRange: {
      from: "2024-01-01",
      to: "2024-12-31",
    },
    colorPalette: {
      primary: "#c62828", // red-darken-4 (principal)
      secondary: "#1565c0", // blue-darken-3 (complementar)
      accent: "#00C853", // green-darken-3 (sucesso)
      warning: "#ef6c00", // orange-darken-3 (alerta)
      info: "#00838f", // cyan-darken-3 (informação)
      neutral: "#424242", // grey-darken-3 (neutro)
      light: "#6a1b9a", // purple-darken-3 (destaque)
      gradient: [
        "#c62828",
        "#d32f2f",
        "#f44336",
        "#e57373",
        "#ffcdd2",
        "#1565c0",
        "#2e7d32",
        "#ef6c00",
      ],
      barColors: ["#c62828", "#6200EA", "#004D40", "#C51162", "#E65100"],
    },
  },

  // Dados adicionais para futuras implementações
  metricas: {
    periodos: ["T1", "T2", "T3", "T4"],
    dados: [
      {
        name: "Receita Total",
        data: [450000, 520000, 480000, 580000],
      },
      {
        name: "Lucro Bruto",
        data: [180000, 210000, 195000, 235000],
      },
      {
        name: "Margem Operacional",
        data: [95000, 125000, 108000, 142000],
      },
      {
        name: "EBITDA",
        data: [125000, 155000, 138000, 172000],
      },
    ],
  },

  giroEstoque: {
    series: [65, 35],
    labels: ["Vendas Realizadas", "Estoque Parado"],
    colors: ["#00C853", "#c62828"], // Verde para sucesso, vermelho para alerta
    title: "Giro de estoque x vendas",
  },

  itemsEmQueda: {
    categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    chartData: [
      {
        name: "Embreagem Scania R440",
        data: [1000, 820, 780, 540, 380, 230, 150],
      },
      {
        name: "Embreagem Volvo FH540",
        data: [720, 680, 360, 320, 290, 250, 150],
      },
      {
        name: "Embreagem MB Atego",
        data: [320, 300, 270, 240, 200, 160, 120],
      },
      {
        name: "Embreagem Ford Cargo",
        data: [280, 250, 220, 180, 150, 120, 100],
      },
      {
        name: "Embreagem Iveco Daily",
        data: [180, 160, 140, 120, 100, 80, 60],
      },
    ],
    colors: [
      "#c62828",
      "#1565c0",
      "#2e7d32",
      "#ef6c00",
      "#00838f",
      "#6a1b9a",
      "#424242",
      "#d32f2f",
    ],
  },

  // Dados para ApexAreaChart - Clientes que deixaram de comprar
  clientesInativos: {
    title: "Clientes que Deixaram de Comprar",
    meses: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    chartData: [
      {
        name: "Cargo Sul Express",
        data: [45000, 38000, 25000, 15000, 8000, 3000, 0, 0, 0, 0, 0, 0],
      },
      {
        name: "Transportes Atlântico",
        data: [32000, 28000, 22000, 18000, 12000, 6000, 2000, 0, 0, 0, 0, 0],
      },
      {
        name: "Rodoviária do Norte",
        data: [28000, 25000, 20000, 15000, 10000, 5000, 3000, 1000, 0, 0, 0, 0],
      },
      {
        name: "Frota Mineira",
        data: [22000, 18000, 14000, 10000, 6000, 3000, 1000, 500, 0, 0, 0, 0],
      },
      {
        name: "Express Bahia",
        data: [18000, 15000, 12000, 8000, 4000, 2000, 500, 0, 0, 0, 0, 0],
      },
    ],
    colors: [
      "#4a148c", // Purple-darken-4 para destacar problema
      "#7bce6a", // Purple-darken-3
      "#322f66", // Purple-darken-2
      "#70dee6", // Purple-darken-1
      "#e9e091", // Purple padrão
    ],
    // Configurações de cores automáticas
    autoColors: true,
    colorScheme: "business",
    colorSeed: "clientes-inativos",
    chartHeight: 400,
    chartType: "area",
    strokeCurve: "smooth",
    showGrid: true,
    gridColors: ["#e0e0e0", "transparent"],
    gridOpacity: 0.3,
    fillType: "gradient",
    fillOpacity: 0.3,
    showDataLabels: false,
    enableZoom: true,
    description:
      "Evolução das vendas para clientes que se tornaram inativos ao longo do ano",
  },
};

// Exportação individual por componente para facilitar importação específica
export const {
  ComparacaoRealVsMeta,
  atingimentoMetaPorCanal,
  DesempenhoVendedor,
  ComissoesPagasEstimadas,
  rankingClientesVolume,
  rankingClientesValor,
  rankingClientesVolumeAuto,
  atingimentoMeta,
  historicoCompras,
  frequenciaPedidos,
  configuracoes,
  metricas,
  giroEstoque,
  itemsEmQueda,
  clientesInativos,
} = dashboardAnalysisByClientData;

// Dados para MapDrilldown - Vendas por Estado
export const mapDrilldownData = {
  // Vendas por Região
  vendasPorEstado: {
    title: "Vendas por Estado - Brasil",
    seriesName: "Volume de Vendas",
    data: [
      { key: "br-sp", state: "São Paulo", name: "São Paulo", value: 2850 },
      {
        key: "br-rj",
        state: "Rio de Janeiro",
        name: "Rio de Janeiro",
        value: 1920,
      },
      {
        key: "br-mg",
        state: "Minas Gerais",
        name: "Minas Gerais",
        value: 1680,
      },
      {
        key: "br-rs",
        state: "Rio Grande do Sul",
        name: "Rio Grande do Sul",
        value: 1450,
      },
      { key: "br-pr", state: "Paraná", name: "Paraná", value: 1320 },
      {
        key: "br-sc",
        state: "Santa Catarina",
        name: "Santa Catarina",
        value: 980,
      },
      { key: "br-ba", state: "Bahia", name: "Bahia", value: 1240 },
      { key: "br-go", state: "Goiás", name: "Goiás", value: 850 },
      { key: "br-pe", state: "Pernambuco", name: "Pernambuco", value: 720 },
      { key: "br-ce", state: "Ceará", name: "Ceará", value: 680 },
      { key: "br-pa", state: "Pará", name: "Pará", value: 520 },
      { key: "br-ma", state: "Maranhão", name: "Maranhão", value: 380 },
      { key: "br-pb", state: "Paraíba", name: "Paraíba", value: 290 },
      {
        key: "br-es",
        state: "Espírito Santo",
        name: "Espírito Santo",
        value: 420,
      },
      { key: "br-pi", state: "Piauí", name: "Piauí", value: 180 },
      { key: "br-al", state: "Alagoas", name: "Alagoas", value: 210 },
      {
        key: "br-rn",
        state: "Rio Grande do Norte",
        name: "Rio Grande do Norte",
        value: 320,
      },
      { key: "br-mt", state: "Mato Grosso", name: "Mato Grosso", value: 460 },
      {
        key: "br-ms",
        state: "Mato Grosso do Sul",
        name: "Mato Grosso do Sul",
        value: 340,
      },
      {
        key: "br-df",
        state: "Distrito Federal",
        name: "Distrito Federal",
        value: 890,
      },
      { key: "br-se", state: "Sergipe", name: "Sergipe", value: 150 },
      { key: "br-am", state: "Amazonas", name: "Amazonas", value: 480 },
      { key: "br-ro", state: "Rondônia", name: "Rondônia", value: 220 },
      { key: "br-ac", state: "Acre", name: "Acre", value: 120 },
      { key: "br-ap", state: "Amapá", name: "Amapá", value: 95 },
      { key: "br-rr", state: "Roraima", name: "Roraima", value: 85 },
      { key: "br-to", state: "Tocantins", name: "Tocantins", value: 180 },
    ],
    colorStops: [
      [0, "#eceff1"],
      [0.3, "#78909c"],
      [0.7, "#546e7a"],
      [1, "#37474f"],
    ],
    hoverColor: "#90a4ae",
    minValue: 0,
    maxValue: 3000,
    height: 500,
    showDataLabels: false,
    dataLabelFormat: "{point.name}",
    enableNavigation: true,
  },

  // Faturamento por Região
  faturamentoPorEstado: {
    title: "Faturamento por Estado (R$ Milhares)",
    seriesName: "Faturamento",
    data: [
      { key: "br-sp", state: "São Paulo", name: "São Paulo", value: 8550 },
      {
        key: "br-rj",
        state: "Rio de Janeiro",
        name: "Rio de Janeiro",
        value: 5760,
      },
      {
        key: "br-mg",
        state: "Minas Gerais",
        name: "Minas Gerais",
        value: 5040,
      },
      {
        key: "br-rs",
        state: "Rio Grande do Sul",
        name: "Rio Grande do Sul",
        value: 4350,
      },
      { key: "br-pr", state: "Paraná", name: "Paraná", value: 3960 },
      {
        key: "br-sc",
        state: "Santa Catarina",
        name: "Santa Catarina",
        value: 2940,
      },
      { key: "br-ba", state: "Bahia", name: "Bahia", value: 3720 },
      { key: "br-go", state: "Goiás", name: "Goiás", value: 2550 },
      { key: "br-pe", state: "Pernambuco", name: "Pernambuco", value: 2160 },
      { key: "br-ce", state: "Ceará", name: "Ceará", value: 2040 },
      { key: "br-pa", state: "Pará", name: "Pará", value: 1560 },
      { key: "br-ma", state: "Maranhão", name: "Maranhão", value: 1140 },
      { key: "br-pb", state: "Paraíba", name: "Paraíba", value: 870 },
      {
        key: "br-es",
        state: "Espírito Santo",
        name: "Espírito Santo",
        value: 1260,
      },
      { key: "br-pi", state: "Piauí", name: "Piauí", value: 540 },
      { key: "br-al", state: "Alagoas", name: "Alagoas", value: 630 },
      {
        key: "br-rn",
        state: "Rio Grande do Norte",
        name: "Rio Grande do Norte",
        value: 960,
      },
      { key: "br-mt", state: "Mato Grosso", name: "Mato Grosso", value: 1380 },
      {
        key: "br-ms",
        state: "Mato Grosso do Sul",
        name: "Mato Grosso do Sul",
        value: 1020,
      },
      {
        key: "br-df",
        state: "Distrito Federal",
        name: "Distrito Federal",
        value: 2670,
      },
      { key: "br-se", state: "Sergipe", name: "Sergipe", value: 450 },
      { key: "br-am", state: "Amazonas", name: "Amazonas", value: 1440 },
      { key: "br-ro", state: "Rondônia", name: "Rondônia", value: 660 },
      { key: "br-ac", state: "Acre", name: "Acre", value: 360 },
      { key: "br-ap", state: "Amapá", name: "Amapá", value: 285 },
      { key: "br-rr", state: "Roraima", name: "Roraima", value: 255 },
      { key: "br-to", state: "Tocantins", name: "Tocantins", value: 540 },
    ],
    colorStops: [
      [0, "#fff3e0"],
      [0.3, "#ff9800"],
      [0.7, "#f57c00"],
      [1, "#e65100"],
    ],
    hoverColor: "#ffb74d",
    minValue: 0,
    maxValue: 9000,
    height: 500,
    showDataLabels: false,
    dataLabelFormat: "{point.name}",
    enableNavigation: true,
  },

  // Participação de Mercado por Estado
  participacaoMercado: {
    title: "Participação de Mercado por Estado (%)",
    seriesName: "Participação (%)",
    data: [
      { key: "br-sp", state: "São Paulo", name: "São Paulo", value: 28.5 },
      {
        key: "br-rj",
        state: "Rio de Janeiro",
        name: "Rio de Janeiro",
        value: 19.2,
      },
      {
        key: "br-mg",
        state: "Minas Gerais",
        name: "Minas Gerais",
        value: 16.8,
      },
      {
        key: "br-rs",
        state: "Rio Grande do Sul",
        name: "Rio Grande do Sul",
        value: 14.5,
      },
      { key: "br-pr", state: "Paraná", name: "Paraná", value: 13.2 },
      {
        key: "br-sc",
        state: "Santa Catarina",
        name: "Santa Catarina",
        value: 9.8,
      },
      { key: "br-ba", state: "Bahia", name: "Bahia", value: 12.4 },
      { key: "br-go", state: "Goiás", name: "Goiás", value: 8.5 },
      { key: "br-pe", state: "Pernambuco", name: "Pernambuco", value: 7.2 },
      { key: "br-ce", state: "Ceará", name: "Ceará", value: 6.8 },
      { key: "br-pa", state: "Pará", name: "Pará", value: 5.2 },
      { key: "br-ma", state: "Maranhão", name: "Maranhão", value: 3.8 },
      { key: "br-pb", state: "Paraíba", name: "Paraíba", value: 2.9 },
      {
        key: "br-es",
        state: "Espírito Santo",
        name: "Espírito Santo",
        value: 4.2,
      },
      { key: "br-pi", state: "Piauí", name: "Piauí", value: 1.8 },
      { key: "br-al", state: "Alagoas", name: "Alagoas", value: 2.1 },
      {
        key: "br-rn",
        state: "Rio Grande do Norte",
        name: "Rio Grande do Norte",
        value: 3.2,
      },
      { key: "br-mt", state: "Mato Grosso", name: "Mato Grosso", value: 4.6 },
      {
        key: "br-ms",
        state: "Mato Grosso do Sul",
        name: "Mato Grosso do Sul",
        value: 3.4,
      },
      {
        key: "br-df",
        state: "Distrito Federal",
        name: "Distrito Federal",
        value: 8.9,
      },
      { key: "br-se", state: "Sergipe", name: "Sergipe", value: 1.5 },
      { key: "br-am", state: "Amazonas", name: "Amazonas", value: 4.8 },
      { key: "br-ro", state: "Rondônia", name: "Rondônia", value: 2.2 },
      { key: "br-ac", state: "Acre", name: "Acre", value: 1.2 },
      { key: "br-ap", state: "Amapá", name: "Amapá", value: 0.95 },
      { key: "br-rr", state: "Roraima", name: "Roraima", value: 0.85 },
      { key: "br-to", state: "Tocantins", name: "Tocantins", value: 1.8 },
    ],
    colorStops: [
      [0, "#f3e5f5"],
      [0.3, "#9c27b0"],
      [0.7, "#7b1fa2"],
      [1, "#4a148c"],
    ],
    hoverColor: "#ba68c8",
    minValue: 0,
    maxValue: 30,
    height: 500,
    showDataLabels: false,
    dataLabelFormat: "{point.name}: {point.value}%",
    enableNavigation: true,
  },
};

// Dados para ApexStackedBarChart - Gráficos de Barras Empilhadas
export const stackedBarChartData = {
  // Vendas por Categoria de Produto
  vendasPorCategoria: {
    title: "Vendas por Categoria de Produto",
    series: [
      {
        name: "Notebooks",
        data: [44, 55, 41, 37, 22, 43, 21, 35, 28, 42, 38, 45],
      },
      {
        name: "Smartphones",
        data: [53, 32, 33, 52, 13, 43, 32, 29, 36, 41, 47, 38],
      },
      {
        name: "Tablets",
        data: [12, 17, 11, 9, 15, 11, 20, 18, 14, 16, 19, 13],
      },
      {
        name: "Acessórios",
        data: [9, 7, 5, 8, 6, 9, 4, 12, 10, 8, 11, 9],
      },
      {
        name: "Impressoras",
        data: [25, 12, 19, 32, 25, 24, 10, 22, 18, 27, 20, 24],
      },
    ],
    categories: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    chartHeight: 400,
    colors: ["#37474f", "#546e7a", "#78909c", "#90a4ae", "#b0bec5"],
    horizontal: true,
    stacked: true,
    strokeWidth: 1,
    strokeColors: ["#fff"],
    showDataLabels: true,
    showTotal: true,
    totalOffsetX: 0,
    totalFontSize: "13px",
    totalFontWeight: 900,
    xAxisFormatter: (val) => val + "K",
    yAxisTitle: undefined,
    tooltipFormatter: (val) => val + "K vendas",
    fillOpacity: 1,
    showLegend: true,
    legendPosition: "top",
    legendHorizontalAlign: "left",
    legendOffsetX: 40,
    legendOffsetY: 0,
  },

  // Faturamento por Região
  faturamentoPorRegiao: {
    title: "Faturamento por Região (Milhares R$)",
    series: [
      {
        name: "Q1",
        data: [320, 280, 150, 190, 120],
      },
      {
        name: "Q2",
        data: [380, 310, 180, 220, 140],
      },
      {
        name: "Q3",
        data: [360, 290, 170, 210, 130],
      },
      {
        name: "Q4",
        data: [420, 340, 200, 250, 160],
      },
    ],
    categories: ["Sudeste", "Sul", "Nordeste", "Centro-Oeste", "Norte"],
    chartHeight: 350,
    colors: ["#37474f", "#546e7a", "#78909c", "#90a4ae"],
    horizontal: true,
    stacked: true,
    strokeWidth: 1,
    strokeColors: ["#fff"],
    showDataLabels: true,
    showTotal: true,
    totalOffsetX: 0,
    totalFontSize: "13px",
    totalFontWeight: 900,
    xAxisFormatter: (val) => "R$ " + val + "K",
    yAxisTitle: undefined,
    tooltipFormatter: (val) => "R$ " + val + "K",
    fillOpacity: 1,
    showLegend: true,
    legendPosition: "top",
    legendHorizontalAlign: "left",
    legendOffsetX: 40,
    legendOffsetY: 0,
  },

  // Performance por Representante
  performanceRepresentante: {
    title: "Performance de Vendas por Representante",
    series: [
      {
        name: "Meta Atingida",
        data: [85, 92, 78, 88, 95, 82, 89],
      },
      {
        name: "Acima da Meta",
        data: [15, 8, 22, 12, 5, 18, 11],
      },
    ],
    categories: [
      "João Silva",
      "Maria Santos",
      "Pedro Costa",
      "Ana Oliveira",
      "Carlos Ferreira",
      "Paula Souza",
      "Roberto Lima",
    ],
    chartHeight: 400,
    colors: ["#37474f", "#78909c"],
    horizontal: true,
    stacked: true,
    strokeWidth: 1,
    strokeColors: ["#fff"],
    showDataLabels: true,
    showTotal: true,
    totalOffsetX: 0,
    totalFontSize: "13px",
    totalFontWeight: 900,
    xAxisFormatter: (val) => val + "%",
    yAxisTitle: undefined,
    tooltipFormatter: (val) => val + "% da meta",
    fillOpacity: 1,
    showLegend: true,
    legendPosition: "top",
    legendHorizontalAlign: "left",
    legendOffsetX: 40,
    legendOffsetY: 0,
  },

  // Mix de Produtos por Cliente
  mixProdutosPorCliente: {
    title: "Mix de Produtos por Cliente",
    series: [
      {
        name: "Notebooks",
        data: [25, 18, 32, 28, 15, 22, 35, 20, 12, 30],
      },
      {
        name: "Smartphones",
        data: [30, 25, 20, 22, 28, 35, 18, 32, 25, 20],
      },
      {
        name: "Tablets",
        data: [15, 20, 12, 18, 22, 8, 15, 25, 30, 18],
      },
      {
        name: "Acessórios",
        data: [20, 25, 18, 15, 20, 25, 22, 15, 20, 22],
      },
      {
        name: "Impressoras",
        data: [10, 12, 18, 17, 15, 10, 10, 8, 13, 10],
      },
    ],
    categories: [
      "TechCorp Solutions",
      "InfoTech Ltda",
      "Office Express",
      "Mobile World",
      "Digital Store",
      "Gamer Zone",
      "Stream Pro",
      "Hardware Plus",
      "Gaming Masters",
      "PC Builder",
    ],
    chartHeight: 400,
    colors: ["#E65100", "#FF8A65", "#FFAB91", "#FFCCBC", "#FFF3E0"],
    horizontal: true,
    stacked: true,
    strokeWidth: 1,
    strokeColors: ["#fff"],
    showDataLabels: true,
    showTotal: true,
    totalOffsetX: 0,
    totalFontSize: "13px",
    totalFontWeight: 900,
    xAxisFormatter: (val) => val + " itens",
    yAxisTitle: undefined,
    tooltipFormatter: (val) => val + " produtos vendidos",
    fillOpacity: 1,
    showLegend: true,
    legendPosition: "top",
    legendHorizontalAlign: "left",
    legendOffsetX: 40,
    legendOffsetY: 0,
  },

  // Mix de Produtos por Período
  mixProdutosPorPeriodo: {
    title: "Evolução do Mix de Produtos por Trimestre",
    series: [
      {
        name: "Notebooks",
        data: [120, 135, 128, 142],
      },
      {
        name: "Smartphones",
        data: [85, 92, 88, 95],
      },
      {
        name: "Tablets",
        data: [65, 58, 72, 68],
      },
      {
        name: "Acessórios",
        data: [45, 52, 48, 55],
      },
      {
        name: "Impressoras",
        data: [35, 28, 32, 38],
      },
    ],
    categories: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024"],
    chartHeight: 350,
    colors: ["#E65100", "#FF8A65", "#FFAB91", "#FFCCBC", "#FFF3E0"],
    horizontal: false,
    stacked: true,
    strokeWidth: 1,
    strokeColors: ["#fff"],
    showDataLabels: false,
    showTotal: true,
    totalOffsetX: 0,
    totalFontSize: "12px",
    totalFontWeight: 600,
    xAxisFormatter: (val) => val,
    yAxisTitle: "Quantidade Vendida",
    tooltipFormatter: (val) => val + " unidades",
    fillOpacity: 1,
    showLegend: true,
    legendPosition: "top",
    legendHorizontalAlign: "center",
    legendOffsetX: 0,
    legendOffsetY: 0,
  },

  // Participação no Mix por Cliente Top 5
  participacaoMixClientesTop: {
    title: "Participação no Mix - Top 5 Clientes",
    series: [
      {
        name: "Notebooks",
        data: [35, 28, 32, 25, 30],
      },
      {
        name: "Smartphones",
        data: [25, 30, 22, 28, 20],
      },
      {
        name: "Tablets",
        data: [20, 15, 18, 22, 25],
      },
      {
        name: "Acessórios",
        data: [15, 20, 18, 15, 15],
      },
      {
        name: "Impressoras",
        data: [5, 7, 10, 10, 10],
      },
    ],
    categories: [
      "TechCorp Solutions",
      "InfoTech Ltda",
      "Office Express",
      "Mobile World",
      "Digital Store",
    ],
    chartHeight: 400,
    colors: ["#E65100", "#FF8A65", "#FFAB91", "#FFCCBC", "#FFF3E0"],
    horizontal: true,
    stacked: true,
    strokeWidth: 1,
    strokeColors: ["#fff"],
    showDataLabels: true,
    showTotal: true,
    totalOffsetX: 0,
    totalFontSize: "13px",
    totalFontWeight: 900,
    xAxisFormatter: (val) => val + "%",
    yAxisTitle: undefined,
    tooltipFormatter: (val) => val + "% do mix",
    fillOpacity: 1,
    showLegend: true,
    legendPosition: "top",
    legendHorizontalAlign: "left",
    legendOffsetX: 40,
    legendOffsetY: 0,
  },
};

// Dados para DataTable de Metas
export const metasData = {
  metas: [
    // Janeiro
    {
      id: 1,
      mes: "Janeiro",
      produto: "Notebook Dell Inspiron",
      representante: "João Silva",
      regiao: "Sul",
      valorMeta: 120000,
    },
    {
      id: 2,
      mes: "Janeiro",
      produto: "Monitor LG 24''",
      representante: "Maria Santos",
      regiao: "Sudeste",
      valorMeta: 135000,
    },
    {
      id: 3,
      mes: "Janeiro",
      produto: "Impressora HP LaserJet",
      representante: "Pedro Costa",
      regiao: "Centro-Oeste",
      valorMeta: 110000,
    },
    {
      id: 4,
      mes: "Janeiro",
      produto: "Smartphone Samsung",
      representante: "Ana Oliveira",
      regiao: "Nordeste",
      valorMeta: 125000,
    },
    {
      id: 5,
      mes: "Janeiro",
      produto: "Tablet iPad",
      representante: "Carlos Ferreira",
      regiao: "Norte",
      valorMeta: 115000,
    },

    // Fevereiro
    {
      id: 6,
      mes: "Fevereiro",
      produto: "Teclado Mecânico",
      representante: "João Silva",
      regiao: "Sul",
      valorMeta: 125000,
    },
    {
      id: 7,
      mes: "Fevereiro",
      produto: "Webcam Logitech",
      representante: "Maria Santos",
      regiao: "Sudeste",
      valorMeta: 140000,
    },
    {
      id: 8,
      mes: "Fevereiro",
      produto: "SSD Kingston 1TB",
      representante: "Pedro Costa",
      regiao: "Centro-Oeste",
      valorMeta: 115000,
    },
    {
      id: 9,
      mes: "Fevereiro",
      produto: "Placa de Vídeo RTX",
      representante: "Ana Oliveira",
      regiao: "Nordeste",
      valorMeta: 130000,
    },
    {
      id: 10,
      mes: "Fevereiro",
      produto: "Processador Intel i7",
      representante: "Carlos Ferreira",
      regiao: "Norte",
      valorMeta: 120000,
    },

    // Março
    {
      id: 11,
      mes: "Março",
      produto: "Mouse Gamer",
      representante: "João Silva",
      regiao: "Sul",
      valorMeta: 130000,
    },
    {
      id: 12,
      mes: "Março",
      produto: "Memória RAM 32GB",
      representante: "Maria Santos",
      regiao: "Sudeste",
      valorMeta: 145000,
    },
    {
      id: 13,
      mes: "Março",
      produto: "Notebook Dell Inspiron",
      representante: "Pedro Costa",
      regiao: "Centro-Oeste",
      valorMeta: 120000,
    },
    {
      id: 14,
      mes: "Março",
      produto: "Monitor LG 24''",
      representante: "Ana Oliveira",
      regiao: "Nordeste",
      valorMeta: 135000,
    },
    {
      id: 15,
      mes: "Março",
      produto: "Impressora HP LaserJet",
      representante: "Carlos Ferreira",
      regiao: "Norte",
      valorMeta: 125000,
    },

    // Abril
    {
      id: 16,
      mes: "Abril",
      produto: "Smartphone Samsung",
      representante: "João Silva",
      regiao: "Sul",
      valorMeta: 135000,
    },
    {
      id: 17,
      mes: "Abril",
      produto: "Tablet iPad",
      representante: "Maria Santos",
      regiao: "Sudeste",
      valorMeta: 150000,
    },
    {
      id: 18,
      mes: "Abril",
      produto: "Teclado Mecânico",
      representante: "Pedro Costa",
      regiao: "Centro-Oeste",
      valorMeta: 125000,
    },
    {
      id: 19,
      mes: "Abril",
      produto: "Webcam Logitech",
      representante: "Ana Oliveira",
      regiao: "Nordeste",
      valorMeta: 140000,
    },
    {
      id: 20,
      mes: "Abril",
      produto: "SSD Kingston 1TB",
      representante: "Carlos Ferreira",
      regiao: "Norte",
      valorMeta: 130000,
    },

    // Maio
    {
      id: 21,
      mes: "Maio",
      produto: "Placa de Vídeo RTX",
      representante: "João Silva",
      regiao: "Sul",
      valorMeta: 140000,
    },
    {
      id: 22,
      mes: "Maio",
      produto: "Processador Intel i7",
      representante: "Maria Santos",
      regiao: "Sudeste",
      valorMeta: 155000,
    },
    {
      id: 23,
      mes: "Maio",
      produto: "Mouse Gamer",
      representante: "Pedro Costa",
      regiao: "Centro-Oeste",
      valorMeta: 130000,
    },
    {
      id: 24,
      mes: "Maio",
      produto: "Memória RAM 32GB",
      representante: "Ana Oliveira",
      regiao: "Nordeste",
      valorMeta: 145000,
    },
    {
      id: 25,
      mes: "Maio",
      produto: "Notebook Dell Inspiron",
      representante: "Carlos Ferreira",
      regiao: "Norte",
      valorMeta: 135000,
    },

    // Junho
    {
      id: 26,
      mes: "Junho",
      produto: "Monitor LG 24''",
      representante: "João Silva",
      regiao: "Sul",
      valorMeta: 145000,
    },
    {
      id: 27,
      mes: "Junho",
      produto: "Impressora HP LaserJet",
      representante: "Maria Santos",
      regiao: "Sudeste",
      valorMeta: 160000,
    },
    {
      id: 28,
      mes: "Junho",
      produto: "Smartphone Samsung",
      representante: "Pedro Costa",
      regiao: "Centro-Oeste",
      valorMeta: 135000,
    },
    {
      id: 29,
      mes: "Junho",
      produto: "Tablet iPad",
      representante: "Ana Oliveira",
      regiao: "Nordeste",
      valorMeta: 150000,
    },
    {
      id: 30,
      mes: "Junho",
      produto: "Teclado Mecânico",
      representante: "Carlos Ferreira",
      regiao: "Norte",
      valorMeta: 140000,
    },

    // Julho
    {
      id: 31,
      mes: "Julho",
      produto: "Webcam Logitech",
      representante: "João Silva",
      regiao: "Sul",
      valorMeta: 150000,
    },
    {
      id: 32,
      mes: "Julho",
      produto: "SSD Kingston 1TB",
      representante: "Maria Santos",
      regiao: "Sudeste",
      valorMeta: 165000,
    },
    {
      id: 33,
      mes: "Julho",
      produto: "Placa de Vídeo RTX",
      representante: "Pedro Costa",
      regiao: "Centro-Oeste",
      valorMeta: 140000,
    },
    {
      id: 34,
      mes: "Julho",
      produto: "Processador Intel i7",
      representante: "Ana Oliveira",
      regiao: "Nordeste",
      valorMeta: 155000,
    },
    {
      id: 35,
      mes: "Julho",
      produto: "Mouse Gamer",
      representante: "Carlos Ferreira",
      regiao: "Norte",
      valorMeta: 145000,
    },

    // Agosto
    {
      id: 36,
      mes: "Agosto",
      produto: "Memória RAM 32GB",
      representante: "João Silva",
      regiao: "Sul",
      valorMeta: 155000,
    },
    {
      id: 37,
      mes: "Agosto",
      produto: "Notebook Dell Inspiron",
      representante: "Maria Santos",
      regiao: "Sudeste",
      valorMeta: 170000,
    },
    {
      id: 38,
      mes: "Agosto",
      produto: "Monitor LG 24''",
      representante: "Pedro Costa",
      regiao: "Centro-Oeste",
      valorMeta: 145000,
    },
    {
      id: 39,
      mes: "Agosto",
      produto: "Impressora HP LaserJet",
      representante: "Ana Oliveira",
      regiao: "Nordeste",
      valorMeta: 160000,
    },
    {
      id: 40,
      mes: "Agosto",
      produto: "Smartphone Samsung",
      representante: "Carlos Ferreira",
      regiao: "Norte",
      valorMeta: 150000,
    },

    // Setembro
    {
      id: 41,
      mes: "Setembro",
      produto: "Tablet iPad",
      representante: "João Silva",
      regiao: "Sul",
      valorMeta: 160000,
    },
    {
      id: 42,
      mes: "Setembro",
      produto: "Teclado Mecânico",
      representante: "Maria Santos",
      regiao: "Sudeste",
      valorMeta: 175000,
    },
    {
      id: 43,
      mes: "Setembro",
      produto: "Webcam Logitech",
      representante: "Pedro Costa",
      regiao: "Centro-Oeste",
      valorMeta: 150000,
    },
    {
      id: 44,
      mes: "Setembro",
      produto: "SSD Kingston 1TB",
      representante: "Ana Oliveira",
      regiao: "Nordeste",
      valorMeta: 165000,
    },
    {
      id: 45,
      mes: "Setembro",
      produto: "Placa de Vídeo RTX",
      representante: "Carlos Ferreira",
      regiao: "Norte",
      valorMeta: 155000,
    },

    // Outubro
    {
      id: 46,
      mes: "Outubro",
      produto: "Processador Intel i7",
      representante: "João Silva",
      regiao: "Sul",
      valorMeta: 165000,
    },
    {
      id: 47,
      mes: "Outubro",
      produto: "Mouse Gamer",
      representante: "Maria Santos",
      regiao: "Sudeste",
      valorMeta: 180000,
    },
    {
      id: 48,
      mes: "Outubro",
      produto: "Memória RAM 32GB",
      representante: "Pedro Costa",
      regiao: "Centro-Oeste",
      valorMeta: 155000,
    },
    {
      id: 49,
      mes: "Outubro",
      produto: "Notebook Dell Inspiron",
      representante: "Ana Oliveira",
      regiao: "Nordeste",
      valorMeta: 170000,
    },
    {
      id: 50,
      mes: "Outubro",
      produto: "Monitor LG 24''",
      representante: "Carlos Ferreira",
      regiao: "Norte",
      valorMeta: 160000,
    },

    // Novembro
    {
      id: 51,
      mes: "Novembro",
      produto: "Impressora HP LaserJet",
      representante: "João Silva",
      regiao: "Sul",
      valorMeta: 170000,
    },
    {
      id: 52,
      mes: "Novembro",
      produto: "Smartphone Samsung",
      representante: "Maria Santos",
      regiao: "Sudeste",
      valorMeta: 185000,
    },
    {
      id: 53,
      mes: "Novembro",
      produto: "Tablet iPad",
      representante: "Pedro Costa",
      regiao: "Centro-Oeste",
      valorMeta: 160000,
    },
    {
      id: 54,
      mes: "Novembro",
      produto: "Teclado Mecânico",
      representante: "Ana Oliveira",
      regiao: "Nordeste",
      valorMeta: 175000,
    },
    {
      id: 55,
      mes: "Novembro",
      produto: "Webcam Logitech",
      representante: "Carlos Ferreira",
      regiao: "Norte",
      valorMeta: 165000,
    },

    // Dezembro
    {
      id: 56,
      mes: "Dezembro",
      produto: "SSD Kingston 1TB",
      representante: "João Silva",
      regiao: "Sul",
      valorMeta: 175000,
    },
    {
      id: 57,
      mes: "Dezembro",
      produto: "Placa de Vídeo RTX",
      representante: "Maria Santos",
      regiao: "Sudeste",
      valorMeta: 190000,
    },
    {
      id: 58,
      mes: "Dezembro",
      produto: "Processador Intel i7",
      representante: "Pedro Costa",
      regiao: "Centro-Oeste",
      valorMeta: 165000,
    },
    {
      id: 59,
      mes: "Dezembro",
      produto: "Mouse Gamer",
      representante: "Ana Oliveira",
      regiao: "Nordeste",
      valorMeta: 180000,
    },
    {
      id: 60,
      mes: "Dezembro",
      produto: "Memória RAM 32GB",
      representante: "Carlos Ferreira",
      regiao: "Norte",
      valorMeta: 170000,
    },
  ],

  // Listas para os selects
  opcoes: {
    meses: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    produtos: [
      "Notebook Dell Inspiron",
      "Monitor LG 24''",
      "Impressora HP LaserJet",
      "Smartphone Samsung",
      "Tablet iPad",
      "Teclado Mecânico",
      "Webcam Logitech",
      "SSD Kingston 1TB",
      "Placa de Vídeo RTX",
      "Processador Intel i7",
      "Mouse Gamer",
      "Memória RAM 32GB",
    ],
    clientes: [
      "TechCorp Solutions",
      "InfoTech Ltda",
      "Office Express",
      "Mobile World",
      "Digital Store",
      "Gamer Zone",
      "Stream Pro",
      "Hardware Plus",
      "Gaming Masters",
      "PC Builder",
      "Esports Arena",
      "Server Solutions",
    ],
    regioes: ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"],
    representantes: [
      "João Silva",
      "Maria Santos",
      "Pedro Costa",
      "Ana Oliveira",
      "Carlos Ferreira",
    ],
  },

  // Configurações da tabela
  configuracoes: {
    headers: [
      { title: "Mês", key: "mes" },
      { title: "Produto", key: "produto" },
      { title: "Representante", key: "representante" },
      { title: "Região", key: "regiao" },
      {
        title: "Valor da Meta",
        key: "valorMeta",
        align: "end",
      },
      { title: "Ações", key: "actions", align: "end", sortable: false },
    ],
    itemsPerPage: 10,
    showFooter: true,
  },
};

// Dados para BoxPlot - Ticket Médio dos Pedidos
export const boxPlotTicketMedioData = {
  ticketMedioPorPeriodo: {
    title: "Análise de Ticket Médio por Período",
    seriesName: "Ticket Médio (R$)",
    chartHeight: 400,
    colors: ["#008FFB", "#FEB019"],
    chartData: [
      {
        x: "Jan 2024",
        y: [850, 1200, 1450, 1680, 2150], // [min, Q1, median, Q3, max]
        goals: [
          {
            value: 800, // Meta mínima
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560", // Vermelho para meta não atingida
          },
          {
            value: 1800, // Meta ideal
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396", // Verde para meta ideal
          },
        ],
      },
      {
        x: "Fev 2024",
        y: [920, 1280, 1520, 1750, 2080],
        goals: [
          {
            value: 850,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 1850,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
      {
        x: "Mar 2024",
        y: [1100, 1380, 1620, 1850, 2200],
        goals: [
          {
            value: 900,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 1900,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
      {
        x: "Abr 2024",
        y: [980, 1350, 1580, 1820, 2180],
        goals: [
          {
            value: 950,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 1950,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
      {
        x: "Mai 2024",
        y: [1150, 1420, 1680, 1920, 2350],
        goals: [
          {
            value: 1000,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 2000,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
      {
        x: "Jun 2024",
        y: [1080, 1390, 1650, 1890, 2280],
        goals: [
          {
            value: 1050,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 2050,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
    ],
  },

  ticketMedioPorCliente: {
    title: "Distribuição de Ticket Médio por Segmento de Cliente",
    seriesName: "Ticket Médio (R$)",
    chartHeight: 450,
    colors: ["#775DD0", "#FEB019"],
    chartData: [
      {
        x: "Cliente A",
        y: [450, 680, 850, 1020, 1350],
        goals: [
          {
            value: 600, // Meta mínima para pequeno porte
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 1000, // Meta ideal para pequeno porte
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
      {
        x: "Cliente B",
        y: [950, 1280, 1520, 1780, 2150],
        goals: [
          {
            value: 1200,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 1800,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
      {
        x: "Cliente C",
        y: [1650, 2180, 2520, 2890, 3450],
        goals: [
          {
            value: 2000,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 2800,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
      {
        x: "Cliente D",
        y: [2250, 3180, 3820, 4350, 5250],
        goals: [
          {
            value: 3000,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 4200,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
    ],
  },

  ticketMedioPorRegiao: {
    title: "Ticket Médio por Região Geográfica",
    seriesName: "Ticket Médio (R$)",
    chartHeight: 400,
    colors: ["#37474f", "#FEB019"],
    chartData: [
      {
        x: "Norte",
        y: [780, 1050, 1280, 1520, 1850],
        goals: [
          {
            value: 1000,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 1600,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
      {
        x: "Nordeste",
        y: [850, 1120, 1350, 1580, 1920],
        goals: [
          {
            value: 1100,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 1700,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
      {
        x: "Centro-Oeste",
        y: [920, 1180, 1420, 1680, 2050],
        goals: [
          {
            value: 1200,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 1800,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
      {
        x: "Sudeste",
        y: [1150, 1480, 1750, 2080, 2550],
        goals: [
          {
            value: 1400,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 2200,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
      {
        x: "Sul",
        y: [1080, 1350, 1620, 1920, 2380],
        goals: [
          {
            value: 1300,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 2100,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
    ],
  },

  ticketMedioPorProduto: {
    title: "Distribuição de Ticket Médio por Categoria de Produto",
    seriesName: "Ticket Médio (R$)",
    chartHeight: 450,
    colors: ["#c62828", "#FEB019"],
    chartData: [
      {
        x: "Notebooks",
        y: [2200, 2880, 3350, 3920, 4650],
        goals: [
          {
            value: 2500,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 4000,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
      {
        x: "Smartphones",
        y: [480, 680, 850, 1120, 1580],
        goals: [
          {
            value: 600,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 1200,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
      {
        x: "Tablets",
        y: [350, 520, 680, 890, 1250],
        goals: [
          {
            value: 500,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 1000,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
      {
        x: "Acessórios",
        y: [85, 150, 220, 320, 480],
        goals: [
          {
            value: 120,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 350,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
      {
        x: "Impressoras",
        y: [1200, 1580, 1920, 2350, 2850],
        goals: [
          {
            value: 1500,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#FF4560",
          },
          {
            value: 2500,
            strokeWidth: 0,
            strokeHeight: 13,
            strokeLineCap: "round",
            strokeColor: "#00E396",
          },
        ],
      },
    ],
  },
};

// Exportação default
export default {
  ...dashboardAnalysisByClientData,
  mapDrilldown: mapDrilldownData,
  stackedBarChart: stackedBarChartData,
  boxPlotTicketMedio: boxPlotTicketMedioData,
  metas: metasData,
};
