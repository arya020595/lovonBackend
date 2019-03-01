'use strict'

const Item = use('App/Models/Item')
const Database = use('Database')

class ItemController {

  async index ({ request, response, view }) {
    return await Database.select('*').from('items').orderBy('id', 'desc')
  }

  async indexUser({ params, request, response, view }) {
    return await Database.select('*').from('items')
    .orderBy('id', 'desc')
    .where('user_id', params.id)
  }

  async create ({ request, response, view }) {
  }

  async store ({ request, response }) {
    return await Item.create(request.all())
  }

  async show ({ params, request, response, view }) {
    return await Item.find(params.id)
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
    // const name_item = request.post()
    // const image_item = request.post()

    // console.log(name_item)
    // console.log(image_item)
    const { name_item, image_item, location_item, status_item, date_item, id_category, description_item, id_user } = request.post()
    // Buat variabel yang mana isi dari variabel ini persis atau sesuai dengan element dan value yang ada di Postman
    console.log(name_item)
    return await Item
      .query()
      .where('id', params.id)
      .update(
        {
          // Rumusnya : 
          // nama_properti di database : nama_variabel baru yang mana nilainya mengambil dari postman
          name_item: name_item,
          image_item: image_item,
          location_item: location_item,
          status_item: status_item,
          date_item: date_item,
          id_category: id_category,
          description_item: description_item,
          id_user: id_user
        }
      )
  }

  async destroy ({ params, request, response }) {
    // Aku penasaran dengan pembuatan variabel yang memakai kurung kurawal
    const { id } = params
    const Item1 = await Item.find(id)

    return await Item1.delete()
  }
}

module.exports = ItemController
