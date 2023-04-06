module MyHelperMethods
  def current_landlord
    @current_landlord ||= Landlord.find_by(id: session[:landlord_id])
  end
end

class ApplicationController < ActionController::API
  include ActionController::Cookies
  include MyHelperMethods  

end
