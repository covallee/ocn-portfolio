<template>
  <Layout :show-logo="true">
    <div class="content-box">
      <h1>{{$page.page.title}}</h1>
       <block-content :blocks="$page.page._rawBody" />
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
  page: sanityPage(id: "4c68d15d-3d13-4774-ac8e-4c6fec65a783") {
    title
    _rawBody
  }
}

</page-query>

<script>
import BlockContent from '~/components/BlockContent'
export default {
  components: {
    BlockContent
  },
  metaInfo: {
    title: 'Biography of Olivier-Cyr Noel'
  }
}
</script>