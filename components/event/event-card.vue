<template>
  <div class="event-card">
    <div class="event-card-inner">
      <div class="event-card-image">
        <div class="event-card-image-inner">
          <img :src="data.image" alt="" />
          <span>{{data.date}}</span>
        </div>
      </div>
      <div class="event-card-content">
        <h3>
          <nuxt-link :to="data.link">
            {{data.title}}
          </nuxt-link>
        </h3>
        <ul class="event-card-list">
          <li>
            <i class="azino-icon-clock"></i>
            <strong>Time:</strong> {{data.time}}
          </li>
          <li>
            <i class="azino-icon-pin1"></i>
            <strong>Location:</strong> {{data.location}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: ['data']
}
</script>

<style>
</style>
