class CreateLandlords < ActiveRecord::Migration[6.1]
  def change
    create_table :landlords do |t|
      t.string :fname
      t.string :lname
      t.string :email
      t.string :password_digest
      t.string :phoneNumber
      t.string :address

      t.timestamps
    end
  end
end
