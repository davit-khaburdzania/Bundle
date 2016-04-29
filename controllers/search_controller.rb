class SearchController < ApplicationController
  before_action :authenticate!
  
  def resource
    search_result = SearchResource.new(user: current_user, query: query).search

    render json: search_result, serializer: SearchResourceSerializer
  end

private

  def query
    params[:q]
  end
end
