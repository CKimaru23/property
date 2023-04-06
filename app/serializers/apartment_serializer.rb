class ApartmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price, :is_on_sale
end
