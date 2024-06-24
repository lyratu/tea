<script setup lang="ts">
import dist_money from '@/assets/icons/dist-money.png'
import dist_order from '@/assets/icons/dist-order.png'
import dist_detail from '@/assets/icons/dist-detail.png'
import dist_follow from '@/assets/icons/dist-follow.png'

interface girdListProps {
  icon: string
  name: string
  value: string
  link: string
}

const gridList: girdListProps[] = [
  { icon: dist_money, name: '推广佣金', value: '0.00', link: '/brokerage' },
  { icon: dist_order, name: '推广订单', value: '0笔', link: '/promoteOrder' },
  { icon: dist_detail, name: '提现明细', value: '2笔', link: '/cashDetail' },
  { icon: dist_follow, name: '我的粉丝', value: '2人', link: '/myFollow' },
]
const router = useRouter()
const navigate = (url: string) => {
  router.push(url)
}
</script>

<template>
  <div id="distribution">
    <black-header title="分销中心">
      <user-panel />
    </black-header>
    <money-panel>
      <div class="code">
        <span>我的邀请码：rqtga234</span>
        <span>复制</span>
      </div>
    </money-panel>
    <div class="dataGrid">
      <div v-for="i in gridList" :key="i.name" class="item" @click="navigate(i.link)">
        <VanIcon size="24" :name="i.icon" />
        <div class="texts">
          <span v-text="i.name" />
          <span v-text="i.value" />
        </div>
      </div>
    </div>

    <div :style="{ marginTop: '12px' }">
      <van-cell icon="desktop-o" title="操作台" is-link to="/worktop" />
      <van-cell icon="bar-chart-o" title="业绩统计" is-link to="/orderCount" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#distribution {
  .code {
    font-size: 13px;
    padding: 11px 0;

    &>span:last-child {
      color: #009FFF;
      margin-left: 21px;
    }
  }
  .dataGrid {
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;
    background-color: #FFFFFF;

    &>.item:first-child {
      margin-bottom: 30px;
    }

    .item {
      width: 50%;
      display: flex;
      align-items: flex-start;

      .texts {
        display: flex;
        font-size: 13px;
        margin-left: 12px;
        flex-direction: column;

        &>span:first-child {
          font-size: 15px;
          font-weight: bold;
          margin-bottom: 5px;
        }
      }
    }

  }
}
</style>
