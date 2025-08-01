// Sistema de cores automáticas para componentes de gráfico
// Pode ser usado por qualquer componente ApexCharts

export class ColorGenerator {
  static colorPalettes = {
    modern: [
      "#667eea",
      "#764ba2",
      "#f093fb",
      "#f5576c",
      "#4facfe",
      "#43e97b",
      "#fa709a",
      "#fee140",
      "#a8edea",
      "#d299c2",
    ],
    vibrant: [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#96CEB4",
      "#FFEAA7",
      "#DDA0DD",
      "#FF7675",
      "#74B9FF",
      "#00B894",
      "#FDCB6E",
    ],
    pastel: [
      "#FFB3BA",
      "#FFDFBA",
      "#FFFFBA",
      "#BAFFC9",
      "#BAE1FF",
      "#FFBAFF",
      "#C9BAFF",
      "#FFCBA4",
      "#E4C1F9",
      "#A8E6CF",
    ],
    corporate: [
      "#2E86AB",
      "#A23B72",
      "#F18F01",
      "#C73E1D",
      "#6A994E",
      "#577590",
      "#F4A261",
      "#E76F51",
      "#2A9D8F",
      "#E9C46A",
    ],
    material: [
      "#1976d2",
      "#388e3c",
      "#f57c00",
      "#d32f2f",
      "#7b1fa2",
      "#00796b",
      "#5d4037",
      "#455a64",
      "#e64a19",
      "#1565c0",
    ],
    purple: [
      "#4a148c",
      "#6a1b9a",
      "#7b1fa2",
      "#8e24aa",
      "#9c27b0",
      "#ab47bc",
      "#ba68c8",
      "#ce93d8",
      "#e1bee7",
      "#f3e5f5",
    ],
    business: [
      "#1565c0",
      "#2e7d32",
      "#ef6c00",
      "#c62828",
      "#5e35b1",
      "#00695c",
      "#6d4c41",
      "#37474f",
      "#e64a19",
      "#283593",
    ],
  };

  /**
   * Gera uma cor automática baseada no índice e configurações
   * @param {number} index - Índice do item
   * @param {string} colorScheme - Esquema de cores
   * @param {string|number} colorSeed - Seed para consistência
   * @returns {string} Cor em formato hex
   */
  static generateAutoColor(index, colorScheme = "modern", colorSeed = null) {
    const palette =
      this.colorPalettes[colorScheme] || this.colorPalettes.modern;

    if (colorSeed) {
      return this.generateSeededColor(index, colorSeed);
    }

    // Usa paleta circular (volta ao início quando acabam as cores)
    return palette[index % palette.length];
  }

  /**
   * Gera múltiplas cores automáticas
   * @param {number} count - Quantidade de cores
   * @param {string} colorScheme - Esquema de cores
   * @param {string|number} colorSeed - Seed para consistência
   * @returns {string[]} Array de cores em formato hex
   */
  static generateAutoColors(count, colorScheme = "modern", colorSeed = null) {
    return Array.from({ length: count }, (_, index) =>
      this.generateAutoColor(index, colorScheme, colorSeed)
    );
  }

  /**
   * Gera cor baseada em seed para consistência entre renderizações
   * @param {number} index - Índice do item
   * @param {string|number} seed - Seed para geração
   * @returns {string} Cor em formato hex
   */
  static generateSeededColor(index, seed) {
    const numericSeed =
      typeof seed === "string" ? this.stringToNumber(seed) : seed;

    const hue = (numericSeed + index * 137.508) % 360; // Proporção áurea para distribuição uniforme
    const saturation = 65 + ((index * 10) % 25); // Variação na saturação
    const lightness = 45 + ((index * 5) % 20); // Variação na luminosidade

    return this.hslToHex(hue, saturation, lightness);
  }

  /**
   * Converte string para número para usar como seed
   * @param {string} str - String para converter
   * @returns {number} Número hash da string
   */
  static stringToNumber(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Converte para 32bit integer
    }
    return Math.abs(hash);
  }

  /**
   * Converte HSL para HEX
   * @param {number} h - Hue (0-360)
   * @param {number} s - Saturation (0-100)
   * @param {number} l - Lightness (0-100)
   * @returns {string} Cor em formato hex
   */
  static hslToHex(h, s, l) {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  /**
   * Gera gradiente de cores para um esquema específico
   * @param {string} colorScheme - Esquema de cores
   * @param {number} steps - Número de passos no gradiente
   * @returns {string[]} Array de cores em gradiente
   */
  static generateGradient(colorScheme = "modern", steps = 5) {
    const baseColors =
      this.colorPalettes[colorScheme] || this.colorPalettes.modern;
    const baseColor = baseColors[0];

    // Gera gradiente baseado na primeira cor do esquema
    return Array.from({ length: steps }, (_, index) => {
      const opacity = 1 - index * 0.15;
      return this.hexToRgba(baseColor, opacity);
    });
  }

  /**
   * Converte hex para rgba
   * @param {string} hex - Cor em formato hex
   * @param {number} alpha - Transparência (0-1)
   * @returns {string} Cor em formato rgba
   */
  static hexToRgba(hex, alpha = 1) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  /**
   * Obtém esquemas de cores disponíveis
   * @returns {string[]} Lista de esquemas disponíveis
   */
  static getAvailableSchemes() {
    return Object.keys(this.colorPalettes);
  }

  /**
   * Obtém paleta completa de um esquema
   * @param {string} scheme - Nome do esquema
   * @returns {string[]} Paleta de cores
   */
  static getPalette(scheme) {
    return this.colorPalettes[scheme] || this.colorPalettes.modern;
  }
}

// Mixin para componentes Vue
export const ColorMixin = {
  props: {
    autoColors: {
      type: Boolean,
      default: false,
    },
    colorScheme: {
      type: String,
      default: "modern",
      validator: (value) =>
        ColorGenerator.getAvailableSchemes().includes(value),
    },
    colorSeed: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    dynamicColors() {
      if (!this.autoColors) return null;

      const count = this.getColorCount ? this.getColorCount() : 1;
      return ColorGenerator.generateAutoColors(
        count,
        this.colorScheme,
        this.colorSeed
      );
    },
    primaryDynamicColor() {
      if (!this.autoColors) return null;
      return ColorGenerator.generateAutoColor(
        0,
        this.colorScheme,
        this.colorSeed
      );
    },
  },
  methods: {
    generateColor(index) {
      return ColorGenerator.generateAutoColor(
        index,
        this.colorScheme,
        this.colorSeed
      );
    },
  },
};

export default ColorGenerator;
