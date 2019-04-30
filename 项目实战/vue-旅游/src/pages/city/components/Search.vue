<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model='keyword'>
    </div>
    <div class="search-content" ref='search' v-show='keyword'>
      <ul>
        <li class='search-item border-bottom' v-for='item in list' :key='item.id' @click='handleClick(item.name)'>{{item.name}}</li>
        <li v-show='showList' class="search-item border-bottom">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: [Object, Array]
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    showList () {
      return !this.list.length
    }
  },
  methods: {
    handleClick (name) {
      this.changeCity(name)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((v) => {
            if (v.spell.indexOf(this.keyword) > -1 || v.name.indexOf(this.keyword) > -1) {
              result.push(v)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    const options = {
      scrollY: true,
      scrollX: false,
      mouseWheel: true,
      click: true,
      taps: true
    }
    this.scroll = new Bscroll(this.$refs.search, options)
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
 .search
  height: .72rem
  padding: .1rem
  background-color: $bgColor
  .search-input
   width: 100%
   height: .62rem
   padding: .1rem
   border-radius: .06rem
   color: #666
   line-height: .62rem
   text-align: center
   box-sizing: border-box
 .search-content
  z-index: 1
  overflow: hidden
  position: absolute
  top: 1.78rem
  left: 0
  bottom: 0
  right: 0
  background-color: #eee
  .search-item
   padding-left: .2rem
   background-color: #fff
   color: #666
   line-height: .62rem
</style>
