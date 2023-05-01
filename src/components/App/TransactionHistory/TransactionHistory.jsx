import PropTypes from 'prop-types'
import { Table, TableHead, TableHeader, TableBody, TableRow, TableData } from './TransactionHistory.styled'

export const TransactionHistory = ({items}) => {
    return(
    <Table>
        <TableHead>
            <TableRow>
                <TableHeader>Type</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Currency</TableHeader>
            </TableRow>
        </TableHead>

        <TableBody>
                {items.map((item) => {
                    return (
                        <TableRow key={item.id}>
                            <TableData>{item.type}</TableData>   
                            <TableData>{item.amount}</TableData>   
                            <TableData>{item.currency}</TableData>   
                        </TableRow>
                )
            })}
        </TableBody>    
    </Table>
    )    
}

TransactionHistory.propType = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}