import EggLookupApp from './EggLookup/App.svelte';
import DerplingLookupApp from './DerplingLookup/App.svelte';
import DerplingRarityApp from './DerplingRarity/App.svelte';
import BabyRockerLookupApp from './BabyRockerLookup/App.svelte';
import BabyRockerRarityApp from './BabyRockerRarity/App.svelte';
import BacSpaceshipRarityApp from './BacSpaceshipRarity/App.svelte';

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

	if (appType === 'babyRocker') {
		console.log('Baby rocker lookup');
		return new BabyRockerLookupApp({
			target: document.body,
			props: {}
		});
	}

	if(appType === 'babyRockerRarity') {
		console.log('Baby rocker rarity');
		return new BabyRockerRarityApp({
			target: document.body,
			props: {}
		});
	}

	if(appType === 'bacSpaceshipRarity') {
		console.log('BAC Spaceship Rarity');
		return new BacSpaceshipRarityApp({
			target: document.body,
			props: {}
		});
	}
}

const app = appSelector(document.body.className);
export default app;