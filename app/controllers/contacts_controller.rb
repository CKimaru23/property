class ContactsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        contact = Contact.create!(contact_params)
        render json: contact, status: :created
    end

    private

    def contact_params
        params.permit(:name, :email, :subject, :message)
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
end
