<script setup lang='ts'>
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
const active = ref(0)
const list = [1, 2, 3]
const tabs = ['正常货品', '封存货品']
</script>

<template>
  <div id="goodsManage">
    <van-nav-bar title="货品管理" left-arrow @click-left="onClickLeft" />
    <div class="title">
      货品总数：52 分类数：12
    </div>
    <van-tabs v-model:active="active" swipeable animated border title-active-color="#C53032" color="#C53032">
      <van-tab v-for="tab in tabs" :key="tab" :title="tab">
        <order-item v-for="i in list" :key="i" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped lang='scss'>
#goodsManage {
  .title {
    color: #FFFFFF;
    font-size: 13px;
    padding: 11px 16px;
    background-color: #C53032;
  }
}
</style>
