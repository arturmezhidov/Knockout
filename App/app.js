define(["AppConfig", "knockout", "Dishes", "DishesViewModel", "OrdersViewModel", "bind-init"],
	function (AppConfig, ko, Dishes, DishesViewModel, OrdersViewModel) {

		function initialize() {

			var dishCollection = new Dishes(AppConfig.DB_URL);

			var viewDishes = new DishesViewModel(dishCollection.dishes);
			var viewOrders = new OrdersViewModel(viewDishes, AppConfig.MAX_ORDER);

			var viewModel = {
				dishes: viewDishes,
				orders: viewOrders
			}

			ko.applyBindings(viewModel);
		};

		return {
			initialize: initialize
		};
});