<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p class="jj">jquery test</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
$(function(){
  $(".jj").click(function(){
    alert($.fn.jquery);
    $.each([1,2,3],function(){
      alert(this);
    })
  })
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
