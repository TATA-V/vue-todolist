import { defineStore } from 'pinia';

export interface Todo {
  id: number;
  text: string;
}

interface Todos {
  todos: Todo[];
}

export const useTodolistStore = defineStore('todolist', {
  // 초기 상태 지정
  state: () => {
    // return { todos: [] } as Todos;
    return {
      todos: [
        { id: 1, text: '밥먹기' },
        { id: 2, text: '잠자기' },
        { id: 3, text: '산책가기' },
      ],
    } as Todos;
  },
  // 액션 함수 지정
  actions: {
    // 투두 생성
    createTodo(text: string) {
      const lastTodo = this.todos[this.todos.length - 1];
      const newId = lastTodo ? lastTodo.id + 1 : 1;
      this.todos.push({ id: newId, text: text });
    },
    // 투두 삭제
    removeTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 투두 수정
    editTodo(id: number, text: string) {
      this.todos[id - 1].text = text;
      console.log('this.todos: ', this.todos);
    },
  },
});
