import React from 'react';

export default class PcPerson extends React.Component{
	componentDidMount(){
		let oDiv = document.getElementById('myDiv');
		let oImg = document.getElementById('myPer');
		let can = false;

		oDiv.onmouseleave = function(){
			oDiv.removeChild(canvas);
			can = false;
		}

		oDiv.onmouseover = function(){
			if (!can) {
				let canvas = document.createElement('canvas');
				let canvasWidth = window.innerWidth * 0.25;
				canvas.width = canvasWidth;
				canvas.height = oImg.height;
				canvas.id = 'canvas';
				oDiv.appendChild(canvas);
				can = true;
				createBubble(canvas);
			}
		}

		function createBubble(canvas){
			let ctx = canvas.getContext('2d');
			let setData = [];

			setInterval(function(){
				ctx.clearRect(0, 0, canvas.width, canvas.height);

				for (let i = 0; i < setData.length; i++) {
					setData[i].num += 50;
					setData[i].x = setData[i].starX + Math.sin(setData[i].num*Math.PI/180)*setData[i].step;
					setData[i].y = setData[i].starY - setData[i].num*Math.PI/180*setData[i].step;

					if (setData[i].y < 50) {
						setData.splice(i, 1);
					}
				}

				for (let i = 0; i < setData.length; i++) {
					ctx.fillStyle = 'rgba(' + setData[i].fillR + ',' + setData[i].fillG + ',' + setData[i].fillB + ',' + setData[i].fillA + ')';
					ctx.beginPath();
					ctx.arc(setData[i].x, setData[i].y, setData[i].r, 0, 2*Math.PI,);
					ctx.closePath();
					ctx.fill();
				}
			}, 50);

			setInterval(function(){
				let x = Math.random() * canvas.width;
				let y = canvas.height - 10;
				let r = Math.random() * 10 + 5;
				let fillR = Math.floor(Math.random() * 256);
				let fillG = Math.floor(Math.random() * 256);
				let fillB = Math.floor(Math.random() * 256);
				let fillA = 1;
				let num = 0;
				let step = Math.random() *20 + 10;
				let starX = x;
				let starY = y;

				setData.push({
					x : x,
					y : y,
					r : r,
					fillR : fillR,
					fillG : fillG,
					fillB : fillB,
					fillA : fillA,
					num : num,
					step : step,
					starX : starX,
					starY : starY
				});
			}, 50);
		}
	}

	render(){
		return (
			<div class="right-container" id='myDiv'>
			<img id='myPer' src="./src/image/person.png"/>
			</div>
			);
		}
	}