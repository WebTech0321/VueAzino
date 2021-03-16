<template>
  <section class="team-page pt-120 pb-120">
    <v-container>
      <div class="team-3-col">
        <TeamCard
          v-for="(data, index) in TEAM_DATA"
          :key="index"
          :extra-class="data.extraClass"
          :name="data.name"
          :designation="data.designation"
          :image="data.image"
        />
      </div>
    </v-container>
  </section>
</template>

<script>
import teamImage1 from '../../assets/images/team/team-1-1.jpg'
import teamImage2 from '../../assets/images/team/team-1-2.jpg'
import teamImage3 from '../../assets/images/team/team-1-3.jpg'
import teamImage4 from '../../assets/images/team/team-1-4.jpg'
import teamImage5 from '../../assets/images/team/team-1-5.jpg'
import teamImage6 from '../../assets/images/team/team-1-6.jpg'
import TeamCard from './team-card'

const TEAM_DATA = [
  {
    extraClass: 'content-bg-1',
    name: 'Jayden Haynes',
    designation: 'Student',
    image: teamImage1
  },
  {
    extraClass: 'content-bg-2',
    name: 'Jean Webster',
    designation: 'Student',
    image: teamImage2
  },
  {
    extraClass: 'content-bg-3',
    name: 'Lilly Taylor',
    designation: 'Student',
    image: teamImage3
  },
  {
    extraClass: 'content-bg-4',
    name: 'Jayden Knight',
    designation: 'Student',
    image: teamImage4
  },
  {
    extraClass: 'content-bg-5',
    name: 'Leroy Palmer',
    designation: 'Student',
    image: teamImage5
  },
  {
    extraClass: 'content-bg-6',
    name: 'Jim Vargas',
    designation: 'Student',
    image: teamImage6
  }
]

export default {
  name: 'TeamPage',
  components: {
    TeamCard
  },
  data () {
    return ({
      TEAM_DATA
    })
  }
}
</script>
