<template>
  <div>
    <HeaderMenu />
    <h1>Hello user, Welcome on Update Resturant Page</h1>
    <form class="add">
      <input
        type="text"
        placeholder="Enter img url"
        v-model="phones.img"
      />
      <input
        type="text"
        placeholder="Enter name"
        v-model="phones.name"
      />
      <input
        type="text"
        placeholder="Enter price"
        v-model="phones.price"
      />
      <input
        type="text"
        placeholder="Enter memory"
        v-model="phones.memory"
      />
      <button type="submit" @click="updatePhone">Update Phone</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import HeaderMenu from "./HeaderMenu.vue";
export default {
  components: {
    HeaderMenu,
  },
  data() {
    return {
      phones: {
        img: "",
        name: "",
        price: "",
        memory: "",
      },
    };
  },
  methods: {
    async updatePhone(e){
      e.preventDefault();
      const result = await axios.put('https://phone-store-klqa.onrender.com/phone/'+this.$route.params.id, {
          img: this.phones.img,
          name: this.phones.name,
          price: this.phones.price,
          memory: this.phones.memory,
      })
      if(result.status == 200){
        this.$router.push({name: 'adminView'})
      }
    }
  },
  async mounted() {
    {
      const user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      const result = await axios.get('https://phone-store-klqa.onrender.com/phone/'+this.$route.params.id)
      this.phones=result.data;
    }
  },
};
</script>

<style>
</style>
