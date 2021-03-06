{
  "source": {
    "include": [ "./src" ]
  },
  "opts": {
    "recurse": true,
    "destination": "./docs",
    "readme": "./README.md",
    "template": "./node_modules/ink-docstrap/template"
  },
  "templates": {
    "systemName"            : "<%= appName %>",
    "footer"                : "",
    "copyright"             :  "© 2015 TokBox Inc.",
    "navType"               : "vertical",
    "theme"                 : "",
    "linenums"              : false,
    "collapseSymbols"       : false,
    "inverseNav"            : false,
    "outputSourceFiles"     : false,
    "outputSourcePath"      : true,
    "dateFormat"            : "llll",
    "highlightTutorialCode" : true,
    "syntaxTheme"           : "default"
  },
  "tags": {
    "allowUnknownTags": true
  },
  "plugins": ["plugins/markdown"],
  "markdown": {
    "parser": "gfm",
    "hardwrap": true
  }
}
