<template>
	<div>
		<h2>Tasks:</h2>
		<BackForwardBtn
			v-bind:backBtnDisabled="!canGoBack"
			v-bind:forwardBtnDisabled="!canGoForward"
			v-on:forwardBtnClicked="forward()"
			v-on:backBtnClicked="back()"
		></BackForwardBtn>

		<AllTodoDone></AllTodoDone>

		<template v-if="this.tasks && this.tasks.length > 0">
			<div v-if="this.filterStatus !== TaskFilterStatus.DONE">
				<div v-for="(item) in this.tasks.filter(a => a.status === TaskStatus.INCOMPLETE)">
					<task-item
						v-bind:title="item.label" v-bind:status="item.status" v-on:toggleStatus="toggleItem(item.id)"
					></task-item>
				</div>
				<div v-if="this.tasks.filter(a => a.status === TaskStatus.INCOMPLETE).length === 0">No task to do. Well done!
				</div>
			</div>
			<div class="horizontal-divider"></div>

			<div v-if="this.filterStatus !== TaskFilterStatus.TODO">
				<div v-for="(item) in this.tasks.filter(a => a.status === TaskStatus.COMPLETE)">
					<task-item
						v-bind:title="item.label" v-bind:status="item.status" v-on:toggleStatus="toggleItem(item.id)"
					></task-item>
				</div>
			</div>
		</template>

	</div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { State } from "vuex-class";

  import { Task } from "@/models/Task";
  import { TaskStatus } from "@/models/TaskStatus";
  import TaskItem from "@/components/TaskItem.vue";
  import AllTodoDone from "@/components/All-Todo-Done.vue";
  import { TaskFilterStatus } from "@/models/TaskFilterStatus";

  @Component({
    components: {AllTodoDone, TaskItem},
  })
  export default class TaskList extends Vue {
    @State(state => state.tasks) tasks: Task[];
    @State(state => state.history) history: [Task[]];
    @State(state => state.currentHistoryIndex) currentHistoryIndex: number;
    @State(state => state.filterStatus) filterStatus: TaskFilterStatus;
    TaskStatus: any = TaskStatus;
    TaskFilterStatus: any = TaskFilterStatus;

    mounted() {
      this.$store.dispatch("getTasks");
    }

    back() {
      this.$store.dispatch("goToIndexInHistory", this.currentHistoryIndex - 1);
    }

    forward() {
      this.$store.dispatch("goToIndexInHistory", this.currentHistoryIndex + 1);
    }

    toggleItem(itemId: number) {
      const task = this.tasks.find((task: Task) => task.id === itemId);
      if (task) {
        task.status = task.status === TaskStatus.COMPLETE ? TaskStatus.INCOMPLETE : TaskStatus.COMPLETE;
        this.$store.dispatch("setTask", task);
      }
    }

    get canGoBack(): boolean {
      return this.currentHistoryIndex > 0;
    }

    get canGoForward(): boolean {
      return this.currentHistoryIndex < this.history.length - 1;
    }
  }
</script>

<style lang="scss" scoped>
	$color-highlight-grey: #666;

	.horizontal-divider {
		width: 250px;
		margin: 5px auto;
		height: 2px;
		background-color: $color-highlight-grey;
	}
</style>
