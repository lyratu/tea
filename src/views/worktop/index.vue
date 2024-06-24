<script setup lang='ts'>
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}
interface pagesProps {
  icon: string
  name: string
  link: string
  iconColor?: string
}
const pages: pagesProps[] = [
  { icon: 'auditing', iconColor: '#FA6E10', name: '上架审核', link: '/uploadAuditing' },
  { icon: 'moneybag', iconColor: '#47BC7C', name: '提现审核', link: '/cashAuditing' },
  { icon: 'count', iconColor: '#628FFA', name: '小店统计', link: '/shopCount' },
  { icon: 'goods', iconColor: '#DD634F', name: '货品管理', link: '/goodsManage' },
  { icon: 'move', iconColor: '#51E2BF', name: '转场确认', link: '/transferConfirm' },
  { icon: 'number', iconColor: '#9D91B4', name: '设置小店编号', link: '/shopNumber' },
  { icon: 'vip', iconColor: '#6275D8', name: '会员预约开关 ', link: '/vipBooking' },
  { icon: 'wrench', iconColor: '#FEBB22', name: '订单操作 ', link: '/orderOperate' },
  { icon: 'record', iconColor: '#475188', name: '预约记录 ', link: '/bookingRecord' },
  { icon: 'tag', iconColor: '#FF9E4A', name: '特供产品 ', link: '/specialSupply' },
]
</script>

<template>
  <div id="worktop">
    <van-nav-bar title="操作台" left-arrow @click-left="onClickLeft" />
    <van-cell-group>
      <van-cell v-for="page in pages" :key="page.link" :title="page.name" is-link :to="page.link">
        <template #icon>
          <van-icon class-prefix="icon" :name="page.icon" style="margin-right: 8px" :color="page.iconColor" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<style scoped lang='scss'>

</style>
