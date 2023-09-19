import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../Type";
import { takeEvery, put } from 'redux-saga/effects'
import Se3 from '../../Home/Sectionn3/Se3.json'

function* getProduct(){
    yield put({type: SET_PRODUCT_LIST, Se3})
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST, getProduct)
}

export default productSaga