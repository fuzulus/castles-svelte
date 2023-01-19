<script>
	import '$lib/global.css';
	import Icon from '$lib/components/Icon.svelte';
    import NavLink from '$lib/components/NavLink.svelte';
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
	<Icon />
    <span class="normal-case text-xl ml-4">CastleCase</span>
    </div>
    <div class="flex-none">
        <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-primary m-1">View</label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52" style="z-index: 2001">
                <li><NavLink href={'/'} content={'Table view'}/></li>
                <li><NavLink href={'/map'} content={'Map view'}/></li>
            </ul>
        </div>
    </div>
</div>
<slot />
