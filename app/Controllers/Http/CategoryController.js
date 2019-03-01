'use strict'

const Category = use('App/Models/Category')

class CategoryController {

  async index ({ request, response, view }) {
    return await Category.all()
    // Done
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    return await Category.create(request.all())
  }

  async show ({ params, request, response, view }) {
    return await Category.find(params.id)
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {

    // name_category is name for post
    const { name_category } = request.post()

    return await Category
      .query()
      .where('id', params.id)
      .update({ name_category: name_category })

  }

  async destroy ({ params, request, response }) {

    // Aku penasaran dengan pembuatan variabel yang memakai kurung kurawal
    const { id } = params
    const Category1 = await Category.find(id)

    return await Category1.delete()
  }
}

module.exports = CategoryController
