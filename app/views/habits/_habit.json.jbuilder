json.extract! habit, :id, :name, :color, :description, :duration, :created_at, :updated_at
json.url habit_url(habit, format: :json)
