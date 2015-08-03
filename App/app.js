function initialize() {

	var AppConfig = Object.freeze({
		MAX_ORDER: 15
	});
	
	var dishCollection = new Dishes();

	var viewDishes = new DishesViewModel(dishCollection.dishes);
	var viewOrders = new OrdersViewModel(viewDishes, AppConfig.MAX_ORDER);

	var viewModel = {
		dishes: viewDishes,
		orders: viewOrders
	}

	ko.applyBindings(viewModel);
}