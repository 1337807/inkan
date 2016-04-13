require 'dotenv'
Dotenv.load
require 'heroku/bouncer'
require './app'
require 'sass/plugin/rack'

use Sass::Plugin::Rack

if ENV['RACK_ENV'] == 'production'
  use Rack::SslEnforcer
  set :session_secret, ENV['HEROKU_BOUNCER_SECRET']
end

STDOUT.sync = true

use Rack::Session::Cookie,
    secret: ENV['HEROKU_BOUNCER_SECRET'],
    key: "heroku_inkan"

if ENV['RACK_ENV'] == 'production'
  use Heroku::Bouncer, oauth: {
    id: ENV['HEROKU_OAUTH_ID'],
    secret: ENV['HEROKU_OAUTH_SECRET'],
    scope: 'identity'
  },
  secret: ENV['HEROKU_BOUNCER_SECRET'],
  expose_token: true,
  allow_if: lambda { |email| email.end_with? "@heroku.com" }
end

run App
