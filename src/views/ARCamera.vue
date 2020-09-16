<template>
  <v-row justify="center" class="card mx-auto">
    <div class="mb-10">
      <CardHorse />
    </div>
    <div class="mb-auto">
      <CardFox />
    </div>
  </v-row>

</template>

<script>
import CardHorse from '../components/CardHorse'
import CardFox from '../components/CardFox'

export default {
  components: {
    CardHorse,
    CardFox
  }
}
</script>

<style>

</style>
