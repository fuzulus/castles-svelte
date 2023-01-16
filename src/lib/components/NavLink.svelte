<script>
    import {onMount} from 'svelte';

    let currentPath;
    
    onMount(() => {
        currentPath = window.location.pathname;
    });

    export let href = '';
    export let content = '';
    export let variant = 'primary';
</script>

<a {href} class="btn btn-{variant}" class:btn-active={currentPath === href}>{content}</a>