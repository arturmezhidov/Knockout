define(["knockout", "jquery"], function (ko, $) {
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
});