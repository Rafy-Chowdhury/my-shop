import { IProduct } from "../../Models/types"
import { ActionType } from "../actionTypes"


export const addToCart = (payload: IProduct) => {
    return {
        type: ActionType.ADD_TO_CART,
        payload: payload
    }
}

export const removeFromCart = (payload: string) => {
    return {
        type: ActionType.REMOVE_FROM_CART,
        payload: payload
    }
}

export const clearCart = () => {
    return {
        type: ActionType.CLEAR_CART,
        payload: " "
    
    }
}

export type CartAction = 
    ReturnType<typeof addToCart>
    | ReturnType<typeof removeFromCart>
    | ReturnType<typeof clearCart>