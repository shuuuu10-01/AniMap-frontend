<template>
  <v-row justify="center" class="card mx-auto">
    <div class="mb-10">
      <CardHorse />
    </div>
    <div class="mb-10">
      <CardFox />
    </div>
    <div class="mb-10">
      <CardKamo />
    </div>
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
