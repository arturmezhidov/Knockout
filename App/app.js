define(["knockout", "dataContext", "MainViewModel", "../CustomBindings/fade", "../CustomBindings/select", "../CustomBindings/price"], function (ko, dataContext, MainViewModel) {

		function initialize() {

			var dishes = dataContext.dishes.getAll();

			var viewModel = new MainViewModel(dishes);

			ko.applyBindings(viewModel);
		};

		return {
			initialize: initialize
		};
});