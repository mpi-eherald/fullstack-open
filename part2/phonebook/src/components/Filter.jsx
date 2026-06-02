const Filter = ({ filterBy, handleFilterBy }) => {
	return (
		<div>
			filter by:
			<input
				value={ filterBy }
				onChange={ handleFilterBy }
			/>
		</div>
	)
}

export default Filter