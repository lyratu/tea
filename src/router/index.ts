// https://router.vuejs.org/zh/
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 导入路由组件
import main from '@/views/index.vue'
import home from '@/views/home/index.vue'
import orderList from '@/views/orderList/index.vue'
import person from '@/views/person/index.vue'
import distribution from '@/views/distribution/index.vue'
import mall from '@/views/mall/index.vue'
import booking from '@/views/booking/index.vue'
import goods from '@/views/goods/index.vue'
import orderDetail from '@/views/orderDetail/index.vue'
import address from '@/views/address/index.vue'
import brokerage from '@/views/brokerage/index.vue'
import cash from '@/views/cash/index.vue'
import cashDetail from '@/views/cashDetail/index.vue'
import promoteOrder from '@/views/promoteOrder/index.vue'
import myFollow from '@/views/myFollow/index.vue'
import worktop from '@/views/worktop/index.vue'
import orderCount from '@/views/orderCount/index.vue'
import addressList from '@/views/addressList/index.vue'
import editPassword from '@/views/editPassword/index.vue'
import login from '@/views/login/index.vue'
import register from '@/views/register/index.vue'
import uploadAuditing from '@/views/uploadAuditing/index.vue'
import cashAuditing from '@/views/cashAuditing/index.vue'
import goodsManage from '@/views/goodsManage/index.vue'
import paymentInfo from '@/views/paymentInfo/index.vue'
import bookingRecord from '@/views/bookingRecord/index.vue'
import shopNumber from '@/views/shopNumber/index.vue'
import transferConfirm from '@/views/transferConfirm/index.vue'
import orderOperate from '@/views/orderOperate/index.vue'
import specialSupply from '@/views/specialSupply/index.vue'
import shopCount from '@/views/shopCount/index.vue'
import vipBooking from '@/views/vipBooking/index.vue'

NProgress.configure({ showSpinner: true })

// 定义路由，每个路由都需要映射到一个组件
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    component: main,
    redirect: '/main/home',
    children: [{
      path: 'home',
      component: home,
    }, {
      path: 'orderList',
      component: orderList,
    }, {
      path: 'person',
      component: person,
    }, {
      path: 'distribution',
      component: distribution,
    }],
  },
  {
    path: '/mall',
    component: mall,
  },
  {
    path: '/booking',
    component: booking,
  },
  {
    path: '/goods',
    component: goods,
  },
  {
    path: '/orderDetail',
    component: orderDetail,
  }, {
    path: '/address',
    component: address,
  }, {
    path: '/brokerage',
    component: brokerage,
  }, {
    path: '/cash',
    component: cash,
  }, {
    path: '/cashDetail',
    component: cashDetail,
  }, {
    path: '/promoteOrder',
    component: promoteOrder,
  }, {
    path: '/myFollow',
    component: myFollow,
  }, {
    path: '/worktop',
    component: worktop,
  }, {
    path: '/orderCount',
    component: orderCount,
  }, {
    path: '/addressList',
    component: addressList,
  }, {
    path: '/editPassword',
    component: editPassword,
  }, {
    path: '/register',
    component: register,
  }, {
    path: '/login',
    component: login,
  }, {
    path: '/uploadAuditing',
    component: uploadAuditing,
  }, {
    path: '/cashAuditing',
    component: cashAuditing,
  }, {
    path: '/goodsManage',
    component: goodsManage,
  }, {
    path: '/paymentInfo',
    component: paymentInfo,
  }, {
    path: '/bookingRecord',
    component: bookingRecord,
  }, {
    path: '/shopNumber',
    component: shopNumber,
  }, {
    path: '/transferConfirm',
    component: transferConfirm,
  }, {
    path: '/orderOperate',
    component: orderOperate,
  }, {
    path: '/specialSupply',
    component: specialSupply,
  }, {
    path: '/shopCount',
    component: shopCount,
  }, {
    path: '/vipBooking',
    component: vipBooking,
  },

]

// 创建路由实例并传递 `routes` 配置
const router = createRouter({
  history: createWebHashHistory(process.env.VUE_APP_PUBLIC_PATH),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

router.beforeEach((_to, _from, next) => {
  NProgress.start() // start progress bar
  next()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})

// 导出路由实例，并在 `main.ts` 挂载
export default router
