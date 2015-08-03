//define(['Script/knockout'], function (ko) {

function DishViewModel(dish) {

	var self = this;

	self.dish = dish;
	self.count = ko.observable(0);
	
	self.totalPrice = ko.pureComputed(function () {
		return (self.dish.price * self.count());
	});
	self.isSelect = ko.pureComputed(function () {
		return (self.count() !== 0);
	});

	self.add = function (value) {
		self.count(self.count() + 1);
	}
	self.sub = function (value) {
		var count = self.count();
		if (count > 0) {
			self.count(count - 1);
		}
	}
	self.clear = function () {
		self.count(0);
	}
}

//	return DishViewModel;
//});



