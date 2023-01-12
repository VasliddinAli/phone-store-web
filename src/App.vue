<template>
  <router-view />
</template>

<script>
export default {
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1{
  padding: 30px 0;
}
*{
  padding: 0;
  margin: 0;
}
.logo {
  width: 200px;
}
.register input,
.add input,
.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}
.register button,
.add button,
.login button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: #fff;
  cursor: pointer;
}
.cards{
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.card{
    width: 300px;
    height: auto;
    border-radius: 10px;
    border: 2px solid #ccc;
    margin-bottom: 20px;
    padding: 10px;
    transition: .2s;
}
.card:hover{
    box-shadow: 0px 5px 15px 5px #eee;
    transform: scale(1.01);
}
.card .img{
    width: 100%;
    height: 300px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
.card .img img{
    width: auto;
    height: 100%;
}
.card h1 span{
    font-weight: 999;
}
.card h1{
    font-size: 18px;
    color: #000;
    font-weight: 400;
    padding: 0;
    margin: 0;
    text-align: left;
}

.btns{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
}
.btns button{
    width: 130px;
    height: 40px;
    border: 1px solid #aaa;
    border-radius: 5px;
    background: none;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 555;
    cursor: pointer;
    transition: .4s;
}
.btns button:hover{
    background: #ff0000;
    border: 1px solid #ff0000;
    color: #fff;
}
.btns a{
    text-decoration: none;
    width: 130px;
    height: 40px;
    border: 1px solid #aaa;
    border-radius: 5px;
    background: none;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 555;
    cursor: pointer;
    transition: .4s;
}
.btns a:hover{
    background: #02ca02;
    border: 1px solid #02ca02;
    color: #fff;
}
@media(max-width: 700px){
    .cards{
        width: 90%;
        justify-content: center;
    }
    .card{
        width: 280px;
    }
    .card img{
        height: 280px;
    }
}
</style>
