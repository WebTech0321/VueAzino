<template>
  <div>
    <HeaderOne />
    <StickyHeader />
    <PageHeader title="Become a Volunteer" crumbTitle="Become Volunteer" />
    <VolunteerForm />
    <BrandCarousel extraClass="client-carousel__has-border-top" />
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
      title: 'Become a Volunteer'
    }
  }
}
</script>
