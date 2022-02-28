// export const mappingWithFilters = (ArrayToFilter, Filters) =>
//   ArrayToFilter.map(product => {
//     const matches = productMatchesAllFilters(product, filters);
//     return { product, mtches }
//   });

// const productMatchesAllFilters = (product, filters) =>
//   filters.every(filter => productMatchesFilter(product, filter))


// const productMatchesFilter = (product, filter) =>
//   product[filter.key] === filter.value;


export const manyProductsManyFilters = (products, filters) => {
  const results = products.map(product => manyFiltersOneProduct(product, filters))
  const finalResults = results.filter(product => product !== null)
  return finalResults
}

const manyFiltersOneProduct = (product, filters) => {
  const potentialPass = filters.every(filter => productFitsFilter(product, filter))

  if (potentialPass === true) {
    return product
  }
  else return null
}
  
  
const productFitsFilter = (product, filter) => {
  if (filter.key === 'size') {
    const fitsSizeParameters = testSizeParameters(product[filter.key], filter)
    if (fitsSizeParameters === true) {
      return product;
    }
  }
  else if (filter.key === 'color') {
    const colorTest = product[filter.key].includes(filter.value)
    if (colorTest === true) {
      return product
    }
  }
  else if (product[filter.key] === filter.value) {
    return product
  }
}


export const testingFilterArr = (arrToTest, filter) => {
  const isInArray = arrToTest.some(product => product.key === filter.key)
  if (isInArray === true) {
    return arrToTest.filter(product => product.key !== filter.key)
  }
  else return [...arrToTest, filter]
}

const testSizeParameters = (size, filter) => {
  if (filter.min <= size && size <= filter.max) {
    return true
  }
  else return false
}

/* Suggested filters for array :

An example of what the Filters arguement would look like
e.g. just hotPicks would look like
 [
   {key: hotPick
    value: 1
  },
 ]
 */