<template>
    <div>
      <h2>Registro</h2>
      <form @submit.prevent="register" class="row g-3">
        <div class="col-md-3">
          <label for="username" class="form-label">Nombre de usuario:</label>
          <input type="text" class="form-control" v-model="username" id="username" required />
        </div>
        <div class="col-md-3">
          <label for="password" class="form-label">Contraseña:</label>
          <input type="password" class="form-control" v-model="password" id="password" required />
        </div>
        <button type="submit" class="btn btn-outline-success">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axiosInstance from '../services/axios';
  
  export default {
    name: 'UserRegister',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async register() {
        try {
          await axiosInstance.post('/api/register', {
            username: this.username,
            password: this.password
          });
          alert('Registro exitoso');
          this.$router.push({ name: 'UserLogin' });
        } catch (error) {
          console.error('Error al registrar:', error);
          alert('Error al registrar usuario');
        }
      }
    }
  };
  </script>
  