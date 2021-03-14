<template>
  <div class="blog-sidebar">
    <div class="blog-sidebar__search">
      <form action="#">
        <input type="text" placeholder="Search here" />
        <button type="submit">
          <i class="azino-icon-magnifying-glass"></i>
        </button>
      </form>
    </div>
    <div class="blog-sidebar__single">
      <h3>Latest Posts</h3>
      <ul class="list-unstyled blog-sidebar__post">
        <li>
          <img :src="postImage1" alt="" />
          <h3>
            <a href="news-details.html">
              Our donation is hope for poor childrens
            </a>
          </h3>
        </li>
        <li>
          <img :src="postImage2" alt="" />
          <h3>
            <a href="news-details.html">Promoting The Rights of Children</a>
          </h3>
        </li>
        <li>
          <img :src="postImage3" alt="" />
          <h3>
            <a href="news-details.html">
              Growing Up Children in Charity Care
            </a>
          </h3>
        </li>
      </ul>
    </div>
    <div class="blog-sidebar__single">
      <h3>Categories</h3>
      <ul class="list-unstyled blog-sidebar__category">
        <li>
          <a href="#">Charity</a>
        </li>
        <li>
          <a href="#">Fundraising</a>
        </li>
        <li>
          <a href="#">Donations</a>
        </li>
        <li>
          <a href="#">Health</a>
        </li>
        <li>
          <a href="#">Save Lives</a>
        </li>
        <li>
          <a href="#">Clean Water</a>
        </li>
      </ul>
    </div>
    <div class="blog-sidebar__single">
      <h3>Tags</h3>
      <ul class="list-unstyled blog-sidebar__tags">
        <li>
          <a href="#">Charity</a>
        </li>
        <li>
          <a href="#">donations</a>
        </li>
        <li>
          <a href="#">savelives</a>
        </li>
        <li>
          <a href="#">education</a>
        </li>
        <li>
          <a href="#">poorpeople</a>
        </li>
        <li>
          <a href="#">health</a>
        </li>
        <li>
          <a href="#">cleanwater</a>
        </li>
      </ul>
    </div>
    <div class="blog-sidebar__single">
      <h3>Comments</h3>
      <ul class="blog-sidebar__comments">
        <li>
          <a href="#">A Wordpress Commenter on Launch New Mobile App</a>
        </li>
        <li>
          <a href="#">John Doe on Template: Comments</a>
        </li>
        <li>
          <a href="#">A Wordpress Commenter on Launch New Mobile App</a>
        </li>
        <li>
          <a href="#">John Doe on Template: Comments</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import postImage1 from '../../assets/images/blog/blog-s-1.jpg'
import postImage2 from '../../assets/images/blog/blog-s-2.jpg'
import postImage3 from '../../assets/images/blog/blog-s-3.jpg'

export default {
  name: 'BlogSidebar',
  components: {
  },

  data () {
    return ({
      postImage1,
      postImage2,
      postImage3
    })
  },

  methods: {
  }
}
</script>

<style>
</style>
