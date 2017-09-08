(function() {
    tinymce.create('tinymce.plugins.bright', {
        init : function(ed, url) {
            ed.addButton('bright', {
                title : 'Bright text',
                image : (url.split('/').slice(0, -1) ).join('/')+'/img/bright-button.png',
                onclick : function() {
                    var text = prompt("Enter bright text", " ");
                    ed.execCommand('mceInsertContent', false, '[bright]'+text+'[/bright]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
        getInfo : function() {
            return {
                longname : "bright text",
                author : 'HVH',
                authorurl : 'localhost',
                infourl : '',
                version : "1.0"
            };
        }
    });
    tinymce.PluginManager.add('bright', tinymce.plugins.bright);
})();