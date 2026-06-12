const Countries = ({ countries, filterBy }) => {
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filterBy))

  const limitTenFilteredCountries = filteredCountries.splice(0, 10)

  console.log(limitTenFilteredCountries)

  return (
    <div>
      { 
        limitTenFilteredCountries
          .map((country) =>
            <p 
              key={ country.name.common }
            >
              { country.name.common }
            </p>
          )
      }
    </div>
  )
}

export default Countries