<script setup lang="ts">
import axios from "axios";
import { onMounted, reactive, computed } from "vue";
import BoardView from "./views/BoardView.vue";

let data: any = reactive({})
  let columnName = ""
  let cardTitle= "";

  function addColumn(columnName: string){
    data.board.columns.push({name: columnName, cards:[]});
  };

  function addCard(column: any, cardTitle: string){
    column.cards.push({title: cardTitle, estimative: 3})
    column.estimative += 3
  };

  function increaseEstimative(card: any){
    card.estimative ++;
  };

  const boardEstimative = computed(()=>{
    return data.board.columns.reduce((total: number, column: any) => {
        total += column.cards.reduce((total: number, card: any) => {
          total += card.estimative;
          return total;
        }, 0);
        return total;
      }, 0);
  })

  onMounted(async () => {
    const response = await axios({
      url: "http://localhost:3000/boards/1",
      method: "get"
    });

    data.board = response.data
  });
</script>

<template>
  <!--ROUTER-->
  <BoardView></BoardView>
</template>

<style scoped>
</style>
