<template lang="html">
  <div class="index">
    <ul class="menu">
      <li class="menu-item">美食</li>
      <li class="menu-item">美团超市</li>
      <li class="menu-item">生鲜果蔬</li>
      <li class="menu-item">美团专送</li>
      <li class="menu-item">夜宵</li>
      <li class="menu-item">甜点饮品</li>
      <li class="menu-item">小吃馆</li>
      <li class="menu-item">家常菜</li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .index{
    font-size: .15rem;
    .menu{
      overflow: hidden;
      padding-bottom: .3rem;
      margin-bottom: .2rem;
      .menu-item{
        float: left;
        width: 25%;
        text-align: center;
        &:before{
          content: '';
          display: block;
          height: .4rem;
          width: .4rem;
          background: yellow;
          margin:.1rem auto 0;
        }
      }
    }
  }
</style>
