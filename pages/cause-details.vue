<template>
  <div>
    <HeaderOne />
    <StickyHeader />
    <PageHeader :title="$t('title.causedetails')" crumbTitle="Cause Details" />
    <CauseContent />
    <Footer />
  </div>
</template>

<script>
import PageHeader from '~/components/page-header'
import HeaderOne from '~/components/header/header-one'
import StickyHeader from '~/components/header/sticky-header'
import CauseContent from '~/components/causes/cause-content'
import Footer from '~/components/footer'

export default {
  components: {
    PageHeader,
    HeaderOne,
    StickyHeader,
    CauseContent,
    Footer
  },
  head () {
    return {
      title: this.$t('title.causedetails')
    }
  }
}
</script>
