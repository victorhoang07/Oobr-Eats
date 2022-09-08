class Review < ApplicationRecord

    validates :name, :body, presence: true

    belongs_to :restaurant,
    primary_key: :id, 
    foreign_key: :restaurant_id,
    class_name: :Restaurant
    
end
