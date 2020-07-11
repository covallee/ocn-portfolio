<template>
  <Layout :show-logo="true">
    <div class="posts">
      <video-card 
        v-for="edge in $page.videos.edges" 
        :key="edge.node.id"
        :video="edge.node"
        :metadata="$page.metadata" />
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
  videos: allSanityVideo(sortBy: "publishedAt"){
    edges {
      node {
        id
        name
        slug {
          current
        }
        link
        publishedAt(format: "D. MMMM YYYY")
      }
    }
  }
}

</page-query>

<script>
import VideoCard from '~/components/VideoCard'

export default {
  components: {
    VideoCard
  },
  metaInfo: {
    title: 'Video Gallery'
  } 
}
</script>