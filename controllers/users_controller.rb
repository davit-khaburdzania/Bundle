class UsersController < ApplicationController
  before_action :authenticate!

  def me
    render json: current_user
  end
end
