import React from "react"
import moonIcon from "../images/icon-moon.svg"
import sunIcon from "../images/icon-sun.svg"
import crossIcon from "../images/icon-cross.svg"
import darkBg from "../images/bg-desktop-dark.jpg"
import ToDoItem from "./ToDoItem"

const ToDos = () => {
	return (
		<>
			<div className="header">
				<h1>TODOs</h1>
				<img src={moonIcon} alt="moon icon for dark mode" />
			</div>
			<div className="inputs">
				<div className="circle">
					<form>
						<input type="text" placeholder="Create a new todo" />
					</form>

					<div className="todos-container">
						<ToDoItem />
					</div>
					<div className="todo-footer">
						<p>0 items left</p>
						<div className="types">
							<p className="clear">All</p>
							<p className="clear">Active</p>
							<p className="clear">Completed</p>
							<p className="clear">
								Clear Completed
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ToDos
