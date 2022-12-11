<template>
  <!-- app-header -->
  <app-header></app-header>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <!-- Player -->
  <player-vue></player-vue>
  <!-- Auth Modal -->
  <app-auth />
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import AppAuth from "./components/AppAuth.vue";
import PlayerVue from "./components/Player.vue";
import { mapWritableState } from "pinia";
import useUserStore from "./stores/user";
import { auth } from "./includes/firebase";

export default {
  name: "App",
  components: {
    AppHeader,
    AppAuth,
    PlayerVue,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  },
};
</script>

<style>
.fade-enter-form {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
