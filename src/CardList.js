import React from 'react'
import Card from './Card'

class CardList extends React.Component{
	render(){

		const {robots} = this.props

		const cardComponent = robots.map((user, i) => {
			return (<Card 
								key={robots[i].id}  
								id={robots[i].id} n
								name={robots[i].name} 
								email={robots[i].email}
								/>)
		})

		return(
			<div>
				{cardComponent}
			</div>
		)
	}
}

 
export default CardList