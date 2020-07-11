<template>
  <div class="content-box sub-nav">
      <p>Category</p>
      <div class="sub-nav__links">
        <g-link to="/atelier/">Atelier</g-link>
        <g-link to="/art-animalier/">Art Animalier</g-link>
        <g-link to="/parc-de-sculptures/">Parc de Sculptures</g-link>
        <g-link to="/commandes-publiques/">Commandes Publiques</g-link>
        <g-link to="/les-demoiselles/">Les Demoiselles</g-link>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.sub-nav {
  margin-bottom: 20px;
  padding: 20px;
}

.sub-nav__links {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);
  padding: 5px 15px;
  border-radius: 5px;
  color: var(--body-color);
}
</style>