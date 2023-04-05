class SessionsController < ApplicationController
    def create
        landlord = Landlord.find_by(email: params[:email])
        if landlord&.authenticate(params[:password])
            session[:landlord_id] = landlord.id
            render json: landlord, status: :created
        else
            render json: {error: "Invalid email or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :landlord_id
        head :no_content
    end
end
