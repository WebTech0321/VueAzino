<template>
  <div>
    <HeaderOne />
    <StickyHeader />
    <PageHeader :title="$t('title.becomevolunteer')" crumb-title="Become Volunteer" />
    <VolunteerForm />
    <BrandCarousel extra-class="client-carousel__has-border-top" />
    <Footer />
  </div>
</template>

<script>
import PageHeader from '~/components/page-header'
import HeaderOne from '~/components/header/header-one'
import StickyHeader from '~/components/header/sticky-header'
import BrandCarousel from '~/components/brand-carousel'
import VolunteerForm from '~/components/team/volunteer-form'
import Footer from '~/components/footer'

export default {
  components: {
    PageHeader,
    HeaderOne,
    StickyHeader,
    VolunteerForm,
    BrandCarousel,
    Footer
  },
  head () {
    return {
      title: this.$t('title.becomevolunteer')
    }
  }
}
</script>
