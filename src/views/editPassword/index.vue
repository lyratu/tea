<script setup lang='ts'>
const router = useRouter()

const onClickLeft = () => {
  router.go(-1)
}
interface formDataProps {
  phone: number
  code: string
  password: string
  repeatPassword: string
}
const formData: formDataProps = reactive({
  phone: 13526045421,
  code: '2334',
  password: '1496848465',
  repeatPassword: '1496848465',
})
</script>

<template>
  <div id="editPassword">
    <van-nav-bar title="修改密码" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field v-model="formData.phone" label="手机号码" placeholder="请输入手机号码" />
      <van-field v-model="formData.code" label="验证码" placeholder="请输入验证码" />
      <van-field v-model="formData.password" label="新密码" placeholder="请输入新密码" />
      <van-field v-model="formData.repeatPassword" label="确认密码" placeholder="请再次输入新密码" />
    </van-cell-group>
    <VanButton text="确定修改" round block color="#C53032" />
  </div>
</template>

<style scoped lang='scss'>
#editPassword {
  display: flex;
  flex-direction: column;
  height: 100%;

  .van-button {
    width: -webkit-fill-available;
    margin: 16px;
    margin-top: auto;
  }
}
</style>
