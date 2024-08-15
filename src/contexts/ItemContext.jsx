import { todoList } from "../assets/data";
import {createContext, useReducer} from "react";

export const ItemsContext = createContext(null);
export const ItemsDispatchContext = createContext(null);

export function ItemsProvider({children}){
    const [items, dispatch] = useReducer(
        itemsReducer,
        todoList
    );

    return (
        <ItemsContext.Provider value={items}>
            <ItemsDispatchContext.Provider value={dispatch}>
                {children}
            </ItemsDispatchContext.Provider>
        </ItemsContext.Provider>
    );
}

function itemsReducer(items, action){
    switch(action.type){
        case 'added':{
            return [
                ...items,
                {
                    id: action.id,
                    txt: action.txt,
                    done: false
                }
            ];
        }
        case 'changed':{
            return items.map(item=>{
                if(item.id==action.id){
                    return action;
                }else{
                    return item;
                }
            });
        }
        case 'deleted':{
            return items.filter(item=>{
                if(item.id!=action.id){
                    return action;
                }
            });
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }

}