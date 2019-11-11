import { observable, computed, action } from 'mobx';

interface Todo {
    name: string,
    completed: boolean
}

export class TodoStore {
    @observable 
    todos: Array<Todo> = [];

    get completedTodosCount() {
        return this.todos.filter(todo => todo.completed === true).length;
    }

    @computed
    get latest() {
        return this.todos[0].name;
    }

    addTodo(name: string) {
        this.todos.push({name: name, completed: true});
    }
}

export const todoStore = new TodoStore();