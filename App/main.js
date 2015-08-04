require.config({
	baseUrl: "../",
	paths: {
		"config": "App/config",

		"knockout": "Scripts/knockout",
		"jquery": "scripts/libs/jquery-1.11.3.min",
		"dlg": "scripts/libs/dlg",

		"BaseService": "DAL/BaseService",
		"dataContext": "DAL/dataContext"
	} 
});

require(["App/app"], function (app) {
	app.initialize();
});