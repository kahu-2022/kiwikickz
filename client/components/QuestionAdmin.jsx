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
			console.log(confirmationString)
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
// console.log(productName ? productName.id : "loading")

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
						<>
              <br/>
							<li key = {ele.id} as='h5'>
              <Header key = {ele.id}>
								Q: {ele.question} <span className='notbold'>({ele.createdAt}</span> ) <a href={`/product/${returnURLId(ele.productId)}`} target="_blank">{returnProdName(ele.productId)}</a>
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
						</>
					))}
				</ul>

				<h2>Answered Questions</h2>
				<br />
				<ul>
					{answeredQuestions.map((ele) => (
						<>
							<Header as='h5' key={ele.id}>
								{" "}
								Q :{ele.question} ({ele.createdAt})
							</Header>
							<p>A : {ele.answer}</p>
						</>
					))}
				</ul>
			</Container>
		</>
	);
}
export default QuestionAdmin
