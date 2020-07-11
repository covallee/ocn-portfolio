<template>
  <div class="post-card content-box" :class="{'post-card--has-poster' : video.poster}">
    <div class="post-card__header">
      <iframe width="560" height="315" :src="video.link" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="post-card__content">
      <h2 class="post-card__title" v-html="video.name" />
      <!-- <block-content :blocks="post._rawBio" /> -->

      <!-- <post-meta class="post-card__meta" :post="post" />
      <post-tags class="post-card__tags" :post="post" />

      <g-link class="post-card__link" :to="'oeuvres/' + post.slug.current">Link</g-link> -->
    </div>
  </div>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    PostMeta,
    PostTags,
    BlockContent
  },
  props: {
    video: Object
  },
}
</script>

<style lang="scss">
.post-card {
  margin-bottom: var(--space);
  position: relative;

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    display: flex;
    justify-content: center;

    &:empty {
      display: none;
    }
  }

  &__image {
    min-width: 100%;
  }

  &__title {
    margin-top: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
