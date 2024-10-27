
const Recipe = ({recipe, handleWantToCook}) => {
    const{recipe_image, recipe_id, recipe_name, short_description, ingredients,preparing_time, calories} = recipe
    return (
        
          <div  className="md:w-2/3 mb-5">
          <div> 
          <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="h-[250px] rounded-xl">
        <img className="p-3 h-full " src={recipe.recipe_image} />
     </figure>
      <div className="card-body">
    <h2 className="card-title">{recipe.recipe_name}</h2>
    <p>{recipe.short_description}</p>
    <ul>
      <span className="font-bold">Ingredients:</span>
      {
        ingredients.map((ingredient, idx)=><li className="list-disc" key={idx}> {ingredient}</li>)
      }
    </ul>
    <div className="flex justify-between">
    <p><i className="fa-solid fa-clock mr-2"></i>{preparing_time}</p>
      <p><i className="fa-solid fa-fire-flame-simple mr-2"></i>{calories}</p>
    </div>
    <button onClick={() => handleWantToCook(recipe)} className="btn bg-green-400">want to Cook</button>
    </div>
   
</div>
</div>
          </div>
        
    );
};

export default Recipe;