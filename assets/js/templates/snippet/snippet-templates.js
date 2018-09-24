define(function(require) {
    var formname               = require('text!templates/snippet/formname.html')
    , n2mandatory               = require('text!templates/snippet/n2schemamandatory.json')
    , n2mandatoryhtml        = require('text!templates/snippet/n2schemamandatory.html')
    , n2attributehtml       = require('text!templates/snippet/n2attributes.json')
    , n2attributelist      = require('text!templates/snippet/attributelist.json')
    , n2attributelisthtml   = require('text!templates/snippet/attributelist.html')
    
  return {
      formname                   : formname
      , n2schemamandatory        : n2mandatory
      , n2schemamandatoryhtml    : n2mandatoryhtml
      
      , n2attributehtml        : n2attributehtml
      , n2attributelist        : n2attributelist
      , n2attributelisthtml    : n2attributelisthtml
  }
});
