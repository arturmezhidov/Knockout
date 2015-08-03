define(["knockout", "dlg"], function (ko, dlg) {

	function OrdersViewModel(dishesViewModel, maxOrders) {

		var self = this;
		self.viewOrders = ko.observableArray();
		self.count = ko.pureComputed(function () {
			return self.viewOrders().length;
		});
		self.totalPrice = ko.pureComputed(function () {
			var price = 0;
			self.viewOrders().forEach(function (viewDish) {
				price += viewDish.totalPrice();
			});
			return price;
		});
		self.isEmpty = ko.pureComputed(function () {
			return self.count() === 0;
		});
		self.isMax = ko.pureComputed(function () {
			return self.count() >= maxOrders;
		});
		self.isAdded = function (viewDish) {
			return (!self.isMax()) || (viewDish.isSelect());
		};
		self.clear = function () {
			while (!self.isEmpty()) {
				self.viewOrders()[0].clear();
			}
		}
		self.cancel = function () {
			if (!self.isEmpty()) {
				dlg.question(function () {
					self.clear();
				});
			}
		}
		self.confirm = function () {
			if (!self.isEmpty()) {
				dlg.confirm(function () {
					//
					// sending order...
					//
					self.clear();
					dlg.result();
				});
			}
		};

		// initialize subscribe
		dishesViewModel.viewDishes.forEach(function (viewDish) {
			viewDish.isSelect.subscribe(function (value) {
				if (value) {
					self.viewOrders.push(this);
				} else {
					self.viewOrders.remove(this);
				}
			}, viewDish);
		});
	}

	return OrdersViewModel;
});