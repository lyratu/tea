<script setup lang="ts">
const router = useRouter()
const active = ref(Number(router.currentRoute.value.query.active))
const list = [1, 2, 3]
const tabs = ['全部', '待付款', '待收款', '待上架', '已出售']
</script>

<template>
  <div id="orderList">
    <van-nav-bar title="全部订单" :border="false" />
    <van-tabs v-model:active="active" swipeable animated border title-active-color="#C53032" color="#C53032">
      <van-tab v-for="tab in tabs" :key="tab" :title="tab">
        <order-item v-for="i in list" :key="i" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss" scoped>

</style>
