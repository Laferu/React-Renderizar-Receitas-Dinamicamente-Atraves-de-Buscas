import React, { Component } from 'react'
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchString: '',
      recipes: []
    }
  }

  componentDidMount(){
    this.setState({
      recipes: recipes.results
    })
  }

  search = event => {
    this.setState({
      searchString: event.target.value
    })
  }

  adicionar = () => {
    let condicao = false
    this.state.recipes.filter((recipe) => {
      if(recipe.title.toLowerCase().includes(this.state.searchString.toLowerCase())){
        condicao = true
      }
    })
    if(condicao === false){
      const newItem = {
        "title": this.state.searchString,
        "href": "http:\/\/allrecipes.com\/Recipe\/Golden-Wedding-Punch\/Detail.aspx",
        "ingredients": "lemon juice, water, sugar",
        "thumbnail": "http:\/\/img.recipepuppy.com\/20.jpg"
      }
      this.setState({
        recipes: [...this.state.recipes, newItem],
        searchString: ''
      })
    }
  }

  recipeItem = () => { return (
    this.state.recipes.filter((recipe) => {
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
    console.log(this.recipes)
    return (
      <div className="App">
        <Navbar
          search={this.search}
          add={this.adicionar}
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