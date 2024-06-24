<script setup lang="ts">
// import type { PropType } from 'vue'
import cover from '@/assets/cover/cover.png'
// interface dataProps {
//   name: string
// }
// const props = defineProps({
//   data: Object as PropType<dataProps>,
// })
const props = defineProps({
  readonly: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div id="orderItem">
    <div class="header">
      <span>订单编号：35413243564324</span>
      <span>已出售</span>
    </div>
    <div class="body">
      <div class="goodsInfo">
        <VanImage :src="cover" width="100" height="100" />
        <div class="texts">
          <span>马到成功摆件C2222</span>
          <span>藏品编号：002384</span>
          <span>卖家：王说</span>
          <span>卖家电话：135 2563 8564</span>
          <span>买家：张三</span>
          <span>联系电话：135 2563 8564</span>
          <span>价格：￥9800</span>
        </div>
      </div>
      <div class="purchaseInfo">
        <div>
          <span>买入时间：2022/02/25 16:22:12</span>
          <span>应付订金：1554.00</span>
        </div>
        <div>
          <span>更新时间：2022/02/25 16:22:12</span>
          <span>原价：1954.00</span>
        </div>
      </div>
      <div v-if="!props.readonly" class="btn-group">
        <van-button round plain size="small">
          卖家信息
        </van-button>
        <van-button round plain type="danger" size="small">
          查看上架费 (已支付)
        </van-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#orderItem {
  margin-bottom: 12px;
  background-color: #FFFFFF;

  .header {
    display: flex;
    font-size: 12px;
    padding: 12px 16px;
    justify-content: space-between;
  }

  .body {
    padding: 10px 16px 16px 16px;
    position: relative;
    border-top: 1px solid rgba(235, 237, 240, .5);

    .goodsInfo {
      display: flex;

      .van-image {
        flex-shrink: 0;
        margin-right: 12px;
      }

      .texts {

        display: flex;
        flex-direction: column;

        &>span:first-child {
          color: #333333;
          font-size: 17px;
          font-weight: bold;
        }

        &>span {
          font-size: 13px;
          color: #999999;
          margin-bottom: 3px;
        }
      }
    }

    .purchaseInfo {
      font-size: 12px;
      margin: 12px 0;

      &>div {
        display: flex;
        margin-bottom: 6px;
        justify-content: space-between;
      }
    }

    .btn-group {
      display: flex;
      justify-content: flex-end;

      .van-button {
        margin-left: 12px;
      }
    }
  }
}
</style>
