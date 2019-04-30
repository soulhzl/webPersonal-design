<template>
  <ul class="list">
    <li class="item" v-for='key in letters' :key='key' :ref='key' @click='handleLetterChange' @touchstart.prevent='handleTouchStart' @touchmove='handleTouchMove' @touchend='handleTouchEnd'>{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: [Object, Array]
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterChange (e) {
      this.$emit('change', e.target.innerHTML)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 89
          const index = Math.floor((touchY - this.startY) / 22)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  }
}
</script>

<style lang='stylus' scoped>
 @import '~styles/varibles.styl'
 .list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.78rem
  right: 0
  bottom: 0
  width: .4rem
  .item
   color: $bgColor
   line-height: .44rem
   text-align: center
</style>
