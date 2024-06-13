<template>
  <DashboardNav v-if="!hide" />
  <router-view />
</template>
<script>
import DashboardNav from '@/components/DashboardNav.vue';
export default {
  name: 'App',
  components: {
    DashboardNav,
  },
  computed: {
    hide() {
      const hiddenPages = ['DemoPage1', 'ThankYou', 'LoginPage', 'RegistrationPage']
      return hiddenPages.includes(this.$route.name)
    },
  }

}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  // 050F28
  // 1A2A4E
  --bg-primary: #02539E;
  --bg-secondary: #02539E;
  --bg-tertiary: #894718;
  --bg-forth: #FBF4F4;
}

.smaller {
  font-size: 12px;
}

.cutout {
  overflow: hidden;
  text-align: center;
}

.cutout>span {
  position: relative;
  display: inline-block;
}

.cutout>span:before,
.cutout>span:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 900px;
  /* Adjust width as needed */
  margin: 0 20px;
}

.cutout>span:before {
  right: 100%;
  border-bottom: 2px solid;
  border-color: var(--bg-secondary);
  border-image-slice: 1;
}

.cutout>span:after {
  left: 100%;
  border-bottom: 2px solid;
  border-color: var(--bg-secondary);
  border-image-slice: 1;
}


.before-enter {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.enter {
  opacity: 1;
  transform: translateY(0);
}
</style>
