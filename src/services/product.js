import {shopData} from '../app/util/shop'

const findProductById = async (id) => {

    return shopData.find(product => product.id == id);
}

export {findProductById};