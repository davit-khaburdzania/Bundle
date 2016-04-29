class FavoritesController < ApplicationController
  before_action :authenticate!
  before_action :set_resource, except: [:index]
  rescue_from NameError, with: :undefined_resource_error

  def index
    favorites = Favorite.includes(:favoritable)
    render json: favorites, each_serializer: FavoritesSerializer, scope: current_user
  end

  def favorite
    if @resource.favorite_by(current_user)
      @resource.reload
      render json: @resource
    else
      render json: { errors: [I18n.t('could_not_favorite')] },
             status: :not_acceptable
    end
  end

  def unfavorite
    if @resource.unfavorite_by(current_user)
      render json: @resource
    else
      render json: { errors: [I18n.t('could_not_unfavorite')] },
             status: :not_acceptable
    end
  end

private

  def favorite_params
    params.permit(:resource, :id)
  end

  def parsed_resource_name
    favorite_params[:resource].singularize.capitalize
  end

  def set_resource
    @resource = parsed_resource_name
      .constantize
      .friendly
      .find(favorite_params[:id])
  end

  def undefined_resource_error(ex)
    render json: { errors: [ex.message] },
           status: :unprocessable_entity
    return
  end
end
