// Facilitators Functions

// export const mappingWithFilters = (ArrayToFilter, Filters) =>
//   ArrayToFilter.map(product => {
//     const matches = productMatchesAllFilters(product, filters);
//     return { product, mtches }
//   });

// const productMatchesAllFilters = (product, filters) =>
//   filters.every(filter => productMatchesFilter(product, filter))


// const productMatchesFilter = (product, filter) =>
//   product[filter.key] === filter.value;
//-------------------------------------------------------------

// Filtering Functions

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
  if (filter.key === "size" || filter.key === "price") {
    const fitsSizeOrPriceParameters = testSizeOrPriceParameters(product[filter.key], filter);
    if (fitsSizeOrPriceParameters === true) {
      return product;
    }
  } else if (filter.key === "color") {
    const colorTest = product[filter.key].includes(filter.value);
    if (colorTest === true) {
      return product;
    }
  } else if (product[filter.key] === filter.value) {
    return product;
  }
}


export const testingFilterArr = (arrToTest, filter) => {
  const isInArray = arrToTest.some(product => product.key === filter.key)
  if (isInArray === true) {
    return arrToTest.filter(product => product.key !== filter.key)
  }
  else return [...arrToTest, filter]
}

const testSizeOrPriceParameters = (sizeOrPrice, filter) => {
  if (filter.min <= sizeOrPrice && sizeOrPrice <= filter.max) {
    return true
  }
  else return false
}

//