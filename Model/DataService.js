define(function () {

	return {

		JsonQuery: function (url) {
			var data = null;
			$.ajax({
				url: url,
				dataType: "json",
				async: false,
				success: function (response) {
					data = response;
				}
			});
			return data;
		},

		XmlQuery: function (url) {

		}
	}
});
