<template>
  <div>
    <HeaderOne />
    <StickyHeader />
    <PageHeader title="News Details" crumbTitle="News" />
    <BlogDetails />
    <Footer />
  </div>
</template>

<script>
import PageHeader from '~/components/page-header'
import HeaderOne from '~/components/header/header-one'
import StickyHeader from '~/components/header/sticky-header'
import BlogDetails from '~/components/blog-details'
import Footer from '~/components/footer'

export default {
  components: {
    PageHeader,
    HeaderOne,
    StickyHeader,
    BlogDetails,
    Footer
  },
  head () {
    return {
      title: 'News Details'
    }
  }
}
</script>
