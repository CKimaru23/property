class AddLandlordToApartments < ActiveRecord::Migration[6.1]
  def change
    add_reference :apartments, :landlord, null: false, foreign_key: true
  end
end
