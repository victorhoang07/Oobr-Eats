class AddImgUrlToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :img_url, :string
  end
end
