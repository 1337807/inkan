require 'bundler'
require 'sinatra'
require 'sinatra/activerecord'
require './config/environments'

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
end
