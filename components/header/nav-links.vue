<template>
  <ul class="main-menu__list" :class="extraClassName">
    <li class="dropdown">
      <NuxtLink to="/index">
        <div>
          Home
          <button aria-label="dropdown toggler" @click="handleDropdownStatus">
            <i class="fa fa-angle-down"></i>
          </button>
        </div>
      </NuxtLink>
      <ul class="dropdown-list">
        <li>
          <NuxtLink to="/index">
            Home One
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/index-2">
            Home Two
          </NuxtLink>
        </li>
        <li class="dropdown">
          <NuxtLink to="#">
            <div>
              Header Styles
              <button
                aria-label="dropdown toggler"
                @click="handleDropdownStatus"
              >
                <i class="fa fa-angle-down"></i>
              </button>
            </div>
          </NuxtLink>
          <ul class="dropdown-list">
            <li>
              <NuxtLink to="/index">
                Header One
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/index-2">
                Header Two
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="/causes">
        <div>
          Causes
          <button
            aria-label="dropdown toggler"
            @click="handleDropdownStatus"
          >
            <i class="fa fa-angle-down"></i>
          </button>
        </div>
      </NuxtLink>
      <ul class="dropdown-list">
        <li>
          <NuxtLink to="/causes">
            Causes
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/cause-details">
            Cause Details
          </NuxtLink>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="/events">
        <div>
          Events
          <button
            aria-label="dropdown toggler"
            @click="handleDropdownStatus"
          >
            <i class="fa fa-angle-down"></i>
          </button>
        </div>
      </NuxtLink>
      <ul class="dropdown-list">
        <li>
          <NuxtLink to="/events">
            Events
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/event-details">
            Event Details
          </NuxtLink>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="/news">
        <div>
          News
          <button
            aria-label="dropdown toggler"
            @click="handleDropdownStatus"
          >
            <i class="fa fa-angle-down"></i>
          </button>
        </div>
      </NuxtLink>
      <ul class="dropdown-list">
        <li>
          <NuxtLink to="/news">
            News
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/news-details">
            News Details
          </NuxtLink>
        </li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="#">
        <div>
          Pages
          <button
            aria-label="dropdown toggler"
            @click="handleDropdownStatus"
          >
            <i class="fa fa-angle-down"></i>
          </button>
        </div>
      </NuxtLink>
      <ul class="dropdown-list">
        <li>
          <NuxtLink to="/about">
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/volunteers">
            Volunteers
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/become-volunteer">
            Become a Volunteer
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/gallery">
            Gallery
          </NuxtLink>
        </li>
      </ul>
    </li>
    <li>
      <NuxtLink to="/contact">
        Contact
      </NuxtLink>
    </li>
    <li class="search-btn search-toggler">
      <span>
        <i class="azino-icon-magnifying-glass"></i>
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
