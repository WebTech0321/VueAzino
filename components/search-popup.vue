<template>
  <div class="search-popup">
    <div class="search-popup__overlay search-toggler"></div>
    <div class="search-popup__content">
      <form action="#">
        <label htmlFor="search" class="sr-only">
          search here
        </label>
        <input type="text" id="search" placeholder="Search Here..." />
        <button type="submit" aria-label="search submit" class="thm-btn">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPopup',
  components: {
  }
}
</script>

<style>
</style>
