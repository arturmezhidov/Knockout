define(["knockout", "dlg"], function (ko, dlg) {

	function ReceiptViewModel(dishesViewModel, maxReceipts) {

		var self = this;
		this.maxReceipts = maxReceipts;
		this.receipts = ko.observableArray();
		this.count = ko.pureComputed(function () {
			return self.receipts().length;
		});
		this.totalPrice = ko.pureComputed(function () {
			var price = 0;
			self.receipts().forEach(function (viewDish) {
				price += viewDish.totalPrice();
			});
			return price;
		});
		this.isEmpty = ko.pureComputed(function () {
			return self.count() === 0;
		});
		this.isMax = ko.pureComputed(function () {
			return self.count() >= self.maxReceipts;
		});
		this.isAdded = function (viewDish) {
			return (!self.isMax()) || (viewDish.isSelect());
		};
		this.clear = function () {
			while (!self.isEmpty()) {
				self.receipts()[0].clear();
			}
		}
		this.cancel = function () {
			if (!self.isEmpty()) {
				dlg.question(function () {
					self.clear();
				});
			}
		}
		this.confirm = function () {
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
		dishesViewModel.dishes.forEach(function (viewDish) {
			viewDish.isSelect.subscribe(function (value) {
				if (value) {
					self.receipts.push(this);
				} else {
					self.receipts.remove(this);
				}
			}, viewDish);
		});
	}

	return ReceiptViewModel;
});