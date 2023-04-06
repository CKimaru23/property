class AddIsOnSaleToApartments < ActiveRecord::Migration[6.1]
  def change
    add_column :apartments, :is_on_sale, :boolean, null: false, default: true
  end
end
