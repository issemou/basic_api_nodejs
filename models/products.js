import {pool,client} from "../databases/configDB";

class Products {

    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    add_prod(name,price){
        pool.query("")
    }
    delete_prod(id){}
    edite_product(id,objet){}
}