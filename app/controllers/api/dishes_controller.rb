class Api::DishesController < ApplicationController
  before_action :set_carte
  before_action :set_dish, only: [:show, :update, :destroy]
  def index
    render json: @carte.dishes.all 
  end

  def show
    render json: @carte.dishes
  end

  def create
    dish = @carte.dish.new(dish_params)
    if dish.save 
      render json: @carte.dish
    else 
      render json: { errors: item.errors }, status: :unprocessable_entity 
    end
  end

  def update
    if @carte.dish.update
      render json: @carte.dish
    else
      render json: { errors: item.errors }, status: :unprocessable_entity 
    end
  end
  
  def destroy
    @carte.dish.destroy
    render json: { message: "Item deleted" }
    end
  end



private

def set_carte
  @carte = Carte.find(params[:id])
end

def set_dish
  dish = @carte.dish.find(params[:carte_id])
end

def dish_params
  params.require(:dish).permit(:name, :price)
  end
end
