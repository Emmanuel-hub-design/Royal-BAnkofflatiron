import Transction from "./Transaction";



export default function TransactionList({transactions }){
   console.log('transactions',transactions);
   return(
<div>
<table>
    <tbody>
  <tr>
    <th>Date</th>
    <th>Description</th>
    <th>Category</th>
    <th>Amount</th>
  </tr>



</tbody>
</table>
</div>
    )
}