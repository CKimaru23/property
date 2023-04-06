class TodosController < ApplicationController
    before_action :set_todo, only: [:show, :update, :destroy]
  
    def index
      @todos = current_landlord.todos
      render json: @todos
    end
  
    def show
      render json: @todo
    end
  
    def create
      @todo = current_landlord.todos.create(todo_params)
      if @todo.save
        render json: @todo, status: :created #location: @todo
      else
        render json: @todo, status: :unprocessable_entity
      end
    end
  
    def update
      if @todo.update(todo_params)
        render json: @todo, status: :ok
      else
        render json: @todo, status: :unprocessable_entity
      end
    end
  
    def destroy
      @todo.destroy
      head :no_content
    end
  
    private
  
    def set_todo
      @todo = current_landlord.todos.find(params[:id])
    end
  
    def todo_params
      params.require(:todo).permit(:title, :description, :category, :priority, :due_date, :completed)
    end
  end
  