class AddIndexToReviews < ActiveRecord::Migration[5.2]
  def change

    add_index :reviews, :restaurant_id

  end
end
