import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from "./constant"

const initalStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initalStateSearch, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
        return Object.assign({},state, {searchField: action.payload});
        default:
            return state;
    }
}

const initalStateRobots = {
    ispending: false,
    robots: [],
    error: ''
}

export const requestRobots =(state=initalStateRobots, action={}) => {
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({},state, {ispending: true})
        case REQUEST_ROBOTS_SUCCESS:
             return Object.assign({},state, {robots: action.payload})
        case REQUEST_ROBOTS_FAILED: 
             return Object.assign({},state,{error: action.payload})
             default:
              return state;   
    }
}

