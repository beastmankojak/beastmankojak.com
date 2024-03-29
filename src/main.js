import EggLookupApp from './EggLookup/App.svelte';
import DerplingLookupApp from './Derplings/Lookup.svelte';
import DerplingRarityApp from './Derplings/Rarity.svelte';
import BabyRockerLookupApp from './BabyRocker/Lookup.svelte';
import BabyRockerRarityApp from './BabyRocker/Rarity.svelte';
import BacSpaceshipLookupApp from './BacSpaceship/Lookup.svelte';
import BacSpaceshipRarityApp from './BacSpaceship/Rarity.svelte';
import BacChristmasLookupApp from './BacChristmas/LookupApp.svelte';
import BacChristmasRarityApp from './BacChristmas/RarityApp.svelte';
import MuggosLookupApp from './Muggos/Lookup.svelte';
import MuggosRarityApp from './Muggos/Rarity.svelte';
import DrapesLookupApp from './Drapes/Lookup.svelte';
import DrapesRarityApp from './Drapes/Rarity.svelte';
import HorsesLookupApp from './Horses/Lookup.svelte';
import HorsesRarityApp from './Horses/Rarity.svelte';
import PredLookupApp from './Pred/Lookup.svelte';
import PredRarityApp from './Pred/Rarity.svelte';
import BaldoLookupApp from './Baldo/Lookup.svelte';
import BaldoRarityApp from './Baldo/Rarity.svelte';

const appMap = {
	egg: EggLookupApp,
	derpling: DerplingLookupApp,
	derplingRarity: DerplingRarityApp,
	babyRocker: BabyRockerLookupApp,
	babyRockerRarity: BabyRockerRarityApp,
	bacSpaceship: BacSpaceshipLookupApp,
	bacSpaceshipRarity: BacSpaceshipRarityApp,
	bacChristmas: BacChristmasLookupApp,
	bacChristmasRarity: BacChristmasRarityApp,
	muggos: MuggosLookupApp,
	muggosRarity: MuggosRarityApp,
	drapes: DrapesLookupApp,
	drapesRarity: DrapesRarityApp,
	horses: HorsesLookupApp,
	horsesRarity: HorsesRarityApp,
	pred: PredLookupApp,
	predRarity: PredRarityApp,
	baldo: BaldoLookupApp,
	baldoRarity: BaldoRarityApp
};

const appSelector = (appType) => {
	const App = appMap[appType];
	if (App) {
		return new App({ target: document.body, props: {} });
	}
};

const app = appSelector(document.body.className);
export default app;