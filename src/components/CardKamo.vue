<template>
  <div>
    <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>カモの召喚</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <div  class="moji1">下のボタンをクリックしてARマーカーを読み込んでみよう</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        :loading="loading"
        :disabled="loading"
        @click="loader='loading'"
        href="https://shuuuu10-01.github.io/AR-santa-try/kamo"
        target="_blank"
      >
        召喚
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loader: null,
      loading: false
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false), 3000)
      this.loader = null
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
  .moji1 {
    font-family: 'Noto Sans JP', sans-serif;
    color: black;
  }

</style>
