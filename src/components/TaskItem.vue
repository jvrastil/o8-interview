<template>
	<div
		v-on:click="toggleStatus()"
		class="task-item"
		v-bind:class="{ complete: isComplete}"
	>
		<label>{{ this.title }}</label>
		<div class="status">
			<label>{{ this.getStatusDescription }}</label>
		</div>
	</div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import { TaskStatus } from "@/models/TaskStatus";

  @Component
  export default class TaskItem extends Vue {

    @Prop() title!: string;
    @Prop() status!: TaskStatus;

    TaskStatus: any = TaskStatus;

    toggleStatus() {
      this.$emit("toggleStatus");
    }

    get getStatusDescription(): string {
      return this.status === TaskStatus.COMPLETE ? "DONE" : "TO DO";
    }

    get isComplete(): boolean {
      return this.status ===  TaskStatus.COMPLETE;
    }

  }
</script>

<style lang="scss" scoped>
	$color-highlight-orange: #ffc100;
	$color-highlight-grey: #666;
	$color-blue: #009bde;
	$color-black: #000;
	$color-white: #fff;

	.task-item {
		display: inline-flex;
		width: 370px;
		color: $color-highlight-orange;
		font-size: 18px;

		label {
			text-align: left;
			width: 300px;
		}

		&.complete {
			color: $color-highlight-grey;
			opacity: 0.5;
		}

		.status {
			margin-left: 10px;

			label {
				text-align: right;
			}
		}
	}

</style>
