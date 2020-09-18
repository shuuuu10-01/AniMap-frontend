<template>
  <v-row justify="center" class="card mx-auto">
    <v-col>
    <v-img
      :src="require('../assets/AniMapLogo2.png')"
      class="ma-5"
      contain
      height="200"
    ></v-img>
    <p class="moji">召喚の間へようこそ！</p>
    <p class="submoji">ここでは下のARマーカーを読み取ることによって動物たちと写真を撮ろう！！</p>

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
  </v-col>
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
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
  p {
    font-family: 'Noto Sans JP', sans-serif;
  }
  .title{
    margin: 10px auto;
  }
.moji {
  padding-top: 15px;
  color: black;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
}
.submoji {
  color: black;
  text-align: center;
  font-size: 25px;
}
</style>
