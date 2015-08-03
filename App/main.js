require.config({
	baseUrl: "../",
	paths: {
		"config": "App/config",

		"knockout": "Scripts/knockout",
		"jquery": "Scripts/jquery-1.11.3.min",
		"dlg": "Scripts/dlg",

		"BaseService": "DAL/BaseService",
		"dataContext": "DAL/dataContext",
		"DishViewModel": "ViewModel/DishViewModel",
		"DishesViewModel": "ViewModel/DishesViewModel",
		"ReceiptViewModel": "ViewModel/ReceiptViewModel",
		"MainViewModel": "ViewModel/MainViewModel"
	} 
});

require(["App/app"], function (app) {
	app.initialize();
});