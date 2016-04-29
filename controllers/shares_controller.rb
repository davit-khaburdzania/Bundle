class SharesController < ApplicationController
  before_action :authenticate!
  before_action :set_resource
  rescue_from NameError, with: :undefined_resource_error

  def share_by_url
    if share_url!
      render json: @resource.url_share
    else
      render json: { errors: [I18n.t('couldnt_share_by_url')] },
        status: :unprocessable_entity
    end
  end

private

  def share_url!
    permission = Permission.find_by(id: share_params[:permission_id])

    if permission.present?
      @resource.share_by_url!( user: current_user, permission: permission )
    end
  end

  def share_params
    params.permit(:resource, :id, :permission_id)
  end

  def parsed_resource_name
    share_params[:resource].singularize.capitalize
  end

  def set_resource
    @resource = parsed_resource_name
      .constantize
      .find(share_params[:id])
  end

  def undefined_resource_error(ex)
    render json: { errors: [ex.message] },
           status: :unprocessable_entity
    return
  end
end
