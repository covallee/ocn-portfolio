// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const clientConfig = require('./client-config')

module.exports = function(api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
    store.addMetadata('sanityOptions', clientConfig.sanity)

    const oeuvreCollection = store.getCollection('SanityOeuvre')
    const oeuvres = oeuvreCollection.data()
    // Augment 'Categories' - Add array of references to related posts
    store.addSchemaResolvers({
      SanityCategory: {
        oeuvres: {
          type: '[SanityOeuvre]',
          resolve: o => oeuvres.filter(p => p.categories && p.categories.find(c => c._ref === o.id))
        }
      }
    })
  })
}
