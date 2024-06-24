<script setup lang='ts'>
const router = useRouter()
const active = ref(0)
const list = [1, 2, 3]
const tabs = ['全部', '待付款', '待收款', '待上架', '已出售']
const onClickLeft = () => {
  router.go(-1)
}
</script>

<template>
  <div id="orderCount">
    <van-nav-bar title="业绩统计" left-arrow @click-left="onClickLeft" />
    <div class="title">
      订单交易总额：￥12.00 订单数量：0
    </div>
    <van-tabs v-model:active="active" swipeable animated border title-active-color="#C53032" color="#C53032">
      <van-tab v-for="tab in tabs" :key="tab" :title="tab">
        <order-item v-for="i in list" :key="i" readonly />
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped lang='scss'>
#orderCount{
  .title {
    color: #FFFFFF;
    font-size: 13px;
    padding: 11px 16px;
    background-color: #C53032;
  }
}
</style>
