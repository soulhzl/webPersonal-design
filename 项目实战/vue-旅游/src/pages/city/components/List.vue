<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for='hot in hotCities' :key='hot.id' @click='handleClick(hot.name)'>
            <div class="button">{{hot.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for='(city, key) in cities' :key='key' :ref='key'>
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for='inner in city' :key='inner.id' @click='handleClick(inner.name)'>{{inner.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: [Object, Array],
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleClick (name) {
      this.changeCity(name)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    const options = {
      scrollY: true,
      scrollX: false,
      mouseWheel: true,
      click: true,
      taps: true
    }
    this.scroll = new Bscroll(this.$refs.wrapper, options)
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
 .list
  overflow: hidden
  position: absolute
  top: 1.78rem
  left: 0
  bottom: 0
  right: 0
  .title
   padding-left: .2rem
   background-color: #eee
   color: #666
   font-size: .26rem
   line-height: .44rem
  .border-topbottom
   &:before
     background-color: #ccc
   &:after
     background-color: #ccc
  .border-bottom
   &:before
     background-color: #ccc
  .button-list
   overflow: hidden
   padding: .1rem .6rem .1rem .1rem
   .button-wrapper
    float: left
    width: 33.33%
    .button
     margin: .1rem
     padding: .1rem 0
     border: .02rem solid #ccc
     border-radius: .06rem
     text-align: center
  .item-list
   .item
    padding-left: .2rem
    color: #666
    line-height: .76rem
</style>
