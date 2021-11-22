import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Roadmaps extends BaseSchema {
  protected tableName = 'roadmaps'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table
        .string('title', 80)
        .notNullable()
      table
        .string('subject', 60)
        .notNullable()
      table
        .text('content', 'longtext')
        .notNullable()
      table
        .integer('moderation', 10)
        .notNullable()
      table
        .integer('honor', 10)
        .defaultTo(0)
        .notNullable()
      table
        .string('links', 1200)
      table
        .string('target', 1200)
      table
        .integer('creator', 60)
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('categories', 60)
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
