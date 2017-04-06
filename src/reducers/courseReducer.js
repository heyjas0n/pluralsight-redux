export default function courseReducer(state = [], action) {
  console.log(state);
  switch(action.type) {  	
    case 'CREATE_COURSE':
      return [...state,
        Object.assign({}, action.course)
      ];
       
    default:
      return state;
  }
}
