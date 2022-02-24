
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
    image1: '/shoeimages/dior/dior1.jpg',
    image2: '/shoeimages/dior/dior2.jpg',
    image3: '/shoeimages/dior/dior3.jpg',
    image4: '/shoeimages/dior/dior4.jpeg'

}, action) {
    switch (action.type) {

        default:
            return state
    }
}

export default shoe