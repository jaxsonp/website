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
		<p class="max-w-[90px]">{time}</p>
	</TimelineOppositeContent>
	<TimelineSeparator>
		<TimelineDot style="background-color: rgb(var(--color-primary));" />
		<TimelineConnector />
	</TimelineSeparator>
	<TimelineContent style="margin-bottom: 2rem;">
		{@render children()}
	</TimelineContent>
</TimelineItem>
