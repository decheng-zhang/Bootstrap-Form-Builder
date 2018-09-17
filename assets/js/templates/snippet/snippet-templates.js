define(function(require) {
    var formname               = require('text!templates/snippet/formname.html')
    , n2mandatory               = require('text!templates/snippet/n2schemamandatory.json')
    , n2mandatoryhtml        = require('text!templates/snippet/n2schemamandatory.html')
    , n2attributesset       = require('text!templates/snippet/n2attributes.json')
    , n2attributessethtml   = require('text!templates/snippet/n2attributes.html')
  return {
      formname                   : formname
      , n2schemamandatory        : n2mandatory
      , n2schemamandatoryhtml    : n2mandatoryhtml
      , n2schemaattribute        : n2attributesset
      , n2schemaattributehtml    : n2attributessethtml
  }
});
