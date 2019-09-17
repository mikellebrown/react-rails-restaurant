class Api::CartesController < ApplicationController

before_action :set_carte, only: [:show, :update, :destroy]

def index
  render json: Carte.all 
end

def show 
  render json: @carte 
end

def create
  carte = Carte.new(carte_params)
  if carte.save 
    render json: carte
  else 
    render json: { errors: item.errors }, status: :unprocessable_entity 
  end
end


def update
  if carte.update
    render json: @carte
  else
    render json: { errors: carte.errors }, status: :unprocessable_entity 
  end
end


def destroy
  @carte.destroy
    render json: { message: "Carte Deleted " }
  end
end

private

def carte_params
  params.require(:carte).permit(:name)
  
end

def set_carte
  @carte = Carte.find(params[:id])
 end

