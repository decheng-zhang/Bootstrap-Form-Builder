define([
       "jquery", "underscore", "backbone",
       "views/snippet", "views/temp-snippet",
       "helper/pubsub"
], function(
  $, _, Backbone,
  SnippetView, TempSnippetView,
  PubSub
){
  return SnippetView.extend({
    events:{
      "click"   : "preventPropagation" //stops checkbox / radio reacting.
      , "mousedown" : "mouseDownHandler"
      , "mouseup"   : "mouseUpHandler"
    }

    , mouseDownHandler : function(mouseDownEvent){
	  if(this.model.get("title") !== "n2 schema info"){
	      mouseDownEvent.stopPropagation();
	      mouseDownEvent.preventDefault();
	      var that = this;
	      //popover
	      $(".popover").remove();
	      this.$el.popover("show");
	      $(".popover #save").on("click", this.saveHandler(that));
	      $(".popover #cancel").on("click", this.cancelHandler(that));
        $("body").on("mousemove", function(mouseMoveEvent){
		  if(
		      Math.abs(mouseDownEvent.pageX - mouseMoveEvent.pageX) > 10 ||
			    Math.abs(mouseDownEvent.pageY - mouseMoveEvent.pageY) > 10
		  ){
		      that.$el.popover('destroy');
		      PubSub.trigger("mySnippetDrag", mouseDownEvent, that.model);
		      that.mouseUpHandler();
		  };
              });
	  } else {
	      // for schema profile info
	      var that = this;
	      $(".field").on("change", this.saveHandlerForInfo(that));

	  }
    }

    , preventPropagation: function(e) {
      e.stopPropagation();
      e.preventDefault();
    }

    , mouseUpHandler : function(mouseUpEvent) {
        $("body").off("mousemove");
    }
    , saveHandlerForInfo : function(boundContext) {
      return function(e) {
        e.preventDefault();
        var fields = $(".field");
        _.each(fields, function(ele) {
          var $ele = $(ele)
          , type = $ele.attr("type")
          , name = $ele.attr("n2id");
          if( type === "info-input"){
            boundContext.model.setField(name, $ele.val());
          }
        });
        boundContext.model.trigger("change");
      }

    }

    , saveHandler : function(boundContext) {
      return function(mouseEvent) {
        mouseEvent.preventDefault();
        var fields = $(".popover .field");
        _.each(fields, function(e){

          var $e = $(e)
          , type = $e.attr("data-type")
          , name = $e.attr("id");

          switch(type) {
            case "checkbox":
              boundContext.model.setField(name, $e.is(":checked"));
              break;
            case "input":
              boundContext.model.setField(name, $e.val());
              break;
            case "textarea":
              boundContext.model.setField(name, $e.val());
              break;
            case "textarea-split":
              boundContext.model.setField(name,
                _.chain($e.val().split("\n"))
                  .map(function(t){return $.trim(t)})
                  .filter(function(t){return t.length > 0})
                  .value()
                  );
              break;
            case "select":
              var valarr = _.map($e.find("option"), function(e){
                return {value: e.value, selected: e.selected, label:$(e).text()};
              });
              boundContext.model.setField(name, valarr);
              break;
          }
        });
        boundContext.model.trigger("change");
        $(".popover").remove();
      }
    }

    , cancelHandler : function(boundContext) {
      return function(mouseEvent) {
        mouseEvent.preventDefault();
        $(".popover").remove();
        boundContext.model.trigger("change");
      }
    }

  });
});
