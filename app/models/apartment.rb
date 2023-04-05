class Apartment < ApplicationRecord
    belongs_to :landlord
    validates :name, presence: true, length: { maximum: 50 }
    validates :image, presence: true
    validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
end
