class LandlordsController < ApplicationController
    def create
        landlord = Landlord.create(landlord_params)
        if landlord.valid?
            session[:landlord_id] = landlord.id
            render json: landlord, status: :created
        else
            render json: {errors: landlord.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        landlord = Landlord.find_by(id: session[:landlord_id])
        if landlord
            render json: landlord
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end

    end

    def passwords_match
        if password != password_confirmation
          errors.add(:password_confirmation, "does not match password")
        end
    end


    private

    def landlord_params
        params.permit(:fname, :lname, :email, :phoneNumber, :address, :password, :password_confirmation)
    end

end
