<template>
  <div>
    <HeaderOne />
    <StickyHeader />
    <PageHeader title="Causes Page" crumbTitle="Causes" />
    <CausesPage />
    <Footer />
  </div>
</template>

<script>
import PageHeader from '~/components/page-header'
import HeaderOne from '~/components/header/header-one'
import StickyHeader from '~/components/header/sticky-header'
import CausesPage from '~/components/causes/causes-page'
import Footer from '~/components/footer'

export default {
  components: {
    PageHeader,
    HeaderOne,
    StickyHeader,
    CausesPage,
    Footer
  },
  head () {
    return {
      title: 'Causes Page'
    }
  }
}
</script>
