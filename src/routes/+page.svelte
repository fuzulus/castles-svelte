<script>
	import { dataset_dev } from 'svelte/internal';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="overflow-x-auto">
	<table class="table w-full">
		<!-- head -->
		<thead>
			<tr>
				<th />
				<th>Name</th>
				<th>URL</th>
				<th>Latitude</th>
				<th>Longitude</th>
			</tr>
		</thead>
		<tbody>
			{#each data.castles as castle}
				<tr>
					<td />
					<td>{castle.name}</td>
					<td><a href={castle.url}>{castle.url}</a></td>
					<td>{castle.lat}</td>
					<td>{castle.long}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
