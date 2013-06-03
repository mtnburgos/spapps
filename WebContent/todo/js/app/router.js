define(['backbone'], function(){
	
	var Router = Backbone.Router.extend({
		routes: {
			"": "home"
		},
		
		home: function() {
			console.log("This is home function");
		}
	
	});
	
	router = new Router();
	Backbone.history.start();
	
	return router;
});