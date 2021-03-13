<template>
  <section class="become-volunteer pt-120 pb-80">
    <v-container>
      <v-row>
        <v-col lg="5">
          <div class="become-volunteer__content mb-40">
            <div class="block-title">
              <p>
                <img :src="heart" width="15" alt="" />
                Join Us Now
              </p>
              <h3>
                Register yourself as <br /> our volunteer.
              </h3>
            </div>
            <p class="block-text mb-40 pr-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Have you done google research which works all the
              time.
            </p>
            <ul class="list-unstyled ul-list-one">
              <li>Nsectetur cing elit.</li>
              <li>Suspe ndisse suscipit sagittis leo.</li>
              <li>Entum estibulum dignissim posuere.</li>
            </ul>
          </div>
        </v-col>
        <v-col lg="7">
          <form class="contact-form-validated become-volunteer__form form-one mb-40">
            <div class="form-group">
              <div class="form-control">
                <label htmlFor="name" class="sr-only">
                  name
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
                <label htmlFor="date-of-birth" class="sr-only">
                  date of birth
                </label>
                <input
                  type="text"
                  name="date"
                  id="date-of-birth"
                  placeholder="Date of Birth"
                />
              </div>
              <div class="form-control">
                <label htmlFor="address" class="sr-only">
                  address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                />
              </div>
              <div class="form-control">
                <label htmlFor="occupation" class="sr-only">
                  occupation
                </label>
                <input
                  type="text"
                  name="occupation"
                  id="occupation"
                  placeholder="Occupation"
                />
              </div>
              <div class="form-control form-control-full">
                <label htmlFor="message" class="sr-only">
                  message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write a Message"
                ></textarea>
              </div>
              <div class="form-control form-control-full">
                <button type="submit" class="thm-btn ">
                  Register Now
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
import heart from '../../assets/images/shapes/heart-2-1.png'

export default {
  name: 'VolunteerForm',
  components: {
  },

  data () {
    return ({
      heart
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
