<script setup lang='ts'>
const router = useRouter()

const onClickLeft = () => {
  router.go(-1)
}
</script>

<template>
  <div id="cashDetail">
    <van-nav-bar title="提现明细" left-arrow @click-left="onClickLeft" />
    <div class="title">
      订单交易总额：￥12.00 订单数量：0
    </div>
    <van-cell-group>
      <van-cell title="用户张三" label="提现时间：2022-03-01" value="￥200.00" />
      <van-cell title="用户张三" label="提现时间：2022-03-01" value="￥200.00" />
    </van-cell-group>
  </div>
</template>

<style scoped lang='scss'>
#cashDetail {
  .title {
    color: #FFFFFF;
    font-size: 13px;
    padding: 11px 16px;
    background-color: #C53032;
  }
}
</style>
