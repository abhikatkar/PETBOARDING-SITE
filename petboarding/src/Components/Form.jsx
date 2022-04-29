import { useDispatch, useSelector } from "react-redux"
import { addCount, subCount } from "../Redux/Count/action"


export const Form = () => {

    const {count} = useSelector((store) => store.count)

    const dispatch = useDispatch()


    return (
        <div>
            <h1>Form</h1>
            <h1>counter : {count}</h1>
            <button onClick={()=> dispatch(addCount(1)) }>add</button>
            <button onClick={()=> dispatch(subCount(1))}>sub</button>
        </div>
    )
}