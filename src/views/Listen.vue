<template>
  <div class="listen body-content" >

    <!--<video src="//xsj-video.699pic.com/01/5o/ab.mp4" autoplay style="width: 300px;"></video>-->



    <h5 class="border-bottom text-center pb-1 m-0 font-md">人员监控</h5>
    <div class="mt-1 rounded" style="height: 600px; background-color:rgba(28,39,57,0.58);">
      <span
        v-if="isLoading"
        class="font-md text-white d-flex a-center j-center"
        style="width: 100%; height: 100%;"
      >
        视频资源正在请求中...
      </span>

      <listen-video
        v-else
        :videoData="videoData"
        :showCount="currentShowCount"
      />
    </div>
    <div class="mt-2 d-flex a-center">
      <span>通道：</span>

      <el-select style="width: 88px;"  v-model="currentShowCount"  size="mini">
        <el-option
          v-for="option in options"
          :key="option.count"
          :label="option.name"
          :value="option.count"
        />
      </el-select>
    </div>


  </div>
</template>

<script>

  const mockPoster = require('@/assets/images/poster.jpg')

	const mockData = [
    { id: 1, src: '//xsj-video.699pic.com/01/5o/ab.mp4', mockPoster },
    { id: 2, src: '//xsj-video.699pic.com/01/5o/ab.mp4', mockPoster },
    { id: 3, src: '//xsj-video.699pic.com/01/5o/ab.mp4', mockPoster },
    { id: 4, src: '//xsj-video.699pic.com/01/5o/ab.mp4', mockPoster },
    { id: 5, src: '//xsj-video.699pic.com/01/5o/ab.mp4', mockPoster },
    { id: 6, src: '//xsj-video.699pic.com/01/5o/ab.mp4', mockPoster }
  ]

  import {
	  ListenVideo
  } from '../components'

	export default {
  	components: {
		  ListenVideo
    },
		name: "Listen.vue",
    data() {
  		return {
  			// 是否请求数据中
  			isLoading: false,
  			// 视频数据
        videoData: [],
        limit: 4,
        // 当前显示数量
        currentShowCount: 1,
        options: [
          { count: 1, name: 1 },
          { count: 2, name: 2 },
          { count: 4, name: 4 },
          { count: 6, name: 6 },
        ],
      }
    },
    created() {
  		this.isLoading = true
  		setTimeout(() => {
  			this.videoData = mockData
			  this.isLoading = false
      }, 1500)
    }
	}
</script>

<style scoped>

</style>