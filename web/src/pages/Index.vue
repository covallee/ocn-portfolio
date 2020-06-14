<template>
  <Layout :show-logo="false">
    <div class="content-box home">
      <h1>Olivier-Cyr Noël</h1>
      <g-image src="~/assets/images/home.jpg" />
      <p>Famous French artist, sculptor and painter. Many of his sculptures can be seen all over the world</p>
    </div>
  </Layout>
</template>

<script>
export default {
  components: {
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="postcss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
