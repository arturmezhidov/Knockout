define(["knockout", "DishViewModel"], function (ko, DishViewModel) {

	function DishesViewModel(dishes) {
		var self = this;
		this.dishes = ko.utils.arrayMap(dishes, function (dish) {
			return new DishViewModel(dish);
		});
		this.count = ko.pureComputed(function () {
			return self.dishes().length;
		});
	}

	return DishesViewModel;
});