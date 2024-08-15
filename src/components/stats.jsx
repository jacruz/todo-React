import useItems from "../hooks/useItems";

export default function Stats(){
    const items = useItems();
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