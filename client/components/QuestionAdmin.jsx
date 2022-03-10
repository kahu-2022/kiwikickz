import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllQuestionsThunk, updateQuestionThunk, deleteQuestionThunk } from '../actions/questions'
import { getAllProductsThunk } from '../actions/products'
import {
	Button,
	Container,
	Form,
	Input,
	Dropdown,
	TextArea,
	Header,
	Grid,
	Divider,
  Modal,
  Image,
  Embed,
} from "semantic-ui-react";


function QuestionAdmin() {
  
  const dispatch = useDispatch()
  const allQuestions = useSelector(globalState => globalState.allQuestions)
  const allProducts = useSelector(globalState => globalState.allProducts)
  
  const unansweredQuestions = allQuestions.filter((question) => question.status == 'unanswered' )
  const answeredQuestions = allQuestions.filter((question) => question.status == 'answered' )

  const [open, setOpen] = React.useState(false)


  useEffect(() => {
    dispatch(getAllQuestionsThunk())
    dispatch(getAllProductsThunk())
  }, [])

  const defaultState = {
		answer: "",
	};

	const [answer, setAnswer] = useState(defaultState);

	const handleInput = (e) => {
		if (e.key === "Enter") {
			handleSubmit(e);
		} else {
			setAnswer({
				answer: e.target.value,
				status: "answered",
			});
		}
	};

	const handleSubmit = (id, question, productId, createdAt, e) => {
		e.preventDefault();
		const newQuestion = {
			...answer,
			answer: answer.answer,
			id: id,
			question: question,
			productId: productId,
			createdAt: createdAt,
		};
		dispatch(updateQuestionThunk(newQuestion));
    setAnswer(defaultState);
	};

  const handleDelete = (e, id) => {
		e.preventDefault();
			let text = "Are you sure you want to delete this question?";
			if (confirm(text) == true) {
			dispatch(deleteQuestionThunk({"id": id}))
			.then((confirmationString)=> {
		})
			} else {
				console.log("Question still there.");
			}
	}

  const returnURLId = (id) => {
    const productId = (allProducts ? allProducts.find(product => product.id == id) : "loading")
    return productId ? productId.id : "loading"
  }

  const returnProdName = (id) => {
    const productName = (allProducts ? allProducts.find(product => product.id == id) : "loading")
    return productName ? productName.name : "loading"
  }

	return (
		<>
			<Container>
				<Link to='/admin'>back to admin </Link>
			</Container>

			<Container className='question-box'>
				<h2>Unanswered Questions</h2>
				<br />
				<ul className="no_bullets">
					{unansweredQuestions.map((ele) => (  
            <div key = {ele.id}>
							<li as='h5'>
              <Header>
								Q: {ele.question} <span className='notbold'>({ele.createdAt.slice(8, 10)}.{ele.createdAt.slice(5, 7)}.{ele.createdAt.slice(2, 4)} 🕒 {ele.createdAt.slice(11, 16)}</span> ) <a href={`/product/${returnURLId(ele.productId)}`} target="_blank">{returnProdName(ele.productId)}</a>
              </Header>
							<Form
								type='submit'
								onSubmit={(e) =>
									handleSubmit(
										ele.id,
										ele.question,
										ele.productId,
										ele.createdAt,
										e
									)
								}
							>
								<Form.Field>
									<TextArea
										type='textarea'
										id='answer'
										value={ele.answer.answer}
										placeholder='enter your answer'
										onChange={(e) => handleInput(e)}
									/>
								</Form.Field>
								<Button onClick={(e) => handleSubmit}>submit</Button>
                <Button onClick={(e) => {handleDelete(e, ele.id)}}>delete</Button>
                <br/>
                <br/>
							</Form>
							</li>
              </div>
					))}
				</ul>

				<h2>Answered Questions</h2>
        <br/>

				<ul className="no_bullets">
					{answeredQuestions.map((ele) => (
						<li key={ele.name}>
							<Header as='h5' >
								{" "}
								Q: {ele.question} <span className='notbold'>({ele.createdAt.slice(8, 10)}.{ele.createdAt.slice(5, 7)}.{ele.createdAt.slice(2, 4)} 🕒 {ele.createdAt.slice(11, 16)}</span> ) <a href={`/product/${returnURLId(ele.productId)}`} target="_blank">{returnProdName(ele.productId)}</a>
							</Header>
							<p>A : {ele.answer} <span className='notbold'>({ele.createdAt.slice(8, 10)}.{ele.createdAt.slice(5, 7)}.{ele.createdAt.slice(2, 4)} 🕒 {ele.createdAt.slice(11, 16)}</span> ) </p>
              <br />						
            </li>
					))}
				</ul>
			</Container>
		</>
	);
}
export default QuestionAdmin
