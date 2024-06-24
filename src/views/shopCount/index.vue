<script setup lang='ts'>
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
const items = [
  { name: '张三小店', data: '2022-15-25', money: '20' },
  { name: '张一小店', data: '2022-15-25', money: '20' },
  { name: '张二小店', data: '2022-15-25', money: '20' },
]
</script>

<template>
  <div id="shopCount">
    <van-nav-bar title="小店统计" left-arrow @click-left="onClickLeft" />
    <div class="title">
      小店总数：52
    </div>
    <div v-for="item in items" :key="item.name" class="item">
      <van-cell-group>
        <van-field v-model="item.name" label="小店名称" readonly />
        <van-field v-model="item.data" label="日期查询" readonly />
        <van-field v-model="item.money" label="当日流水" readonly />
      </van-cell-group>
    </div>
  </div>
</template>

<style scoped lang='scss'>
#shopCount {
  .title {
    color: #FFFFFF;
    font-size: 13px;
    padding: 11px 16px;
    background-color: #C53032;
  }
  .item{
    margin-bottom: 12px;
  }
}
</style>
