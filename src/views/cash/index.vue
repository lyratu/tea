<script setup lang='ts'>
const router = useRouter()

const onClickLeft = () => {
  router.go(-1)
}
</script>

<template>
  <div id="cash">
    <van-nav-bar title="佣金提现" left-arrow @click-left="onClickLeft" />
    <div class="cashInput">
      <cash-input />
    </div>
    <div class="cashMode">
      <span>提现方式</span>
      <span>
        <VanIcon class-prefix="icon" name="weChatPay" color="#6BCC03" />
        <span class="text">提现到微信</span>
      </span>
    </div>
    <VanButton text="确认提现" color="#C53032" round block />
  </div>
</template>

<style scoped lang='scss'>
#cash {
  .cashInput {
    padding: 16px;
    margin-top: 12px;
    background-color: #FFFFFF;
  }

  .cashMode {
    display: flex;
    padding: 16px;
    font-size: 13px;
    margin-top: 12px;
    align-items: center;
    background-color: #FFFFFF;
    justify-content: space-between;

    .text {
      margin-left: 6px;
      color: #999999;
    }
  }

  .van-button {
    margin: 0 16px;
    margin-top: 50px;
    width: -webkit-fill-available;
  }
}
</style>
