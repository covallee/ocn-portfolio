<template>
  <Layout>
    <div class="post-title">
      <h1 class="post-title__text">{{ $page.oeuvre.name }}</h1>

      <!-- <post-meta :post="$page.post" v-if="$page.post" /> -->
    </div>

    <div class="post content-box">
      <div class="post__header">
        <img
          alt="Cover image"
          v-if="$page.oeuvre.image"
          :src="$urlForImage($page.oeuvre.image, $page.metadata.sanityOptions).width(600).auto('format').url()"
        />
      </div>

      <block-content
        class="post__content"
        :blocks="$page.oeuvre._rawBio"
        v-if="$page.oeuvre._rawBio"
      />

      <div class="post__footer">
        <!-- <post-tags :post="$oeuvre.categories" v-if="$oeuvre.categories" /> -->
      </div>
    </div>

  </Layout>
</template>

<script>
import BlockContent from '~/components/BlockContent'
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import AuthorCard from '~/components/AuthorCard'

export default {
  components: {
    AuthorCard,
    PostMeta,
    PostTags,
    BlockContent
  },
  metaInfo() {
    return {
      name: this.$page.oeuvre.name,
      // meta: [
      //   {
      //     name: 'description',
      //     content: this.$page.oeuvre.description
      //   }
      // ]
    }
  }
}
</script>

<page-query>
query Oeuvre ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  oeuvre: sanityOeuvre (id: $id) {
    name
    _rawBio
    categories {
      id
      title
    }
    image {
      asset {
        _id
        url
      }
      caption
      alt
      hotspot {
        x
        y
        height
        width
      }
      crop {
        top
        bottom
        left
        right
      }
    }
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
