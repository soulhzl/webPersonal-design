<template>
	<div>
		<div class="navbar-div">
			<van-nav-bar title="类别列表" /> 
		</div>
		<div>
			<van-row>
				<van-col span="6">
					<div id="leftNav" ref='leftNav'>
						<ul>
							<li @click='clickCategory(index, item.ID)' :class='{categoryActive:categoryIndex==index}' v-for='(item, index) in category' :key='index'>{{item.MALL_CATEGORY_NAME}}</li>
						</ul>
					</div>
				</van-col>
				<van-col span="18">
					<div class="tabCategorySub">
						<van-tabs v-model="active" @click="clickCategorySub">
							<van-tab v-for="(item, index) in categorySub" :key="index" :title="item.MALL_SUB_NAME"></van-tab>
						</van-tabs>
					</div>
					<div id="list-div" ref='listdiv'>
						<van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
							<van-list
							v-model="loading"
							:finished="finished"
							@load="onLoad"
							>
							<div class="list-item" v-for="(item,index) in goodList" @click="goGoodsInfo(item.ID)" :key="index">
								<div class="list-item-img"><img :src="item.IMAGE1" :onerror="errorImg"/></div>
								<div class="list-item-text">
									<div>{{item.NAME}}</div>
									<div class="">￥{{item.ORI_PRICE | moneyFilter}}</div>
								</div>
							</div>
						</van-list>
					</van-pull-refresh>
				</div>
			</van-col>
		</van-row>
	</div>
</div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant'
import url from '@/serviceAPI.config'
import {toMoney} from '@/filter/moneyFilter'
export default{
	name: 'categorylist',
	data(){
		return {
			category: [],
			categoryIndex: 0,
			categorySub: [],
			active: 0,
			loading:false,
			finished:false,
			isRefresh:false,
			page: 1,
			goodList:[],  
			categoryId:1,
			categorySubId:'',
			errorImg:'this.src="' + require('@/assets/images/errorimg.png') + '"',
			goodAxio: true
		}
	},
	methods: {
		async getCategory(){
			let res = await axios({
				url: url.getCategoryList,
				method: 'get'
			})

			if (res.data.code == 200 && res.data.message != '获取不到数据') {
				this.category = res.data.message
				this.getCategorySubByCategoryId(this.categoryId)
			}else{
				Toast('服务器错误，数据取得失败')
			}
		},
		async getCategorySubByCategoryId(categoryId){
			let res = await axios({
				url: url.getCategorySubList,
				method: 'post',
				data: {categoryId}
			})

			if (res.data.code == 200 && res.data.message != '获取不到数据') {
				this.categorySub = res.data.message
				this.active = 0
				this.categorySubId = this.categorySub[0].ID
				this.onLoad()
			}else{
				Toast('服务器错误，数据取得失败')
			}
		},
		async getGoodList(){
			if (this.goodAxio) {
				this.goodAxio = false
				let res = await axios({
					url: url.getGoodsListByCategorySubID,
					method: 'post',
					data: {categorySubId:this.categorySubId,page:this.page}
				})

				if (res.data.code == 200 && res.data.message != '获取不到数据' && res.data.message.length) {
					this.page++
					this.goodList = this.goodList.concat(res.data.message)
				}else{
					this.finished = true
				}
				this.loading = false
				this.goodAxio = true
			}
		},
		clickCategory(index, categoryId){
			this.categoryIndex = index
			this.page = 1
			this.finished = false
			this.goodList = []
			this.getCategorySubByCategoryId(categoryId)
		},
		clickCategorySub(index, title){
			this.categorySubId = this.categorySub[index].ID
			this.goodList = []
			this.finished = false
			this.page = 1
			this.onLoad()
		},
		onLoad(){
			setTimeout(()=>{
				this.categorySubId = this.categorySubId ? this.categorySubId : this.categorySub[0].ID
				this.getGoodList()
			},1000)
		},
		onRefresh(){
			setTimeout(() => {
				this.isRefresh = false;
				this.finished = false;
				this.goodList = []
				this.page = 1
				this.onLoad()
			}, 500);
		},
		goGoodsInfo(id){
			this.$router.push({name:'Goods',params:{goodsId:id}})
		}
	},
	filters: {
		moneyFilter(money){
			return toMoney(money)
		}
	},
	mounted(){
		let winHeight = document.documentElement.clientHeight
		this.$refs.leftNav.style.height = (winHeight - 96) + 'px'
		this.$refs.listdiv.style.height = (winHeight - 140) + 'px'
	},
	created(){
		this.categoryId = this.$route.params.categoryId ? this.$route.params.categoryId : 1
		this.categoryIndex = this.$route.params.categoryId ? this.$route.params.categoryId - 1 : 0
		this.getCategory()
	}
}
</script>

<style scoped>
#leftNav ul li {
	padding:3px;
	border-bottom:1px solid #E4E7ED;
	line-height: 2rem;
	font-size:0.8rem;
	text-align: center;
}

.categoryActive{
	background-color: #ddd;
}

.list-item{
	display: flex;
	flex-direction: row;
	padding:5px;
	border-bottom: 1px solid #f0f0f0;
	background-color: #fff;
	font-size:0.8rem;
}

#list-div{
	overflow: scroll;
}

.list-item-img{
	flex:8;
}

.list-item-img img{
	width: 100%;
}

.list-item-text{
	flex:16;
	margin-top:10px;
	margin-left:10px;
}
</style>