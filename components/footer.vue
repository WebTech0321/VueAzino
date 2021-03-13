<template>
  <section class="site-footer">
    <div class="main-footer pt-142 pb-80">
      <v-container>
        <v-row>
          <v-col lg="3" md="6" sm="12">
            <div class="footer-widget mb-40 footer-widget__about">
              <NuxtLink to="/" aria-label="logo image">
                <img
                  :src="logoLight"
                  class="footer-widget__logo"
                  width="101"
                  alt=""
                />
              </NuxtLink>
              <p>
                Lorem ipsum dolor sit amet consect etur adi pisicing elit sed.
              </p>
              <ul class="list-unstyled footer-widget__contact">
                <li>
                  <a href="#">
                    <i class="azino-icon-telephone"></i>666 888 0000
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="azino-icon-email"></i>needhelp@azino.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="azino-icon-pin"></i>88 Broklyn Golden
                    Street, USA
                  </a>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <div class="footer-widget footer-widget__link mb-40">
              <h3 class="footer-widget__title">Explore</h3>
              <ul class="list-unstyled footer-widget__link-list">
                <li>
                  <NuxtLink to="/causes">
                    <a>Our Causes</a>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/about">
                    <a>About us</a>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/news">
                    <a>New Campaign</a>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/events">
                    <a>Upcoming Events</a>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/about">
                    <a>Site Map</a>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact">
                    <a>Help</a>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/causes">
                    <a>Donate</a>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact">
                    <a>Contact us</a>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact">
                    <a>Terms</a>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <div class="footer-widget mb-40 footer-widget__blog">
              <h3 class="footer-widget__title">Blog</h3>
              <ul class="list-unstyled footer-widget__blog">
                <li>
                  <img :src="blogPost1" alt="" />
                  <p>22 May, 2020</p>
                  <h3>
                    <NuxtLink to="/news-details">
                      <a>You can help the poor in need</a>
                    </NuxtLink>
                  </h3>
                </li>
                <li>
                  <img :src="blogPost2" alt="" />
                  <p>22 May, 2020</p>
                  <h3>
                    <NuxtLink to="/news-details">
                      <a>Rise fund for Healthy Food</a>
                    </NuxtLink>
                  </h3>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col lg="3" md="6" sm="12">
            <div class="footer-widget mb-40 footer-widget__newsletter">
              <h3 class="footer-widget__title">Newletter</h3>
              <p>Signup now to get daily latest news & updates from us</p>
              <form
                data-url="https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&id=cc0ee8140e"
                class="footer-widget__newsletter-form mc-form"
              >
                <label htmlFor="mc-email" class="sr-only">
                  Email Address
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  id="mc-email"
                  class=""
                  placeholder="Email address"
                />
                <div class="footer-widget__newsletter-btn-wrap d-flex justify-end">
                  <button type="submit" class="thm-btn ">
                    Subscribe Now
                  </button>
                </div>
              </form>
              <div class="mc-form__response"></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="footer-bottom">
      <v-container>
        <div class="scroll-to-top" v-scroll-to="'#wrapper'">
          <i class="far fa-angle-up" ></i>
        </div>
        <p>© Copyright 2020 </p>
        <div class="footer-social">
          <a href="#" aria-label="twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="facebook">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="#" aria-label="pinterest">
            <i class="fab fa-pinterest-p"></i>
          </a>
          <a href="#" aria-label="instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </v-container>
    </div>
  </section>
</template>

<script>
import logoLight from '../assets/images/logo-light.png'
import blogPost1 from '../assets/images/resources/footer-img-1-1.jpg'
import blogPost2 from '../assets/images/resources/footer-img-1-2.jpg'

export default {
  name: 'Footer',
  components: {
  },

  data () {
    return ({
      logoLight,
      blogPost1,
      blogPost2
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
