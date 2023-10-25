<template>
  <h1>EditPage</h1>
  <RouterLink to="/">📑main page</RouterLink>
  <h2>Edit Todolist</h2>

  <input v-model="newTodo" type="text" placeholder="생성 할 투두를 입력해 주세요." />
  <button @click="handleCreateTodo">저장</button>

  <ul>
    <TodoItem v-for="todo in todolist.todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script setup lang="ts">
import TodoItem from '../components/TodoItem.vue';
import { ref } from 'vue';
import { useTodolistStore } from '../store/todolist';

const newTodo = ref('');
const todolist = useTodolistStore();
const { createTodo } = useTodolistStore();

function handleCreateTodo() {
  if (newTodo.value.trim() !== '') {
    createTodo(newTodo.value);
    newTodo.value = '';
  }
}
</script>

<style scoped></style>
