// **************************************************** //
export async function getConfigData(fname, onDataLoad){
	const url = window.location.origin+fname; // "/data/resume.json";
	//console.log(url);
	const response = await fetch(url);
	const data = await response.json();
	//console.log(data);
	onDataLoad(data);
	return data;
}
// **************************************************** //
export async function getGoogleTable( onDataLoad){
	const url = 'https://spreadsheets.google.com/feeds/list/1tb78VZXh0Qwb23frGfbTfyj_259Epo3OiQgLdgbM-jM/od6/public/values?alt=json'; // "/data/resume.json";
	//console.log(url);
	const response = await fetch(url);
	const data = await response.json();
	//console.log(data);
	onDataLoad(data);
	return data;
}
// **************************************************** //

export async function getLangData(lang, onDataLoad){
	const url = '/lang/'+lang+'.json'; // "/data/resume.json";
	//console.log(url);
	const response = await fetch(url);
	const data = await response.json();
	//console.log(data);
	onDataLoad(data);
	return data;
}
// **************************************************** //
