<template>
  <header class="header">
      <div class="container">
        <div class="navbar-brand">
          <header-logo v-if="showLogo" />
          <button class="navbar-burger" :class="{'is-active': isOpen}" @click="toggleMenu">
            <span />
            <span />
            <span />
          </button>
        </div>
        <div class="navbar-menu" :class="{'is-active': isOpen}">
            <g-link class="navbar-item" to="/artwork/">Artworks</g-link>
            <g-link class="navbar-item" to="/exhibitions/">Exhibitions</g-link>
            <g-link class="navbar-item" to="/biography/">Biography</g-link>
            <g-link class="navbar-item" to="/video/">Videos</g-link>
            <g-link class="navbar-item" to="/press-media/">Press-media</g-link>
            <g-link class="navbar-item" to="/contact/">Contact</g-link>
            <toggle-theme />
        </div>
      </div>
  </header>
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
  },
  data: function() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleMenu: function() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
}

.header {
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  z-index: 10;
  background-color: var(--bg-content-color);

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }

  .navbar-item {
    padding: 10px;
    text-decoration: none;
    color: var(--body-color);
    display: block;

    @media screen and (min-width: 800px) {
      display: flex;
    }

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
}
.container {
  display: block;
  position: relative;
  width: 100%;

   @media screen and (min-width: 800px) {
     display: flex;
     min-height: var(--header-height);
     align-items: center;

   }
}

.navbar-menu {
  display: none;

  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: end;
    margin-left: auto;
  }
}

.navbar-menu.is-active{
  display: block;
  text-align: center;
}

.navbar-burger {
  position: relative;
  border: none;
  width: 3.25rem;
  display: block;
  margin-left: auto;
  background-color: transparent;

  @media screen and (min-width: 800px) {
    display: none;
  }

  &:hover, &:focus {
    background-color: rgba(0, 0, 0, 0.5);
  }

  & span {
    background-color: var(--body-color);
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    width: 16px;

    &:first-child {
      top: calc(50% - 6px);
    }
    &:nth-child(2) {
      top: calc(50% - 1px);
    }
    &:last-child {
      top: calc(50% + 4px);
    }
  }

  &.is-active span {
    &:first-child {
      transform: translateY(5px) rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:last-child {
      transform: translateY(-5px) rotate(-45deg);
    }
  }

}

.navbar-menu__links {
 text-align: center;
}

.navbar-brand {
  display: flex;
  align-items: stretch;
  min-height: var(--header-height);
}
</style>