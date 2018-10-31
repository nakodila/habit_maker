require 'date'

class Habit < ApplicationRecord
  validates :name, :color, presence: true

  def still_active?
    today = DateTime.now
    :duration <= today
  end
end
