import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
export const todoSlice=createSlice({
    name:"Todo",
    initialState:[
        {id:uuidv4(),
         text:"first todo  list",
         checked:false},
         
        {id:uuidv4(),
         text:"second todo  list",
         checked:false},
         
        {id:uuidv4(),
         text:"third todo  list",
         checked:false}
        
    ],
    reducers:{

        //partie ajout todo
        add:(state,action)=>{
           const newtodo={id:uuidv4(),
                          text:action.payload,
                          checked:false,
           };
           state.push(newtodo)
           
        },

        //partie  delete todo
        delet:(state,action)=>{
           return  state.filter((el)=>el.id !==action.payload)
        },


        //partie check todo
        handelcheck:(state,action)=>{
           return  state.map((el)=> el.id===action.payload ?{...el,checked: !el.checked}  : el)
        },


        //partie filter todo
        handelfilter: (state, action) => {
            const choix = action.payload; 
            let res;
            if ( choix=== "all") {
                res = state.map((el)=>el);
            } else if (choix === "done") {
                res = state.filter(el => el.checked === true).map((el)=>el);
            } else if (choix === "notyet") {
                res = state.filter(el => el.checked === false).map((el)=>el);
            }
          
            return res;
          },
          

        // partie edit todo
        edit:(state,action)=>{
            const index=state.findIndex((el)=>el.id===action.payload)
            state[index].text=prompt('test');
        }
        
    }
})
export const  {edit,add,handelcheck,delet,handelfilter}=todoSlice.actions;
export default todoSlice.reducer