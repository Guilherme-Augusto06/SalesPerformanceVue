<template>
  <div>
    <v-sheet border rounded>
      <v-data-table
        :headers="headers"
        :hide-default-footer="filteredMetas.length < 11"
        :items="filteredMetas"
      >
        <template v-slot:top>
          <v-card flat class="pa-4 mb-2">
            <v-row>
              <v-col cols="12" md="2">
                <v-select
                  v-model="filters.mes"
                  :items="meses"
                  label="Filtrar Mês"
                  clearable
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-combobox
                  v-model="filters.produto"
                  :items="opcoesMockup.produtos"
                  label="Filtrar Produto"
                  clearable
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-combobox
                  v-model="filters.cliente"
                  :items="opcoesMockup.clientes"
                  label="Filtrar Cliente"
                  clearable
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  v-model="filters.regiao"
                  :items="opcoesMockup.regioes"
                  label="Filtrar Região"
                  clearable
                />
              </v-col>
              <v-col cols="12" md="2">
                <v-select
                  v-model="filters.representante"
                  :items="opcoesMockup.representantes"
                  label="Filtrar Representante"
                  clearable
                />
              </v-col>
              <v-col cols="12" md="2" class="d-flex align-center">
                <v-btn
                  icon="mdi-filter-remove"
                  @click="resetFilters"
                  variant="text"
                />
              </v-col>
            </v-row>
          </v-card>

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

        <template v-slot:item.valorMeta="{ item }">
          <span class="font-weight-bold text-success">
            {{ formatCurrency(item.valorMeta) }}
          </span>
        </template>

        <template v-slot:item.actions="{ item }">
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
                :rules="[(v) => !!v || 'Mês é obrigatório']"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-combobox
                v-model="formModel.produto"
                :items="opcoesMockup.produtos"
                label="Produto"
                :rules="[(v) => !!v || 'Produto é obrigatório']"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-combobox
                v-model="formModel.cliente"
                :items="opcoesMockup.clientes"
                label="Cliente"
                :rules="[(v) => !!v || 'Cliente é obrigatório']"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="formModel.regiao"
                :items="opcoesMockup.regioes"
                label="Região"
                :rules="[(v) => !!v || 'Região é obrigatória']"
                required
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-select
                v-model="formModel.representante"
                :items="opcoesMockup.representantes"
                label="Representante"
                :rules="[(v) => !!v || 'Representante é obrigatório']"
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
  </div>
</template>

<script>
import { metasData } from "../../../utils/mockup/dashboard.js";

export default {
  data() {
    return {
      // Dados do mockup
      meses: metasData.opcoes.meses,
      metas: [...metasData.metas],
      headers: metasData.configuracoes.headers,
      opcoesMockup: metasData.opcoes,

      // Estado do componente
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
      if (confirm("Tem certeza que deseja excluir esta meta?")) {
        const index = this.metas.findIndex((m) => m.id === id);
        if (index >= 0) {
          this.metas.splice(index, 1);
        }
      }
    },
    save() {
      // Validação básica
      if (
        !this.formModel.mes ||
        !this.formModel.produto ||
        !this.formModel.cliente ||
        !this.formModel.regiao ||
        !this.formModel.representante ||
        !this.formModel.valorMeta
      ) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      if (this.formModel.valorMeta <= 0) {
        alert("O valor da meta deve ser maior que zero.");
        return;
      }

      if (this.isEditing) {
        // Editar meta existente
        const index = this.metas.findIndex((m) => m.id === this.formModel.id);
        if (index >= 0) {
          this.metas[index] = { ...this.formModel };
        }
      } else {
        // Adicionar nova meta
        const newMeta = {
          ...this.formModel,
          id: Date.now(), // Usar timestamp como ID único
        };
        this.metas.push(newMeta);
      }

      this.dialog = false;
      this.formModel = this.createNewRecord();
    },
    reset() {
      // Restaura os dados originais do mockup
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
