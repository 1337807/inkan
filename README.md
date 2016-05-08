## Inkan

A simple app to aid in your making your gmail signature

## Local Installation

### Requirements
* Ruby
* Bundler
* Heroku Toolbelt
* postgres
* NPM

```term
$ cp .env.dist .env #and fill in ENV as needed
$ cp config/database.yml.dist config/database.yml #and fill in db info as needed
$ rake db:create db:migrate
$ bundle install
$ npm i
$ heroku local
$ grunt #in a separate terminal
```

### Console
```term
$ irb
require './app'
User.all #etc
```
