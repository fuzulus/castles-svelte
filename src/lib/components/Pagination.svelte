<script lang="ts">
	import { get } from 'svelte/store';
	import { currentPageStore } from '$lib/store/PaginationStore';
    import Paginator from '$lib/services/pagination/Paginator';

    export let dataCount: number;
	export let pageSize = 20;
    export let pageStep = 3;
    let currentPage: number = get(currentPageStore);

    currentPageStore.subscribe(newPage => currentPage = newPage);

	let pageCount = Math.floor(dataCount / pageSize);

	$: pages = Paginator.generatePages(
		currentPage,
		pageCount,
		pageStep,
	);
</script>

<div class="btn-group mt-4 mb-4 w-full justify-center">
    {#each pages as page}
        {#if null === page}
            <button class="btn btn-disabled">...</button>
        {:else}
            <button 
                class="btn btn-secondary" 
                class:btn-active={page === currentPage} 
                on:click={() => currentPageStore.set(page ? page : 1)}
            >
                {page}
            </button>
        {/if}
    {/each}
</div>