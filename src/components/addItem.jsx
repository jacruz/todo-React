import {useContext, useState} from "react";
import {ItemsContext, ItemsDispatchContext} from "../contexts/ItemContext";

export default function AddItem(){
    const [text, setText] = useState('');
    const items = useContext(ItemsContext);
    const dispatch = useContext(ItemsDispatchContext);

    return (
        <div className="add-item">
            <input 
                className="input-1"
                type="text"
                placeholder="Write your next item"
                value={text}
                onChange={(e)=>{
                    setText(e.target.value);
                }}
            />
            <button 
                className="btn-1 btn-icon-hover-bright"
                onClick={()=>{
                    if(text!=""){
                        setText("");
                        dispatch({
                            type:'added',
                            id: items.length,
                            txt: text
                        })
                        }
                    }
                }
            ><i className="fa fa-plus"></i></button>
        </div>
    );
}