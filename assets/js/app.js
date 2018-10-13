define([
    "jquery" , "underscore" , "backbone","jquery.couch"
       , "collections/snippets" , "collections/my-form-snippets"
       , "views/tab" , "views/my-form"
    , "text!data/n2.json", "text!data/n2attributes.json"
    , "text!templates/app/render.html", "text!templates/app/about.html"
], function(
    $, _, Backbone, Couch
  , SnippetsCollection, MyFormSnippetsCollection
    , TabView, MyFormView
    , n2mandatoryJSON,  attributesJSON
    , renderTab, aboutTab
){
  return {
    initialize: function(){
     
	new TabView({
	    title: "Attributes"
	  , collection: new SnippetsCollection(JSON.parse(attributesJSON))
	});
	
	new TabView({
            title: "Rendered"
            , content: renderTab
	});

	
      new TabView({
        title: "About"
        , content: aboutTab
      });

      //Make the first tab active!
      $("#components .tab-pane").first().addClass("active");
      $("#formtabs li").first().addClass("active");
	// Bootstrap "My json" with 'info json' snippet.
      new MyFormView({
        title: "Original"
        , collection: new MyFormSnippetsCollection(JSON.parse(n2mandatoryJSON))
      });
	//$.couch.urlPrefix = "http://localhost:5984"
	//$.couch.info({
	  //  success: function(data) {
	//	console.log(data);
	  //  }
//	});

    }
  }
});
