require "sinatra"
require "sinatra/reloader"
require "sinatra/json"
require "json"
require "pry"

get '/' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/users/:id' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/bookmarks' do
  send_file File.expand_path('index.html', settings.public_folder)
end
