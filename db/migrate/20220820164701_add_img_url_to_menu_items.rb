class AddImgUrlToMenuItems < ActiveRecord::Migration[5.2]
  def change
    add_column :menu_items, :img_url, :string
  end
end
