console.log('Entro JS');
const API = 'https://rickandmortyapi.com/api/character';

const content = null || document.getElementById('content');

async function fetchData(apiURL){
	console.log('Entro fetchDara')
	const response = await fetch(apiURL);
	const data = await response.json();
	return data;

}

(async () => {
	try{
		const characters = await fetchData(API);
		let characterView = `${characters.results.map(character =>
			`
			<div class="group relative">
			  <div
				class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
				<img src="${character.image}" alt="${character.name}" class="w-full">
			  </div>
			  <div class="mt-4 flex justify-between">
				<h3 class="text-sm text-gray-700">
				  <span aria-hidden="true" class="absolute inset-0"></span>
				  ${character.name}
				</h3>
			  </div>
			</div>
			`
			).slice(0,4).join('')}
		`;
		console.log(characterView);
		content.innerHTML = characterView;
	return 
	}
	catch (error){
		console.log(error);
	}
	
})();

