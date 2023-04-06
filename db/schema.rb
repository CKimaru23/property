# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_04_06_115324) do

  create_table "apartments", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.float "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "landlord_id", null: false
    t.string "is_on_sale", default: "on sale", null: false
    t.index ["landlord_id"], name: "index_apartments_on_landlord_id"
  end

  create_table "contacts", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "subject"
    t.string "message"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "landlords", force: :cascade do |t|
    t.string "fname"
    t.string "lname"
    t.string "email"
    t.string "password_digest"
    t.string "phoneNumber"
    t.string "address"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "todos", force: :cascade do |t|
    t.integer "landlord_id", null: false
    t.string "title"
    t.string "description"
    t.string "category"
    t.string "priority"
    t.string "due_date"
    t.boolean "completed"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["landlord_id"], name: "index_todos_on_landlord_id"
  end

  add_foreign_key "apartments", "landlords"
  add_foreign_key "todos", "landlords"
end
