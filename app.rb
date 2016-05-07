require 'bundler'
require 'sinatra'
require 'sinatra/activerecord'
require './config/environments'
require 'json'
require './models/user'

Bundler.require

class App < Sinatra::Base

  helpers do
    def authenticate!
      if ENV['RACK_ENV'] == 'production' && request.env["bouncer.email"].empty?
        puts "Authentication error"
        halt 404
      end
    end
  end

  configure do
    enable :logging
    Tilt.register "erb.html", Tilt[:erb]
    set :erb, :layout => :'layouts/default'
  end

  before do
    authenticate!
  end

  get "/" do
    erb :index
  end

  post '/submit.json' do
    content_type :json
    params = JSON.parse(request.body.read, symbolize_names: true)
    @user = User.where(email: request.env.fetch('bouncer.email', 'foo@bar.com')).first_or_initialize do |user|
      user.name     = params[:name]
      user.title    = params[:title]
      user.github   = params[:github]
      user.twitter  = params[:twitter]
      user.linkedin = params[:linkedin]
      user.facebook = params[:facebook]
    end
    if @user.update(User.prepare_params(params))
      @user.to_json
    else
      halt 500
    end
  end

  get '/user.json' do
    content_type :json
    User.find_by(email: request.env.fetch('bouncer.email', 'foo@bar.com')).to_json
  end
end
