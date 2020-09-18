<template>
  <div>
    <v-card class="d-inline-block mx-auto">
      <v-container>
        <v-row>
          <v-col cols="auto">
            <v-img
              height="300"
              width="300"
              :src="require('../assets/pattern-Abura.png')"
            ></v-img>
            <p>好きな動物の召喚ボタンを押して<br>ARカメラで読み取ろう。</p>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
  p {
    font-family: 'Noto Sans JP', sans-serif;
    color: black;
  }

</style>
