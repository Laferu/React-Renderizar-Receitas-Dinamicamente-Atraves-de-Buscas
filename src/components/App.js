import React, { Component } from 'react'
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.recipes = recipes.results
    this.state = {
      searchString: ''
    }
  }

  search = event => {
    this.setState({
      searchString: event.target.value
    })
  }

  recipeItem = () => { return (
    this.recipes.filter((recipe) => {
      if(
        recipe.title.toLowerCase().includes(this.state.searchString.toLowerCase()) ||
        recipe.ingredients.toLowerCase().includes(this.state.searchString.toLowerCase())
      ){
        return true
      } return false
    })
    .map((recipe) => {
        return <RecipeItem
          key={recipe.title}
          recipe={recipe}
          mark={this.state.searchString}
        />
    })
  )}

  render() {
    return (
      <div className="App">
        <Navbar
          search={this.search}
        />
        <div className="container mt-10">
          <div className="row">
            {
              this.recipeItem()
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App