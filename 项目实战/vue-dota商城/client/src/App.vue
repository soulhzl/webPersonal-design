<template>
  <div id="app" ref="app">
    <keep-alive exclude="goods">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import JWTDecode from 'jwt-decode'
export default{
  name: 'app',
  methods: {
    // 判断是否为空
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
        );
    }
  },
  mounted(){
    // 判断是否有token
    if (localStorage.eleToken) {
      // 将token解析
      const decoded = JWTDecode(localStorage.eleToken)
      this.$store.dispatch("setAuthenticated", !this.isEmpty(decoded));
      this.$store.dispatch("setUser", decoded);
    }
  }
}
// 根据屏幕大小设置字体大小
document.addEventListener('DOMContentLoaded', () => {
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  const html = document.querySelector('html')
  html.style.fontSize = fontSize + 'px'
})

</script>

<style>
html, body, #app {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#app{
  overflow: scroll;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>