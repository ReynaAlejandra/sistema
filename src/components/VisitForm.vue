<template>
  <div>
    <h2>Registrar Visita</h2>
    <form @submit.prevent="addVisit" class="row g-3">
      <div class="col-md-6">
        <label for="ci" class="form-label">Carnet de Identidad:</label>
        <input type="text" class="form-control" v-model="visit.ci" id="ci" />
      </div>
      <div class="col-md-6">
        <label for="name" class="form-label">Nombre:</label>
        <input type="text" class="form-control" v-model="visit.name" id="name" />
      </div>
      <div class="col-md-6">
        <label for="last_name1" class="form-label">Apellido Paterno:</label>
        <input type="text" class="form-control" v-model="visit.last_name1" id="last_name1" />
      </div>
      <div class="col-md-6">
        <label for="last_name2" class="form-label">Apellido Materno:</label>
        <input type="text" class="form-control" v-model="visit.last_name2" id="last_name2" />
      </div>
      <div class="col-md-6">
        <label for="phone" class="form-label">Celular:</label>
        <input type="text" class="form-control" v-model="visit.phone" id="phone" />
      </div>
      <div class="col-md-6">
        <label for="from" class="form-label">Procedencia:</label>
        <input type="text" class="form-control" v-model="visit.from" id="from" />
      </div>
      <div class="col-md-6">
        <label for="purpose" class="form-label">Propósito de la visita:</label>
        <input type="text" class="form-control" v-model="visit.purpose" id="purpose" />
      </div>
      <div class="col-md-4">
        <label for="office" class="form-label">Oficina:</label>
        <!-- <input type="text" class="form-control" v-model="visit.office" id="office" /> -->
        <select id="office" class="form-select" v-model="visit.office">
          <option selected>Oficina</option>
          <option>Piso 1</option>
          <option>Piso 2</option>
          <option>Piso 3</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="entity" class="form-label">Entidad:</label>
        <input type="text" class="form-control" v-model="visit.entity" id="entity" />
      </div>
      <div class="col-md-6">
        <label for="authorization" class="form-label">Autorizado por:</label>
        <input type="text" class="form-control" v-model="visit.authorization" id="authorization" />
      </div>
      <div class="col-md-6">
        <label for="checkIn">Hora de Ingreso:</label>
        <input type="datetime-local" class="form-control" v-model="visit.checkIn" required>
      </div>
      <div class="col-md-6">
        <label for="checkOut">Hora de Salida:</label>
        <input type="detetime-local" class="form-control" v-model="visit.checkOut">
      </div>
      <button type="submit" class="btn btn-outline-success">Registrar</button>
    </form>
  </div>
</template>

<script>
import axiosInstance from "../services/axios";

export default {
  data() {
    return {
      visit: {
        ci: '',
        name: '',
        last_name1: '',
        last_name2: '',
        phone: '',
        from: '',
        purpose: '',
        office: '',
        entity: '',
        authorization: '',
        checkIn: '',
        checkOut: ''
      },
    };
  },
  methods: {
    async addVisit() {
      try {
        await axiosInstance.post("/api/visits", this.visit);
        this.visit = {
          ci: '',
          name: '',
          last_name1: '',
          last_name2: '',
          phone: '',
          from: '',
          purpose: '',
          office: '',
          entity: '',
          authorization: '',
          checkIn: '',
          checkOut: null
        };
        this.$emit("visit-added");
      } catch (error) {
        console.error("Error al agregar visita:", error);
        alert(
          "Hubo un error al agregar la visita. Por favor, inténtelo de nuevo.",
        );
      }
    },
  },
};
</script>
