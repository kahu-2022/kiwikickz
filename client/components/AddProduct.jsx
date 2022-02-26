import React, {useState, useEffect} from 'react'
import { useDispatch} from 'react-redux'
import * as Base64 from 'base64-arraybuffer'
import {addProductThunk, getAllProductsThunk} from '../actions/products'
import { Button, Container,Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

function AddProduct () {
  const navigate = useNavigate()

  const emptyForm = {
    sellerId: '',
    hotPick:'',
    status:'',
    name:'',
    details:'',
    authStatus:'',
    brand:'',
    size:'',
    color:'',
    make:'',
    model:'',
    year:'',
    price:'',
    condition:'',
    receipt:'',
    image1:'',
    image2:'',
    image3:'',
    image4:''
  }

  const dispatch = useDispatch()
  const [formData, setFormData] = useState(emptyForm)


  const handleSubmit = (e) => {
    e.preventDefault()

    formData.image1.arrayBuffer().then(bytes => {
      const finalFormData = {...formData, ["image1"]: Base64.encode(bytes)}
      return finalFormData
    })
      .then((formToSend) => {
        console.log(formToSend)
        dispatch(addProductThunk(formToSend))
      })
      .then(() => {
        dispatch(getAllProductsThunk())
      })
    //navigate(`product/${1}`)
  }

//  const addProduct = async () => {
//    const newProductId = dispatch(addProductThunk(formData))
//  }

  const handleChange = (e) => {
    console.log('change1', formData.name)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleFileChange = (e) => {

    console.log('change1', formData.name)

    console.log({[e.target.name]: e.target.files[0]})
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0]
    })
  }


  return (
    <>
    <Container>
      <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label htmlFor='sellerId'>Seller ID: </label>
        <input id='sellerId' name='sellerId' type='number' onChange={handleChange} />
       </Form.Field>
       <Form.Field>
        <label htmlFor='name'>Name: </label>
        <input id='name' name='name' type='text' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='hotPick'>Hot Pick: </label>
        <input id='hotPick' name='hotPick' type='text' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='status'>Available/Sold: </label>
        <input id='status' name='status' type='text' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='details'>Details: </label>
        <input id='details' name='details' type='text' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='authStatus'>Authenticated: </label>
        <input id='authStatus' name='authStatus' type='text' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='brand'>Brand: </label>
        <input id='brand' name='brand' type='text' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='size'>Size: </label>
        <input id='size' name='size' type='number' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='color'>Color: </label>
        <input id='color' name='color' type='text' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='make'>Make: </label>
        <input id='make' name='make' type='text' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='model'>Model: </label>
        <input id='model' name='model' type='text' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='year'>Year: </label>
        <input id='year' name='year' type='number' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='price'>Price: </label>
        <input id='price' name='price' type='number' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='condition'>Condition: </label>
        <input id='condition' name='condition' type='text' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='receipt'>Receipt: </label>
        <input id='receipt' name='receipt' type='text' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='addImg1'>Image 1: </label>
        <input type='file' id='addImg1' name='image1' onChange={handleFileChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='addImg2'>Image 2: </label>
        <input type='file' id='addImg2' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='addImg3'>Image 3: </label>
        <input type='file' id='addImg3' onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='addImg4'>Image 4: </label>
        <input type='file' id='addImg4' onChange={handleChange} />
        </Form.Field>
        <Button>Done!</Button>
      </Form>
      </Container>
    </>
  )
}

export default AddProduct