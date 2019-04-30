<template>
  <div>
    <div class="header">
      <router-link to='/'>
        <div class="header-back">
          <span class="iconfont">&#xe624;</span>
        </div>
      </router-link>城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang='stylus' scoped>
 @import '~styles/varibles.styl'
 .header
  overflow: hidden
  height: $headerHeight
  background-color: $bgColor
  color: #fff
  font-size: .32rem
  line-height: $headerHeight
  text-align: center
 .header-back
  float: left
  width: .64rem
  color: #fff
  font-size: .4rem
  text-align: center
</style>
