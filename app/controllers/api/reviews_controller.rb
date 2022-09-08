class Api::ReviewsController < ApplicationController

    def create
        @review = Review.create!(reviews_params)
        if @review.save
            render json: @review
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private

     def reviews_params
        params.require(:review).permit(:name,:body)
  end    
end
