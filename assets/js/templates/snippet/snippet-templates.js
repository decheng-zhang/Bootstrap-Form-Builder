define(function(require) {
    var formname               = require('text!templates/snippet/formname.html')
    , n2mandatory               = require('text!templates/snippet/n2schemamandatory.json')
    , n2mandatoryhtml        = require('text!templates/snippet/n2schemamandatory.html')
    , n2attributelist      = require('text!templates/snippet/n2attributelist.json')
    , n2attributelisthtml   = require('text!templates/snippet/n2attributelist.html')
    , n2attributetitle = require('text!templates/snippet/n2attributetitle.json')
    , n2attributestring = require('text!templates/snippet/n2attributestring.json')
    , n2attributetitlehtml = require('text!templates/snippet/n2attributetitle.html')
    , n2attributestringhtml = require('text!templates/snippet/n2attributestring.html')
    , n2attributeselection = require('text!templates/snippet/n2attributeselection.json')
    , n2attributeselectionhtml = require('text!templates/snippet/n2attributeselection.html')
    , n2attributereference = require('text!templates/snippet/n2attributereference.json')
    , n2attributereferencehtml = require('text!templates/snippet/n2attributereference.html')
    , n2attributecheckbox = require('text!templates/snippet/n2attributecheckbox.json')
    , n2attributecheckboxhtml = require('text!templates/snippet/n2attributecheckbox.html')
    , n2attributecheckboxgroup = require('text!templates/snippet/n2attributecheckboxgroup.json')
    , n2attributecheckboxgrouphtml = require('text!templates/snippet/n2attributecheckboxgroup.html')
    , n2attributearray = require('text!templates/snippet/n2attributearray.json')
    , n2attributearrayhtml = require('text!templates/snippet/n2attributearray.html')
  return {
      formname                   : formname
      , n2schemainfo        : n2mandatory
      , n2schemainfohtml    : n2mandatoryhtml
      , n2attributelist        : n2attributelist
      , n2attributelisthtml    : n2attributelisthtml
      , n2attributetitlehtml  : n2attributetitlehtml
      , n2attributetitle  : n2attributetitle
      , n2attributestring : n2attributestring
      , n2attributestringhtml : n2attributestringhtml
      , n2attributeselection : n2attributeselection
      , n2attributeselectionhtml : n2attributeselectionhtml
      , n2attributereference : n2attributereference
      , n2attributereferencehtml : n2attributereferencehtml
      , n2attributecheckbox   : n2attributecheckbox
      , n2attributecheckboxhtml : n2attributecheckboxhtml
      , n2attributecheckboxgroup : n2attributecheckboxgroup
      , n2attributecheckboxgrouphtml : n2attributecheckboxgrouphtml
      , n2attributearray : n2attributearray
      , n2attributearrayhtml : n2attributearrayhtml
  }
});
