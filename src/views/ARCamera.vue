<template>
  <v-row justify="center" class="card mx-auto">
    <v-img
      :src="require('../assets/AniMapLogo.png')"
      class="ma-5"
      contain
      height="200"
      ></v-img>
      <br>
    <div class="ma-5">
      <CardHorse />
    </div>
    <br>
    <div class="ma-5">
      <CardFox />
    </div>
    <br>
    <div class="ma-5">
      <CardKamo />
    </div>
    <br>
  </v-row>

</template>

<script>
import CardHorse from '../components/CardHorse'
import CardFox from '../components/CardFox'
import CardKamo from '../components/CardKamo'

export default {
  components: {
    CardHorse,
    CardFox,
    CardKamo
  }
}
</script>

<style>

</style>
