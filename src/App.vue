<template>
  <div id="app">
    <nav>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link active" aria-current="page">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/userlogin" class="nav-link active" aria-current="page">Iniciar Sesión</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/userregister" class="nav-link active" aria-current="page">Registrar Usuario</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Visitas</a>
          <ul class="dropdown-menu">
            <li><router-link to="/visitform" class="dropdown-item">Registrar Visita </router-link></li>
            <li><router-link to="/visitlist" class="dropdown-item">Lista de Visitas</router-link></li>
            <li><router-link to="/visitlistcheckout" class="dropdown-item">Registrar Salida</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link to="/visitcounter" class="dropdown-item">Contador de Visitas</router-link></li>            
            <li><a class="dropdown-item" href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  margin-bottom: 1.5em;
}
router-link {
  margin: 1em;
  color: rgb(10, 10, 95);
}
router-link.active {
  font-weight: bold;
}
</style>
