define([
       "jquery" , "underscore" , "backbone"
       , "models/snippet"
       , "collections/snippets"
    , "views/my-form-snippet"
    , "text!data/n2attributeboolean.json"
    , "text!data/n2.json" , "text!data/n2attributes.json"
   , "text!data/testrape.json"
], function(
  $, _, Backbone
  , SnippetModel
  , SnippetsCollection
    , MyFormSnippetView
    , n2AttrBoolean
    ,n2mandatoryJSON , attributesJSON
    , testRape
){
  return SnippetsCollection.extend({
    model: SnippetModel
    , initialize: function() {
      this.counter = {};
      this.on("add", this.giveUniqueIdandN2boolean);

    }
    , giveUniqueIdandN2boolean: function(snippet){
	if(!snippet.get("fresh")) {
        return;
      }
      snippet.set("fresh", false);
      var snippetType = snippet.attributes.fields.type.value;

      if(typeof this.counter[snippetType] === "undefined") {
        this.counter[snippetType] = 0;
      } else {
        this.counter[snippetType] += 1;
      }

      snippet.setField("n2id", "nunaliit-" + snippetType + "-" + this.counter[snippetType]);
      if(typeof snippet.get("fields")["id2"] !== "undefined") {
        snippet.setField("id2", snippetType + "2-" + this.counter[snippetType]);
      }
    	snippet.mergeField(new Backbone.Model(JSON.parse(n2AttrBoolean)[0]))
    }
    , giveUniqueId: function(snippet){
      if(!snippet.get("fresh")) {
        return;
      }
      snippet.set("fresh", false);
      var snippetType = snippet.attributes.fields.type.value;

      if(typeof this.counter[snippetType] === "undefined") {
        this.counter[snippetType] = 0;
      } else {
        this.counter[snippetType] += 1;
      }

      snippet.setField("n2id", "nunaliit-" + snippetType + "-" + this.counter[snippetType]);

      if(typeof snippet.get("fields")["id2"] !== "undefined") {
        snippet.setField("id2", snippetType + "2-" + this.counter[snippetType]);
      }
    }
    , containsFileType: function(){
      return !(typeof this.find(function(snippet){
        return snippet.attributes.title === "File Button"
      }) === "undefined");
    }
    , readRapeSnippets: function(){

	    this.reset();
      var rapeSnippets = JSON.parse(testRape);
      var infoSnippetJson = JSON.parse(n2mandatoryJSON);
      var that = this;
      _.each( infoSnippetJson, function(infoSnippetInstance){
        var infoSnippet = new SnippetModel(infoSnippetInstance)
        _.each(_.keys(rapeSnippets), function(fieldname){
          if(fieldname !== "attributes"){
            infoSnippet.setField(fieldname, rapeSnippets[fieldname])
          }
        })
        that.push(infoSnippet);
      });





    }


    , renderAll: function(){

      return this.map(function(snippet){
        return new MyFormSnippetView({model: snippet}).render(true);
      })
    }
    , renderAllClean: function(){
      return this.map(function(snippet){
        return new MyFormSnippetView({model: snippet}).render(false);
      });
    }
  });
});
