class Landlord < ApplicationRecord
    # has_many :properties, dependent: :destroy
    # has_many :tenants, through: :properties
    # has_many :payments, through: :tenants
    # has_many :todos
  
    # Validations
    validates :fname, presence: true
    validates :lname, presence: true
    validates :address, presence: true
    validates :phoneNumber, presence: true, format: { with: /\A\d{10}\z/, message: "must be 10 digits" }
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP, message: "must be a valid email address" }
    validates :password, presence: true, length: { minimum: 8 }, confirmation: true
    validates :password_confirmation, presence: true
    validate :passwords_match

    private

    def passwords_match
      if password != password_confirmation
        errors.add(:password_confirmation, "does not match password")
      end
    end
  
    has_secure_password
  
    # def self.authenticate(email, password)
    #   landlord = find_by_email(email)
    #   landlord&.authenticate(password)
    # end
  end
  
  