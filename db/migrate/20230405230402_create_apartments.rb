class CreateApartments < ActiveRecord::Migration[6.1]
  def change
    create_table :apartments do |t|
      t.string :name
      t.string :image
      t.float :price

      t.timestamps
    end
  end
end
