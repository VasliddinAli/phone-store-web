<template>
  <div>
    <img class="logo" src="../assets/logo.jpg" alt="" />
    <h1>Sign Up</h1>
    <div class="register">
      <input v-model="name" id="testname" type="text" placeholder="Enter name" />
      <input v-model="email" id="testemail" type="email" placeholder="Enter Email" />
      <input v-model="password" id="testpassword" type="password" placeholder="Enter Password" />
      <button @click="signUp">Sign Up</button>
      <p style="padding-top: 10px;"><router-link to="/login">Log In</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp(){
      let result = await axios.post("https://phone-store-klqa.onrender.com/user", {
        email: this.email,
        name: this.name,
        password: this.password
      })
      console.warn(result);
      if(result.status == 201){
        localStorage.setItem("user-info", JSON.stringify(result.data))
        this.$router.push({name: 'Home'})
      }
    }
  },
  mounted() {
    {
      let user = localStorage.getItem('user-info');
      if(user){
        this.$router.push({name: 'Home'})
      }
    }
  },
};
</script>
