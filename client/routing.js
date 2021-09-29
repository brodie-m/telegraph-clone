const UniversalRouter = require('universal-router')

const routes = [
  {
    path: '/single-post',
    action: () => console.log('checking child routes for /posts'),
    children: [
      {
        path: '/:id',
        action: (context) => `<h1>Post #${context.params.id}</h1>`
      }
    ]
  }
]

const clientRouter = new UniversalRouter(routes)

clientRouter.resolve('/single-post').then(html => {
  document.body.innerHTML = html // renders: <h1>Posts</h1>
})

module.exports = clientRouter