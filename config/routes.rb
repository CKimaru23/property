Rails.application.routes.draw do
  resources :todos, only: [:create, :show, :index, :update, :destroy]
  resources :apartments, only: [:create, :show, :index, :update, :destroy]
  # resources :contacts
  post "/signup", to: "landlords#create"
  get "/me", to: "landlords#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/contact", to: "contacts#create"

  # resources :landlords do
  #   resources :todos
  # end

  # post  "/todos", to: "todos#create"
  
  
end
