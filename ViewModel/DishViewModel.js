define(["knockout"], function (ko) {

	function DishViewModel(dish) {
		var self = this;
		this.dish = dish;
		this.count = ko.observable(0);
		this.totalPrice = ko.pureComputed(function () {
			return (self.dish.price * self.count());
		});
		this.isSelect = ko.pureComputed(function () {
			return (self.count() !== 0);
		});
		this.add = function () {
			self.count(self.count() + 1);
		}
		this.sub = function () {
			var count = self.count();
			if (count > 0) {
				self.count(count - 1);
			}
		}
		this.clear = function () {
			self.count(0);
		}
	}

	return DishViewModel;
});



