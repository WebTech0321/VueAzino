<template>
  <div>
    <HeaderOne />
    <StickyHeader />
    <PageHeader :title="$t('title.news')" crumb-title="News" />
    <BlogPage />
    <Footer />
  </div>
</template>

<script>
import PageHeader from '~/components/page-header'
import HeaderOne from '~/components/header/header-one'
import StickyHeader from '~/components/header/sticky-header'
import BlogPage from '~/components/blog/blog-page'
import Footer from '~/components/footer'

export default {
  components: {
    PageHeader,
    HeaderOne,
    StickyHeader,
    BlogPage,
    Footer
  },
  head () {
    return {
      title: this.$t('title.news')
    }
  }
}
</script>
