<template>
	<v-container>
		<v-row>
			<v-col>				
				<div>
					<svg :width="width" :height="cellSize * rows + 10">

						<!-- vertical lines -->
						<g v-for="(i,index) in columns" :key="index">
							<line :x1="i * colWidth - (colWidth / 2)" y1="0" :x2="i * colWidth - (colWidth / 2)" :y2="cellSize * (rows - 1) + 20" :style="{stroke: `rgba(var(--v-border-color), var(--v-border-opacity))`, strokeWidth: '5'}" />
						</g>

						<!-- horizontal lines -->
						<g v-for="(i,index) in rows" :key="index">
							<line x1="0" :y1="index * cellSize + 10" :x2="width" :y2="index * cellSize + 10" :style="{stroke: `rgba(var(--v-border-color), var(--v-border-opacity))`}" />
							<!-- <text :y="i * cellSize + 5" :x="20" style="fill: white;">horse</text> -->
						</g>
					</svg>
				</div>
			</v-col>
	</v-row>
	</v-container>
</template>

<script>

	export default {

		name: "FretBoard",

		data() {
			return {
			width: 100,
			colWidth: 20,
			height: 150,
			cellSize: 30,
			columns: 20,
			rows: 6,
			};
		},

		mounted() {
			window.addEventListener('resize', this.handleResize);
			this.handleResize();
			// this.$parent.$on('note-drop',scaleID, ndX, ndY);
			},

		beforeUnmount() {
			window.removeEventListener('resize', this.handleResize);
		},

		methods: {
			handleResize() {
			this.width = `${window.innerWidth}px`;
			this.colWidth = window.innerWidth / this.columns;
			}
		}
	}

</script>

<style scoped>
	/*	svg {
		border: 1px solid;
		}*/
</style>