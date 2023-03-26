<script setup lang="ts">
import axios from "axios";
import { onMounted, reactive, computed, ref } from "vue";
import Board from "../entities/Board";

const data: {board: Board | undefined} = reactive({board: undefined})
let cardTitle = ref("");

onMounted(async () => {
  const response = await axios({
    url: "http://localhost:3000/boards/1",
    method: "get",
  });

  const boardData = response.data;
  const board = new Board(boardData.name);

  for (const columnData of boardData.columns) {
    board.addColumn(columnData.name, columnData.estimative);
    for (const cardData of columnData.cards) {
      board.addCard(columnData.name, cardData.title, cardData.estimative)
    }
  }

  data.board = board;
});
</script>


<template>
<div v-if="data.board">
    <h3>{{ data.board.name }} {{ data.board.getEstimative }}</h3>
    <div class="columns">
      <div class="column" v-for="column in data.board.columns">
        <h3>{{ column.name }} {{ column.getEstimative() }}</h3>
        <div class="card" v-for="card in column.cards">
          {{ card.title }} {{ card.estimative }}
          <br />
          <!-- <button @click="increaseEstimative(card)">+</button><button>-</button> -->
        </div>
        <div class="card new-card">
          <input type="text" v-model="cardTitle" />
          <button v-on:click="addCard(column, cardTitle)">Add</button>
        </div>
      </div>
      <div class="column new-column">
        {{ columnName }}
        <input type="text" v-model="columnName" />
        <button v-on:click="addColumn(columnName)">Add</button>
      </div>
    </div>
</div>
</template>

<style scoped>
.columns {
  display: flex;
  flex-direction: row;
}
.column {
  width: 200px;
  text-align: center;
  background-color: #d3cecea1;
  margin-right: 5px;
  padding: 10px;
  border: 1px solid;
}

.new-column {
  background-color: #eee;
  border: 1px dashed #ccc;
  display: block;
}

.card {
  text-align: center;
  width: 100%;
  height: 100px;
  background-color: coral;
  border: 1px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.new-card {
  background-color: rgb(110, 110, 110);
  border: 1px dashed #ccc;
  display: block;
}
</style>
