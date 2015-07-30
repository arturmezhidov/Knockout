//ko.bindingHandlers.count = {

//	init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
//		var orders = ko.unwrap(valueAccessor());
//		element.innerText = orders.getCount(viewModel.id);
//	},

//	update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
//		var orders = ko.unwrap(valueAccessor());
//		element.innerText = orders.getCount(viewModel.id);
//	}
//};

//ko.bindingHandlers.totalPrice = {

//	init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
//		var orders = ko.unwrap(valueAccessor());
//		element.innerText = orders.getCount(viewModel.id);
//	},

//	update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
//		var orders = ko.unwrap(valueAccessor());
//		element.innerText = orders.getCount(viewModel.id);
//	}
//};
 
////addPortion: function (viewDish) {

////	var lastPrice = viewDish.orderPrice();

////	viewDish.count(viewDish.count() + 1);

////	var newPrice = viewDish.orderPrice();

////	var totalPrice = viewModel.totalPrice();
////	totalPrice += newPrice - lastPrice;
////	viewModel.totalPrice(totalPrice);

////},

//var viewModel = {

//	dishes: ko.observableArray(dishes.items),


//	orders: {

//		items: ko.observableArray([]),

//		add: function (id) {

//			var arr = this.items();

//			for (var i = 0; i < arr.length; i++) {
//				if (arr[i].id === id) {
//					arr[i].count(arr[i].count() + 1);
//					return;
//				}
//			}

//			var newOrder = {
//				id: id,
//				count: ko.observable(1)
//			}

//			this.items.push(newOrder);
//		},

//		remove: function (id) {

//			var arr = this.items();

//			for (var i = 0; i < arr.length; i++) {
//				if (arr[i].id === id) {
//					arr[i].count(arr[i].count() - 1);
//					return;
//				}
//			}
//		},

//		getCount: function (id) {

//			var arr = this.items();

//			for (var i = 0; i < arr.length; i++) {
//				if (arr[i].id === id) {
//					return arr[i].count();
//				}
//			}
//			return 0;
//		}
//	},

//	addOrder: function (order) {


//		viewModel.orders.add(order.id);


////viewModel.orders.items.push({

//		//	id: order.id,
//		//	count: ko.observable(1)

//		//});


////var count = order.count();
//		//order.count(count + 1);
//	},

//	removeOrder: function (order) {
//		//var count = order.count();
//		//if (count) {
//		//	order.count(count - 1);
//		//}

//		viewModel.orders.remove(order.id);


//	},

//	show: function() {
//	//	viewModel.dishes()[0].name = "dw"
//		//	alert(dishes.items[0].name)

//	}
//};



//viewModel.viewDishes = ko.computed(function () {

//	//var arr = [];

//	//for (var i = 0; i < this.dishes().length; i++) {
//	//	arr.push({
//	//		name: this.dishes()[i].name,
//	//		price: this.dishes()[i].price,
//	//		count: ko.observable(0)
//	//	});
//	//}









//	return this.dishes();
//}, viewModel);



//ko.applyBindings(viewModel);


