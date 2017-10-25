(function() {
    tinymce.create('tinymce.plugins.circle', {
        init : function(ed, url) {
            ed.addButton('circle', {
                title: 'Circle',
                image : (url.split('/').slice(0, -1) ).join('/')+'/img/bright-button.png',
                onclick : function() {
                    ed.execCommand('mceInsertContent', false, '[circle]');
                }
            });
        },
        createControl : function(n, cm) {
            return null;
        },
        getInfo : function() {
            return {
                longname : "Circle text",
                author : 'HVH',
                authorurl : 'localhost',
                infourl : '',
                version : "1.0"
            };
        }
    });
    tinymce.PluginManager.add('circle', tinymce.plugins.circle);
})();