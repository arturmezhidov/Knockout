ko.bindingHandlers.select = {
	init: function (element, valueAccessor) {
		var value = ko.unwrap(valueAccessor());
		if (value) {
			element.style.backgroundColor = "#DEFFE4";
		} else {
			element.style.backgroundColor = "white";
		}
	},
	update: function (element, valueAccessor) {
		var value = ko.unwrap(valueAccessor());
		if (value) {
			element.style.backgroundColor = "#DEFFE4";
		} else {
			element.style.backgroundColor = "white";
		}
	}
};

ko.bindingHandlers.fade = {
	init: function (element, valueAccessor) {
		var isAnOrder = ko.unwrap(valueAccessor());
		$(element).toggle(isAnOrder);
	},
	update: function (element, valueAccessor) {
		var isAnOrder = ko.unwrap(valueAccessor());
		if (isAnOrder) {
			$(element).fadeIn();
		} else {
			$(element).fadeOut();
		}
	}
};

var viewModel = {

	dishes: ko.observableArray(),

	viewDishes: ko.observableArray(),

	totalPrice: ko.observable(0),

	addPortion: function (viewDish) {

		if (viewModel.isMaxOrders() && !viewDish.isSelect()) {
			return;
		}

		var lastPrice = viewDish.orderPrice();

		viewDish.count(viewDish.count() + 1);

		var newPrice = viewDish.orderPrice();

		var totalPrice = viewModel.totalPrice();
		totalPrice += newPrice - lastPrice;
		viewModel.totalPrice(totalPrice);

	},

	subPortion: function (viewDish) {
		var count = viewDish.count();
		if (count) {

			var lastPrice = viewDish.orderPrice();

			viewDish.count(count - 1);

			var newPrice = viewDish.orderPrice();

			var totalPrice = viewModel.totalPrice();
			totalPrice += newPrice - lastPrice;
			viewModel.totalPrice(totalPrice);
		}
	},

	clearPortion: function (viewDish) {

		var totalPrice = viewModel.totalPrice();
		viewModel.totalPrice(totalPrice - viewDish.orderPrice());

		viewDish.count(0);
	},

	toOrder: function() {
		
	},

	clearOrders: function (gre) {
		var orders = viewModel.viewDishes();
		orders.map(function (order) {
			order.count(0);
		});
	}
}

viewModel.orderCount = ko.pureComputed(function () {

	var orders = viewModel.viewDishes();
	var count = 0;

	orders.forEach(function(item) {
		if (item.isSelect()) {
			count++;
		}
	});

	return count;

}, viewModel);

viewModel.isAnOrder = ko.pureComputed(function () {
	return (this.orderCount() > 0);
}, viewModel);

viewModel.isMaxOrders = ko.pureComputed(function () {
	return (this.orderCount() >= 15);
}, viewModel);

viewModel.dishes.subscribe(function (dishes) {

	var viewDishes = this.viewDishes;

	dishes.map(function (dish) {

		dish.count = dish.count || ko.observable(0);

		dish.viewPrice = ko.pureComputed(function () {
			return this.price + " " + (this.valuta || "");
		}, dish);

		dish.orderPrice = ko.pureComputed(function () {
			return (this.price * this.count());
		}, dish);

		dish.isSelect = dish.isSelect || ko.pureComputed(function () {
			return (this.count() !== 0);
		}, dish);

	});

	viewDishes(dishes);

}, viewModel);


viewModel.kkk = function() {
	alert("Dw")
}

viewModel.dishes(dishes.items);

ko.applyBindings(viewModel);