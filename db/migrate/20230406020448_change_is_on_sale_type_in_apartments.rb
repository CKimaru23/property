class ChangeIsOnSaleTypeInApartments < ActiveRecord::Migration[6.1]
  def change
    change_column :apartments, :is_on_sale, :string, default: 'on sale'
  end
end
