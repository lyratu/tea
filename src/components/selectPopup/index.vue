<script setup lang='ts'>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  border: {
    type: Boolean,
    default: false,
  },
  tips: {
    type: String,
  },
  value: {
    type: String,
  },
})
const show = ref(false)

const showPopup = () => {
  show.value = true
}

const closePopup = () => {
  show.value = false
}

defineExpose({
  closePopup,
})
</script>

<template>
  <van-cell
    :class="{ recorded: value }" is-link :title="props.title" :border="props.border"
    :value="value ? value : props.tips" @click="showPopup"
  >
    <template #right-icon>
      <van-icon name="arrow-down" size="20" color="#999999" />
    </template>
  </van-cell>
  <van-popup v-model:show="show" position="bottom" :style="{ height: '50%' }">
    <slot />
  </van-popup>
</template>

<style scoped lang='scss'>
.recorded :deep(.van-cell__value) {
  color: var(--van-field-input-text-color) !important;
}

:deep(.van-cell__title) {
  flex: none;
  flex-shrink: 0;
  width: 86.8px;
  margin-right: var(--van-field-label-margin-right);
}

:deep(.van-cell__value) {
  color: var(--van-gray-5);
  text-align: left !important;
}
</style>
