'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Item = use('App/Models/Item')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route
  .group(() => {
    Route.get('users', 'UserController.index')
    Route.get('users/:id', 'UserController.show')
    Route.post('users', 'UserController.store')
    Route.post('users/login', 'UserController.login')
    Route.patch('users/:id', 'UserController.update')
    Route.delete('users/:id', 'UserController.destroy')

    Route.get('items', 'ItemController.index')
    Route.get('items/user/:id', 'ItemController.indexUser')
    Route.get('items/:id', 'ItemController.show')
    Route.post('items', 'ItemController.store')
    Route.patch('items/:id', 'ItemController.update')
    Route.delete('items/:id', 'ItemController.destroy')

    Route.get('category', 'CategoryController.index')
    Route.get('category/:id', 'CategoryController.show')
    Route.post('category', 'CategoryController.store')
    Route.patch('category/:id', 'CategoryController.update')
    Route.delete('category/:id', 'CategoryController.destroy')
  })
  .prefix('api/v1')
