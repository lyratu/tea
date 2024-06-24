<script setup lang='ts'>
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
const items = [1, 2, 3]
</script>

<template>
  <div id="bookingRecord">
    <van-nav-bar title="预约记录" left-arrow @click-left="onClickLeft" />
    <div v-for="item in items" :key="item" class="item">
      <div class="name">
        <span>张三画室</span>
        <span>预约中</span>
      </div>
      <div>
        <span>预约时间：2022/02/25 16:22:12</span>
      </div>
      <div>
        <span>价格范围：2000-3000</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
#bookingRecord {
  .item {
    padding: 16px;
    margin-bottom: 12px;
    background-color: #FFFFFF;

    >div {
      font-size: 13px;
      margin-bottom: 12px;
    }

    .name {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      font-size: 15px;

      >span:last-child {
        font-size: 13px;
        color: #C53032;
      }
    }
  }
}
</style>
