<template>
  <div  class="table-responsive">
    <h2>Visitas</h2>
    <div class="mb-3">
      <input type="text" v-model="searchCI" placeholder="Buscar por CI" class="form-control"/>
      <button @click="performSearch" class="btn btn-outline-success">Buscar</button>
    </div>
    <table class="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">Visita N°</th>
          <th scope="col">CI</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Celular</th>
          <th scope="col">Procedencia</th>
          <th scope="col">Oficina</th>
          <th scope="col">Entidad</th>
          <th scope="col">Ingreso autorizado por:</th>
          <th scope="col">Hora de Ingreso:</th>
          <th scope="col">Hora de Salida:</th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(visit, index) in filteredVisits" :key="visit._id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ visit.ci }}</td>
          <td>{{ visit.name }}</td>
          <td>{{ visit.last_name1 }} {{ visit.last_name2 }}</td>
          <td>{{ visit.phone }}</td>
          <td>{{ visit.from }}</td>
          <td>{{ visit.office }}</td>
          <td>{{ visit.entity }}</td>
          <td>{{ visit.authorization }}</td>
          <td>{{ formatDateTime(visit.checkIn) }}</td>
          <td>{{ formatDateTime(visit.checkOut) }}</td>
          <!--  <td>{{ visit.checkIn }}</td>
                <td>{{ visit.checkOut }}</td> -->
          <td> <button @click="registerCheckOut(visit._id)" v-if="!visit.checkOut" type="submit" class="btn btn-outline-success">Registrar Salida</button> </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axiosInstance from "../services/axios";
import moment from 'moment';
import 'moment/locale/es'; // español

export default {
  data() {
    return {
      visits: [],
      searchCI: "",
    };
  },
  created() {
    this.fetchVisits();
  },
  computed: {
    filteredVisits() {
      return this.visits.filter((visit) =>
        visit.ci.toLowerCase().includes(this.searchCI.toLowerCase())
      );
    },
  },

  methods: {
    async fetchVisits() {
      try {
        const response = await axiosInstance.get("http://127.0.0.1:5001/api/visits");
        this.visits = response.data;
      } catch (error) {
        console.error("Error al obtener visitas:", error);
        alert("Hubo un error al obtener las visitas. Por favor, inténtelo de nuevo.");
      }
    },

    async registerCheckOut(visitId) {
      try {
        await axiosInstance.put(`http://127.0.0.1:5001/api/visits/${visitId}/checkout`);
        // Actualizar los datos localmente después de registrar la hora de salida
        const visitIndex = this.visits.findIndex((visit) => visit._id === visitId);
        if (visitIndex !== -1) {
          this.visits[visitIndex].checkOut = new Date().toISOString();
        }
      } catch (error) {
        console.error('Error al registrar la salida:', error);
      }
    },
    formatDateTime(dateTime) {
      if (!dateTime) return '---'; // Si no hay fecha y hora, mostrar un guión
      return moment(dateTime).format('DD/MM/YYYY HH:mm:ss');
    },
    performSearch() {
    }
  },
};
</script>
