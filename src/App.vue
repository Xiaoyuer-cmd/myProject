<template>
  <div class="root_component">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  render(createElements) {
    return createElements(App)
  },
}
</script>

<style scoped>
.root_component {
  width: 100%;
  height: auto;
}
</style>
