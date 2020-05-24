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
  page: sanityPage(id: "3dd263dd-273e-4987-8c2a-adbf2eb8566f") {
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
    title: 'Contact Info for Olivier-Cyr Noel'
  }
}
</script>
