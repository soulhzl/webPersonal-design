<template>
  <div>
    <router-link tag='div' to='/' class="header-abs" v-show='showAbs'>
      <span class="iconfont header-abs-back">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show='!showAbs' :style='opacityStyle'>
     <router-link to='/'>
        <div class="header-fixed-back">
          <span class="iconfont">&#xe624;</span>
        </div>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang='stylus' scoped>
 @import '~styles/varibles.styl'
 .header-abs
  position: absolute
  left: .2rem
  top: .2rem
  width: .8rem
  height: .8rem
  border-radius: .4rem
  background-color: rgba(0, 0, 0, .8)
  text-align: center
  line-height: .8rem
  .header-abs-back
   color: #fff
   font-sizi: .4rem
 .header-fixed
  z-index: 2
  position: fixed
  top: 0
  right: 0
  left: 0
  right: 0
  height: $headerHeight
  background-color: $bgColor
  color: #fff
  font-size: .32rem
  line-height: $headerHeight
  text-align: center
  .header-fixed-back
   float: left
   width: .64rem
   color: #fff
   font-size: .4rem
   text-align: center
</style>
