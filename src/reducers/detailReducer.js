const initState = { game: {}, screen: {}}

 const detailReducer = (store = initState, action) => {
    
        switch(action.type) {
            case "GET_DETAIL":
                return {...store, 
                game: action.payload.game,
                screen: action.payload.screen
            }
                default: 
                return {...store}
        }
    
}

export default detailReducer