<template>
  <div>
    <HeaderOne />
    <StickyHeader />
    <PageHeader :title="$t('title.volunteer')" crumbTitle="Our Volunteers" />
    <TeamPage />
    <Footer />
  </div>
</template>

<script>
import PageHeader from '~/components/page-header'
import HeaderOne from '~/components/header/header-one'
import StickyHeader from '~/components/header/sticky-header'
import TeamPage from '~/components/team/team-page'
import Footer from '~/components/footer'

export default {
  components: {
    PageHeader,
    HeaderOne,
    StickyHeader,
    TeamPage,
    Footer
  },
  head () {
    return {
      title: this.$t('title.volunteer')
    }
  }
}
</script>
