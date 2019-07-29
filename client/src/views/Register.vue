<template>
  <div id="form-login">
    <h1>Register</h1>
    <router-view></router-view>
    <form @submit.prevent="userRegister">
      <div class="field">
        <b-field label="Username">
            <b-input placeholder="Username" rounded></b-input>
        </b-field>
      </div>
      <div class="field">
        <b-field label="Email">
            <b-input placeholder="Email" rounded></b-input>
        </b-field>
      </div>
      <div class="field">
        <b-field label="Password">
            <b-input placeholder="Password" type="password" rounded password-reveal></b-input>
        </b-field>
      </div>
      <p id="note">Already have an account ? <router-link to="/login">Login</router-link></p>
      <button type="submit" id="button-login">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      register: {
        email: '',
        password: '',
        username: ''
      }
    }
  },
  methods: {
    userRegister () {
    }
  }
}
</script>

<style scoped>
  #note {
    font-size: 14px;
  }
  h1 {
    font-size: 30px;
    color: #37474F;
  }
  #form-login {
    background-color: #FFD700;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 500px;
    border-radius: 30px;
    padding: 25px 8px;
    margin: 90px auto;
    border: 4px solid #37474F;
  }
  .input {
    color: green;
    width: 300px;
    /* width: 30%; */
  }
  .field {
    margin-top: 30px;
  }

  #button-login {
    background-color: #607D8B;
    border: 2px solid #FFD700;
    border-radius: 20px;
    width: 120px;
    color: white;
    height: 40px;
    margin-top: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  #button-login:hover{
    border: 2px solid #607D8B;
    cursor: pointer;		
  }
  
  a {
    color: white;
    text-decoration: none;
  }
</style>
