class CollectionsController < ApplicationController
  before_action :authenticate!
  before_action :set_collection, except: [:index, :create]

  def index
    collections = current_user.collections
    render json: collections, each_serializer: CollectionsSerializer
  end

  def show
    render json: @collection
  end

  def create
    collection = Collection.new(collection_params)
    collection.creator = current_user

    if collection.save
      render json: collection
    else
      render json: { errors: collection.errors }, status: :not_acceptable
    end
  end

  def update
    if @collection.update(collection_params)
      render json: @collection
    else
      render json: { errors: @collection.errors }, status: :not_acceptable
    end
  end

  def destroy
    @collection.destroy

    if @collection.destroyed?
      render json: { success: true }
    else
      render json: { errors: @collection.errors }, status: :not_acceptable
    end
  end

  def bundles
    bundles = @collection.bundles
    render json: bundles, each_serializer: BundlesSerializer
  end

private

  def collection_params
    params.permit(:name)
  end

  def set_collection
    @collection = Collection.friendly.find(params[:id])

  rescue ActiveRecord::RecordNotFound
    render json: { errors: [I18n.t('error_not_found')] }, status: :not_found
  end
end
