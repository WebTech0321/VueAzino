<template>
  <section class="call-to-action">
    <v-container>
      <v-row class="align-center">
        <v-col xl="9" lg="8">
          <div class="call-to-action__content">
            <div class="call-to-action__icon">
              <i class="azino-icon-support"></i>
            </div>
            <h3>Let’s make a difference in <br /> the lives of others</h3>
          </div>
        </v-col>
        <v-col
          xl="3"
          lg="3"
          class="d-flex justify-start justify-md-center justify-xl-end justify-lg-end"
        >
          <nuxt-link to="/become-volunteer" class="thm-btn ">
            Become a Volunteer
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'CallToAction'
}
</script>
