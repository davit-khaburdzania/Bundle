class AuthController < ApplicationController
  before_action :authenticate!, only: [:destroy]

  def create
    user_data = social_user_data(auth_params)
    user = authenticate_user(user_data)

    serialized = UserSerializer.new(user, root: false)
    query_string = serialized.to_json

    redirect_to "http://localhost:8080?authenticated=true&user=#{query_string}"
  end

  def destroy
    if current_user.destroy_auth_token!
      render json: { success: true }
    else
      render json: { errors: I18n.t('cant_destroy_token') },
             status: :not_acceptable
    end
  end

private

  def auth_params
    request.env["omniauth.auth"]
  end

  def authenticate_user(user_auth_params)
    User::Auth::AuthenticateService.new(user_auth_params).call
  end

  def social_user_data(user_data)
    Social::Transformers::Transformer.new({
      provider: auth_params[:provider],
      data: user_data
    }).data
  end
end
