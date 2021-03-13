<template>
  <section class="price-one">
    <v-container>
      <v-row>
        <v-col xl="5">
          <div class="price-one__main">
            <div class="block-title">
              <p>
                <img :src="heart" width="15" alt="" />
                Popular Causes
              </p>
              <h3>Donate to charity causes <br /> around the world.</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat.
            </p>
            <div class="price-one__image-box">
              <img :src="priceBox" alt="" />
              <div class="price-one__image-box-content">
                <h3>
                  <i class="fa fa-check"></i> Fundraising Platform
                </h3>
                <p>
                  Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem is simply free text quis
                  bibendum.
                </p>
              </div>
            </div>
          </div>
        </v-col>
        <v-col xl="7">
          <v-row>
            <v-col v-for="(item, index) in PRICE_ONE_DATA" md="6" :key="'price-one-key-'+index">
              <div class="price-one__single" :class="item.extraClassName">
                <i :class="item.icon"></i>
                <p>{{item.title}}</p>
                <h3>{{item.price}}</h3>
                <ul class="price-one__list">
                  <li v-for="(option, idx) in item.options" :key="'price-one-list-key-' +idx">{{option.text}}</li>
                </ul>
                <nuxt-link :to="item.button.link" class="thm-btn dynamic-radius">
                  {{item.button.label}}
                </nuxt-link>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import heart from '../assets/images/shapes/heart-2-1.png'
import priceBox from '../assets/images/resources/price-box-1-1.jpg'
const PRICE_ONE_DATA = [
  {
    title: 'Silver Package',
    icon: 'fa fa-paper-plane',
    extraClassName: '',
    price: '$30.00',
    options: [
      {
        text: 'Free text goes here'
      },
      {
        text: 'Write here anything'
      },
      {
        text: 'Above mention it'
      },
      {
        text: 'Say once again'
      }
    ],
    button: {
      link: '#',
      label: 'Choose Plan'
    }
  },
  {
    title: 'Gold Package',
    icon: 'fa fa-plane',
    extraClassName: 'gold',
    price: '$60.00',
    options: [
      {
        text: 'Free text goes here'
      },
      {
        text: 'Write here anything'
      },
      {
        text: 'Above mention it'
      },
      {
        text: 'Say once again'
      }
    ],
    button: {
      link: '#',
      label: 'Choose Plan'
    }
  }
]
export default {
  name: 'PriceOne',
  components: {
  },

  data () {
    return ({
      PRICE_ONE_DATA,
      heart,
      priceBox
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
