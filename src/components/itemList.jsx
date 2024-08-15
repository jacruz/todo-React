import {useState} from "react";
import useItems from "../hooks/useItems";
import useItemsDispatch from "../hooks/useItemsDispatch";
export default function ItemList(){
    
    const items = useItems();

    return (
        <div className="item-list">
            <ul>
                {items.map(item=>(
                    <li key={item.id}>
                        <Item item={item}></Item>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Item({item}){
    const [isEditting, setIsEditting] = useState(false);
    const [newText, setNewText] = useState('');
    const dispatch = useItemsDispatch();

    return (
        <div className="item">
            <button 
                className={item.done?"item-ckeck btn-icon text-yellow-dark txt-larger-1":"item-ckeck btn-icon txt-larger-1 text-yellow-dark"}
                onClick={()=>{
                    dispatch({
                        type:'changed',
                        id:item.id,
                        txt: item.txt,
                        done: !item.done
                    });
                }}
            ><i className={item.done?"fa fa-circle":"fa fa-circle-o"}></i></button>

            {isEditting?
                <>
                <input 
                    className="input-2" 
                    defaultValue={item.txt} 
                    onChange={(e)=>{
                        setNewText(e.target.value);
                    }}
                />
                <button 
                    className="item-edit btn-icon text-gray btn-icon-hover-green txt-larger-1"
                    onClick={()=>{
                        setIsEditting(false);
                        dispatch({
                            type:'changed',
                            id:item.id,
                            txt: newText,
                            done: item.done
                        });
                    }}
                ><i className="fa fa-check-circle-o"></i></button>
                <button 
                    className="item-edit btn-icon text-gray btn-icon-hover-yellow txt-larger-1"
                    onClick={()=>{
                        setIsEditting(false);
                    }}
                ><i className="fa fa-times-circle-o"></i></button>
                </>
            :
                <>
                <span 
                    className={item.done?"item-txt text-done":"item-txt"}
                >{item.txt}</span>
                <button 
                    className="item-edit btn-icon text-gray btn-icon-hover-bright txt-larger-1"
                    onClick={(e)=>{
                        setIsEditting(true);
                        setNewText(item.txt);
                    }}
                ><i className="fa fa-edit"></i></button>
                </>
            }
            <button 
                className="item-delete btn-icon text-gray btn-icon-hover-red txt-larger-1"
                onClick={(e)=>{
                    setIsEditting(false);
                    dispatch({
                        type:'deleted',
                        id:item.id
                    });
                }}
            ><i className="fa fa-trash-o"></i></button>
        </div>
        
    );
}