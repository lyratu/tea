<script setup lang='ts'>
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
const items = [1, 2, 3]
</script>

<template>
  <div id="vipBooking">
    <van-nav-bar title="会员预约表" left-arrow @click-left="onClickLeft" />
    <div class="title">
      输入会员手机，查询预约状态。
    </div>
    <div class="input">
      <van-cell-group>
        <van-field label="手机号码" placeholder="请输入手机号码" />
      </van-cell-group>
      <van-button round block text="查询" color="#C53032" />
    </div>
    <div class="tips">
      近三日预约
    </div>
    <div class="list">
      <div v-for="item in items" :key="item" class="item">
        <div class="name">
          <van-icon name="diamonds" class-prefix="icon" color="#FFC600" size="18" />
          <span>张三</span>
        </div>
        <div><span>电话：123 5684 8456 </span></div>
        <div>
          <span>预约时间：12:00-13:00 </span>
          <span>时间：2022/05/21 </span>
        </div>
        <div class="btn-group">
          <van-button plain round text="忽略" color="#666666" />
          <van-button plain round text="通过" color="#FF0000" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
#vipBooking {
  .title {
    color: #FF8B33;
    font-size: 13px;
    padding: 11px 16px;
    background-color: #FFF6E2;
  }

  .input {
    padding-bottom: 35px;
    background-color: #FFFFFF;
    margin-bottom: 28px;

    .van-button {
      margin: 0 16px;
      margin-top: 40px;
      width: -webkit-fill-available;
    }
  }

  .tips {
    padding: 14px 16px 0 16px;
    color: #999999;
    font-size: 13px;
    background-color: #FFFFFF;
  }

  .list {
    background-color: #FFFFFF;

    .item {
      font-size: 13px;
      padding: 16px;
      color: #999999;
      border-bottom: 1px solid rgba($color: #E4E4E4, $alpha: .5);

      >div {
        margin-bottom: 5px;
      }

      .name {
        color: #333333;
        font-size: 15px;
        font-weight: bold;

        >span {
          margin-left: 5px;
        }
      }

      .btn-group {
        text-align: right;
        margin-top: 12px;

        .van-button {
          height: 32px;
          margin-left: 12px;
        }
      }
    }
  }
}
</style>
