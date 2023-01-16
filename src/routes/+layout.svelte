<script>
	import '$lib/global.css';
	import Icon from '$lib/components/Icon.svelte';
    import NavLink from '$lib/components/NavLink.svelte';
</script>

<div class="navbar bg-base-100">
    <div class="flex-initial">
	<Icon />
    </div>
    <div class="flex-initial ml-4">
        <ul class="menu menu-compact menu-horizontal px-1">
          <li class="mr-4"><NavLink href={'/'} content={'Table view'}/></li>
          <li><NavLink href={'/map'} content={'Map view (coming soon)'} variant={'disabled'}/></li>
        </ul>
      </div>
</div>
<slot />
