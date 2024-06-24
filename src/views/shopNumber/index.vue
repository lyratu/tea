<script setup lang='ts'>
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
const value = ref('张三小店')
</script>

<template>
  <div id="shopNumber">
    <van-nav-bar title="设置小店编号" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-field v-model="value" label="小店名称" readonly />
      <van-cell value="当前小店前缀BLTX画室登录号：bltx000000" />
      <van-field label="新编号" placeholder="请输入6位纯数字编号" />
    </van-cell-group>
    <VanButton text="确认修改" block round color="#C53032" />
    <div class="tips">
      <span>
        备注:画室前缀无法修改，只能更改后面的编码，只能输入数字!如ZJS123456,后面数字123456可以设置，前缀ZJS 无法变更。
      </span>
    </div>
  </div>
</template>

<style scoped lang='scss'>
#shopNumber {
  .van-button {
    margin: 0 16px;
    margin-top: 40px;
    width: -webkit-fill-available;
  }

  .tips {
    padding: 10px 16px 16px 16px;
    color: #999999;
    font-size: 13px;
  }
}
</style>
