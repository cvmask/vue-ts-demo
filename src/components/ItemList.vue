<template>
	<div>
		<div>
			<span>time</span>
		</div>
		<div>
			<p>title</p>
		</div>
		<div>content</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>