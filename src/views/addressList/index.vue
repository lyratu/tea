<script setup lang='ts'>
const router = useRouter()

const onClickLeft = () => {
  router.go(-1)
}
const toAddress = () => {
  router.push('/address')
}
</script>

<template>
  <div id="addressList">
    <van-nav-bar title="收货地址" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-cell is-link title="湖北省武汉市张三区明主大道欣园小区4栋209" label="张双 13243564324">
        <template #right-icon>
          <VanIcon class-prefix="icon" name="edit-o" color="#999999" />
        </template>
      </van-cell>
      <van-cell is-link title="湖北省武汉市张三区明主大道欣园小区4栋209" label="张双 13243564324">
        <template #right-icon>
          <VanIcon class-prefix="icon" name="edit-o" color="#999999" />
        </template>
      </van-cell>
    </van-cell-group>
    <VanButton text="新建收货地址" round block color="#C53032" @click="toAddress" />
  </div>
</template>

<style scoped lang='scss'>
#addressList {
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
