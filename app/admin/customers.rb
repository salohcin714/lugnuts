ActiveAdmin.register Customer do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :firstName, :lastName, :phone, :address, :city, :state, :postalCode, :country

  form do |f|
    inputs do
      input :firstName
      input :lastName
      input :phone
      input :address
      input :city
      input :state
      input :postalCode
      input :country
    end
    actions
  end
  #
  # or
  #
  # permit_params do
  #   permitted = [:firstName, :lastName, :phone, :address, :city, :state, :postalCode, :country, :user_id]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

end
