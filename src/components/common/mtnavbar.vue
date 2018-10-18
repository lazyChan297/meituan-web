<template lang="html">
  <div class="navbar">
    <router-link>  </router-link>
    <div class="navbar-left">

    </div>
    <p class="navbar-center">南宁市西乡塘区</p>
    <div class="navbar-right">
      right
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .navbar{
    display: flex;
    height: .42rem;
    font-size: .15rem;
    line-height: .42rem;
    background:#06c1ae;
    color: #fff;
    .navbar-left{
      &:before{
        content: '';
        display: block;
        border-top: 2px solid #fff;
        border-left: 2px solid #fff;
        width: .12rem;
        height: .12rem;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        margin: .15rem 0 .15rem .1rem;
      }
    }
    .navbar-center{
      flex:1;
    }
  }
</style>
