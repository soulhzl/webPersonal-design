<template>
    <div class="loading-wrapper">
     <div>
        <h2 class="monsterText">我们的后半生</h2>
        <h3 class="opText">遇见你后的人生<br/>才开始我们的后半生</h3>
    </div>
    <div class="monster-wrapper">
    <Monster />
    <Monster :monsterPer="blueMonster" class="ani-delay"/>
    </div>
    <div :class="complete ? 'pageLoading complete' : 'pageLoading'">
        <Monster />
        <h2>我们的后半生</h2>
        <div class="loading">
            <div class="bar" :style="barStyle"></div>
        </div>
    </div>
</div>
</template>

<script>
import Monster from '../components/Monster.vue'
export default{
  name: 'loading',
  data(){
    return {
        complete: '',
        barStyle: {
            width : ''
        },
        blueMonster: {
            bodycolor: '#0C4475',
            facecolor: '#E55A54',
        }
    }
},
components: {
    Monster
},
created(){
    // 进度条变化
    let barPer = 0
    let timer = setInterval(() => {
        this.barStyle.width = barPer + '%'
        barPer++
        if (barPer > 100) {
            this.complete = true
            setTimeout(() => {
                this.$router.push('/home')
            }, 3000)
            clearInterval(timer);
        }
    }, 30)
}
}
</script>

<style scoped>
.loading-wrapper{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #DB4D6D;
}

.monster-wrapper{
    display: flex;
}

.ani-delay {
    animation-delay: 0.5s;
}

h2 {
    color: white;
    font-size: 0.8rem;
}

h3 {
    margin-top: 0;
    opacity: 0.5;
    color: white;
    font-size: 0.4rem;
}

.pageLoading {
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #0C4475;
    transition: opacity 0.5s 0.5s;
}

.pageLoading.complete {
    opacity: 0;
}

.pageLoading.complete .monster {
    transition: 0.5s;
    transform: scale(0.01) rotate(360deg);
}

.loading {
    width: 200px;
    height: 8px;
    margin-top: 80px;
    border-radius: 5px;
    background-color: #fff;
    overflow: hidden;
    transition: 0.5s;
}

.loading .bar {
    background-color: #E55A54;
    width: 0%;
    height: 100%;
}
</style>