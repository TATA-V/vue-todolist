<template>
  <h1>MainPage</h1>
  <RouterLink to="/edit">✏️edit todo-list</RouterLink>
  <h2>TODO LIST</h2>
  <ul>
    <li v-for="todo in todolist.todos">
      {{ todo.text }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useTodolistStore } from '../store/todolist';

const todolist = useTodolistStore();
</script>

<style scoped></style>
