define(["knockout", "dataContext", "viewModels/MainViewModel", "customBindings/fade", "customBindings/select", "customBindings/price"],
	function (ko, dataContext, MainViewModel) {

		function initialize() {

			var dishes = dataContext.dishes.getAll();

			var viewModel = new MainViewModel(dishes);

			ko.applyBindings(viewModel);
		};

		return {
			initialize: initialize
		};
});