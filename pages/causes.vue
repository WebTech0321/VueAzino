<template>
  <div>
    <HeaderOne />
    <StickyHeader />
    <PageHeader :title="$t('title.cause')" crumb-title="Causes" />
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
      title: this.$t('title.cause')
    }
  }
}
</script>
