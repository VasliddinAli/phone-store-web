<template>
  <div>
    <HeaderMenu />
    <h1>Hello User, Welcome on Home Page</h1>
    <div class="cards">
      <div class="card" v-for="phone in phones" :key="phone.id">
        <div class="img"><img :src="phone.img" /></div>
        <h1><span>Name: </span>{{ phone.name }}</h1>
        <h1><span>Price: </span>{{ phone.price }}</h1>
        <h1><span>Memory: </span>{{ phone.memory }}</h1>
      </div>
    </div>
  </div>
</template>
  
  <script>
import HeaderMenu from "./HeaderMenu.vue";
import axios from "axios";
export default {
  data() {
    return {
      phones: [],
    };
  },
  components: {
    HeaderMenu,
  },
  async mounted() {
    {
      let user = localStorage.getItem("user-info");
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("https://phone-store-klqa.onrender.com/phone");
      this.phones = result.data;
    }
  },
};
</script>