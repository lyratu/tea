<script setup lang="ts">
import notice from '@/assets/icons/notice.png'

import pay_wait from '@/assets/icons/pay-wait.png'
import pay_finish from '@/assets/icons/pay-finish.png'
import pay_trust from '@/assets/icons/pay-trust.png'

import mall from '@/assets/icons/mall.png'
import special_supply from '@/assets/icons/special-supply.png'
import reserve from '@/assets/icons/reserve.png'

import cover from '@/assets/cover/cover.png'
import shop from '@/assets/cover/shop.png'

interface BtnListProps {
  icon: string
  name: string
  link: string
}

const router = useRouter()

const btnList1: BtnListProps[] = [
  { icon: pay_wait, name: '等待付款', link: '/main/orderList?active=1' },
  { icon: pay_finish, name: '确认收款', link: '/main/orderList?active=2' },
  { icon: pay_trust, name: '委托代卖', link: '/main/orderList?active=3' },
]

const btnList2: BtnListProps[] = [
  { icon: mall, name: '商城', link: '/mall' },
  { icon: special_supply, name: '特供', link: '/goods' },
  { icon: reserve, name: '预约', link: '/booking' },
]

const images: string[] = [
  shop, shop, shop, shop,
]

const navigate = (url: string) => {
  router.push(url)
}
</script>

<template>
  <div id="home">
    <van-nav-bar title="禅茶道" />
    <van-swipe :autoplay="3000" lazy-render height="200" indicator-color="#fff">
      <van-swipe-item v-for="image in images" :key="image">
        <van-image fit="cover" :src="image" width="100%" height="100%" />
      </van-swipe-item>
    </van-swipe>
    <div class="notice">
      <van-icon :name="notice" size="20" />
      <span>欢迎使用我们的产品和服务！</span>
    </div>
    <div class="btnList">
      <span>订单列表</span>
      <div class="list">
        <div v-for="btn in btnList1" :key="btn.name" class="btn" @click="navigate(btn.link)">
          <van-image :src="btn.icon" width="48" height="48" />
          <span v-text="btn.name" />
        </div>
      </div>
    </div>
    <div class="btnList">
      <span>禅茶管</span>
      <div class="list">
        <div v-for="btn in btnList2" :key="btn.name" class="btn" @click="navigate(btn.link)">
          <van-image :src="btn.icon" width="48" height="48" />
          <span v-text="btn.name" />
        </div>
      </div>
      <van-image :src="cover" :style="{ marginTop: '16px' }" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#home {
  --van-swipe-indicator-size: 4px;

  :deep(.van-swipe__indicator--active) {
    width: 16px;
    border-radius: 8px;
  }

  .notice {
    display: flex;
    font-size: 13px;
    color: #333333;
    padding: 10px 16px;
    align-items: center;
    background-color: #FFFFFF;

    span {
      margin-left: 4px;
    }
  }

  .btnList {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    text-align: center;
    background-color: #FFFFFF;

    >span {
      font-size: 16px;
      font-weight: bold;
    }

    .list {
      display: flex;
      align-items: center;
      justify-content: space-around;

      .btn {
        display: flex;
        margin-top: 12px;
        align-items: center;
        flex-direction: column;

        >span {
          font-size: 13px;
          margin-top: 6px;
          color: #13171A;
        }
      }
    }
  }
}
</style>
