json.partial! '/api/restaurants/restaurant', restaurant: @restaurant

json.set! :menu do 
    @restaurant.menu_items.each do |item|
        json.set! item.id do 
            json.extract! item, :name, :price, :description, :id, :img_url
        end
    end
end

