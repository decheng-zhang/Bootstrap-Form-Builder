define([
       'jquery', 'underscore', 'backbone', "jquery.couch"
       , "text!templates/app/tab-nav.html"
       , "text!templates/app/tab-nav-dropdown.html"
, "views/existing-schema"
], function($, _, Backbone, Couch,
           _tabNavTemplate, _tabNavDropTemplate, SchemaListItemView){
  return Backbone.View.extend({
    tagName: "div"
    , className: "tab-pane"
    , initialize: function() {
      this.id = this.options.title.toLowerCase().replace(/\W/g,'');
      if(!this.options.dropdown)
       {
         this.tabNavTemplate = _.template(_tabNavTemplate);
       }
       else{
         this.tabNavTemplate = _.template(_tabNavDropTemplate)
       }
      this.render();
    }
    , render: function(){
      // Render Snippet Views
      var that = this;
      // Render & append nav for tab
      $("#formtabs").append(this.tabNavTemplate({title: this.options.title, id: this.id}))
      if (that.collection !== undefined) {
        _.each(this.collection.renderAll(), function(snippet){
          that.$el.append(snippet);
        });
      } else if(that.options.dropdown){

          $("li.dropdown#"+that.id).append(that.options.content);
          $("li.dropdown#"+that.id).on("click", function(){
                $(this).find("ul.dropdown-menu#dropdown-menu-for-schemas").empty()
                $.couch.urlPrefix = "http://localhost:5984"
                $.couch.db("demo").view("atlas/schemas", {
                  success:function(data){
                    _.chain(data["rows"])
                    .filter( function(sches){
                      return sches["id"].startsWith("schema")
                    })
                    .tap( function(schess){ schess.forEach(function(scheitem){
                      $.couch.db("demo").openDoc(scheitem["id"],{
                        success: function(data){
                          new SchemaListItemView({model: new Backbone.Model(data["definition"])})
                        },
                        error: function(status){
                          console.log("doc not exist")
                        }
                      })
                    })
                  })
                  }
                  ,error: function(status)  {
                    console.log(status);
                  }
                  ,reduce:false
                })


          })
      } else if (that.options.content){
        that.$el.append(that.options.content);
      }



      // Render tab
      this.$el.attr("id", this.id);
      this.$el.appendTo(".tab-content");
      this.delegateEvents();
    }

  });
});
