<template>
  <Layout :show-logo="true">
    <CategoryNav />
    <!-- List posts -->
    <div class="posts">
      <post-card
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
        :metadata="$page.metadata"
      />
    </div>
  </Layout>
</template>

<page-query>
{
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  posts: allSanityOeuvre(sortBy: "publishedAt") {
    edges {
      node {
        id
        name
        slug {
          current
        }
        categories {
          id
          title
        }
        publishedAt(format: "D. MMMM YYYY")
        _rawBio
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
  }
}

</page-query>

<script>
import AuthorCard from '~/components/AuthorCard'
import PostCard from '~/components/PostCard'
import CategoryNav from '~/components/CategoryNav'

export default {
  components: {
    AuthorCard,
    PostCard,
    CategoryNav
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss">
.sub-nav {
  a {
    padding: 0 10px;

  }
}
</style>
