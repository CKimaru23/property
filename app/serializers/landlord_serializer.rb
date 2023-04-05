class LandlordSerializer < ActiveModel::Serializer
    attributes :id, :fname, :lname, :email, :address, :phoneNumber
end