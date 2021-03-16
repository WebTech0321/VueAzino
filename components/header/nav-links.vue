<template>
  <ul class="main-menu__list" :class="extraClassName">
    <li class="dropdown">
      <nuxt-link to="/">
        <div>
          Home
          <button aria-label="dropdown toggler" @click="handleDropdownStatus">
            <i class="fa fa-angle-down" />
          </button>
        </div>
      </nuxt-link>
      <ul class="dropdown-list">
        <li>
          <nuxt-link to="/">
            Home One
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/index-2">
            Home Two
          </nuxt-link>
        </li>
        <li class="dropdown">
          <nuxt-link to="#">
            <div>
              Header Styles
              <button
                aria-label="dropdown toggler"
                @click="handleDropdownStatus"
              >
                <i class="fa fa-angle-down" />
              </button>
            </div>
          </nuxt-link>
          <ul class="dropdown-list">
            <li>
              <nuxt-link to="/index">
                Header One
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/index-2">
                Header Two
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <nuxt-link to="/causes">
        <div>
          Causes
          <button
            aria-label="dropdown toggler"
            @click="handleDropdownStatus"
          >
            <i class="fa fa-angle-down" />
          </button>
        </div>
      </nuxt-link>
      <ul class="dropdown-list">
        <li>
          <nuxt-link to="/causes">
            Causes
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/cause-details">
            Cause Details
          </nuxt-link>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <nuxt-link to="/events">
        <div>
          Events
          <button
            aria-label="dropdown toggler"
            @click="handleDropdownStatus"
          >
            <i class="fa fa-angle-down" />
          </button>
        </div>
      </nuxt-link>
      <ul class="dropdown-list">
        <li>
          <nuxt-link to="/events">
            Events
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/event-details">
            Event Details
          </nuxt-link>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <nuxt-link to="/news">
        <div>
          News
          <button
            aria-label="dropdown toggler"
            @click="handleDropdownStatus"
          >
            <i class="fa fa-angle-down" />
          </button>
        </div>
      </nuxt-link>
      <ul class="dropdown-list">
        <li>
          <nuxt-link to="/news">
            News
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/news-details">
            News Details
          </nuxt-link>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <nuxt-link to="#">
        <div>
          Pages
          <button
            aria-label="dropdown toggler"
            @click="handleDropdownStatus"
          >
            <i class="fa fa-angle-down" />
          </button>
        </div>
      </nuxt-link>
      <ul class="dropdown-list">
        <li>
          <nuxt-link to="/about">
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/volunteers">
            Volunteers
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/become-volunteer">
            Become a Volunteer
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/gallery">
            Gallery
          </nuxt-link>
        </li>
      </ul>
    </li>
    <li>
      <nuxt-link to="/contact">
        Contact
      </nuxt-link>
    </li>
    <li class="search-btn search-toggler">
      <span>
        <i class="azino-icon-magnifying-glass" />
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavLinks',
  props: ['extraClassName'],
  data () {
    return ({
    })
  },

  methods: {
    handleDropdownStatus (e) {
      const clickedItem = e.currentTarget.parentNode
      clickedItem.querySelector('.dropdown-list').classList.toggle('show')
    }
  }
}
</script>

<style>
</style>
