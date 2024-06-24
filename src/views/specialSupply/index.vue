<script setup lang='ts'>
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
const items = [1, 2]
</script>

<template>
  <div id="specialSupply">
    <van-nav-bar title="特供货品" left-arrow @click-left="onClickLeft" />
    <div v-for="(item, index) in items" :key="index" class="item">
      <div class="name">
        <span>张三{{ item }}</span>
        <span>￥9800</span>
      </div>
      <div>
        <span>
          特供货品：马到成功摆件C2222
        </span>
      </div>
      <div>
        <span>
          特供编号：002384
        </span>
      </div>
      <div>
        <span>
          电话号码：132 4356 4324
        </span>
      </div>
      <div>
        <span>
          收货地址：湖北省武汉市张三区明主大道欣园小区4栋209
        </span>
      </div>
      <div>
        <span>
          特供小店：禅茶道小店
        </span>
      </div>
      <div>
        <span>
          店长电话：120 1554 4578
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
#specialSupply {
  .item {
    padding: 16px;
    font-size: 13px;
    border-bottom: 1px solid rgba($color: #E4E4E4, $alpha: .5);
    background-color: #FFFFFF;

    >div {
      margin-bottom: 12px;
    }

    .name {
      display: flex;
      font-weight: bold;
      font-size: 15px;
      justify-content: space-between;

      >span:last-child {
        color: #FF0000;
      }
    }
  }
}
</style>
