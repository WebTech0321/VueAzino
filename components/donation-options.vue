<template>
  <section class="donate-options pt-120">
    <v-container>
      <v-row no-gutters>
        <v-col lg="6">
          <div class="donate-options__content">
            <div class="block-title">
              <p>
                <img src="~assets/images/shapes/heart-2-1.png" width="15" alt="" />
                Donate Now
              </p>
              <h3>Give a helping hand <br /> for a needy people.</h3>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Have you done google research <br />
              which works all the time.
            </p>
            <div class="donate-options__call">
              <i class="azino-icon-telephone"></i>
              <div class="donate-options__call-content">
                <p>
                  Have any question about donation? <br />
                  <span>Call us now:</span>
                  <a href="tel:666-888-0000">666 888 0000</a>
                </p>
              </div>
            </div>
            <div class="donate-options__icon-wrap">
              <div class="donate-options__icon">
                <i class="azino-icon-dove"></i>
                <h3>
                  <a href="#">Living</a>
                </h3>
              </div>
              <div class="donate-options__icon">
                <i class="azino-icon-hamburger"></i>
                <h3>
                  <a href="#">Food</a>
                </h3>
              </div>
              <div class="donate-options__icon">
                <i class="azino-icon-family"></i>
                <h3>
                  <a href="#">Family</a>
                </h3>
              </div>
            </div>
          </div>
        </v-col>
        <v-col lg="6">
          <form
            action="#"
            class="donate-options__form wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <h3 class="text-center">Start donating now</h3>
            <p class="text-center">
              Lorem ipsum dolor sit amet, conse ctetur <br /> adipisicing elit
              sed do eiusm od tempor ut labore.
            </p>
            <label htmlFor="donate-name" class="sr-only"></label>
            <input type="text" id="donate-name" placeholder="Your Name" />
            <label htmlFor="donate-amount" class="sr-only"></label>
            <input
              type="text"
              placeholder="Insert Value"
              id="donate-amount"
            />
            <ul id="donate-amount__predefined" class="list-unstyled">
              <li>
                <a href="#">$10</a>
              </li>
              <li>
                <a href="#">$20</a>
              </li>
              <li>
                <a href="#">$50</a>
              </li>
            </ul>
            <button type="submit" class="thm-btn ">
              Donate Now
            </button>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'DonationOptions'
}
</script>

<style>
</style>
