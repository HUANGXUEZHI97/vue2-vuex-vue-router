<template>
  <div class="home_container">
    <item-content father-component="home"></item-content>
  </div>
</template>

<script>
import itemContent from './itemContent'
export default {
  name: 'home',
  components:{
    itemContent
  }
}
</script>

<style lang="scss">
html{
    height: 100%;
    width: 100%;
}
body{
    // height: 100%;
    // width: 100%;
    background: url(../images/1-1.jpg) no-repeat;
    background-size: 100% 100%;
}
</style>