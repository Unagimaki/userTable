import './tableItem.css'

export const TableItem = ({utm, usersCount, taskCount}) => {   
         
    return(
        <div className='tableItem_container'>
            <div className='tableItem_count'>
                <div>{utm}:&emsp;</div>
                <strong>{usersCount}</strong>
            </div>
            <div className='tableItem_tasks'>
                {Object.entries(taskCount).map(([key, value], index) => (
                    <div key={index}>
                        <strong>{key}: </strong> {value}
                    </div>
                ))}
            </div>

        </div>
    )
}