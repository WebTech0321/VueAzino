<template>
  <section
    class="event-home-two pb-120"
    :style="{backgroundImage: 'url('+bgImage+')'}"
  >
    <v-container>
      <v-row class=" align-start align-md-center flex-column flex-md-row mb-60">
        <v-col lg="7">
          <div class="block-title">
            <p>
              <img :src="heart" width="15" alt="" />
              Latest Event List
            </p>
            <h3>Checkout our upcoming <br /> full event list.</h3>
          </div>
        </v-col>
        <v-col lg="5" class="d-flex">
          <div class="my-auto">
            <p class="block-text pr-10 mb-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Have you done google research which works all the
              time.
            </p>
          </div>
        </v-col>
      </v-row>
      <div class="event-grid">
        <EventCard v-for="(event,index) in EVENT_HOME_TWO_DATA" :data="event" :key="'event-card-key-' + index" />
      </div>
    </v-container>
  </section>
</template>

<script>
import bgImage from '../../assets/images/shapes/event-map-1-2.png'
import image1 from '../../assets/images/events/event-1-1.jpg'
import image2 from '../../assets/images/events/event-1-2.jpg'
import image3 from '../../assets/images/events/event-1-3.jpg'
import image4 from '../../assets/images/events/event-1-4.jpg'
import heart from '../../assets/images/shapes/heart-2-1.png'
import EventCard from './event-card'

const EVENT_HOME_TWO_DATA = [
  {
    image: image1,
    title: "Help for needy people",
    date: "20 May",
    time: "9:00am 02:00pm",
    location: "New York",
    link: "/event-details"
  },
  {
    image: image2,
    title: "Help for needy people",
    date: "20 May",
    time: "9:00am 02:00pm",
    location: "New York",
    link: "/event-details"
  },
  {
    image: image3,
    title: "Help for needy people",
    date: "20 May",
    time: "9:00am 02:00pm",
    location: "New York",
    link: "/event-details"
  },
  {
    image: image4,
    title: "Help for needy people",
    date: "20 May",
    time: "9:00am 02:00pm",
    location: "New York",
    link: "/event-details"
  }
]
export default {
  name: 'EventHomeTwo',
  components: {
    EventCard
  },

  data () {
    return ({
      EVENT_HOME_TWO_DATA,
      bgImage,
      heart
    })
  }
}
</script>

<style>
</style>
