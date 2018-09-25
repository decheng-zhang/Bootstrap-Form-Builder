define([
       "jquery" , "underscore" , "backbone"
       , "collections/snippets" , "collections/my-form-snippets"
       , "views/tab" , "views/my-form"
    , "text!data/n2.json", "text!data/n2attributes.json"
    , "text!templates/app/render.html", "text!templates/app/about.html"
], function(
  $, _, Backbone
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
	// Bootstrap "My Form" with 'Form Name' snippet.
      new MyFormView({
        title: "Original"
        , collection: new MyFormSnippetsCollection(JSON.parse(n2mandatoryJSON))
      });
      // new MyFormView({
      //       title: "Attribute"
      //       , collection : new MyFormSnippetsCollection([
      //           {
      //               "title": "n2 Attribute List"
      //               ,"fields" : {
      //                   "name": {
      //                       "label"   : "Attributes"
      //                       , "type"  : "string"
      //                       , "value" : "attributes"
      //                   }
      //               }
                    

      //           }
      //       ])

      //       })
//-----------
    }
  }
});
