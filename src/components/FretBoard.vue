<template>
	<v-container fluid  style="overflow-x: auto;">
		<svg no-gutter left="0" top="0" align-left 
			:width="this.width" 
			:height="stringGap * rows" 
			:style="{background: `rgba(var(--v-theme-surface))`}"
			@mouseup="handleNoteDrop"
			> 
			<g v-for="(i,index) in columns" :key="index">
				<line 
					:x1="(i * colWidth) - 2.5" 
					y1="0"
					:x2="(i * colWidth) - 2.5" 
					:y2="stringGap * rows" 
					:style="{stroke: `rgba(var(--v-border-color), var(--v-border-opacity))`, strokeWidth: '5'}" />
			</g>

			<g v-for="(i,index) in rows" :key="index">
				<line 
					x1="0" 
					:y1="index * stringGap + stringGap / 2" 
					:x2="neckLength" 
					:y2="index * stringGap + stringGap / 2" 
					:style="{stroke: `rgba(var(--v-border-color), var(--v-border-opacity))`}" />

			</g>
			<text x = "10" :y="30" fill="white">{{Math.floor(this.dropX)}}</text><br>
			<text x = "10" :y="50" fill="white">{{Math.floor(this.dropY)}}</text><br>

		</svg>
	</v-container>
</template>

<script>

	export default {

		name: "FretBoard",

		props: {
		ndScaleID: Number,
		ndX: Number,
		ndY: Number,
		},

		data() {
			return {
			width: 300,
			colWidth: 20,
			height: 150,
			stringGap: 30,
			columns: 20,
			rows: 6,
			minLength: 1200,
			neckLength: 1200,
			dropX: 0,
			dropY: 0,
			};
		},

		mounted() {
			window.addEventListener('resize', this.handleResize);
			this.handleResize();
			},

		beforeUnmount() {
			window.removeEventListener('resize', this.handleResize);
		},

		methods: {
			handleResize() {
				if ((window.innerWidth - 60) <= this.minLength) {
					this.width = this.minLength;					
				} else { 
					this.width = window.innerWidth - 60;
				}
				this.neckLength = this.width;
				this.colWidth = this.neckLength / this.columns;
				
			},
			handleNoteDrop() {
				this.dropX = this.ndX - event.target.getBoundingClientRect().left;
				this.dropY = this.ndY - event.target.getBoundingClientRect().top;
			}
		}
	}

</script>

<style scoped>
	/*	svg {
		border: 1px solid;
		}*/
</style>