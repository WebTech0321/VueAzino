<template>
  <div>
    <PageHeader :title="$t('title.about')" crumb-title="About" />
    <HeaderOne />
    <StickyHeader />
    <AboutOne />
    <BrandCarousel extra-class="client-carousel__has-border-top" />
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
import TeamHome from '~/components/team/team-home.vue'
import VideoCard from '~/components/videos/video-card.vue'
import TestimonialsOne from '~/components/testimonials/testimonials-one.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    PageHeader,
    HeaderOne,
    StickyHeader,
    AboutOne,
    BrandCarousel,
    AboutCounter,
    TeamHome,
    VideoCard,
    TestimonialsOne,
    Footer
  },
  head () {
    return {
      title: this.$t('title.about')
    }
  }
}
</script>
