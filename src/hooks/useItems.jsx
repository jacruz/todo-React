import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemContext";

export default function useItems(){
    return useContext(ItemsContext);
}