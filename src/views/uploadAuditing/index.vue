<script setup lang='ts'>
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
const active = ref(0)
const list = [1, 2, 3]
const tabs = ['待审上架', '已审上架']
</script>

<template>
  <div id="uploadAuditing">
    <van-nav-bar title="上架审核" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model:active="active" swipeable animated border title-active-color="#C53032" color="#C53032">
      <van-tab v-for="tab in tabs" :key="tab" :title="tab">
        <order-item v-for="i in list" :key="i" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped lang='scss'>
#uploadAuditing{

}
</style>
