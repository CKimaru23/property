Rails.application.routes.draw do
  resources :apartments
  resources :contacts
  post "/signup", to: "landlords#create"
  get "/me", to: "landlords#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/contact", to: "contacts#create"
  
end
