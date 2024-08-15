import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemContext";

export default function Stats(){
    const items = useContext(ItemsContext);
    const dones = items.reduce((acum,val)=>{
        if(val.done)
            acum++;
        return acum
    },0);

    return (
        <div className="stats">
            <div className="txt-larger-1">
                <span>TODO list</span>
            </div>
            <div className="stats-total txt-larger-2">
                <span>{dones}/{items.length}</span>
            </div>
        </div>
    );
}