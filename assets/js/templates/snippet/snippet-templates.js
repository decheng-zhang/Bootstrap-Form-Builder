define(function(require) {
    var formname               = require('text!templates/snippet/formname.html')
    , n2mandatory               = require('text!templates/snippet/n2schemamandatory.json')
    , n2mandatoryhtml        = require('text!templates/snippet/n2schemamandatory.html')
    , n2attributehtml       = require('text!templates/snippet/n2attributes.json')
    , n2attributelist      = require('text!templates/snippet/n2attributelist.json')
    , n2attributelisthtml   = require('text!templates/snippet/n2attributelist.html')
    , n2attributetitle = require('text!templates/snippet/n2attributetitle.json')
    , n2attributestring = require('text!templates/snippet/n2attributestring.json')
    , n2attributetitlehtml = require('text!templates/snippet/n2attributetitle.html')
    , n2attributestringhtml = require('text!templates/snippet/n2attributestring.html')
    , n2attributeselection = require('text!templates/snippet/n2attributeselection.json')
    , n2attributeselectionhtml = require('text!templates/snippet/n2attributeselection.html')
  return {
      formname                   : formname
      , n2schemamandatory        : n2mandatory
      , n2schemamandatoryhtml    : n2mandatoryhtml
      , n2attributelist        : n2attributelist
      , n2attributelisthtml    : n2attributelisthtml
      , n2attributetitlehtml  : n2attributetitlehtml
      , n2attributetitle  : n2attributetitle
      , n2attributestring : n2attributestring
      , n2attributestringhtml : n2attributestringhtml
      , n2attributeselection : n2attributeselection
      , n2attributeselectionhtml : n2attributeselectionhtml
  }
});
