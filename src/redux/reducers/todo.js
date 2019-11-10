export default function todo (state = [],action) {
    switch (action.type) {
      case 'ADD' :
          state.push(action.text);
        return state;
      case 'RETRIEVE' :
        return state.map((data,index) =>{
          if(index === action.index) {
            return data;
          }
        })
      default:
        return state;
    }
}