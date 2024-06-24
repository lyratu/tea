<script setup lang='ts'>
const router = useRouter()

const onClickLeft = () => {
  router.go(-1)
}
</script>

<template>
  <div id="myFollow">
    <van-nav-bar title="我的粉丝" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-cell title="张三" label="联系电话：124 1546 4875">
        <div>今日流水：2000</div>
        <div>今日收入：2344</div>
      </van-cell>
      <van-cell title="张三" label="联系电话：124 1546 4875">
        <div>今日流水：2000</div>
        <div>今日收入：2344</div>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<style scoped lang='scss'>
#myFollow {
  --van-cell-value-color: #FF0000;
}
</style>
