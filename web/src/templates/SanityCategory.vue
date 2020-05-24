<template>
  <Layout>
    <CategoryNav />
    <div class="posts">
      <post-card
        v-for="oeuvre in $page.category.oeuvres"
        :key="oeuvre.id"
        :post="oeuvre"
        :metadata="$page.metadata"
      />
    </div>
  </Layout>
</template>

<page-query>
query Category ($id: ID!) {
  metadata {
    sanityOptions {
      projectId
      dataset
    }
  }
  category: sanityCategory (id: $id) {
    title
    oeuvres {
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
</page-query>

<script>
import PostCard from '~/components/PostCard'
import CategoryNav from '~/components/CategoryNav'
export default {
  components: {
    PostCard,
    CategoryNav
  },
  metaInfo: {
    title: 'Categorie'
  }
  
}
</script>