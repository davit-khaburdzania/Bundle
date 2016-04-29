class LinksController < ApplicationController
  before_action :authenticate!
  before_action :set_link, only: [:show, :update, :destroy]

  def show
    render json: @link
  end

  def create
    link = Link.new(link_params)
    link.creator = current_user

    if link.save
      render json: link
    else
      render json: { errors: link.errors }, status: :not_acceptable
    end

  end

  def update
    if @link.update(link_params)
      render json: @link
    else
      render json: { errors: @link.errors }, status: :not_acceptable
    end
  end

  def destroy
    @link.destroy

    if @link.destroyed?
      render json: { success: true }
    else
      render json: { errors: @link.errors }, status: :not_acceptable
    end
  end

private

  def link_params
    params.permit(:title, :description, :image, :url, :bundle_id)
  end

  def set_link
    @link = Link.find(params[:id])

  rescue ActiveRecord::RecordNotFound
    render json: { errors: [I18n.t('error_not_found')] }, status: :not_found
  end
end
