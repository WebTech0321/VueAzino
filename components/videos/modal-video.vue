<template>
  <section v-if="isOpenState">
    <div
      :class="classNames.modalVideo"
      tabIndex="-1"
      role="dialog"
      :aria-label="aria.openMessage"
      @click="closeModal"
    >
      <div :class="classNames.modalVideoBody">
        <div :class="classNames.modalVideoInner">
          <div :class="classNames.modalVideoIframeWrap" :style="style">
            <button :class="classNames.modalVideoCloseBtn" :aria-label="aria.dismissBtnMessage" />
            <slot>
              <iframe
                width="460"
                height="230"
                :src="getVideoUrl"
                frame-border="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                :allow-full-screen="allowFullScreen"
                tabIndex="-1"
              />
            </slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ModalVideo',
  props: {
    channel: {
      type: String,
      default: 'youtube'
    },
    isOpen: {
      type: Boolean
    },
    youtube: {
      type: Object,
      default () {
        return {
          autoplay: 1,
          cc_load_policy: 1,
          color: null,
          controls: 1,
          disablekb: 0,
          enablejsapi: 0,
          end: null,
          fs: 1,
          h1: null,
          iv_load_policy: 1,
          list: null,
          listType: null,
          loop: 0,
          modestbranding: null,
          origin: null,
          playlist: null,
          playsinline: null,
          rel: 0,
          showinfo: 1,
          start: 0,
          wmode: 'transparent',
          theme: 'dark',
          mute: 0
        }
      }
    },
    ratio: {
      type: String,
      default: '16:9'
    },
    vimeo: {
      type: Object,
      default () {
        return {
          api: false,
          autopause: true,
          autoplay: true,
          byline: true,
          callback: null,
          color: null,
          height: null,
          loop: false,
          maxheight: null,
          maxwidth: null,
          player_id: null,
          portrait: true,
          title: true,
          width: null,
          xhtml: false
        }
      }
    },
    youku: {
      type: Object,
      default () {
        return {
          autoplay: 1,
          show_related: 0
        }
      }
    },
    allowFullScreen: {
      type: String,
      default: '16:9'
    },
    animationSpeed: {
      default: 300
    },
    classNames: {
      type: Object,
      default () {
        return {
          modalVideoEffect: 'modal-video-effect',
          modalVideo: 'modal-video',
          modalVideoClose: 'modal-video-close',
          modalVideoBody: 'modal-video-body',
          modalVideoInner: 'modal-video-inner',
          modalVideoIframeWrap: 'modal-video-movie-wrap',
          modalVideoCloseBtn: 'modal-video-close-btn'
        }
      }
    },
    aria: {
      type: Object,
      default () {
        return {
          openMessage: 'You just openned the modal video',
          dismissBtnMessage: 'Close the modal by clicking here'
        }
      }
    },
    onClose: {
      type: Function,
      default () {
        return () => {}
      }
    }
  },
  data () {
    return ({
      isOpenState: false
    })
  },
  computed: {
    style () {
      return {
        paddingBottom: this.getPadding(this.ratio)
      }
    }
  },
  watch: {
    isOpen (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isOpenState = this.isOpen
      }
    }
  },

  methods: {
    getPadding (ratio) {
      const arr = ratio.split(':')
      const width = Number(arr[0])
      const height = Number(arr[1])
      const padding = height * 100 / width
      return padding + '%'
    },

    getQueryString (obj) {
      let url = ''
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          if (obj[key] !== null) {
            url += key + '=' + obj[key] + '&'
          }
        }
      }
      return url.substr(0, url.length - 1)
    },

    getYoutubeUrl (youtube, videoId) {
      const query = this.getQueryString(youtube)
      return '//www.youtube.com/embed/' + videoId + '?' + query
    },

    getVimeoUrl (vimeo, videoId) {
      const query = this.getQueryString(vimeo)
      return '//player.vimeo.com/video/' + videoId + '?' + query
    },

    getYoukuUrl (youku, videoId) {
      const query = this.getQueryString(youku)
      return '//player.youku.com/embed/' + videoId + '?' + query
    },

    getVideoUrl () {
      if (this.channel === 'youtube') {
        return this.getYoutubeUrl(this.youtube, this.videoId)
      } else if (this.channel === 'vimeo') {
        return this.getVimeoUrl(this.vimeo, this.videoId)
      } else if (this.channel === 'youku') {
        return this.getYoukuUrl(this.youku, this.videoId)
      } else if (this.channel === 'custom') {
        return this.url
      }
    },
    openModal () {
      this.isOpenState = true
    },
    closeModal () {
      this.isOpenState = false
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    }
  }
}
</script>

<style>
</style>
