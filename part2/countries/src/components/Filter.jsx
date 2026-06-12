const Filter = ({ filterBy, handleFilterBy }) => {
    return (
        <div>
            find countries
            <input
                placeholder="enter text filter..."
                value={ filterBy }
                onChange={ handleFilterBy }
            />
        </div>
        
    )
}

export default Filter