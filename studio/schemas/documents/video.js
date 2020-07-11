import {format} from 'date-fns'

export default {
  name: 'video',
  type: 'document',
  title: 'Video',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nom',
      description: 'Nom de la video'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'link',
      type: 'string',
      title: 'Lien',
      description: 'Lien youtube de la video',
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image'
    },
  ],
  preview: {
    select: {
      title: 'name',
      link: 'link',
      publishedAt: 'publishedAt',
      slug: 'slug',
    },
    prepare ({title = 'No name', publishedAt, slug = {}, media}) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
