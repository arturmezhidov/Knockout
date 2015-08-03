define(["DataService"], function (service) {

	function Dishes(url) {
		var self = this;
		self.dishes = service.JsonQuery(url);
		self.count = this.dishes.length;
	}

	return Dishes;
});