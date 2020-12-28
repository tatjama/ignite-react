const initState = { game: {platforms: []}, screen: {results: []}, isLoading: true}

 const detailReducer = (store = initState, action) => {
    
        switch(action.type) {
            case "GET_DETAIL":
                return {...store, 
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: false
            }
            case "LOADING_DETAIL":
                return {...store,
                isLoading: true
            }
                default: 
                return {...store}
        }
    
}

export default detailReducer