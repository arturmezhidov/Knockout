//define(["Model/DataService"], function (service) {

	function Dishes() {
		this.dishes = service.JSONQuery("AppData/Dishes.json");
	}

//	return Dishes;
//});