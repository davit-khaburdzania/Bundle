class ApplicationController < ActionController::API
  include ActionController::Serialization

  def current_user
    User.find_by(auth_token: user_auth_token) if token_not_nil?
  end

  def authenticate!
    if not_authenticated?
      render json: { errors: unauthorized_error_msg }, status: :not_acceptable
      return
    end
  end

  def default_serializer_options
    { root: false }
  end

  def token_not_nil?
    !user_auth_token.nil?
  end

protected

  def user_auth_token
    request.headers['AUTH-TOKEN']
  end

  def not_authenticated?
    Rails.env.development? ? false : !current_user.present?
  end

private

  def unauthorized_error_msg
    [I18n.t('user_not_authorized')]
  end
end
