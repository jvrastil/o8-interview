<template>
  <div class="home">
    <TaskList></TaskList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TaskList from '@/components/TaskList.vue';
import BackForwardBtn from '@/components/BackForwardBtn.vue'; // @ is an alias to /src

@Component({
  components: {
    TaskList,
    BackForwardBtn,
  }
})
export default class Home extends Vue {}
</script>
