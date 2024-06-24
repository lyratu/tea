<script setup lang="ts">
import person_payed from '@/assets/icons/person-payed.png'
import person_confirm from '@/assets/icons/person-confirm.png'
import person_proxy from '@/assets/icons/person-proxy.png'

interface btnListProps {
  name: string
  icon: string
  link: string
}
const btnList: btnListProps[] = [
  { name: '我已付款', icon: person_payed, link: '/main/orderList?active=1' },
  { name: '确认收款', icon: person_confirm, link: '/main/orderList?active=2' },
  { name: '委托代卖', icon: person_proxy, link: '/main/orderList?active=3' },
]
const router = useRouter()
const navigate = (url: string) => {
  router.push(url)
}
</script>

<template>
  <div id="person">
    <black-header title="个人中心">
      <user-panel is-person />
    </black-header>
    <money-panel is-person />
    <div class="btnGroup">
      <span>我的订单</span>
      <div class="items">
        <div v-for="btn in btnList" :key="btn.name" class="item" @click="navigate(btn.link)">
          <VanIcon size="40" :name="btn.icon" />
          <span v-text="btn.name" />
        </div>
      </div>
    </div>
    <div class="navList">
      <van-cell icon-prefix="icon" icon="password" title="修改密码" is-link to="/editPassword" />
      <van-cell icon="location-o" title="收货地址" is-link to="/addressList" />
      <van-cell icon="bill-o" title="收款信息" is-link to="/paymentInfo" />
      <van-cell icon-prefix="icon" icon="exit" title="退出登陆" is-link />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#person {
  .btnGroup {
    padding: 16px;
    background-color: #FFFFFF;

    >span {
      display: block;
      color: #000000;
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 10px;
    }

    .items {
      display: flex;
      justify-content: space-around;

      .item {
        font-size: 13px;
        color: #13171A;
        display: flex;
        align-items: center;
        flex-direction: column;

      }
    }
  }

  .navList {
    margin-top: 12px;
  }
}
</style>
