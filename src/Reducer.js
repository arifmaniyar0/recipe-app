export const state = {
    basket : []
};


export const Reducer = (state = [], action) => {

    switch (action.type) {
        case 'Add':
           return {
               ...state,basket: [...state.basket,action.item]
           };

        case 'Remove':
            const id = action.payload.id;       
            return {
                ...state,
                basket:state.basket.filter((_,i) => i !== id)
            };
    
        default:
            return state;
    }
}

