<template>
  <div>
    <HeaderOne />
    <StickyHeader />
    <MainSlider />
    <VideoCardTwo />
    <ServiceOne />
    <AboutCounter />
    <CausesHome />
    <CallToActionTwo />
    <DonationOptions />
    <TeamHome />
    <GalleryTestimonials>
      <GalleryHome />
      <TestimonialsTwo />
    </GalleryTestimonials>
    <BlogHome />
    <CallToAction />
    <GoogleMap extraClass="home" />
    <BrandCarousel extraClass="client-carousel__has-top-shadow" />
    <Footer />
  </div>
</template>

<script>
import HeaderOne from '~/components/header/header-one.vue'
import StickyHeader from '~/components/header/sticky-header.vue'
import MainSlider from '~/components/slider/main-slider.vue'
import TeamHome from '~/components/team/team-home.vue'
import GoogleMap from '~/components/google-map'
import BrandCarousel from '~/components/brand-carousel.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    HeaderOne,
    StickyHeader,
    MainSlider,
    TeamHome,
    GoogleMap,
    BrandCarousel,
    Footer
  },
  head () {
    return {
      title: 'Home One'
    }
  }
}
</script>
