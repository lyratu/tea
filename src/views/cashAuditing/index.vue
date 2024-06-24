<script setup lang='ts'>
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
const active = ref(0)
const list = [1, 2, 3]
const tabs = ['待审提现', '已审提现']
</script>

<template>
  <div id="cashAuditing">
    <van-nav-bar title="提现审核" left-arrow @click-left="onClickLeft" />
    <van-tabs v-model:active="active" swipeable animated border title-active-color="#C53032" color="#C53032">
      <van-tab v-for="tab in tabs" :key="tab" :title="tab">
        <div v-for="item in list" :key="item" class="item">
          <div class="name">
            <span>张三</span>
            <span>-98.00</span>
          </div>
          <div class="cashType">
            <span>提现方式：微信</span>
            <span>提现</span>
          </div>
          <div class="btn-group">
            <VanButton plain round text="拒绝" color="#666666" />
            <VanButton plain round text="通过" color="#FF0000" />
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped lang='scss'>
#cashAuditing {
  .item {
    padding: 16px;
    border-bottom: 1px solid rgba($color: #E4E4E4, $alpha: .5);
    background-color: #FFFFFF;

    .name,
    .cashType {
      display: flex;
      justify-content: space-between;
    }

    .name {
      font-weight: bold;
      font-size: 15px;
    }

    .cashType {
      color: #999999;
      font-size: 13px;
    }

    .btn-group {
      text-align: right;
      margin-top: 20px;

      .van-button {
        height: 32px;
        margin-left: 12px;
      }
    }
  }
}
</style>
