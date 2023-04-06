class Todo < ApplicationRecord
  belongs_to :landlord

  validates :title, presence: true
  validates :description, presence: true
  validates :category, presence: true
  validates :priority, inclusion: { in: %w(low medium high) }
  validates :due_date, presence: true, numericality: {greater_than_or_equal_to:2023, less_than_or_equal_to:Date.today.year}
  validates :completed, presence: true
end
