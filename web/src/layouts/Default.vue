<template>
  <div id="app">
    <header class="header">
      <div class="header__left">
        <header-logo v-if="showLogo" />
      </div>

      <div class="header__right">
        <g-link to="/artwork/">Artwork</g-link>
        <g-link to="/exhibitions/">Exhibitions</g-link>
        <g-link to="/biography/">Biography</g-link>
        <g-link to="/press-media/">Press-media</g-link>
        <g-link to="/contact/">Contact</g-link>
        <toggle-theme />
      </div>
    </header>


    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <span class="footer__copyright">Copyright © {{ new Date().getFullYear() }}. Olivier-cyr Noël</span>
      <span class="footer__links">
        Powered by
        <a href="//gridsome.org">Gridsome</a> &amp;
        <a href="//www.sanity.io">Sanity.io</a>
      </span>
    </footer>
  </div>
</template>

<script>
import HeaderLogo from '~/components/HeaderLogo'
import ToggleTheme from '~/components/ToggleTheme'

export default {
  props: {
    showLogo: {
      type: Boolean,
      default: true
    }
  },
  components: {
    HeaderLogo,
    ToggleTheme
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;
  background-color: #fff;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }

  a {
    padding: 0 10px;
    text-decoration: none;
    color: #000;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: 0.8em;

  > span {
    margin: 0 0.35em;
  }

  a {
    color: currentColor;
  }
}
</style>
