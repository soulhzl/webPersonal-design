<template>
    <div class="goods-info">
        <div class="goods-image">
            <img v-lazy="goodsImage" />
        </div>
        <div class="goods-name">{{goodsName}}</div>
        <div class="goods-price">￥{{goodsPrice | moneyFilter }}</div>
    </div>
</template>

<script>
import {toMoney} from '@/filter/moneyFilter.js'
export default {
   name: 'goodsInfo',
   props:['goodsImage','goodsName','goodsPrice'],
   filters:{
    moneyFilter(money){
        return toMoney(money)
    }  
},
}
</script>

<style scoped>
.goods-name{
    overflow: hidden;
    padding: 0 0.5rem;
    text-overflow: ellipsis;
    white-space:nowrap; 
}

.goods-image img{
    width: 90%;
}
</style>