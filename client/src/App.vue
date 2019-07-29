<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link to="/" class="item">Home</router-link>
        <router-link to="/cart" class="item">Cart</router-link>
      </div>
      <p>G-Shop</p>
      <div>
        <router-link to="/login" class="item" v-if="loginStatus == true">Login</router-link>
        <router-link to="/register" class="item" v-if="loginStatus == true">Register</router-link>
        <a @click="logout" class="item" id="logout" v-else>Logout</a>
      </div>
    </div>
    <router-view class="animated fadeIn"/>
  </div>
</template>

<style scoped>
  p {
    font-size: 20px;
    font-weight: bold;
    color: #37474F;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }

  #logout:hover {
    cursor: pointer;
    background-color: #c62828;
    transition-duration: 0.3s;
  }

  .item {
    border: 1px solid rgb(100, 100, 100);
    margin: 0 15px;
    transition-duration: 0.3s;
    background-color: #455a64;
    border-radius: 18px;
    padding: 8px 20px;
  }

  .item:hover{
    cursor: pointer;
    background-color: #FF8F00;
    transition-duration: 0.3s;
  }

  #nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 75px;
    top: 30px;
    background-color: #FFD700;
    padding: 15px;
    border-radius: 30px;
    z-index: 1000000000;
    border: 1.5px solid #37474F;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  #nav a {
    font-weight: bold;
    color: white;
  }

  #nav a.router-link-exact-active {
    background-color: #FF8F00;
    transition-duration: 0.3s;
  }
</style>


<script>
export default {
  data() {
    return {
      loginStatus : true
    }
  }
}
</script>

