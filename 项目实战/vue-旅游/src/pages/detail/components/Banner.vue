<template>
  <div>
    <div class="banner" @click='handleClickImg'>
      <img :src="bannerImg" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe626;</span>{{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs='gallaryImgs' v-show='showGallary' @close='handleCloseGallary'></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleClickImg () {
      this.showGallary = true
    },
    handleCloseGallary () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style lang='stylus' scoped>
 .banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
   width: 100%
  .banner-info
   position: absolute
   display: flex
   left: 0
   right: 0
   bottom: 0
   background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
   color: #fff
   line-height: .6rem
   .banner-title
    flex: 1
    padding: 0 .2rem
    font-size: .32rem
   .banner-number
    height: .32rem
    margin-top: .14rem
    padding: 0 .4rem
    border-radius: .2rem
    background-color: rgba(0, 0, 0, .8)
    font-size: .24rem
    line-height: .32rem
    .banner-icon
     font-size: .24rem
</style>
