<template>
  <div class="home">
  	<!-- <Monster :monsterPer="monsterPer"/> -->
    <div class="cube-wrapper" v-for="(item, index) in 7">
      <Cube v-if="index == 0" class="cube" cubetext="起点" upcolor="#cdcd9a" :style="{left: 5 + index * 6 + 'rem',top: 0 + index * 3 + 'rem'}"/>
      <Cube v-else class="cube" :cubetext="19 + index" upcolor="#cdcd9a" :style="{left: 5 + index * 6 + 'rem',top: 0 + index * 3 + 'rem'}"/>
    </div>
    <div class="cube-wrapper" v-for="(item, index) in 7">
      <Cube class="cube" :cubetext="26 + index" upcolor="#c7c7e2" :style="{left: 5 + index * 6 + 'rem',top: 8 + index * 3 + 'rem'}"/>
    </div>
    <div class="cube-wrapper" v-for="(item, index) in 7">
      <Cube class="cube" :cubetext="33 + index" upcolor="#d2a2cc" :style="{left: 5 + index * 6 + 'rem',top: 16 + index * 3 + 'rem'}"/>
    </div>
    <div class="cube-wrapper" v-for="(item, index) in 7">
      <Cube class="cube" :cubetext="40 + index" upcolor="#ffcbb3" :style="{left: 5 + index * 6 + 'rem',top: 24 + index * 3 + 'rem'}"/>
    </div>
    <div class="cube-wrapper" v-for="(item, index) in 7"> 
      <Cube class="cube" :cubetext="47 + index" upcolor="#fff0ac" :style="{left: 5 + index * 6 + 'rem',top: 32 + index * 3 + 'rem'}"/>
    </div>
    <div class="cube-wrapper" v-for="(item, index) in 7">
      <Cube class="cube" :cubetext="54 + index" upcolor="#deffac" :style="{left: 5 + index * 6 + 'rem',top: 40 + index * 3 + 'rem'}"/>
    </div>
    <div class="cube-wrapper" v-for="(item, index) in 7">
      <Cube class="cube" :cubetext="61 + index" upcolor="#acd6ff" :style="{left: 5 + index * 6 + 'rem',top: 48 + index * 3 + 'rem'}"/>
    </div>
    <div class="cube-wrapper" v-for="(item, index) in 4">
      <Cube v-if="index == 3" class="cube" cubetext="终点" upcolor="#cdcd9a" :style="{left: 5 + index * 6 + 'rem',top: 56 + index * 3 + 'rem'}"/>
      <Cube v-else class="cube" :cubetext="68 + index" upcolor="#ffbfff" :style="{left: 5 + index * 6 + 'rem',top: 56 + index * 3 + 'rem'}"/>
    </div>
    <div class="main-wrapper">
      <Man class="man" ref="man"/>
    </div>
    <TextDialog v-if="nowage" :age="nowage" :text="nowques" class="dialog" ref="dialog"/>
    <Dice class="dice" @getDiceNum="getDiceNum"/>
    <div>
      <button class="tips" v-if="showTip" @click="clickTips">!</button>
      <div class="tips-mask" v-if="!showTip">
        <div class="tips-operate">
          <span class="close" @click="clickTips">X</span>
          <b>游戏说明</b>
          <p>本游戏希望情侣双方平等沟通，充分表达自己的真实想法，不要因为对方在场而有所隐瞒</p>
          <b>游戏规则</b>
          <p>
            1.本游戏从[起点]处开始，按照20~70岁的数字顺序前进<br/>
            2.情侣双方共执一棋，双方轮流掷骰子，棋子按骰子点数前进，停在几岁的格子就回答相应问题<br/>
            3.所有掷到的问题双方均需要回答，由掷骰子一方先答，另一方后答<br/>
            4.请回答者代入相应年龄和自身实际情况，设身处地考虑问题后再作答<br/>
            5.游戏进行中若出现长时间沉默或激烈争辩，请暂停5分钟，喝水放松下再继续<br/>
            6.游戏中每隔4岁有一道互动题目，情侣双方需按文字提示完成相应动作行为<br/>
            7.请坦诚面对彼此，回答每一道遇到的问题
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Monster from '../components/Monster.vue'
import Man from '../components/Man.vue'
import Cube from '../components/Cube.vue'
import TextDialog from '../components/TextDialog.vue'
import Dice from '../components/Dice.vue'
import axios from 'axios'
export default {
  name: 'home',
  components: {
  	// Monster,
  	Cube,
    Man,
    TextDialog,
    Dice
  },
  data(){
  	return {
  		monsterPer: {
        width: '',
        height: '',
        bodycolor: 'black',
        facecolor: 'black',
        borderradius: ''
      },
      showTip: false,
      question: [],
      nowques: '',
      nowage: 0,
      diceNum: 0
    }
  },
  methods: {
    clickTips(){
      // 显隐操作提示
      this.showTip = !this.showTip
    },
    getDiceNum(num){
      this.diceNum += num
      let nownum = 19 + this.diceNum
      this.nowage = nownum + '岁'
      if (nownum >= 71) {
        this.nowage = 70 + '岁'
        this.$refs.man.$el.style.top = "66rem"
        this.$refs.man.$el.style.left = "23.5rem"
      }
      else if (nownum > 67) {
        this.$refs.man.$el.style.top = 57 + (nownum - 68) * 3 + "rem"
        this.$refs.man.$el.style.left = 5.5 + (nownum - 68) * 6 + "rem"
      }else if (nownum > 60) {
        this.$refs.man.$el.style.top = 49 + (nownum - 61) * 3 + "rem"
        this.$refs.man.$el.style.left = 5.5 + (nownum - 61) * 6 + "rem"
      }else if (nownum > 53) {
        this.$refs.man.$el.style.top = 41 + (nownum - 54) * 3 + "rem"
        this.$refs.man.$el.style.left = 5.5 + (nownum - 54) * 6 + "rem"
      }else if (nownum > 46) {
        this.$refs.man.$el.style.top = 33 + (nownum - 47) * 3 + "rem"
        this.$refs.man.$el.style.left = 5.5 + (nownum - 47) * 6 + "rem"
      }else if (nownum > 39) {
        this.$refs.man.$el.style.top = 25 + (nownum - 40) * 3 + "rem"
        this.$refs.man.$el.style.left = 5.5 + (nownum - 40) * 6 + "rem"
      }else if (nownum > 32) {
        this.$refs.man.$el.style.top = 17 + (nownum - 33) * 3 + "rem"
        this.$refs.man.$el.style.left = 5.5 + (nownum - 33) * 6 + "rem"
      }else if (nownum > 25) {
        this.$refs.man.$el.style.top = 9 + (nownum - 26) * 3 + "rem"
        this.$refs.man.$el.style.left = 5.5 + (nownum - 26) * 6 + "rem"
      }else{
        this.$refs.man.$el.style.top = 1 + this.diceNum * 3 + "rem"
        this.$refs.man.$el.style.left = 5.5 + this.diceNum * 6 + "rem"
      }
      this.nowques = this.question[this.diceNum]
      if (this.$refs.dialog) {
      this.$refs.dialog.$el.style.display = 'block'
      }
      if(this.diceNum >= this.question.length){
        this.nowques = "对不起，游戏只为您提供了20~70岁之间的问题~游戏已结束！！！"
      }
    }
  },
  created(){
  	// let r1 = 0;
  	// let g1 = 0;
  	// let b1 = 0;
  	// let r2 = 0;
  	// let g2 = 0;
  	// let b2 = 0;
  	// setInterval(() => {
  	// 	this.bodycolor = 'rgb('+ r1 + ','+ g1 + ','+ b1 + ')'
  	// 	this.facecolor = 'rgb('+ r2 + ','+ g2 + ','+ b2 + ')'
  	// 	r1 = parseInt(Math.random()*360) + 1
  	// 	g1 = parseInt(Math.random()*360) + 1
  	// 	b1 = parseInt(Math.random()*360) + 1
  	// 	r2 = parseInt(Math.random()*360) + 1
  	// 	g2 = parseInt(Math.random()*360) + 1
  	// 	b2 = parseInt(Math.random()*360) + 1
  	// }, 1000)
    axios.get('/question.json').then((res) => {
      let data = res.data.data
      this.question = data.question
      this.nowques = this.question[this.diceNum]
    })
  }
}
</script>

<style scoped>
.home{
	width: 100%;
	height: 100%;
  background: #DB4D6D;
}

.main-wrapper{
  position: relative;
  transform-origin: top left;
  transform: scale(0.2);
}

.man{
  position: absolute;
  top: 1rem;
  left: 5.5rem;
  transition: 2s;
}

.dialog{
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 40%;
  transform: translateX(-50%) translateY(-50%)
}

.cube-wrapper{
  position: relative;
  transform-origin: top left;
  transform: scale(0.2);
}

.cube{
  z-index: 1;
  position: absolute;
}

.dice{
  position: fixed;
  bottom: -40px;
  left: -40px;
  transform: scale(0.2);
  cursor: pointer;
}

.tips{
  display: inline-block;
  position: absolute;
  top: 40px;
  right: 40px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: white;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
}

.tips-mask{
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #eee;
}

.tips-operate{
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 80%;
  padding: 10px;
  background: white;
  border-radius: 20px;
  font-size: 0.36rem;
  transform: translateX(-50%) translateY(-50%)
}

.tips-operate p{
  margin: 0.5rem 0;
}

.tips-operate .close{
  position: absolute;
  top: 5px;
  right: 15px;
  font-size: 0.5rem;
}
</style>
