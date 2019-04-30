<template>
  <div class="container" @click='handleGallaryClick'>
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for='(item, index) in imgs' :key='index'>
          <img class='gallary-img' :src="item">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang='stylus' scoped>
 .container >>> .swiper-container
  overflow: inherit
 .container
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 99
  display: flex
  flex-direction: column
  justify-content: center
  background-color: #000
  .wrapper
   width: 100%
   height: 0
   padding-bottom: 100%
   .gallary-img
    width: 100%
   .swiper-pagination
    bottom: -1rem
    color: #fff
</style>
