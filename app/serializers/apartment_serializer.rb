class ApartmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price
end
