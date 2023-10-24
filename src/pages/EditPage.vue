<template>
  <h1>EditPage</h1>
  <RouterLink to="/">📑main page</RouterLink>
  <h2>Edit Todolist</h2>

  <input v-model="create" type="text" placeholder="생성 할 투두를 입력해 주세요." />
  <button>저장</button>

  <ul>
    <li v-for="todo in todolist.todos">
      <span v-if="!isEdit">{{ todo.text }}</span>
      <input v-if="isEdit" type="text" :placeholder="todo.text" />
      <button v-if="!isEdit" @click="isEdit = !isEdit">수정</button>
      <button v-if="isEdit" @click="isEdit = !isEdit">완료</button>
      <button @click="isEdit = !isEdit">삭제</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Todo } from '../store/todolist';
import { useTodolistStore } from '../store/todolist';

const create = ref<Todo>();
const isEdit = ref<boolean>(false);
const todolist = useTodolistStore();

function handleCreateTodo() {
  todolist.createTodo(create);
}
</script>

<style scoped></style>
