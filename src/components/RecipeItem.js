import React, { Component } from 'react'

/*
FUNÇÃO AUXILIAR PARA COLOCAR A TAG <mark>,
POIS NÃO ESTAVA SENDO POSSÍVEL UTILIZAR A TAG <mark>
SEM QUE O REACT INTERPRETASSE APENAS COMO TEXTO
*/
function getMarkText(text, mark) {
  const parts = text.split(new RegExp(`(${mark})`, 'gi'))
  return parts.map((part, key) =>
    part.toLowerCase() === mark.toLowerCase() ? <mark key={key}>{part}</mark> : part)
}

class RecipeItem extends Component {
  render() {
    return (
      <div className="col-sm-3 mt-4">
        <div className="card">
          <img className="card-img-top img-fluid" src={this.props.recipe.thumbnail} alt={this.props.recipe.title} />
          <div className="card-body">
            <h5 className="card-title">{getMarkText(this.props.recipe.title, this.props.mark)}</h5>
              <p className="card-text">
                <strong>Ingredients: </strong>{getMarkText(this.props.recipe.ingredients, this.props.mark)}
              </p>
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeItem