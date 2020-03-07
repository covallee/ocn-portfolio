export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6401fd000403c9a3023637',
                  title: 'Sanity Studio',
                  name: 'ocn-portfolio-studio',
                  apiId: '5dcba4f6-ac6b-427c-9533-c36f19e9502a'
                },
                {
                  buildHookId: '5e6401fd3ad1f4c7836e31fc',
                  title: 'Blog Website',
                  name: 'ocn-portfolio',
                  apiId: '1b7a92ea-02ed-41f1-bcb8-4bb83f714f18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/covallee/ocn-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://ocn-portfolio.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
