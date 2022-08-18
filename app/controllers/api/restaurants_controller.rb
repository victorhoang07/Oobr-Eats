class Api::RestaurantsController < ApplicationController

    def index
    @restaurants = Restaurant.all
    render :index

    end

    def show
        @bench = Restaurant.find(params[:id])
    end

    def create
        @bench = Restaurant.create!(restaurant_params)
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
      :review_count
    )
  end


end
