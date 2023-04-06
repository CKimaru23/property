class ApartmentsController < ApplicationController
    before_action :set_apartment, only: [:show, :update, :destroy]
  
    def index
      @apartments = current_landlord.apartments
      render json: @apartments
    end
  
    def show
      render json: @apartment
    end
  
    def create
      @apartment = current_landlord.apartments.create(apartment_params)
      if @apartment.save
        render json: @apartment, status: :created #location: @apartment
      else
        render json: @apartment, status: :unprocessable_entity
      end
    end
  
    def update
      if @apartment.update(apartment_params)
        render json: @apartment, status: :ok
      else
        render json: @apartment, status: :unprocessable_entity
      end
    end
  
    def destroy
      @apartment.destroy
      head :no_content
    end
  
    private
  
    def set_apartment
      @apartment = current_landlord.apartments.find(params[:id])
    end
  
    def apartment_params
      params.require(:apartment).permit(:name, :image, :price, :is_on_sale)
    end
  end
  