class AddColumnstoRestaurant < ActiveRecord::Migration[5.2]
  def change

    add_column :restaurants, :lng, :float
    add_column :restaurants, :lat, :float
  end
end
