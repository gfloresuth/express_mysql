module.exports = function(bookshelf){
        var model = bookshelf.Model.extend({
        tableName: 'products'
        }); 
        return model;       
};