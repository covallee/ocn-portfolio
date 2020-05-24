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
  page: sanityPage(id: "d0c24625-7dfe-4d16-9356-05ff545e7f79") {
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
