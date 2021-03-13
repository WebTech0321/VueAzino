<template>
  <section
      class='team-about pt-120 pb-120'
      :style="{backgroundImage: 'url(' + bgImage + ')'}"
    >
    <v-container>
      <div class='team-about__top'>
        <v-row class=' align-center'>
          <v-col md='12' lg='7'>
            <div class='block-title'>
              <p>
                <img :src='heartImage' width='15' alt='' />
                Our Volunteers
              </p>
              <h3>Meet those who help <br /> others in need.</h3>
            </div>
          </v-col>
          <v-col md='12' lg='5'>
            <p class='team-about__top-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Have you done google research which works all the
              time.
            </p>
          </v-col>
        </v-row>
      </div>
      <div class='team-4-col'>
        <div v-for="(team, index) in TeamData" :key="teamKey(index)" class="team-card text-center" :class="team.extraClassName">
          <div class='team-card__image'>
            <img :src="team.image" alt='' />
          </div>
          <div class='team-card__social' >
            <a v-for="(social, socialIdx) in team.social" :key="socialKey(socialIdx)" :href="social.link" aria-label='social link'>
              <i :class="social.socialClass"></i>
            </a>
          </div>
          <div class='team-card__content'>
            <h3>{{team.name}}</h3>
            <p>{{team.designation}}</p>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import heartImage from '../../assets/images/shapes/heart-2-1.png'
import bgImage from '../../assets/images/team/team-map-1-1.png'
import teamImage1 from '../../assets/images/team/team-2-1.jpg'
import teamImage2 from '../../assets/images/team/team-2-2.jpg'
import teamImage3 from '../../assets/images/team/team-2-3.jpg'
import teamImage4 from '../../assets/images/team/team-2-4.jpg'

const TeamData = [
  {
    image: teamImage1,
    extraClassName: 'content-bg-1',
    name: 'Isabel Herrera',
    designation: 'Student',
    social: [
      {
        link: '#',
        socialClass: 'fab fa-twitter'
      },
      {
        link: '#',
        socialClass: 'fab fa-facebook-square'
      },
      {
        link: '#',
        socialClass: 'fab fa-pinterest-p'
      },
      {
        link: '#',
        socialClass: 'fab fa-instagram'
      }
    ]
  },
  {
    image: teamImage2,
    extraClassName: 'content-bg-2',
    name: 'Nathan Wheeler',
    designation: 'Student',
    social: [
      {
        link: '#',
        socialClass: 'fab fa-twitter'
      },
      {
        link: '#',
        socialClass: 'fab fa-facebook-square'
      },
      {
        link: '#',
        socialClass: 'fab fa-pinterest-p'
      },
      {
        link: '#',
        socialClass: 'fab fa-instagram'
      }
    ]
  },
  {
    image: teamImage3,
    extraClassName: 'content-bg-3',
    name: 'Warren Shaw',
    designation: 'Student',
    social: [
      {
        link: '#',
        socialClass: 'fab fa-twitter'
      },
      {
        link: '#',
        socialClass: 'fab fa-facebook-square'
      },
      {
        link: '#',
        socialClass: 'fab fa-pinterest-p'
      },
      {
        link: '#',
        socialClass: 'fab fa-instagram'
      }
    ]
  },
  {
    image: teamImage4,
    extraClassName: 'content-bg-4',
    name: 'Hallie Wallace',
    designation: 'Student',
    social: [
      {
        link: '#',
        socialClass: 'fab fa-twitter'
      },
      {
        link: '#',
        socialClass: 'fab fa-facebook-square'
      },
      {
        link: '#',
        socialClass: 'fab fa-pinterest-p'
      },
      {
        link: '#',
        socialClass: 'fab fa-instagram'
      }
    ]
  }
]

export default {
  name: 'TeamHome',
  props: ['extraClass', 'image', 'name', 'designation'],
  data () {
    return ({
      TeamData,
      bgImage,
      heartImage
    })
  },
  methods: {
    teamKey (index) {
      return 'team-card-key-' + index
    },
    socialKey (index) {
      return 'social-link-key-' + index
    }
  }
}
</script>
