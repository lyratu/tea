<script setup lang='ts'>
import { areaList } from '@vant/area-data'
const router = useRouter()
const onClickLeft = () => {
  router.go(-1)
}

const formData = reactive({
  name: '张三',
  phone: '15629122270',
  area: '湖北省武汉市东西湖区',
  address: '长航蓝晶国际七栋512',
  isDefault: false,
})

const popup = ref(null)
const areaCancel = () => {
  popup.value.closePopup()
}
const areaConfirm = (area: any) => {
  let areaStr = ''
  area.selectedOptions.forEach((element) => {
    areaStr += element.text
  })
  const formArea = toRef(formData, 'area')
  formArea.value = areaStr
  areaCancel()
}
</script>

<template>
  <div id="address">
    <van-nav-bar title="地址" left-arrow :border="false" @click-left="onClickLeft" />
    <van-cell-group>
      <van-field v-model="formData.name" :border="false" label="收货人" placeholder="请输入收货人" />
      <van-field v-model="formData.phone" :border="false" label="手机号码" placeholder="请输入手机号码" />
      <select-popup ref="popup" title="所在区域" tips="请选择所在区域" :value="formData.area">
        <van-area title="请选择" :area-list="areaList" @confirm="areaConfirm" @cancel="areaCancel" />
      </select-popup>
      <van-field v-model="formData.address" label="详细地址" placeholder="请输入详细地址" />
      <van-cell center title="设为默认地址">
        <template #right-icon>
          <van-switch v-model="formData.isDefault" size="20" />
        </template>
      </van-cell>
    </van-cell-group>
    <div class="bottom_btn">
      <VanButton color="#C53032" round block text="保存" />
    </div>
  </div>
</template>

<style scoped lang='scss'>
#address {
  .bottom_btn {
    left: 0;
    bottom: 0;
    width: 100%;
    position: fixed;
    padding: 10px 16px;
    background-color: #FFFFFF;
  }
}
</style>
