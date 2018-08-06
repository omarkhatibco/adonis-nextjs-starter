'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route');
const Next = use('Adonis/Addons/Next');
const handler = Next.getRequestHandler();

Route.get('/api', ({ request }) => {
  return { greeting: 'Hello world in JSON' };
});

// * Next Routes
Route.get('/b', ({ request, response }) => {
  const query = request.get();
  return Next.render(request.request, response.response, '/b', query);
});

Route.get('/post/:id', ({ request, response, params }) =>
  Next.render(request.request, response.response, '/b', {
    id: params.id
  })
);

Route.get(
  '*',
  ({ request, response }) =>
    new Promise((resolve, reject) => {
      handler(request.request, response.response, promise => {
        promise.then(resolve).catch(reject);
      });
    })
);
