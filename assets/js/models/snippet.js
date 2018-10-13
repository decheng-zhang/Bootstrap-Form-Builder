define([
      'jquery', 'underscore', 'backbone'
], function($, _, Backbone) {
  return Backbone.Model.extend({
    initialize: function() {
      this.set("fresh", true);
    }
    , getValues: function(){
      return _.reduce(this.get("fields"), function(o, v, k){
        if (v["type"] == "select") {
          o[k] = _.find(v["value"], function(o){return o.selected})["value"];
        } else {
          o[k] = v["value"];
        }
        return o;
      }, {});
    }
    , idFriendlyTitle: function(){
      return this.get("title").replace(/\W/g,'').toLowerCase();
    }
    , setField: function(name, value) {
      var fields = this.get("fields")
      fields[name]["value"] = value;
      this.set("fields", fields);
    }
    , mergeField: function(snippet){
	 var fields = this.get("fields")
	 var thatFields = snippet.get("fields")
	 this.set("fields", _.extend(fields, thatFields))

      }
     
  });
});
