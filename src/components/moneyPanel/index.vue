<script setup lang='ts'>
const props = defineProps({
  isPerson: {
    type: Boolean,
    default: false,
  },
})
const router = useRouter()
const toCash = () => {
  router.push('/cash')
}
</script>

<template>
  <div class="moneyPanel">
    <div class="panel">
      <div class="body">
        <div class="money">
          <span>{{ props.isPerson ? '我的余额' : '可提现（元）' }}</span>
          <span>866.00</span>
        </div>
        <VanButton round size="small" color="#64291B" text="立即提现" @click="toCash" />
      </div>
      <div v-if="!props.isPerson" class="footer">
        <span>已提现佣金 0.00元</span>
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped lang='scss'>
.moneyPanel {
  padding: 0 16px;
  background-color: #FFFFFF;

  .panel {
    top: -50px;
    display: flex;
    color: #64291B;
    position: relative;
    border-radius: 8px;
    margin-bottom: -50px;
    justify-content: space-between;
    flex-direction: column;
    background: linear-gradient(125deg, #FDEAE1 0%, #DFA071 100%);
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);

    .body {
      display: flex;
      align-items: center;
      padding: 16px;
      justify-content: space-between;

      .van-button {
        color: #F4D3BF !important;
      }

      .money {
        display: flex;
        font-size: 15px;
        flex-direction: column;

        &>span:last-child {
          font-weight: bold;
          font-size: 30px;
          margin-top: 5px;
        }
      }
    }

    .footer {
      padding: 12px 16px;
      font-size: 13px;
      border-top: 1px solid rgba(100, 41, 27, 0.14);
    }
  }

}
</style>
