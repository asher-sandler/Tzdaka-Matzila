// **************************************************** //
export async function getConfigData(fname, onDataLoad){
	const url = window.location.origin+fname; // "/data/resume.json";
	console.log(url);
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	onDataLoad(data);
	return data;
}
