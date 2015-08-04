define(["knockout"], function (ko) {
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
});