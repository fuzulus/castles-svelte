<script>
    import {page} from '$app/stores';

    export let href = '';
    export let content = '';
    export let variant = 'neutral';
</script>

<a {href} class="link link-hover link-{variant}" class:link-primary={$page.url.pathname === href}>{content}</a>