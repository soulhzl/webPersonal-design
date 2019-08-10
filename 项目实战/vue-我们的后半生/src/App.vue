<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  // 根据屏幕大小设置字体大小
document.addEventListener('DOMContentLoaded', () => {
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  const html = document.querySelector('html')
  html.style.fontSize = fontSize + 'px'
})

export default{
  name: 'app'
}
</script>

<style>
*{
    margin:0;
    padding:0;
}

#app{
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
</style>
