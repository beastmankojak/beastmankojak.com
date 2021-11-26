import EggLookupApp from './EggLookup/App.svelte';
import DerplingLookupApp from './DerplingLookup/App.svelte';
import DerplingRarityApp from './DerplingRarity/App.svelte';

const appSelector = (appType) => {
	console.log('appType', appType);
	if (appType === 'egg') {
		console.log('Egg lookup');
		return new EggLookupApp({
			target: document.body,
			props: {}
		});
	}

	if (appType === 'derpling') {
		console.log('Derpling lookup');
		return new DerplingLookupApp({
			target: document.body,
			props: {}
		});
	}

	if (appType ==='derplingRarity') {
		console.log('Derpling rarity');
		return new DerplingRarityApp({
		  target: document.body,
			props: {}
		});
	}
}

const app = appSelector(document.body.className);
export default app;