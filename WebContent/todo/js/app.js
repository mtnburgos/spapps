requirejs.config({
    paths: {
       jquery: "libs/jquery-1.9.0",
       underscore: "libs/underscore",
       backbone: "libs/backbone"
    },
    
    // We shim Backbone since it doesn't an AMD module
    shim: {
    	jQuery: {
    		exports: 'jQuery'
    	},
    	
    	underscore: {
    		exports: '_'
    	},
    	
    	backbone: {
    		deps: ['underscore', 'jquery'],
    		exports: 'Backbone'
    	}
    }
});

require(['app/router']);