var Products = {
    model: null,
    init: function(bookshelf){
        this.model = bookshelf.Model.extend({
        tableName: 'products'
        });        
    }
}

module.exports = Products;