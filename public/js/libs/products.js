var Products = {
    listAll: function(divId){
        var serviceUrl = '/products/';
        $(divId).html('Wait...');
        $.getJSON(serviceUrl,function(jsonData){
            var data=[];
            $.each(jsonData,function(k,v){
                data.push(v.name);
            })
            $(divId).html(data.join('<br>'));
        }).fail(function(){

        });
    }
};