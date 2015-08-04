define(function () {

	function BaseService(url) {
		var self = this;
		this.baseUrl = url;
		this.getAll =function() {
			var data = null;
			$.ajax({
				url: self.baseUrl,
				dataType: "json",
				async: false,
				success: function (response) {
					data = response;
				}
			});
			return data;
		}
		this.getById= function(id) {
			var url = self.baseUrl + '/' + id;
		}
	}

	return BaseService;
});
