<template>
  <li>
    <span v-if="!isEdit">{{ todo.todo.text }}</span>
    <input v-model="updateTodoTxt" v-if="isEdit" type="text" :placeholder="todo.todo.text" />
    <button v-else @click="isEdit = !isEdit">수정</button>
    <button v-if="isEdit" @click="updateTodo(todo.todo.id)">완료</button>
    <button @click="removeTodo(todo.todo.id)">삭제</button>
  </li>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

// const { todo } = defineProps(['todo']);
// const { id, text } = todo;

// console.log(todo);
interface Todo {
  todo: {
    id: number;
    text: string;
  };
}
const todo = defineProps<Todo>();
const isEdit = ref(false);
const updateTodoTxt = ref('');
console.log('todo:', todo);

function updateTodo(id: number) {
  isEdit.value = !isEdit.value;
  editTodo(id, updateTodoTxt.value);
}

// pinia
import { useTodolistStore } from '../store/todolist';
const { removeTodo, editTodo } = useTodolistStore();
</script>

<style scoped></style>
