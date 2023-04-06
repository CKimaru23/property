class Todo < ApplicationRecord
  belongs_to :landlord

  validates :title, presence: true
  validates :description, presence: true
  validates :category, presence: true
  validates :priority, presence: true
  validates :due_date, presence: true
end
