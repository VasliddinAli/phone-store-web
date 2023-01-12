<template>
  <div>
    <HeaderMenu />
    <h1>Hello user, Welcome on Add Resturant Page</h1>
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
      <button type="submit" @click="addPhone">Add new Phone</button>
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
    async addPhone(e) {
      e.preventDefault();
      if (this.phones.img && this.phones.name && this.phones.price && this.phones.memory) {
        console.warn(this.phones);
        const result = await axios.post("https://phone-store-klqa.onrender.com/phone", {
          img: this.phones.img,
          name: this.phones.name,
          price: this.phones.price,
          memory: this.phones.memory,
        });
        if (result.status == 201) {
          this.$router.push({ name: "adminView" });
        }
      } else{
        alert("Iltimos bo'shliqlarni to'ldiring.")
      }
    },
  },
};
</script>

<style>
</style>
