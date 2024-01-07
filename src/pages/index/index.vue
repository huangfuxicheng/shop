<script setup lang="ts">
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import { getHomeBanner, getHomeCategory, getHomeGoodsGuessLike, getHomeHot } from '@/services/home'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from '@/pages/index/components/CategoryPanel.vue'
import HotPanel from '@/pages/index/components/HotPanel.vue'
import XtxGuess from '@/components/XtxGuess.vue'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBanner()
  bannerList.value = res.result
}

const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryData = async () => {
  const res = await getHomeCategory()
  categoryList.value = res.result
}

const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHot()
  hotList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
</script>

<template>
  <CustomNavbar />
  <scroll-view class="scroll-view" scroll-y>
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotList" />
    <XtxGuess />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex:1
}
</style>
