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
    createTodo(text: Todo) {
      this.todos.push(text);
    },
    // 투두 삭제
    removeTodo(id: number) {
      this.todos.filter((todo) => todo.id !== id);
    },
    // 투두 수정
    editTodo(id: number, text: Todo) {
      this.todos[id - 1] = text;
    },
  },
});
