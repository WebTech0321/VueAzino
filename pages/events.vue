<template>
  <div>
    <HeaderOne />
    <StickyHeader />
    <PageHeader :title="$t('title.event')" crumbTitle="Events" />
    <EventPage />
    <Footer />
  </div>
</template>

<script>
import PageHeader from '~/components/page-header'
import HeaderOne from '~/components/header/header-one'
import StickyHeader from '~/components/header/sticky-header'
import EventPage from '~/components/event/event-page'
import Footer from '~/components/footer'

export default {
  components: {
    PageHeader,
    HeaderOne,
    StickyHeader,
    EventPage,
    Footer
  },
  head () {
    return {
      title: this.$t('title.event')
    }
  }
}
</script>
