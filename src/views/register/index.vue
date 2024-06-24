<script setup lang='ts'>
const payModeList = [
  { text: '银行收款', value: '0' },
  { text: '支付宝收款', value: '1' },
  { text: '微信收款', value: '2' }]

const formData = reactive({
  phone: 15629122270,
  code: '1231',
  password: '123123',
  payMode: '',
})
const popup = ref(null)
const payModeCancel = () => {
  popup.value.closePopup()
}
const payModeConfirm = ({ selectedOptions }) => {
  const payMode = toRef(formData, 'payMode')
  payMode.value = selectedOptions[0].value
  popup.value.closePopup()
}
</script>

<template>
  <div id="register">
    <van-nav-bar title="注册" :border="false" />
    <van-cell-group>
      <van-cell title="头像">
        <template #label>
          <van-uploader />
        </template>
      </van-cell>
      <van-field label="手机号码" placeholder="请输入手机号码" />
      <van-field label="验证码" placeholder="请输入验证码" />
      <van-field label="密码" placeholder="请输入密码" />
      <select-popup
        ref="popup"
        border title="收款方式" tips="请选择收款方式"
        :value="(payModeList.find(e => e.value === formData.payMode))?.text"
      >
        <van-picker title="收款方式" :columns="payModeList" @confirm="payModeConfirm" @cancel="payModeCancel" />
      </select-popup>
      <template v-if="formData.payMode === '0'">
        <van-field label="户名" placeholder="请输入户名" />
        <van-field label="开户银行" placeholder="请输开户银行" />
        <van-field label="开户账号" placeholder="请输开户账号" />
      </template>
      <template v-else-if="formData.payMode === '1'">
        <van-cell title="收款二维码">
          <template #label>
            <van-uploader />
          </template>
        </van-cell>
      </template>
      <template v-else-if="formData.payMode === '2'">
        <van-cell title="收款二维码">
          <template #label>
            <van-uploader />
          </template>
        </van-cell>
      </template>
      <van-cell title="身份认证">
        <template #label>
          <van-uploader />
        </template>
      </van-cell>
      <van-field label="邀请码" placeholder="请输邀请码" />
      <van-field label="画室编码号" placeholder="请输画室编码号" />
      <van-field label="名称" placeholder="名称" />
    </van-cell-group>
    <div class="bottom_btn">
      <van-button block round text="立即注册" color="#C53032" />
      <div class="tips">
        已有账号？ <span>立即登录</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
#register {
  height: 100%;
  background-color: #FFFFFF;
  :deep(.van-uploader__upload) {
    border-radius: 4px;
  }

  .bottom_btn {
    padding: 0 16px;
    padding-top: 40px;
    padding-bottom: 16px;
    font-size: 13px;
    text-align: center;
    background-color: #FFFFFF;

    .tips {
      margin-top: 16px;

      >span {
        color: #FF0000;
      }
    }

  }
}
</style>
