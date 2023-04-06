class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.references :landlord, null: false, foreign_key: true
      t.string :title
      t.text :description
      t.string :category
      t.string :priority
      t.date :due_date
      t.boolean :completed

      t.timestamps
    end
  end
end
