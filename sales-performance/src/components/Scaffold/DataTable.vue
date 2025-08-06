<template>
  <div>
    <v-sheet border rounded>
      <v-data-table
        :headers="headers"
        :hide-default-footer="filteredMetas.length < 11"
        :items="filteredMetas"
      >
        <template v-slot:top>
          <v-toolbar flat class="bg-teal-darken-3">
            <v-toolbar-title>
              <v-icon color="white" icon="mdi-target" size="x-small" start />
              Cadastro de Metas
            </v-toolbar-title>
            <v-btn
              class="me-2"
              prepend-icon="mdi-plus"
              rounded="lg"
              text="Cadastrar Meta"
              border
              @click="add"
            />
          </v-toolbar>
        </template>

        <template #[`item.actions`]="{ item }">
          <div class="d-flex ga-2 justify-end">
            <v-tooltip text="Editar meta">
              <template v-slot:activator="{ props }">
                <v-icon
                  v-bind="props"
                  color="primary"
                  icon="mdi-pencil"
                  size="small"
                  @click="edit(item.id)"
                />
              </template>
            </v-tooltip>
            <v-tooltip text="Excluir meta">
              <template v-slot:activator="{ props }">
                <v-icon
                  v-bind="props"
                  color="error"
                  icon="mdi-delete"
                  size="small"
                  @click="remove(item.id)"
                />
              </template>
            </v-tooltip>
          </div>
        </template>

        <template v-slot:no-data>
          <v-btn
            prepend-icon="mdi-backup-restore"
            rounded="lg"
            text="Resetar dados"
            variant="text"
            border
            @click="reset"
          />
        </template>
      </v-data-table>
    </v-sheet>

    <v-dialog v-model="dialog" max-width="600">
      <v-card
        :subtitle="(isEditing ? 'Atualize' : 'Cadastre') + ' sua meta'"
        :title="(isEditing ? 'Editar' : 'Nova') + ' Meta'"
      >
        <template v-slot:text>
          <v-row>
            <v-col cols="12" md="6">
              <v-select
                v-model="formModel.mes"
                :items="meses"
                label="Mês"
                :rules="rules.campoObrigatorio"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-combobox
                v-model="formModel.produto"
                :items="opcoesMockup.produtos"
                label="Produto"
                :rules="rules.campoObrigatorio"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-combobox
                v-model="formModel.cliente"
                :items="opcoesMockup.clientes"
                label="Cliente"
                :rules="rules.campoObrigatorio"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="formModel.regiao"
                :items="opcoesMockup.regioes"
                label="Região"
                :rules="rules.campoObrigatorio"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="formModel.representante"
                :items="opcoesMockup.representantes"
                label="Representante"
                :rules="rules.campoObrigatorio"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model.number="formModel.valorMeta"
                label="Valor da Meta"
                type="number"
                :min="0"
                prefix="R$"
                :rules="[
                  (v) => !!v || 'Valor da meta é obrigatório',
                  (v) => v > 0 || 'Valor deve ser maior que zero',
                ]"
              />
            </v-col>
          </v-row>
        </template>

        <v-divider />

        <v-card-actions class="bg-surface-light">
          <v-btn text="Cancelar" variant="plain" @click="closeDialog" />
          <v-spacer />
          <v-btn
            text="Salvar"
            color="primary"
            variant="elevated"
            @click="save"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogConfirm.show" max-width="400">
      <v-card>
        <v-card-title class="text-h6"> Confirmar exclusão </v-card-title>
        <v-card-text> Tem certeza que deseja excluir esta meta? </v-card-text>
        <v-card-actions>
          <v-btn variant="text" @click="dialogConfirm.show = false">
            Cancelar
          </v-btn>
          <v-spacer />
          <v-btn color="error" variant="elevated" @click="confirmRemove">
            Excluir
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar para alertas -->
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="3000">
      {{ snackbar.text }}
    </v-snackbar>
  </div>
</template>
<script>
import { metasData } from "../../utils/mockup/dashboard.js";

export default {
  data() {
    return {
      snackbar: {
        show: false,
        text: "",
        color: "success",
      },
      dialogConfirm: {
        show: false,
        id: null,
      },
      headers: metasData.configuracoes.headers,
      meses: metasData.opcoes.meses,
      metas: [...metasData.metas],
      opcoesMockup: metasData.opcoes,

      dialog: false,
      formModel: {
        mes: "",
        produto: "",
        cliente: "",
        regiao: "",
        representante: "",
        valorMeta: 0,
      },
      filters: {
        mes: "",
        produto: "",
        cliente: "",
        regiao: "",
        representante: "",
      },
      rules: {
        campoObrigatorio: [(v) => !!v || "Campo obrigatório"],
      },
    };
  },
  computed: {
    isEditing() {
      return !!this.formModel.id;
    },
    filteredMetas() {
      return this.metas.filter((meta) => {
        return (
          (!this.filters.mes || meta.mes === this.filters.mes) &&
          (!this.filters.produto ||
            meta.produto
              .toLowerCase()
              .includes(this.filters.produto.toLowerCase())) &&
          (!this.filters.cliente ||
            meta.cliente
              .toLowerCase()
              .includes(this.filters.cliente.toLowerCase())) &&
          (!this.filters.regiao ||
            meta.regiao
              .toLowerCase()
              .includes(this.filters.regiao.toLowerCase())) &&
          (!this.filters.representante ||
            meta.representante
              .toLowerCase()
              .includes(this.filters.representante.toLowerCase()))
        );
      });
    },
  },
  methods: {
    showSnackbar(text, color = "success") {
      this.snackbar.text = text;
      this.snackbar.color = color;
      this.snackbar.show = true;
    },
    createNewRecord() {
      return {
        mes: "",
        produto: "",
        cliente: "",
        regiao: "",
        representante: "",
        valorMeta: 0,
      };
    },
    resetFilters() {
      this.filters = {
        mes: "",
        produto: "",
        cliente: "",
        regiao: "",
        representante: "",
      };
    },
    add() {
      this.formModel = this.createNewRecord();
      this.dialog = true;
    },
    edit(id) {
      const found = this.metas.find((m) => m.id === id);
      if (!found) return;
      this.formModel = { ...found };
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
      this.formModel = this.createNewRecord();
    },
    remove(id) {
      this.dialogConfirm.show = true;
      this.dialogConfirm.id = id;
    },
    confirmRemove() {
      const index = this.metas.findIndex((m) => m.id === this.dialogConfirm.id);
      if (index >= 0) {
        this.metas.splice(index, 1);
        this.showSnackbar("Meta removida com sucesso!", "success");
      }
      this.dialogConfirm.show = false;
    },
    save() {
      if (
        !this.formModel.mes ||
        !this.formModel.produto ||
        !this.formModel.cliente ||
        !this.formModel.regiao ||
        !this.formModel.representante ||
        !this.formModel.valorMeta
      ) {
        this.showSnackbar(
          "Por favor, preencha todos os campos obrigatórios.",
          "error"
        );
        return;
      }

      if (this.formModel.valorMeta <= 0) {
        this.showSnackbar("O valor da meta deve ser maior que zero.", "error");
        return;
      }

      if (this.isEditing) {
        const index = this.metas.findIndex((m) => m.id === this.formModel.id);
        if (index >= 0) {
          this.metas[index] = { ...this.formModel };
          this.showSnackbar("Meta atualizada com sucesso!", "success");
        }
      } else {
        const newMeta = {
          ...this.formModel,
          id: Date.now(),
        };
        this.metas.push(newMeta);
        this.showSnackbar("Meta cadastrada com sucesso!", "success");
      }

      this.dialog = false;
      this.formModel = this.createNewRecord();
    },
    reset() {
      this.metas = [...metasData.metas];
      this.resetFilters();
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(value);
    },
  },
};
</script>
