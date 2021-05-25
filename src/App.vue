<template>
  <v-app>
    <v-app-bar
      app
      fixed
      color="light-blue darken-4"
      dark
      collapse-on-scroll
      src="./assets/bar-background.jpg"
      fade-img-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, #01579b, rgba(25,32,72,.7)"
        />
      </template>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-img
          alt="Devniks logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.svg"
          transition="scale-transition"
          width="80"
      />

      <v-toolbar-title>Devnik's playground</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/devonik" target="_blank" text>
        <v-icon size="34">mdi-github</v-icon>
        <v-icon size="20" class="align-self-start">mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        app
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
        >
          <v-list-item link to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/vuetify-file-uploader">
            <v-list-item-icon>
              <v-icon>mdi-download</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Vuetify file uploader</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <RouterView/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: false,
  }),
};
</script>
