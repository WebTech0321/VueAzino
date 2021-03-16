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
    <GoogleMap extra-class="home" />
    <BrandCarousel extra-class="client-carousel__has-top-shadow" />
    <Footer />
  </div>
</template>

<script>
import HeaderOne from '~/components/header/header-one'
import StickyHeader from '~/components/header/sticky-header'
import MainSlider from '~/components/slider/main-slider'
import VideoCardTwo from '~/components/videos/video-card-two'
import ServiceOne from '~/components/services/service-one'
import CausesHome from '~/components/causes/causes-home'
import CallToActionTwo from '~/components/call-to-action/call-to-action-two'
import GalleryTestimonials from '~/components/gallery/gallery-testimonials'
import GalleryHome from '~/components/gallery/gallery-home'
import TestimonialsTwo from '~/components/testimonials/testimonials-two'
import TeamHome from '~/components/team/team-home'
import BlogHome from '~/components/blog/blog-home'
import CallToAction from '~/components/call-to-action/call-to-action'
import GoogleMap from '~/components/google-map'
import BrandCarousel from '~/components/brand-carousel'
import Footer from '~/components/footer'

export default {
  components: {
    HeaderOne,
    StickyHeader,
    MainSlider,
    VideoCardTwo,
    ServiceOne,
    CausesHome,
    CallToActionTwo,
    GalleryTestimonials,
    GalleryHome,
    TestimonialsTwo,
    TeamHome,
    BlogHome,
    CallToAction,
    GoogleMap,
    BrandCarousel,
    Footer
  },
  head () {
    return {
      title: this.$t('title.homeone')
    }
  }
}
</script>
