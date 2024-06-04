<template>
    <div>
      <h1>Total de Visitas: {{ visits }}</h1>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axiosInstance from '../services/axios'
  // import axios from 'axios'

  export default {
    data() {
      return {
        visits: 0,
        error: null
      };
    },
    created() {
      this.getVisits();
    },
    methods: {
      async getVisits() {
        try {
          const response = await axiosInstance.get('http://127.0.0.1:5001/api/visits/count')
          // const response = await this.$axios.get('http://localhost:5001/api/visits/count'); 
          // const response = await axios.get('http://127.0.0.1:5001/api/visits/count');
          this.visits = response.data.totalVisits;
          this.error = null;
        } catch (error) {
          console.error('Error al obtener el contador de visitas:', error);
          this.error = 'Hubo un error al obtener el contador de visitas. Por favor, inténtelo de nuevo.'
        }
      },
      updateVisitCount() {
        this.getVisits()
      },
    },
  };
  </script>
  