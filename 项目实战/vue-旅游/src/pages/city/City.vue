<template>
  <div>
    <city-header></city-header>
    <city-search :cities='cities'></city-search>
    <city-list :hotCities='hotCities' :cities='cities' :letter='letter'></city-list>
    <city-alphabet :cities='cities' @change='handleRec'></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: [],
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    initCityInfo () {
      axios.get('/api/city.json').then((res) => {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      })
    },
    handleRec (e) {
      this.letter = e
    }
  },
  mounted () {
    this.initCityInfo()
  }
}
</script>

<style></style>
