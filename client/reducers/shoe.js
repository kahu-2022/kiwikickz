
function shoe (state = {
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
    image1: '/shoeimges/dior/dior1',
    image2: '/shoeimges/dior/dior1',
    image3: '/shoeimges/dior/dior1',
    image4: '/shoeimges/dior/dior1'

}, action) {
    switch (action.type) {

        default:
            return state
    }
}

export default shoe