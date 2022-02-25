const initialState = [{
  id: 1,
  seller_id: 1,
  hot_pick: true,
  status: 'available',
  name: 'Jordan 1 Retro High',
  details: 'Jordan Brand connected with Parisian fashion house.',
  auth_status: true,
  brand: 'Nike',
  size: 9,
  color: 'White',
  make: 'Jordan 1',
  model: 'Dior High',
  year: 2020,
  price: 8000,
  condition: 'New',
  receipt: '',
  image1: '/productimages/dior/dior1.jpg',
  image2: '/productimages/dior/dior2.jpg',
  image3: '/productimages/dior/dior3.jpg',
  image4: '/productimages/dior/dior4.jpg'

}]

function cart (state = initialState, action) { 
  switch(action.type) {
    case 'ADD_ITEM' : 
      return [...state, action.product]
    default: 
      return state
  }
}

export default cart