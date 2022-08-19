class Api::RestaurantsController < ApplicationController

    def index
      @restaurants = Restaurant.all
      
      render :index
    end

    def show
        @restaurant = Restaurant.find(params[:id])
    end

    def create
        @restaurant = Restaurant.create!(restaurant_params)
        render :show
    end

    private

    def restaurant_params
    params.require(:restaurant).permit(
      :name,
      :address,
      :description,
      :menu_id,
      :rating,
      :pricing_rating,
      :hours,
      :review_count,
      :img_url
    )
  end


end
