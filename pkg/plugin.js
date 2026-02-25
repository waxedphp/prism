
;(function ( $, window, document, undefined ) {

    var pluginName = 'prism',
        _search = '.waxed-prism',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false
        ;

        //window.Prism = window.Prism || {};
        //window.Prism.manual = true;

    function Instance(pluggable,element,dd){
      var that = this;
      this.pluggable = pluggable;
      this.element = element;
      this.o = element;
      this.t = 'prism';
      this.dd = dd;
      this.name = '';
      this.syntax = 'php';
      this.cfg = {
      };

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };
        var redraw = false;
        if (typeof rec.syntax == 'string') {
          this.syntax = rec.syntax;
          redraw = true;
        };
        if (typeof rec.value == 'string') {
          this.setContent(rec.value);
          redraw = true;
        };
      },

      this.setContent = function(s) {
        $(that.element).empty();
        var a = $('<code></code>');
        var b = $('<pre></pre>');
        b.appendTo(that.element);
        a.appendTo(b);
        a.text(s);
        a.addClass('language-'+this.syntax);
        //b.addClass('line-numbers');
        this.highlightElement();
      },

      this.highlightElement = function() {
        $(that.element).find('code').each(function(i,a){
          //console.log(a);
          Prism.highlightElement(a);
          //$(a).hide();
        });
      },

      this.free = function() {

      },

      this.init=function() {
        //window.Prism = window.Prism || {};
        //window.Prism.manual = true;
        //console.log(Prism);
        //console.log(Prism.languages);

        this.highlightElement();
        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
