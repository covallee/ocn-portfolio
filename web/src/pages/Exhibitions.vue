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
  page: sanityPage(id: "ea862684-d6b1-4b6c-bec4-d44f58afcfd4") {
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
    title: 'List of exhibition of Olivier-Cyr Noel'
  }
}
</script>