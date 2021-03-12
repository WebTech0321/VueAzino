<template>
  <div class="team-card text-center" :class="extraClass">
    <div class="team-card__image">
      <img :src="image" alt="" />
    </div>
    <div class="team-card__social">
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
    <div class="team-card__content">
      <h3>{{name}}</h3>
      <p>{{designation}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamCard',
  props: ['extraClass', 'image', 'name', 'designation']
}
</script>
