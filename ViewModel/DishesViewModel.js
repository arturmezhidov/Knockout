define(["knockout", "DishViewModel"], function (ko, DishViewModel) {

	function DishesViewModel(dishes) {

		var self = this;

		self.viewDishes = ko.utils.arrayMap(dishes, function (dish) {
			return new DishViewModel(dish);
		});
		self.count = ko.pureComputed(function () {
			return self.viewDishes().length;
		});
	}

	return DishesViewModel;
});