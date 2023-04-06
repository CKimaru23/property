class TodoSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :category, :priority, :due_date, :completed
  # has_one :landlord
end
