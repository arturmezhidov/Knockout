require.config({
	paths: {
		"knockout": "../scripts/knockout-3.3.0",
		"jquery": "../scripts/jquery-1.11.3.min",

		"BaseService": "DAL/BaseService",
		"dataContext": "DAL/dataContext"
	} 
});

require(["app"], function (app) {
	app.initialize();
});