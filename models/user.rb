class User < ActiveRecord::Base
  def self.prepare_params(params)
    {
      name: params[:name],
      title: params[:title],
      github: params[:github],
      twitter: params[:twitter],
      linkedin: params[:linkedin],
      facebook: params[:facebook]
    }
  end
end
