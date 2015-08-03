//define(function () {

var service = {};

service.JSONQuery = function (url) {

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
}

//	return sevice;
//});
