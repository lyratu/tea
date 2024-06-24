<script setup lang='ts'>
import cover from '@/assets/cover/cover.png'

const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
const address = ref('')
const linkman = ref('张双 13243564324')
</script>

<template>
  <div id="orderDetail">
    <van-nav-bar title="订单详情" left-arrow @click-left="onClickLeft" />
    <van-cell v-if="!address" title="请填写收货地址" is-link to="/address" />
    <van-cell v-else :title="address" is-link to="#" :label="linkman" />
    <div class="goods">
      <VanImage :src="cover" width="80" height="80" fit="cover" />
      <div class="text">
        <span>茅台老酒53度 清香白酒</span>
        <span><span class="￥">￥</span>2400.00</span>
      </div>
    </div>
    <div class="bottom_btn">
      <div class="priceText">
        <span>共1件，合计：<span class="price">￥2400.00</span></span>
        <span>原价：￥5200</span>
      </div>
      <VanButton block round text="立即预约" color="#C53032" />
    </div>
  </div>
</template>

<style scoped lang='scss'>
#orderDetail {
  .goods {
    padding: 16px;
    display: flex;
    margin-top: 12px;
    background-color: #FFFFFF;

    :deep(.van-image__img) {
      border-radius: 8px;

    }

    .text {
      display: flex;
      margin-left: 12px;
      flex-direction: column;
      justify-content: space-between;

      >span:last-child {
        color: #FF0000;
        font-size: 20px;
        font-weight: 400;

        .￥ {
          font-size: 12px;
        }
      }
    }

  }

  .bottom_btn {
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    position: fixed;
    padding: 6px 16px;
    align-items: center;
    background-color: #FFFFFF;

    .priceText {
      flex: 4;
      margin-right: 30px;
      display: flex;
      text-align: right;
      flex-direction: column;
      font-size: 13px;

      .price {
        color: #FF0000;
      }
    }

    .van-button {
      flex: 3;
    }

  }
}
</style>
