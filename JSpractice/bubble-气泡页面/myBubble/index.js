window.onload = function(){
	(function (){
		class BackCanvas{
			constructor(){
				this.canvas = document.querySelector('canvas');
				this.ctx = this.canvas.getContext('2d');
				this.bubble = [{
					animation: 'firstAnimation',
					x: 50,
					y: 500,
					width: 100,
					height: 100,
					vy: -1,
					bg: 1,
					title: 'One',
					content: 'First First First'
				},{
					animation: 'secondAnimation',
					x: 130,
					y: 550,
					width: 150,
					height: 150,
					vy: -2,
					bg: 2,
					title: 'Two',
					content: 'Second Second Second'
				},{
					animation: 'thirdAnimation',
					x: 230,
					y: 650,
					width: 130,
					height: 130,
					vy: -1.3,
					bg: 3,
					title: 'Three',
					content: 'Third Third Third'
				}];
			}

			init(){
				this.initPro();
				this.loadBubble();
			}

			initPro(){
				this.canvas.width = window.innerWidth;
				this.canvas.height = window.innerHeight;
			}

			loadBubble(){
				let bubbleImg = new Image();
				bubbleImg.src = './bubble.png';
				let that = this;
				let typeStatus = false;
				function renderBubble(){
					that.bubble.forEach((item) => {
						let bgImg = new Image();
						bgImg.src = `./${item.bg}.png`;
						that.ctx.drawImage(bgImg, item.x+item.width/4.8, item.y+item.height/4.8, item.width/1.7, item.height/1.7);
						that.ctx.drawImage(bubbleImg, item.x, item.y, item.width, item.height);
						item.y += item.vy;
						initBg(item);
					});
				}

				function initBg(item){
					if (item.y < -item.height) {
						item.x = Math.random()*250;
						item.y = 640;
						item.vy = -1-Math.random()*2;
					}
					else if (item.y < 0 && (item.y - item.vy) >= 0) {
						
						if (typeStatus) {
							return;
						}

						typeStatus = true;
						let main = document.querySelector('main');
						main.style.background = `url(./${item.bg}.jpeg) no-repeat`;
						main.style.backgroundSize = 'cover';
						main.style.transition = 'all 1s';
						let len = 1;
						let hTitle = document.querySelector('h1');
						let pContent = document.querySelector('p');
						eval('that.' + item.animation + '()');
						const timer = setInterval(function(){
							hTitle.innerHTML = item.title.substring(0, len);
							pContent.innerHTML = item.content.substring(0, len);
							len++;
							if (len == item.content.length + 1) {
								clearInterval(timer);
								typeStatus = false;
							}
						}, 100);
					}
				}

				function animate(){
					that.ctx.clearRect(0, 0, that.canvas.width, that.canvas.height);
					renderBubble();
					requestAnimationFrame(animate);
				}
				bubbleImg.onload = function(){
					animate();
				}
			}

			firstAnimation(){
			}

			secondAnimation(){
			}

			thirdAnimation(){
			}
		}

		let canvas = new BackCanvas();
		canvas.init();
	})();
};