'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemSchema extends Schema {
  up () {
    this.create('items', (table) => {
      table.increments()
      table.string('name_item', 254).notNullable()
      table.string('image_item', 254),
      table.string('location_item', 254),
      table.string('status_item', 20),
      table.date('date_item'),
      table.integer('id_category')
      table.text('description_item')
      table.timestamps()
    })
  }

  down () {
    this.drop('items')
  }
}

module.exports = ItemSchema
