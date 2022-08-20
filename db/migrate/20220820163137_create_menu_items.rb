class CreateMenuItems < ActiveRecord::Migration[5.2]
  def change
    create_table :menu_items do |t|
      t.string :name, null: false
      t.float :price, null: false
      t.integer :restaurant_id, null: false
      t.string :description
      t.timestamps
    end

    add_index :menu_items, :restaurant_id 
  end
end
