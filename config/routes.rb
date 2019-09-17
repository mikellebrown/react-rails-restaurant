Rails.application.routes.draw do
namespace :api do
  resources :cartes do
    resources :dishes 
    end
  end
end