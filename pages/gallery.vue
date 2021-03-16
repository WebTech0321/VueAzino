<template>
  <div>
    <HeaderOne />
    <StickyHeader />
    <PageHeader :title="$t('title.gallery')" crumb-title="Gallery" />
    <GalleryPage />
    <Footer />
  </div>
</template>

<script>
import PageHeader from '~/components/page-header'
import HeaderOne from '~/components/header/header-one'
import StickyHeader from '~/components/header/sticky-header'
import GalleryPage from '~/components/gallery/gallery-page'
import Footer from '~/components/footer'

export default {
  components: {
    PageHeader,
    HeaderOne,
    StickyHeader,
    GalleryPage,
    Footer
  },
  head () {
    return {
      title: this.$t('title.gallery')
    }
  }
}
</script>
