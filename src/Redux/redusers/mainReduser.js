const ADD_INFO = 'ADD-INFO';
const ADD_BUSKET = 'ADD-BUSKET';
const REMUVE_ITEM = 'REMUVE-ITEM';
const ADD_DEVICE = 'ADD-DEVICE';
const FILTER_DEVISE = 'FILTER_DEVISE';
const TOTLE_COUNT = 'TOTLE_COUNT';

let defaultState = {
    infoCard: [],
    busket: [],
    device: [],
    filterDevise: null,
    totlePrice: 0
}
 const MainReduser = (state = defaultState, action) => {
   
  switch(action.type) {
    case ADD_INFO:
        return {
            ...state,
            infoCard: action.info
        }
    case ADD_BUSKET: 
        return {
            ...state,
            busket: [...state.busket, action.item]
            
        }
    case REMUVE_ITEM:
        return {
            ...state,
            busket: remuve(state.busket, action.id)
        }  
    case ADD_DEVICE:
        return {
            ...state,
            device: action.product
        }
    case FILTER_DEVISE:
        return {
            ...state,
            filterDevise: action.filterItem
        }
    case TOTLE_COUNT:
        return {
            ...state,
            totlePrice: action.price
        }
    
  }
  return state;
  
}

const remuve = (busket, id) => busket.filter(item => item.id !== id)





export let AddInfoCards = (info) => ({type: ADD_INFO, info})
export let AddItemBusket = (item) => ({type: ADD_BUSKET, item})
export let RemuveItem = (id) => ({type: REMUVE_ITEM, id})
export let AddDevice = (product) => ({type: ADD_DEVICE, product})
export let FiltredItem = (filterItem) => ({type: FILTER_DEVISE, filterItem})
export let TotlePrice = (price) => ({type: TOTLE_COUNT, price})
export default MainReduser