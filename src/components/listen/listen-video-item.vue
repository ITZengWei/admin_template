<template>

  <div class="listen-video-item" :class="layoutClass">
    <video
      ref="video"
      :src="videoItem.src"
      :poster="videoItem.mockPoster"
      height="100%"
      width="100%"
      loop
    />

    <span class="listen-video-item-ctr" @click="toggleStatus">
      <i
        :class="isPaused ? 'el-icon-video-play' : 'el-icon-video-pause'"
        class="font-big text-white "
      />
    </span>
  </div>

</template>

<script>
	export default {
		name: "listen-video-item",
    data() {
			return {
				// 是否为暂停 默认全部播放
				isPaused: false
      }
    },
		props: {
			videoItem: {
				type: Object,
				isRequired: true
			},
			layoutClass: {
				type: String,
				isRequired: true
      }
		},
		methods: {
			toggleStatus() {
				let { video } = this.$refs
				// 当前为暂停状态 => 播放
        if (this.isPaused) {
          video.play()

        // 当前为播放状态 => 暂停
        } else {
          video.pause()
        }

        this.isPaused = video.paused
			}
		},
    mounted() {
			// 初始化暂停
			let { paused } = this.$refs.video
      this.isPaused = paused
    }
	}
</script>

<style scoped lang="less">

  .listen-video-item {
    box-sizing: border-box;
    padding: 5px;
    position: relative;

    &-one {
      overflow: hidden;
      height: 600px;
      width: 100%;
    }

    &-two {
      overflow: hidden;
      height: 600px;
      width: 50%;
    }

    &-four {
      overflow: hidden;
      height: 300px;
      width: 50%;
    }

    &-six {
      overflow: hidden;
      height: 300px;
      width: 33.333%;
    }



    video {
      display: block;
      border: 2px solid #04A7F1;
      padding: 5px;
      box-sizing: border-box;
      border-radius: 7px;
    }

    &-ctr {
      position: absolute;
      left: 50%;
      top: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 40px;
      border-radius: 7px;
      background-color: #939599;
      transform: translate(-50%, -50%);
      cursor: pointer;
      opacity: 0;
      transition: opacity .3s ease;
    }

    &:hover {
      .listen-video-item-ctr {
        opacity: .8;
      }
    }
  }


</style>