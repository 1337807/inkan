require 'bundler'
require 'active_support/all'

Bundler.require

class App < Sinatra::Base

  configure :development do
    require "sinatra/reloader"
    register Sinatra::Reloader
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
