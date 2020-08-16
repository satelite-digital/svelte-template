<script>
	import { getContext, onMount } from 'svelte'

	const { client } = getContext('services')

	console.log(client)

	onMount(async()=>{
		console.log(await client.custom.fuckTheWorld())
			await client.auth.signIn({
				username : "erickaleruano@gmail.com",
				password : "User#1234"
			})
	})
</script>

<main >
	<h1>hola soy una capa</h1>
</main>


<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>