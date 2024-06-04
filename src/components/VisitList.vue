<template>
  <div  class="table-responsive">
    <h2>Visitas</h2>
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="(visit, index) in visits" :key="visit._id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ visit.ci }}</td>
          <td>{{ visit.name }}</td>
          <td>{{ visit.last_name1 }} {{ visit.last_name2 }}</td>
          <td>{{ visit.phone }}</td>
          <td>{{ visit.from }}</td>
          <td>{{ visit.office }}</td>
          <td>{{ visit.entity }}</td>
          <td>{{ visit.authorization }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axiosInstance from "../services/axios";

export default {
  data() {
    return {
      visits: [],
    };
  },
  created() {
    this.fetchVisits();
  },
  methods: {
    async fetchVisits() {
      try {
        const response = await axiosInstance.get("http://127.0.0.1:5001/api/visits");
        this.visits = response.data;
      } catch (error) {
        console.error("Error al obtener visitas:", error);
        alert(
          "Hubo un error al obtener las visitas. Por favor, inténtelo de nuevo.",
        );
      }
    },
  },
};
</script>
