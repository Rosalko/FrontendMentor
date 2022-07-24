interface ColumnProps {
    amount: number,
    day: string,
    height: number,
    isCurrent: boolean
}

const Column = ({height, isCurrent, day, amount}: ColumnProps) => {
    return <div className="column-container">
        <div className="amount"><p>${amount}</p></div>
        <div style={{height, backgroundColor: isCurrent ? 'lightblue' : 'lightcoral'}} className='column'>
        </div>
        {day}
    </div>
}

export default Column