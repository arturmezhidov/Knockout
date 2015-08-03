define(["BaseService", "config"], function (BaseService, config) {
	var self = {};

	self.dishes = new BaseService(config.DB_URL);

	return self;
});