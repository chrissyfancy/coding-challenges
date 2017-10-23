require 'sinatra'
require 'pry'

set :bind,'0.0.0.0'

get '/' do
  redirect to "/box.html"
end

get '/box.html' do
  erb :index
end
