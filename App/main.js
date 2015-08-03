require.config({
	baseUrl: "../",
	paths: {
		"AppConfig": "App/config",

		"knockout": "Scripts/knockout",
		"jquery": "Scripts/jquery-1.11.3.min",

		"dlg": "Scripts/dlg",
		"bind-init": "CustomBindings/bind-init",

		"DataService": "Model/DataService",
		"Dishes": "Model/Dishes",
		"DishViewModel": "ViewModel/DishViewModel",
		"DishesViewModel": "ViewModel/DishesViewModel",
		"OrdersViewModel": "ViewModel/OrdersViewModel"
	} 
});

require(["App/app"], function(app) {
	app.initialize();
});