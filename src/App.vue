<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // mounted(){
  //   new Promise((resolve,reject) => {
  //     setTimeout(() => {
  //       resolve('hello')
  //     }, 300)
  //   }).then(res => {
  //     console.log(res)
  //     throw new Error('test error');
  //   }).catch(err => {
  //     console.log('I catch you',err);
  //     throw new Error('test error');
  //   }).then(res => {
  //     console.log(res)
  //   }).catch(err => {
  //     console.log('NO!',err)
  //   })
  // }
}

</script>

<style lang="scss" scoped>
// $color: #2c3e50;
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: $color;
//   margin-top: 60px;
//   font-size: 16px;
// }

</style>
