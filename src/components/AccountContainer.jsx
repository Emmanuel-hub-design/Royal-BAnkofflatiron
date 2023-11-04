import { useEffect, useState } from 'react'
import TransactionList from "./TransactionList";


export default function AccountContainer(){
    const hostUrl = 'http://localhost:8001'
    const [transactionDataList, setTransactionDataList] = useState([]) 
    
    fetch(`${hostUrl}/transactions`)
    .then((res)=>res.json())
    .then((data) => setTransactionDataList(data))



    useEffect(()=>{
        fetch(`${hostUrl}/transactions`)
    .then((res)=>res.json())
    .then((data) => setTransactionDataList(data))
   
    },[]);
    
   // console.log(transactionList);
    return(
        <div>
            <p>account components</p>
            <TransactionList  transaction={transactionDataList}/>
        </div>
    )

    }
//export default AccountContainer