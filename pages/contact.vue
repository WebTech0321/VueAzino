<template>
  <div>
    <HeaderOne />
    <StickyHeader />
    <PageHeader :title="$t('title.contact')" crumb-title="Contact Us" />
    <ContactFormOne />
    <ContactCardCarousel />
    <GoogleMap extra-class="contact" />
    <Footer />
  </div>
</template>

<script>
import HeaderOne from '~/components/header/header-one'
import StickyHeader from '~/components/header/sticky-header'
import PageHeader from '~/components/page-header'
import GoogleMap from '~/components/google-map'
import ContactFormOne from '~/components/contact/contact-form-one'
import ContactCardCarousel from '~/components/contact/contact-card-carousel'
import Footer from '~/components/footer'

export default {
  components: {
    PageHeader,
    HeaderOne,
    StickyHeader,
    GoogleMap,
    ContactFormOne,
    ContactCardCarousel,
    Footer
  },
  head () {
    return {
      title: this.$t('title.contact')
    }
  }
}
</script>
