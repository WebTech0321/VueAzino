<template>
  <section class="fact-counter">
    <v-container>
      <v-row>
        <v-col
          v-for="(fact, index) in FACT_COUNTER_DATA"
          md="6"
          lg="3"
          class="text-center"
          :key="'fact-counter-key-'+index"
        >
          <h3>
            <VisibilitySensor
              @change="onVisibilityChange"
              :offset="{top: 10}"
              :delayedCall="true"
            >
              <ICountUp :endVal="startCounter ? fact.count : 0" />
            </VisibilitySensor>
          </h3>
          <p>{{fact.text}}</p>
          <a href="#">+</a>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import VisibilitySensor from 'vue-visibility-sensor'
import ICountUp from 'vue-countup-v2'

const FACT_COUNTER_DATA = [
  {
    count: 8860,
    text: 'Fund Raised'
  },
  {
    count: 456,
    text: 'Fund Raised'
  },
  {
    count: 6208,
    text: 'Fund Raised'
  },
  {
    count: 960,
    text: 'Fund Raised'
  }
]

export default {
  name: 'FactCounter',
  components: {
    VisibilitySensor,
    ICountUp
  },

  data () {
    return ({
      FACT_COUNTER_DATA,
      startCounter: false
    })
  },

  methods: {
    onVisibilityChange (isVisible) {
      if (isVisible) {
        this.startCounter = true
      }
    }
  }
}
</script>

<style>
</style>
