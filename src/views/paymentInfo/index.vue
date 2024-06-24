<script setup lang='ts'>
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
</script>

<template>
  <div id="paymentInfo">
    <van-nav-bar title="收款信息" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field label="户名" placeholder="请输入户名" />
      <van-field label="开户银行" placeholder="请输入开户银行" />
      <van-field label="开户账号" placeholder="请输入开户账号" />
      <van-cell title="收款二维码">
        <template #label>
          <div class="upload">
            <div class="payType">
              <van-uploader />
              <span>
                <VanIcon name="weChatPay" class-prefix="icon" color="#6BCC03" />
                <span class="text">微信收款码</span>
              </span>
            </div>
            <div class="payType">
              <van-uploader />
              <span>
                <VanIcon name="zfbPay" class-prefix="icon" color="#02A9F1" />
                <span class="text">支付宝收款码</span>
              </span>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <VanButton block round text="确认修改" color="#C53032" />
  </div>
</template>

<style scoped lang='scss'>
#paymentInfo {
  height: 100%;

  .upload {
    display: flex;
    justify-content: space-between;
    --van-uploader-size: 160px;

    .payType {
      display: flex;
      align-items: center;
      flex-direction: column;

      .text {
        margin-left: 4px;
        vertical-align: top;
      }
    }
  }

  .van-button {
    margin: 0 16px;
    bottom: 25px;
    position: fixed;
    width: -webkit-fill-available;
  }

}
</style>
