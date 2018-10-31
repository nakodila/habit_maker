json.habit do
  json.id @habit.id
  json.name @habit.name
  json.userId @habit.user_id
  json.description @habit.description
  json.color @habit.color
  json.duration @habit.duration
  json.createdAt @habit.created_at
end
