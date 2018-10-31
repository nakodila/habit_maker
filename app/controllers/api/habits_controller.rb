class HabitsController < ApplicationController
  before_action :require_logged_in

  def index
    @habits = current_user.habits
    @user = current_user
    render "/api/habits/index"
  end

  def show
    @habit = current_user.habits.find(params[:id])
  end

  def create
    @habit = current_user.habits.new(habit_params)
    @habit.user_id = current_user.id
    if @habit.save
      render "/api/lists/show"
    else
      render json: @habit.errors.full_messages, status: 422
    end
  end

  def update
    @habit = current_user.habits.find(params[:id])
    if @habit.update(habit_params)
      render "/api/habits/show"
    else
      render json: @habit.errors.full_messages, status: 422
      render "/api/habits/show"
    end
  end

  def destroy
    @habit = current_user.habits.find(params[:id])
    @habit.destroy
    render "/api/habits/show"
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_habit
      @habit = current_user.habits.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def habit_params
      params.require(:habit).permit(:name, :color, :description, :duration)
    end
end
