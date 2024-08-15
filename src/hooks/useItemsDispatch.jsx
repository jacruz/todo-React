import { useContext } from "react";
import { ItemsDispatchContext } from "../contexts/ItemContext";

export default function useItemsDispatch(){
    return useContext(ItemsDispatchContext);
}