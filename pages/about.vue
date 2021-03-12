<template>
  <div>
    <PageHeader title="About Page" crumbTitle="About" />
    <HeaderOne />
    <StickyHeader />
    <AboutOne />
    <BrandCarousel extraClass="client-carousel__has-border-top" />
    <AboutCounter />
    <TeamHome />
    <VideoCard />
    <TestimonialsOne />
    <Footer />
  </div>
</template>

<script>
import PageHeader from '~/components/page-header.vue'
import HeaderOne from '~/components/header/header-one.vue'
import StickyHeader from '~/components/header/sticky-header.vue'
import AboutOne from '~/components/about/about-one.vue'
import AboutCounter from '~/components/about/about-counter.vue'
import BrandCarousel from '~/components/brand-carousel.vue'

export default {
  components: {
    PageHeader,
    HeaderOne,
    StickyHeader,
    AboutOne,
    BrandCarousel,
    AboutCounter
  },
  head () {
    return {
      title: 'About Page'
    }
  }
}
</script>
