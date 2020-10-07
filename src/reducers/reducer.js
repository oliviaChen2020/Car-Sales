import {ADD_FEATURE} from '../actions/actions'
import {SUBTRACT_FEATURE} from '../actions/actions'

const initialState = {
    additionalPrice: 0,
    car:{
        price:26395,
        name:'2019 Ford Mustang',
        image:'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        feature:[]
    },
    additionalFeatures:[
        {id:1, name:"V-6 engine", price:1500},
        {id:2, name:"racing detail package", price:1500},
        {id:3, name:"premium sound system", price:1500},
        {id:4, name:"rear spoiler", price:1500}
    ]
}

export const reducer =(state=initialState, action)=>{
    switch(action.type){
        case ADD_FEATURE:
            return{
                ...state,
                additionalFeatures:state.additionalFeatures.filter((feature)=>{
                    if(feature !==action.payload){
                        return feature
                    }else {
                        return null
                    }
                }),
                car:{
                    ...state.car,
                    price: state.car.price + action.payload.price,
                    features:[...state.car.feature,action.payload]
                },
                additionalPrice:state.additionalPrice + action.payload.price
            }
        case SUBTRACT_FEATURE:
            return{
                ...state,
                additionalFeatures: [...state.additionalFeatures, action.payload],
                car:{
                    ...state.car,
                    price:state.car.price - action.payload.price,
                    features:state.car.features.filter(feature =>{
                        if(feature !==action.payload){
                            return feature
                        }else{
                            return null
                        }
                    })
                },
                additionalPrice:state.additionalPrice -action.payload.price
            }
    default:
        return state;
    }
}