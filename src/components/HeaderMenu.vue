<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link @click="adminPanel" to="/alijonovIsAdmin">Admin</router-link>
    <a href="#" @click="logout">Logout</a>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "SignUp" });
    },
    adminPanel() {
      let user = localStorage.getItem("user-info");
      alert("You are not ADMIN")
      if (!user) {
        this.$router.push({ name: "Home" });
      }else{
        this.$router.push({ name: "adminView" });
      }
    },
  },
};
</script>

<style>
.nav {
  background: #333;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav a {
  float: left;
  color: #f2f2f2;
  padding: 25px 20px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
  transition: 0.2s;
}
.nav a:hover {
  color: #333;
  background: #f2f2f2;
}
</style>