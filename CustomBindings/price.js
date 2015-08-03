ko.bindingHandlers.price = {
	init: function (element, valueAccessor) {
		var value = ko.unwrap(valueAccessor());
		if (value) {
			$(element).text("$ " + value);
		} else {
			$(element).text("0");
		}		
	},
	update: function (element, valueAccessor) {
		var value = ko.unwrap(valueAccessor());
		if (value) {
			$(element).text("$ " + value);
		} else {
			$(element).text("0");
		}
	}
};