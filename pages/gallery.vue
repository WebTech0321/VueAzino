<template>
  <div>
    <HeaderOne />
    <StickyHeader />
    <PageHeader title="Gallery Page" crumbTitle="Gallery" />
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
      title: 'Gallery Page'
    }
  }
}
</script>
