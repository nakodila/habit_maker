@habits.each do |habit|
  json.set! habit.id do
    json.extract! habit, :id, :name, :color, :user_id
  end
end
