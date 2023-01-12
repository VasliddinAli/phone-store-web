<template>
  <div>
    <img class="logo" src="../assets/logo.jpg" alt="" />
    <h1>Login</h1>
    <form class="login">
      <input
        v-model="email"
        id="email"
        type="email"
        placeholder="Enter Email"
      />
      <input
        v-model="password"
        id="password"
        type="password"
        placeholder="Enter Password"
      />
      <button type="submit" @click="login">Login</button>
      <p style="padding-top: 10px;"><router-link to="/sign-up">Sign Up</router-link></p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      if (this.email && this.password) {
        let result = await axios.get(
          `https://phone-store-klqa.onrender.com/user?email=${this.email}&password=${this.password}`
        );
        if (result.status == 200 && result.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          this.$router.push({ name: "Home" });
        } else "Email yoki parol xato kiritildi!";
        console.warn(result);
      } else alert("Email yoki parol kiritilmagan!");
    },
  },
  mounted() {
    {
      let user = localStorage.getItem("user-info");
      if (user) {
        this.$router.push({ name: "Home" });
      }
    }
  },
};
</script>