<template>
<div class="header">
 <div class='header-left'>
  <span class="iconfont">&#xe624;</span>
 </div>
 <div class='header-input'>
  <span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题
 </div>
 <router-link to='city'>
  <div class='header-right'>
  {{this.city}}<span class="iconfont arrow-icon">&#xe64a;</span>
  </div>
 </router-link>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
 .header
  display: flex
  background-color: $bgColor
  color: #fff
  line-height: $headerHeight
  .header-left
   float: left
   width: .64rem
   font-size: .4rem
   text-align: center
  .header-input
   height: .64rem
   margin-top: .12rem
   margin-left: .2rem
   padding-left: .2rem
   border-radius: .1rem
   background-color: #fff
   color: #ccc
   line-height: .64rem
   flex: 1
  .header-right
   float: right
   min-width: 1.04rem
   padding: .05rem .05rem 0 .05rem
   color: #fff
   text-align: center
   .arrow-icon
    margin-left: .05rem
    font-size: .24rem
</style>
