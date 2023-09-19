import { ADD_TO_WHISHLIST, REMOVE_TO_WHISHLIST } from "./Type";


let whishData = (data = [], action) => {
    switch(action.type){
        case ADD_TO_WHISHLIST:
            console.log(data)
            return [action.data, ...data]

        case REMOVE_TO_WHISHLIST:
            let removeItem = data.filter((item) => item.id !== action.data)
            return [...removeItem]

        default:
            return data
    }
}

export default whishData