import { SET_PRODUCT_LIST } from "../Type";

export let productData = (data = [], action) => {
    switch(action.type){
        case SET_PRODUCT_LIST:
            // console.log(data);
            return [...action.Se3]

        default:
            return data
    }
}

export default productData