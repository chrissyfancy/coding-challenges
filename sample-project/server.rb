require "sinatra"
require "sinatra/reloader"
require "sinatra/json"
require "json"
require "pry"
require "pg"

system "dropdb sample_project_development"
system "dropdb sample_project_test"
system "dropdb sample_project_production"

system "createdb sample_project_development"
system "createdb sample_project_test"
system "createdb sample_project_production"


system "psql sample_project_development < schema.sql"
system "psql sample_project_test < schema.sql"
system "psql sample_project_production < schema.sql"

set :bind, '0.0.0.0'
enable :sessions

configure :development do
  set :db_config, { dbname: "sample_project_development" }
end

configure :test do
  set :db_config, { dbname: "sample_project_test" }
end

configure :production do
  set :db_config, { dbname: "sample_project_production" }
end

def bookmarks
  db_connection { |conn| conn.exec("SELECT * FROM bookmarks") }.to_a
end

def check_if_exists(name)
  add_to_db = false
  bookmarks.each do |n|
    if n["user_name"] == name
      add_to_db = true
    end
  end
  return add_to_db
end

def bookmark_id
  if bookmarks.length == 0
    return 1
  else
    return bookmarks.length + 1
  end
end

def db_connection
  begin
    connection = PG.connect(Sinatra::Application.db_config)
    yield(connection)
  ensure
    connection.close
  end
end

get '/' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/users/:id' do
  send_file File.expand_path('index.html', settings.public_folder)
end

get '/bookmarks' do
  return bookmarks.to_json
end

post '/bookmarks' do
  payload = JSON.parse(request.body.read)
  bookmark = [bookmark_id, payload["name"], payload["id"]]

  if !check_if_exists(payload["name"])
    db_connection do |conn|
      conn.exec_params("INSERT INTO bookmarks (id, user_name, user_id) VALUES ($1, $2, $3)", bookmark)
    end
  end
  return bookmarks.to_json
end
