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

// Dados para DataTable de Metas
export const metasData = {
  metas: [
    {
      id: 1,
      mes: "Janeiro",
      produto: "Notebook Dell Inspiron",
      cliente: "TechCorp Solutions",
      regiao: "Sul",
      representante: "João Silva",
      valorMeta: 150000,
    },
    {
      id: 2,
      mes: "Janeiro",
      produto: "Monitor LG 24''",
      cliente: "InfoTech Ltda",
      regiao: "Sudeste",
      representante: "Maria Santos",
      valorMeta: 85000,
    },
    {
      id: 3,
      mes: "Fevereiro",
      produto: "Impressora HP LaserJet",
      cliente: "Office Express",
      regiao: "Centro-Oeste",
      representante: "Pedro Costa",
      valorMeta: 120000,
    },
    {
      id: 4,
      mes: "Fevereiro",
      produto: "Smartphone Samsung",
      cliente: "Mobile World",
      regiao: "Nordeste",
      representante: "Ana Oliveira",
      valorMeta: 200000,
    },
    {
      id: 5,
      mes: "Março",
      produto: "Tablet iPad",
      cliente: "Digital Store",
      regiao: "Norte",
      representante: "Carlos Ferreira",
      valorMeta: 180000,
    },
    {
      id: 6,
      mes: "Março",
      produto: "Teclado Mecânico",
      cliente: "Gamer Zone",
      regiao: "Sul",
      representante: "João Silva",
      valorMeta: 45000,
    },
    {
      id: 7,
      mes: "Abril",
      produto: "Webcam Logitech",
      cliente: "Stream Pro",
      regiao: "Sudeste",
      representante: "Maria Santos",
      valorMeta: 65000,
    },
    {
      id: 8,
      mes: "Abril",
      produto: "SSD Kingston 1TB",
      cliente: "Hardware Plus",
      regiao: "Centro-Oeste",
      representante: "Pedro Costa",
      valorMeta: 95000,
    },
    {
      id: 9,
      mes: "Maio",
      produto: "Placa de Vídeo RTX",
      cliente: "Gaming Masters",
      regiao: "Nordeste",
      representante: "Ana Oliveira",
      valorMeta: 350000,
    },
    {
      id: 10,
      mes: "Maio",
      produto: "Processador Intel i7",
      cliente: "PC Builder",
      regiao: "Norte",
      representante: "Carlos Ferreira",
      valorMeta: 280000,
    },
    {
      id: 11,
      mes: "Junho",
      produto: "Mouse Gamer",
      cliente: "Esports Arena",
      regiao: "Sul",
      representante: "João Silva",
      valorMeta: 55000,
    },
    {
      id: 12,
      mes: "Junho",
      produto: "Memória RAM 32GB",
      cliente: "Server Solutions",
      regiao: "Sudeste",
      representante: "Maria Santos",
      valorMeta: 140000,
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
      { title: "Cliente", key: "cliente" },
      { title: "Região", key: "regiao" },
      { title: "Representante", key: "representante" },
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

// Exportação default
export default dashboardAnalysisByClientData;
