<template>
  <li>
    <span v-if="!isEdit">{{ text }}</span>
    <input v-model="updateTodoTxt" v-if="isEdit" type="text" :placeholder="todo.text" />
    <button v-else @click="isEdit = !isEdit">수정</button>
    <button v-if="isEdit" @click="updateTodo(id)">완료</button>
    <button @click="removeTodo(id)">삭제</button>
  </li>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const { todo } = defineProps(['todo']);
const { id, text } = todo;
const isEdit = ref(false);
const updateTodoTxt = ref('');

function updateTodo(id: number) {
  isEdit.value = !isEdit.value;
  editTodo(id, updateTodoTxt.value);
}

// pinia
import { useTodolistStore } from '../store/todolist';
const { removeTodo, editTodo } = useTodolistStore();
</script>

<style scoped></style>
