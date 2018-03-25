const data = {
  messages: [{
    left: '工作怎么样呀？',
    right: [{
      text: '不如您家孩子厉害，还要继续学习',
      score: 3
    }, {
      text: '一般啦，比您家孩子好一点。',
      score: -2
    }, {
      text: '领导经常叫我加班',
      score: 1
    }]
  }, {
    left: '有对象了吗？',
    right: [{
      text: '被你家孩子租回家过年了。',
      score: -2
    }, {
      text: '我还是个孩子，妈妈说不要早恋',
      score: 1
    }, {
      text: '对象对我挺好的，谢谢关心。',
      score: 3
    }]
  }, {
    left: '工资多少啊？',
    right: [{
      text: '刚好比你家孩子多那么一点。',
      score: -2
    }, {
      text: '一般，我刚买了个表',
      score: 1
    }, {
      text: '不多，刚好够基本生活。',
      score: 3
    }]
  }, {
    left: '明年有什么打算呢？',
    right: [{
      text: '还没有什么打算。',
      score: 1
    }, {
      text: '多多努力，向您学习。',
      score: 3
    }, {
      text: '凑钱把房子买了，阿姨打算给我多少红包呀？',
      score: -2
    }]
  }],
  result: [{
    score: 8,
    tips: '传说中别人家的孩子，给你99分，多给一分怕你骄傲',
    say: '好孩子'
  }, {
    score: 4,
    tips: '来年继续加油吧！别人家的孩子都在虎视眈眈想超过你呢',
    say: '不错'
  }, {
    score: 0,
    tips: '恭喜你捡回一条命！来年可没这么好运了，保重。',
    say: '呵呵'
  }, {
    score: -10,
    tips: '请问你是怎么活过这么多年的？还是好好找个洞藏起来保命吧。',
    say: '这孩子怎么这样子'
  }]
}

let step = 0;
let score = 0;

/* 獲取dom元素 */
function $(selector){
	return document.querySelector(selector);
}

/* 為元素添加類 */
function addClass(element, className){
	element.classList.add(className);
}

/* 為元素刪除類 */
function removeClass(element, className){
	element.classList.remove(className);
}

/* 元素是否包含類 */
function hasClass(element, className){
	return element.classList.contains(className);
}

const firstPage = $(".first-page");// 獲取第一頁

function bindEvents(){
  /* 點擊按鈕將第一頁隱藏起來 */
  $(".js-enter-btn").addEventListener("touchend", () => {
    addClass(firstPage, "fade-out");
    setTimeout(() => {
      addClass(firstPage, "hide");
      oneStep();
    }, 500);
  }, false);

  $(".message-select").addEventListener("touchend", (event) => {
    let target = event.target;
    const currentTarget = event.currentTarget;
    while( target !== currentTarget){
      if (hasClass(target, "js-to-select")) {
        const currentScore = +target.getAttribute("data-score");
        const currentMessage = target.querySelector(".message-bubble").innerHTML;
        score += currentScore;
        addMessage("right", currentMessage);
        nextStep();
        return;
      }
      target = target.parentNode;
    }
  }, false);

  $('.icon-replay').addEventListener('touchend', (event) => {
    window.location.reload();
  }, false);

  $(".nav-back").addEventListener("touchend", () => {
    removeClass(firstPage, "hide");
  }, false)

  $(".js-enter-main").addEventListener("touchend", () => {
    window.location.href = "main.html";
  }, false)
}

function getDomByStr(str){
  const div = document.createElement("div");
  div.innerHTML = str;
  return div.children[0];
}

function getCurMessage(direction, str){
	const template = `<div class="message-item message-item-${ direction } js-to-select" data-score="3"><img class="avatar" src="./img/${ direction === "left" ? "demon" : "girl"}.png" alt="头像"><div class="message-bubble">${ str }</div></div>`;

  return getDomByStr(template);
}

function getSelectMessage(str){
  return `<div class="message-item message-item-right js-to-select" data-score="${ str.score }">
  <img class="avatar" src="./img/girl.png" alt="头像">
  <div class="message-bubble">${ str.text }</div>
  </div>`;
}

function changeSelectMessage(){
  const curMessage = data.messages[step];
  let selectMesStr = "";
  curMessage.right.forEach((message) => {
    selectMesStr += getSelectMessage(message);
  });
  $(".message-select").innerHTML = selectMesStr;
}

function addMessage(direction, str){
  const messageDom = getCurMessage(direction, str);
  $("main").appendChild(messageDom);
}

function toggleSelector(isShow){
  const chatPage = $(".chat-page");
  if (isShow) {
    addClass(chatPage, "show-selector");
  }
  else{
    removeClass(chatPage, "show-selector");
  }
}

function oneStep(){
	const curMessage = data.messages[step];
	addMessage("left", curMessage.left);
  setTimeout(() => {
    changeSelectMessage();
    toggleSelector(true);
  }, 300);
}

function getResultByScore(score){
  let result;
  data.result.every((item) => {
    if (score > item.score) {
      result = item;
      return false;
    }
    return true;
  });
  return result;
}

function showTips(result){
  const tips = $(".cover-tips");
  tips.querySelector(".tips-text").innerHTML = `分數：${ score }<br />
      ${ result.tips }`;
  removeClass(tips, "hide");
}

function showResult(){
  const result = getResultByScore(score);
  showTips(result);
}

function nextStep(){
  step++;
  toggleSelector(false);
  if (step >= data.messages.length) {
    showResult();
  }
  else{
    setTimeout(() => {
      oneStep();
    }, 500);
  }
}

bindEvents();