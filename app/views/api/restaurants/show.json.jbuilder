json.partial! '/api/restaurants/restaurant', restaurant: @restaurant

json.set! :menu do 
    @restaurant.menu_items.each do |item|
        json.set! item.id do 
            json.extract! item, :name, :restaurant_id, :price, :description, :id, :img_url
        end
    end
end

json.set! :reviews do
    @restaurant.reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :name, :restaurant_id, :body, :created_at
        end
    end
end