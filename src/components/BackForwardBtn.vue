<template>
	<div class="back-forward-btn">
		<div class="container">
			<div
				class="back-btn" v-bind:class="{ disabled: this.backBtnDisabled }" v-on:click="backBtnClicked()"
			>
				<font-awesome-icon class="awesome-icon" icon="angle-left" />
			</div>
			<div
				class="forward-btn" v-on:click="forwardBtnClicked()" v-bind:class="{ disabled: this.forwardBtnDisabled }"
			>
				<font-awesome-icon class="awesome-icon" icon="angle-right" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class BackForwardBtn extends Vue {

    @Prop() backBtnDisabled!: boolean;
    @Prop() forwardBtnDisabled!: boolean;

    forwardBtnClicked() {
      if (!this.forwardBtnDisabled) {
        this.$emit('forwardBtnClicked')
      }
    }

    backBtnClicked() {
      if (!this.backBtnDisabled) {
        this.$emit('backBtnClicked')
      }
    }
  }
</script>

<style lang="scss" scoped>
	$color-highlight-orange: #ffc100;
	$color-highlight-grey: #666;
	$color-blue: #009bde;
	$color-black: #000;
	$color-white: #fff;

	$btn-size: 25px;

	.back-forward-btn {
		.container {
			width: auto;
			display: inline-flex;

			.back-btn,
			.forward-btn {
				background-color: $color-highlight-orange;
				width: $btn-size;
				height: $btn-size;
				border-radius: 3px;
				border: 1px $color-black;
				cursor: pointer;

				&:hover {
					background-color: $color-blue;
				}

				.awesome-icon {
					color: $color-white;
					position: relative;
					top: 4px;
				}
			}

			.back-btn {
				margin-right: 10px;
			}

			.disabled {
				background-color: $color-highlight-grey;
				cursor: auto;

				&:hover {
					background-color: $color-highlight-grey;
				}
			}
		}

	}

</style>
