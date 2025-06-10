<script lang="ts">
	import {
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent,
	} from 'svelte-vertical-timeline';

	let { children, time } = $props();
</script>

<TimelineItem>
	<TimelineOppositeContent slot="opposite-content" style="margin-left: 0;">
		<p class="hidden max-w-[100px] md:block">{time}</p>
	</TimelineOppositeContent>
	<TimelineSeparator>
		<TimelineDot style="background-color: var(--color-secondary);" />
		<TimelineConnector />
	</TimelineSeparator>
	<TimelineContent style="margin-bottom: 2rem;">
		<p class="italic md:hidden">{time}</p>
		{@render children()}
	</TimelineContent>
</TimelineItem>
