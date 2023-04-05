class ContactSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :subject, :message
end
