<template>
  <div class="listen-video">
    <listen-video-item
      v-for="videoItem in showVideoData"
      :key="videoItem.id"
      :videoItem="videoItem"
      :layoutClass="layoutClass"
    />
  </div>

</template>

<script>

	import ListenVideoItem from './listen-video-item'


	export default {
		components: {
			ListenVideoItem
		},
		name: "listen-video",
    data() {
			return {
      }
    },
		props: {
			videoData: {
				type: Array,
				default: () => ([])
			},
			showCount: {
				type: Number,
        isRequired: true
      }
		},
    computed: {
			layoutClass() {
				switch (this.showCount) {
					case 1 :
						return 'listen-video-item-one'
					case 2 :
						return 'listen-video-item-two'
					case 4 :
						return 'listen-video-item-four'
					case 6 :
						return 'listen-video-item-six'
				}
			},
      showVideoData() {
				return this.videoData.slice(0, this.showCount)
      }
    }
	}
</script>

<style lang="less">
  .listen-video {
    height: 600px;
    display: flex;
    flex-wrap: wrap;
  }

</style>