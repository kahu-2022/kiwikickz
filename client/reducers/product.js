// TODO: will this be used (as no cases currently) or should it be removed?
// TODO: remove initial state

function product (state = {
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

}, action) {
    switch (action.type) {

        default:
            return state
    }
}

export default product