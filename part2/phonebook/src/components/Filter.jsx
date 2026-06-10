const Filter = ({ filterBy, handleFilterBy }) => {
	return (
		<div>
			<input
				value={ filterBy }
				onChange={ handleFilterBy }
				className="input inputMargin"
				placeholder="filter by..."
			/>
		</div>
	)
}

export default Filter