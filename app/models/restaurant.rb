class Restaurant < ApplicationRecord

    validates :name, :description, presence: true 

    has_many :menu_items,
    primary_key: :id,
    foreign_key: :restaurant_id,
    class_name: :MenuItem

    has_many :reviews,
    primary_key: :id,
    foreign_key: :restaurant_id,
    class_name: :Review

end
