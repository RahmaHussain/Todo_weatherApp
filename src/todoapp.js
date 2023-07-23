import React, {useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TodoApp(){
	const [userInput, setuserInput] = useState("")
	const [todolist, settodolist] = useState([])

	// Add item if user input is not empty
	function addTodo(event) {
		if (event.key === "Enter" && userInput.trim() !== "") {

			// Update list
			const list = [...todolist];
			list.push(userInput);
			// reset state
			settodolist(list)
			setuserInput("")
		}
	}

	// // Function to delete item from list using id to delete
	function deleteItem(key) {
		const list = [...todolist];

		// Filter values and leave value which we need to delete
		const updateList = list.filter((item, index) => index !== key);

		// Update list in state
		settodolist(updateList)
	}

	// function editItem(index){
	// 	const todos = [...this.state.list];
	// 	const editedTodo = prompt('Edit the todo:');
	// 	if (editedTodo !== null && editedTodo.trim() !== '') {
	// 		let updatedTodos = [...todos]
	// 		updatedTodos[index].value= editedTodo
	// 		this.setState({
	// 			list: updatedTodos,
	// 		});
	// 	}
	// }


	return <Container>
	<Row
		style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			fontSize: "2rem",
			fontWeight: "bold",
		}}
	>
		To Do App
	</Row>

	<hr />

	<Row>
		<Col md={{ span: 5, offset: 4 }}>
			<ul className="todolistcontainer">
				{/* map over and print items */}
				{todolist.map((todo, index) => {
					return (
						<div className="listitems" key={index}>
							<li style={{marginRight: "20px"}}>
								{todo}
							</li>
							<button onClick={() => deleteItem(index)}>
								-
							</button>
							
				
						</div>
					);
				})}
				</ul>
		</Col>
	</Row>

	<Row>
		<Col md={{ span: 5, offset: 4 }}>
			<h4 style={{ textAlign: "center", marginTop: "20px" }}>New To Do</h4>
			<input
				style={{ width: "100%" }}
				placeholder=""
				value={userInput}
				onChange={(item) => setuserInput(item.target.value)}
				onKeyPress={(event) => addTodo(event)}
			/>
		</Col>
	</Row>
</Container>
}

export default TodoApp
