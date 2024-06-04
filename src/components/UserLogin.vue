<template>
    <div>
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="login" class="row g-3">
        <div class="col-md-3">
          <label for="username" class="form-label">Nombre de usuario:</label>
          <input type="text" class="form-control" v-model="username" id="username" required />
        </div>
        <div class="col-md-3">
          <label for="password" class="form-label">Contraseña:</label>
          <input type="password" class="form-control" v-model="password" id="password" required />
        </div>
        <button type="submit" class="btn btn-outline-success">Iniciar sesión</button>
      </form>
    </div>
  </template>
  
  <script>
  import axiosInstance from '../services/axios';
  
  export default {
    name: 'UserLogin',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      async login() {
        try {
          const { data } = await axiosInstance.post('/api/login', {
            username: this.username,
            password: this.password
          });
          localStorage.setItem('token', data.token);
          alert('Inicio de sesión exitoso');
          this.$router.push({ name: 'Home' });
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
          alert('Error al iniciar sesión');
        }
      }
    }
  };
  </script>
  