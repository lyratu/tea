<script setup lang='ts'>
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
const active = ref(0)
const list = [1, 2, 3]
const tabs = ['全部', '付款确认', '收款确认']
</script>

<template>
  <div id="orderOperate">
    <van-nav-bar title="订单操作" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model:active="active" swipeable animated border title-active-color="#C53032" color="#C53032">
      <van-tab v-for="tab in tabs" :key="tab" :title="tab">
        <order-item v-for="i in list" :key="i" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped lang='scss'>
#orderOperate{}
</style>
