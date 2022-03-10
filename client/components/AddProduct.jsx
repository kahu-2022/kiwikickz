import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import * as Base64 from 'base64-arraybuffer'
import { Button, Container, Form, Dropdown , Grid, Divider, Message} from 'semantic-ui-react'
import { options } from 'superagent'

import {addProductThunk} from '../actions/products'
import ColorSelector from './ColorSelector'
import ColorLabel from './ColorLabel'


function AddProduct () {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const emptyForm = {
    sellerId: '',
    hotPick:'false',
    status:'available',
    gender: '',
    box: 'Yes',
    name:'',
    details:'',
    authStatus:'false',
    brand:'',
    size:'',
    color:'',
    make:'',
    model:'',
    year:'',
    price:'',
    condition:'',
    gender: '',
    receipt:'false',
    image1:'',image2:'',image3:'',image4:''
  }

  const [formData, setFormData] = useState(emptyForm)
  const [color, setColor] = useState('')
  const [colorArr, setColorArr] = useState([])
  const [condition, setCondition] = useState('')
  const [sizeShoe, setSize] = useState('')
  const [genderShoe, setGender] = useState('')
  const [sellerShoe, setSeller] = useState('')
  const [priceError, setPriceError] = useState(null)
  const [formError, setFormError] = useState(null)

  
  formData.color = JSON.stringify(colorArr)
  formData.condition = condition
  formData.size = sizeShoe
  formData.gender = genderShoe
  formData.sellerId = sellerShoe

  //2. Component Functions
  const handleSubmit = (e) => {
    e.preventDefault()
    if(formData.price == ''){
      setPriceError({ content: 'Please enter a buy now price', pointing: 'below' })
      setFormError(true)
    }
    else {
      console.log(formData)
      dispatch(addProductThunk(formData)).then((id) => {navigate(`/product/${id}`)})
    }
}

  const handleChange = (e) => {
    // console.log(e.target.name, formData.name)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleFileChange = (e) => {
    // console.log({[e.target.name]: e.target.files[0]})
    e.target.files[0].arrayBuffer().then(bytes => {
      const finalFormData = {...formData, [e.target.name]: Base64.encode(bytes)}
      setFormData(finalFormData)
    })
    .then(() => {
      console.log("Image Added: ", formData)
    })
  }
  
  const addColor = (e)=> {
    e.preventDefault()
    setColorArr([...colorArr, color])
    setColor('')
  }

  const removeCol = (color) => {
    const newArr = colorArr.filter( element => element !== color)
    setColorArr(newArr)
  }

  const friendOptions = [
    {
      key: 'Peter Farway',
      text: 'Peter Farway',
      value: 2,
      image: { avatar: true, src: '/selleravatars/christian.jpeg' },
    },
    {
      key: 'Pixie Smith',
      text: 'Pixie Smith',
      value: 3,
      image: { avatar: true, src: '/selleravatars/stevie.jpeg' },
    },
    {
      key: 'Seth Deth',
      text: 'Seth Deth',
      value: 4,
      image: { avatar: true, src: '/selleravatars/justen.jpeg' },
    },
    {
      key: 'Paul Naul',
      text: 'Paul Naul',
      value: 5,
      image: { avatar: true, src: '/selleravatars/matt.jpeg' },
    }
  ]

  return (
    <>
    <Container>
      <Link to="/admin">go back to admin</Link>
    </Container>
    <br/>

    <Container>
      <Form onSubmit={handleSubmit} error={formError}>
       {/* Seller Input Field - and dropdown View */}
       <Form.Field>
        <label htmlFor='sellerId'>Seller ID: </label>
        {/* <input id='sellerId' name='sellerId' type='number' onChange={handleChange} /> */}
        <Dropdown
          id='sellerId'
          name='sellerId'
          placeholder='Select seller'
          fluid
          selection
          options={friendOptions}
          onChange= {(e, data) => {setSeller(data.value)}}
          value = {options.value}
        />

       </Form.Field>

       {/* Shoe Group of Fields */}
       <Form.Field>
        <label htmlFor='name'>Product Name: </label>
        <input id='name' name='name' type='text' onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
        <label htmlFor='brand'>Brand: </label>
        <input id='brand' name='brand' type='text' onChange={handleChange} />
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
        <label htmlFor='details'>Details: </label>
        <input id='details' name='details' type='text' onChange={handleChange} />
        </Form.Field>

        {/* Drop Down function here */}
        <Form.Field>
        <label htmlFor='gender'>Category: </label>
        <Dropdown
          id = 'gender'
          placeholder='Select Category'
          fluid
          search
          selection
          options={[
            { text: 'Male', value: 'Male' },
            { text: 'Female' , value: 'Female'},
            { text: 'Youth' , value: 'Youth'},]}
          onChange= {(e, data) => {setGender(data.value)}}
          value = {options.value}
        />
        </Form.Field>
        
        {/* Drop Down function Needed here */}
        <Form.Field>
        <label htmlFor='size'>Size: </label>
        <Dropdown
          id = 'size'
          placeholder='Select Size'
          fluid
          search
          selection
          options={[
            { text: '1US', value: 1 },
            { text: '1.5US', value: 1.5 },
            { text: '2US', value: 2 },
            { text: '2.5US', value: 2.5 },
            { text: '3US', value: 3 },
            { text: '3.5US', value: 3.5 },
            { text: '4US', value: 4 },
            { text: '4.5US', value: 4.5 },
            { text: '5US', value: 5 },
            { text: '5.5US', value: 5.5 },
            { text: '6US', value: 6 },
            { text: '6.5US', value: 6.5 },
            { text: '7US', value: 7 },
            { text: '7.5US', value: 7.5 },
            { text: '8US', value: 8 },
            { text: '8.5US', value: 8.5 },
            { text: '9US', value: 9 },
            { text: '9.5US', value: 9.5 },
            { text: '10US', value: 10 },
            { text: '10.5US', value: 10.5 },
            { text: '11US', value: 11 },
            { text: '11.5US', value: 11.5 },
            { text: '12US', value: 12 },
            { text: '12.5US', value: 12.5 },
            { text: '13US', value: 13 },
            { text: '13.5US', value: 13.5 },
            { text: '14US', value: 14 },
            { text: '14.5US', value: 14.5 },
            { text: '15US', value: 15 },
            { text: '15.5US', value: 15.5 },
            { text: '16US', value: 16 },
            { text: '16.5US', value: 16.5 },
            { text: '17US', value: 17 },
            { text: '17.5US', value: 17.5 },
            { text: '18US', value: 18 },
            { text: '18.5US', value: 18.5 },
            { text: '19US', value: 19 },
            { text: '19.5US', value: 19.5 },
            { text: '20US', value: 20 }]}
          onChange= {(e, data) => {setSize(data.value)}}
          value = {options.value}
        />
        {/* <input id='size' name='size' type='number' onChange={handleChange} /> */}
        </Form.Field>

        {/* Drop Down function here */}
        <Form.Field>
        <label htmlFor='color'>Color: </label>
        <ColorSelector data = {setColor}  />
        <Button onClick = {addColor}>Add</Button>
        <Container>
        <Grid container columns={12} divided stackable>
        {colorArr.map((color, i) => { return <ColorLabel color={color} del={removeCol} key={`${color}${i}`}/>})}
        </Grid>
        </Container>
        </Form.Field>

        {/* Drop Down function here */}
        <Form.Field>
        <label htmlFor='condition'>Condition: </label>
        <Dropdown
          id = 'condition'
          placeholder='Select Condition'
          fluid
          search
          selection
          options={[
            { text: 'New', value: 'New' },
            { text: 'Used' , value: 'Used'}]}
          onChange= {(e, data) => {setCondition(data.value)}}
          value = {options.value}
        />
        {/* <input id='condition' name='condition' type='text' onChange={handleChange} /> */}
        </Form.Field>

        {/* <Form.Field>
        <label htmlFor='price'>Price: </label>
        <input id='price' name='price' type='number' onChange={handleChange} />
        </Form.Field> */}
        
        <Form.Input id='price' name='price' type='number' fluid label='Price:' placeholder='Price' onChange={handleChange} error={priceError}/>



       {/* Extra Checkbox Details of Fields */} 
        <Form.Field>
        <label htmlFor='authStatus'>Authenticated: </label>
        <input id='authStatus' name='authStatus' type='checkbox' value={true} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='hotPick'>Hot Pick: </label>
        <input id='hotPick' name='hotPick' type='checkbox' value={true} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='receipt'>Has Original Receipt: </label>
        <input id='receipt' name='receipt' type='checkbox' value="Yes" onChange={handleChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='box'>Box Not Included: </label>
        <input id='box' name='box' type='checkbox' value="No" onChange={handleChange} />
        </Form.Field>
        
        {/* Image uploading Fields */} 
        
        <Form.Field>
        <label htmlFor='addImg1'>Image 1: </label>
        <input type='file' id='addImg1' name='image1' onChange={handleFileChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='addImg2'>Image 2: </label>
        <input type='file' id='addImg2' name='image2' onChange={handleFileChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='addImg3'>Image 3: </label>
        <input type='file' id='addImg3' name='image3' onChange={handleFileChange} />
        </Form.Field>
        <Form.Field>
        <label htmlFor='addImg4'>Image 4: </label>
        <input type='file' id='addImg4' name='image4' onChange={handleFileChange} />
        </Form.Field>
        <Message
          error
          header='Action Forbidden'
          content='You can only add a product once a price has been set.'
        />
        <Button>Done!</Button>
      </Form>
      </Container>
    </>
  )
}

export default AddProduct