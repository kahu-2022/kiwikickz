import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllQuestionsThunk } from '../actions/questions'
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
} from "semantic-ui-react";


function QuestionAdmin() {
  
  const dispatch = useDispatch()
  const allQuestions = useSelector(globalState => globalState.allQuestions)
  const allProducts = useSelector(globalState => globalState.allProducts)
  
  const unansweredQuestions = allQuestions.filter((question) => question.status == 'unanswered' )
  const answeredQuestions = allQuestions.filter((question) => question.status == 'answered' )

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

	return (
		<>
			<Container>
				<Link to='/admin'>go back to admin</Link>
			</Container>
			<Container className='question-box'>
				<h2>Unanswered Questions</h2>
				<br />
				<ul>
					{unansweredQuestions.map((ele) => (
						<>
							{/* <li key = {ele.id}> */}

							<Header as='h5'>
								Question: {ele.question} ({ele.createdAt})
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
							</Form>
							{/* </li> */}
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
