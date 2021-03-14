<template>
  <section class="contact-page pt-120 pb-80">
    <v-container>
      <v-row>
        <v-col lg="5">
          <div class="contact-page__content mb-40">
            <BlockTitle
              title="Feel free to write us <br/> a message."
              tagLine="Contact With Us"
            />
            <p class="block-text mb-30 pr-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Have you done google research which works all the
              time.
            </p>
            <div class="footer-social black-hover">
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
          </div>
        </v-col>
        <v-col lg="7">
          <form class="contact-form-validated contact-page__form form-one mb-40">
            <div class="form-group">
              <div class="form-control">
                <label htmlFor="name" class="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div class="form-control">
                <label htmlFor="email" class="sr-only">
                  email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                />
              </div>
              <div class="form-control">
                <label htmlFor="phone" class="sr-only">
                  phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div class="form-control">
                <label htmlFor="subject" class="sr-only">
                  subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div class="form-control form-control-full">
                <label htmlFor="message" class="sr-only">
                  message
                </label>
                <textarea
                  name="message"
                  placeholder="Write a Message"
                  id="message"
                ></textarea>
              </div>
              <div class="form-control form-control-full">
                <button type="submit" class="thm-btn ">
                  Submit Message
                </button>
              </div>
            </div>
          </form>
          <div class="result"></div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import BlockTitle from '../block-title'
export default {
  name: 'ContactFormOne',
  components: {
    BlockTitle
  },

  data () {
    return ({
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
