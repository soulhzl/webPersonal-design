<template>
  <div class="home">
  	<!-- <Monster :monsterPer="monsterPer"/> -->
    <div class="main-wrapper">
      <Man class="man"/>
      <Futuredialog :text="nowques" class="dialog"/>
      <Cube cubetext="" class='cube'/>
    </div>
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
import Futuredialog from '../components/Futuredialog.vue'
import Dice from '../components/Dice.vue'
import axios from 'axios'
export default {
  name: 'home',
  components: {
  	// Monster,
  	Cube,
    Man,
    Futuredialog,
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
      showTip: true,
      question: [],
      nowques: '',
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
      this.nowques = (20 + this.diceNum - 1) + '岁：' + this.question[this.diceNum]
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
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
  background: #DB4D6D;
}

.main-wrapper{
  position: relative;
}

.man{
  margin-top: -2rem;
}

.dialog{
  position: absolute;
  top: -5rem;
  left: -1rem;
}

.cube{
	z-index: 1;
	position: absolute;
	left: 50%;
	top: 50%;
	margin-left: -100px;
	margin-top: -40px;
}

.dice{
  position: fixed;
  top: 7.5rem;
  left: -3.5rem;
  width: 100%;
  height: 100%;
  transform: scale(0.2);
  cursor: pointer;
}

.tips{
  display: inline-block;
  position: absolute;
  bottom: 40px;
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
  font-size: 0.44rem;
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
