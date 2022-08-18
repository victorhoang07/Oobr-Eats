class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address
      t.text :description, null: false
      t.integer :menu_id
      t.float :rating
      t.string :pricing_rating
      t.string :hours
      t.integer :review_count
      t.timestamps
    end

    add_index :restaurants, :menu_id
    add_index :restaurants, :name
    add_index :restaurants, :address

  end
end
