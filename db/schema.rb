# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_22_153742) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "menu_items", force: :cascade do |t|
    t.string "name", null: false
    t.float "price", null: false
    t.integer "restaurant_id", null: false
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "img_url"
    t.index ["restaurant_id"], name: "index_menu_items_on_restaurant_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.string "address"
    t.text "description", null: false
    t.integer "menu_id"
    t.float "rating"
    t.string "pricing_rating"
    t.string "hours"
    t.integer "review_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "img_url"
    t.float "lng"
    t.float "lat"
    t.index ["address"], name: "index_restaurants_on_address"
    t.index ["menu_id"], name: "index_restaurants_on_menu_id"
    t.index ["name"], name: "index_restaurants_on_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email", null: false
    t.integer "phone_number"
    t.string "password_digest"
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["phone_number"], name: "index_users_on_phone_number", unique: true
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
