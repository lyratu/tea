<script setup lang='ts'>

</script>

<template>
  <div id="brokerage">
    <black-header title="推广佣金" is-back>
      <div class="price">
        <span>可提现（元）</span>
        <span><span class="￥">￥</span>866.00</span>
      </div>
    </black-header>
    <div class="panel">
      <cash-input border />
      <div class="bottom_btn">
        <VanButton color="#C53032" round block text="申请提现" />
      </div>
    </div>

    <div class="brokerageDetail">
      <div class="title">
        佣金明细
      </div>
      <div class="list">
        <div v-for="(item, index) in new Array(5)" :key="index" class="item">
          <div class="name">
            <span>马到成功摆件C2222{{ item }}</span>
            <span>+58.00</span>
          </div>
          <div class="desc">
            <span>2020-10-01 08：36</span>
            <span>余额：600</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<style scoped lang='scss'>
#brokerage {
  height: 100%;
  background-color: #FFFFFF;

  .price {
    color: #FFFFFF;
    padding: 16px;

    >span {
      font-size: 15px;
      display: block;
    }

    >span:last-child {
      font-weight: bold;
      font-size: 30px;
      margin-top: 8px;

      .￥ {
        font-size: 16px;
        margin-right: 3px;
      }
    }
  }

  .panel {
    top: -74px;
    margin: 16px;
    padding: 16px;
    margin-bottom: -74px;
    position: relative;
    border-radius: 8px;
    background-color: #FFFFFF;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.16);

    .bottom_btn {
      margin-top: 36px;
    }
  }

  .brokerageDetail {
    padding: 0 16px;
    margin-top: 12px;
    background-color: #FFFFFF;

    .title {
      padding: 12px 0;
      font-size: 18px;
      font-weight: bold;
      border-bottom: 1px solid rgba($color: #64291B, $alpha: .14);
    }

    .list {
      padding-bottom: 12px;

      .item {
        margin-top: 16px;

        >div {
          display: flex;
          justify-content: space-between;
        }

        .name {
          font-size: 15px;

          >span:last-child {
            font-size: 16px;
            font-weight: bold;
          }
        }

        .desc {
          color: #999999;
          font-size: 13px;
        }
      }
    }
  }
}
</style>
