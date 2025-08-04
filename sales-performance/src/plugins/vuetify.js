// src/plugins/vuetify.js
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VDateInput } from "vuetify/labs/VDateInput";
// Define seu tema personalizado
const myCustomTheme = {
  dark: false,
  colors: {
    primary: "#1976D2",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    background: "#FAFAFA",
    surface: "#FFFFFF",
  },
};

export default createVuetify({
  components: {
    ...components,
    VDateInput,
  },
  directives,
  theme: {
    defaultTheme: "myCustomTheme",
    themes: {
      myCustomTheme,
    },
  },

  defaults: {
    VCard: {
      elevation: 2,
      rounded: "lg",
    },
    VBtn: {
      rounded: "lg",
    },
    VChip: {
      rounded: "lg",
    },
  },
});
