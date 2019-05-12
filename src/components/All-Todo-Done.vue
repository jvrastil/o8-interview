<template>
	<div class="filter">
		<div
			class="all item"
			v-bind:class="{ selected: isSelected(TaskFilterStatus.ALL)}"
			v-on:click="setStatus(TaskFilterStatus.ALL)">
			<div>
				<label>ALL</label>
			</div>
		</div>
		<div
			class="to-do item"
			v-bind:class="{ selected: isSelected(TaskFilterStatus.TODO)}"
			v-on:click="setStatus(TaskFilterStatus.TODO)">
			<div>
				<label>TO DO</label>
			</div>
		</div>
		<div
			class="done item"
			v-bind:class="{ selected: isSelected(TaskFilterStatus.DONE)}"
			v-on:click="setStatus(TaskFilterStatus.DONE)">
			<div>
				<label>COMPLETED</label>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { TaskFilterStatus } from "@/models/TaskFilterStatus";
  import { State } from 'vuex-class';

  @Component
  export default class AllTodoDone extends Vue {

    @State(state => state.filterStatus) filterStatus: TaskFilterStatus;

    TaskFilterStatus: any = TaskFilterStatus;

    setStatus(status: TaskFilterStatus) {
      this.$store.dispatch("setStatus", status);
    }

    isSelected(status: TaskFilterStatus): boolean {
      return this.filterStatus === status;
    }
  }
</script>

<style lang="scss" scoped>
	$color-highlight-orange: #ffc100;
	$color-highlight-grey: #666;
	$color-blue: #009bde;
	$color-black: #000;
	$color-white: #fff;

	.filter {
		display: inline-flex;
		margin: 10px 0;

		.selected {
			background-color: $color-highlight-orange !important;
		}

		.item {
			width: auto;
			height: 20px;
			padding: 3px 5px;
			background-color: $color-highlight-grey;
			border-radius: 3px;

			div {
				padding-top: 2px;
			}
		}

		.all,
		.to-do {
			margin-right: 10px;
		}
	}

</style>
