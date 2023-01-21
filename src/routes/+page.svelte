<script>
	import { get } from 'svelte/store';
	import { currentPageStore } from '$lib/store/PaginationStore';
	import Pagination from '$lib/components/Pagination.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let currentPage = get(currentPageStore);

	currentPageStore.subscribe(newPage => currentPage = newPage);

	let pageSize = 20;
	let pageStep = 1;

	$: console.log(data.castles.slice((currentPage - 1) * pageSize, pageSize));
</script>

<div class="overflow-x-auto">
	<Pagination 
		dataCount={data.castles.length}
		pageSize={pageSize} 
		pageStep={pageStep}
	/>
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
			{#each data.castles.slice((currentPage - 1) * pageSize, currentPage * pageSize) as castle}
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
	<Pagination 
		dataCount={data.castles.length}
		pageSize={pageSize} 
		pageStep={pageStep}
	/>
</div>
