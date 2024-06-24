<script setup lang='ts'>
import avatar from '@/assets/cover/avatar.png'
interface formDataProps {
  phone: number
  password: string
  number: string
}
const formData: formDataProps = reactive({
  phone: 15629122270,
  password: '1241234214',
  number: '12312',
})
</script>

<template>
  <div id="login">
    <van-nav-bar title="登录" :border="false" />
    <VanImage :src="avatar" width="80" height="80" class="avatar" />
    <van-cell-group>
      <van-field v-model="formData.phone" label="手机号码" placeholder="请输入手机号码" />
      <van-field v-model="formData.password" label="登录密码" placeholder="请输入登录密码" />
      <van-field v-model="formData.number" label="画室号" placeholder="请输入画室号" />
    </van-cell-group>
    <VanButton text="登录" block round color="#C53032" disabled />
    <div class="tips">
      <span>没有账号？</span>
      <span class="link">立即注册</span>
    </div>
  </div>
</template>

<style scoped lang='scss'>
#login {
  height: 100%;
  background-color: #FFFFFF;

  .avatar {
    display: block;
    margin: 40px auto;
  }

  .van-button {
    width: -webkit-fill-available;
    margin: 0 16px;
    margin-top: 48px;
  }

  .tips {
    text-align: center;
    font-size: 13px;
    margin-top: 16px;
    .link{
      color: #FF0000;
    }
  }
}
</style>
