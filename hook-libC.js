Interceptor.attach(Module.findExportByName(null, "open"), {
    onEnter: function (args) {
        var path = Memory.readUtf8String(args[0]);
        
        path = Memory.readUtf8String(args[0]);
        send(`Abrindo arquivo ${path}`);
    }    

});