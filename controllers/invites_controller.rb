class InvitesController < ApplicationController
  before_action :authenticate!
  before_action :set_resource
  rescue_from NameError, with: :undefined_resource_error

  def create
    if send_invites
      render json: { success: true }
    else
      render json: { errors: [I18n.t('couldnt_invite')] },
        status: :not_acceptable
    end
  end

  def approve
    if approve_invite
      render json: { success: true }
    else
      render json: { errors: [I18n.t('couldnt_approve_invite')] },
        status: :not_acceptable
    end
  end

private

  def send_invites
    User::Invites::CreateService.new({
      inviter: current_user,
      resource: @resource,
      data: invite_params[:data]
    }).call
  end

  def approve_invite
    User::Invites::ApproveService.new({
      invited_user: current_user,
      resource: @resource
    }).call
  end

  def invite_params
    params.permit(:resource, :id, data: [:email, :permission_id])
  end

  def parsed_resource_name
    invite_params[:resource].singularize.capitalize
  end

  def set_resource
    @resource = parsed_resource_name
      .constantize
      .find(invite_params[:id])
  end

  def undefined_resource_error(ex)
    render json: { errors: [ex.message] },
           status: :unprocessable_entity
    return
  end
end
