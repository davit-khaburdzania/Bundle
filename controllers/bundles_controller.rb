class BundlesController < ApplicationController
  before_action :authenticate!
  before_action :set_bundle, except: [:index, :create]

  def index
    bundles = current_user.bundles
    render json: bundles, each_serializer: BundlesSerializer
  end

  def show
    render json: @bundle
  end

  def create
    bundle = Bundle.new(bundle_params)
    bundle.creator = current_user

    if bundle.save
      render json: bundle
    else
      render json: { errors: bundle.errors }, status: :not_acceptable
    end
  end

  def update
    if @bundle.update(bundle_params)
      render json: @bundle
    else
      render json: { errors: @bundle.errors }, status: :not_acceptable
    end
  end

  def destroy
    @bundle.destroy

    if @bundle.destroyed?
      render json: { success: true }
    else
      render json: { errors: @bundle.errors }, status: :not_acceptable
    end
  end

private

  def bundle_params
    bundle = params.require(:bundle).permit!
    links = bundle['links_attributes'] || []

    bundle['links_attributes'] = links_with_creator(links)
    bundle
  end

  def links_with_creator(links)
    links.map do |link|
      link['creator_id'] = current_user.id
      link
    end
  end

  def set_bundle
    @bundle = Bundle.friendly.find(params[:id])

  rescue ActiveRecord::RecordNotFound
    render json: { errors: [I18n.t('error_not_found')] }, status: :not_found
  end
end
