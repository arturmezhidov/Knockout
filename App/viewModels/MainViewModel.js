define(["knockout", "config", "viewModels/DishesViewModel", "viewModels/ReceiptViewModel"],
	function (ko, config, DishesViewModel, ReceiptViewModel) {

	function MainViewModel(dishes) {
		this.viewDishes = new DishesViewModel(dishes);
		this.viewReceipts = new ReceiptViewModel(this.viewDishes, config.MAX_ORDER);
	}

	return MainViewModel;
});