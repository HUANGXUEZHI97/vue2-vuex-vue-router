<template>
  <div class="home_container">
    <item-content father-component="item"></item-content>
  </div>
</template>

<script>
import itemContent from './itemContent'
export default {
  name: 'item',
  components:{
    itemContent
  }
}
</script>

<style lang="scss" scoped>
 div{
   background-color: #fff;color:red;
 }
</style>