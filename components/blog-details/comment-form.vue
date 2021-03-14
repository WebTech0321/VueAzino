<template>
  <div>
    <h3 class="blog-details__title">Leave a comment</h3>
    <form
      action="assets/inc/sendemail.php"
      class="contact-form-validated contact-page__form form-one mb-80"
    >
      <div class="form-group">
        <div class="form-control">
          <input type="text" name="name" placeholder="Your Name" />
        </div>
        <div class="form-control">
          <input type="text" name="email" placeholder="Email Address" />
        </div>
        <div class="form-control">
          <input type="text" name="phone" placeholder="Phone Number" />
        </div>
        <div class="form-control">
          <input type="text" name="subject" placeholder="Subject" />
        </div>
        <div class="form-control form-control-full">
          <textarea name="message" placeholder="Write a Message"></textarea>
        </div>
        <div class="form-control form-control-full">
          <button type="submit" class="thm-btn ">
            Submit Comment
          </button>
        </div>
      </div>
    </form>
    <div class="result"></div>
  </div>
</template>

<script>
export default {
  name: 'CommentForm'
}
</script>

<style>
</style>
