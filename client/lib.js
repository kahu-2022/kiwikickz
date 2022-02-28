// Facilitators Functions

// export const mappingWithFilters = (ArrayToFilter, Filters) =>
//   ArrayToFilter.map(product => {
//     const matches = productMatchesAllFilters(product, Filters);
//     return { product, matches }
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
};

const manyFiltersOneProduct = (product, filters) => {
  const potentialPass = filters.every(filter => productFitsFilter(product, filter))

  if (potentialPass === true) {
    return product
  }
  else return null
};
  
  
const productFitsFilter = (product, filter) => {
  if (filter.key === "size" || filter.key === "price") {
    if (testSizeOrPriceParameters(product[filter.key], filter) === true) {
      return product;
    }
  } else if (filter.key === "color") {
    if (product[filter.key].includes(filter.value) === true) {
      return product;
    }
  } else if (product[filter.key] === filter.value) {
    return product;
  }
};


export const testingFilterArr = (arrToTest, filter) => {
  const isInArray = arrToTest.some(product => product.key === filter.key)
  if (isInArray === true) {
    return arrToTest.filter(product => {
      if (product.key === 'size') {
        if (product.min !== filter.min && product.max !== filter.max)
          return product
      } 
      else if (product.key === 'color') {
        
      }
      else if (product.key !== filter.key) {
        return product
      }
    }
    )
  }
  else return [...arrToTest, filter]
};

const testSizeOrPriceParameters = (sizeOrPrice, filter) => {
  if (filter.min <= sizeOrPrice && sizeOrPrice <= filter.max) {
    return true
  }
  else return false
};

// Sorting Array Methods 

// export const filterArrByPriceHiLow = () => {

// };

// export const filterArrByPriceHiLow = () => { 

// };

// export const filterArrByPriceHiLow = () => { 

// };

// export const filterArrByPriceHiLow = () => {

// };