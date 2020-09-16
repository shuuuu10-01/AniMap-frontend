<template>
  <v-app>
    <!---->
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              AniMap Menu
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item v-for="ani_list in ani_lists"  :key="ani_list.name" :to="ani_list.link">
            <v-list-item-icon>
              <v-icon>{{ ani_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ ani_list.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar color="primary" dark app>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="title">AniMap</v-toolbar-title>
    </v-app-bar>
    <!---->
    <v-main>
      <router-view />
    </v-main>
    <!---->
    <v-footer color="primary" dark app>
      AniMap
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      ani_lists: [
        { name: 'Topページ', icon: 'mdi-view-dashboard', link: '/toppage' },
        { name: '近くの動物たち', icon: 'mdi-vuetify', link: '/nearanimal' },
        { name: '発見！', icon: 'mdi-cogs', link: '/find' },
        { name: '天気', icon: 'mdi-palette', link: '/weather' },
        { name: '召喚！？', icon: 'mdi-plus', link: '/arcamera' }
      ]
    }
  }
}
</script>

<style scoped>
  .title{
    margin: 10px auto;
  }
</style>
