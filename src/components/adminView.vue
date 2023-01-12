<template>
  <div>
    <HeaderMenu />
    <h1>Hello User, Welcome on Home Page</h1>
    <div class="cards">
      <div class="card" v-for="phone in phones" :key="phone.id">
        <div @dblclick="adminPanel" class="img"><img :src="phone.img"></div>
        <h1><span>Name: </span>{{ phone.name }}</h1>
        <h1><span>Price: </span>{{ phone.price }}</h1>
        <h1><span>Memory: </span>{{ phone.memory }}</h1>
        <div class="btns">
            <router-link :to="'/update/' + phone.id">Update</router-link>
            <button @click="deleteResturant(phone.id, phone.name)">Delete</button>
        </div>
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
  methods: {
    async deleteResturant(id, name) {
        let del = confirm(`${name} o'chirilsinmi?`);
        if(del == true){
            let result = await axios.delete(
              "https://phone-store-klqa.onrender.com/phone/" + id
            );
            if (result.status == 200) {
              this.loadData();
            }
        }
    },
    async loadData() {
      let result = await axios.get(
        "https://phone-store-klqa.onrender.com/phone"
      );
      this.phones = result.data;
    },
    adminPanel(){
        this.$router.push("/alijonovIsAdmin/add")
    }
  },
  async mounted() {
    {
      this.loadData();
    }
  },
};
</script>