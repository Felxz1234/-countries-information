
const innitialState = {
    imagem:"",
    NativeName:'',
    population:0,
    region:'',
    subregion:'',
    capital:'',
    TopLevelDomain:"",
    Currencies:"",
    languages:""
}

export function reducerDetails(state=innitialState, action){
    switch (action.type) {
        case 'nativename':
            return {...state,NativeName:action.payload};
        case 'population':
            return{...state,population:action.payload};
        
        case 'region':
            return {...state,region:action.payload};

        case 'subregion':
            return {...state,subregion:action.payload};  

        case 'capital':
            return {...state,capital:action.payload};  
         
        case 'tld':
            return {...state,TopLevelDomain:action.payload};    
        
        case 'currencies':
            return {...state,Currencies:action.payload}; 
            
    
        case 'languages':
                return {...state,languages:action.payload};         

        
        case 'imagem':
               return {...state,imagem:action.payload};           
                
        default:
            return state 
    }
}

export default reducerDetails