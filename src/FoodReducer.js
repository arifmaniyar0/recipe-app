export const foodStore = {
    food: {}
}



export const foodReducer = (foodStore = { food:[] }, action) => {
    switch (action.type) {
        case 'ALL':
            return {
                ...foodStore,
                food: {...action.payload}
            };
    
        default:
            return foodStore;
    }
}