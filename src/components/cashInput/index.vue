<script setup lang='ts'>
const props = defineProps({
  border: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="title">
    提现金额
  </div>
  <div class="moneyInput" :class="{ border: props.border }">
    <div class="input">
      <span>￥</span>
      <input type="text">
    </div>
    <span class="textBtn">全部提现</span>
  </div>
  <div class="password">
    <span>安全密码</span>
    <input type="password" placeholder="请输入安全密码">
  </div>
</template>

<style scoped lang='scss'>
.title {
  color: #333333;
  font-size: 15px;
}

.border {
  border-bottom: 1px solid rgba($color: #64291B, $alpha: .14);
}

.moneyInput {
  display: flex;
  margin: 0 -16px;
  padding: 0 16px;
  margin-top: 20px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  align-items: flex-end;

  .input {
    flex: 1;

    >span {
      font-size: 30px;
      font-weight: bold;
    }

    >input {
      height: 36px;
      width: 80%;
      font-size: 30px;
      font-weight: bold;
      vertical-align: bottom;
      caret-color: red;
      background: none;
      outline: none;
      border: none;
    }
  }

  .textBtn {
    color: #C53032;
    font-size: 15px;
  }
}

.password {
  font-size: 13px;

  >span {
    margin-right: 25px;
  }

  >input {
    background: none;
    outline: none;
    border: none;
  }
}
</style>
