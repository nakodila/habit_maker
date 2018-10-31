class CreateHabits < ActiveRecord::Migration[5.1]
  def change
    create_table :habits do |t|
      t.string :name
      t.string :color
      t.text :description
      t.datetime :duration
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
