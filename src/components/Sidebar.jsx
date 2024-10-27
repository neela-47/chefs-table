import Recipes from "./Recipes";


const Sidebar = ({wantToCook, handleRemoveRecipe, currentlyCooking, handleTotalTimeCalories, totalTime, totalCalories}) => {
    const {recipe_name, calories, preparing_time}= wantToCook;
    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-600">
            
            <div>
            <div className="overflow-x-auto">
            <h2 className="p-2 text-center font-bold">Want to Cook : {wantToCook.length}</h2>
  <table className="table">
 
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        wantToCook.map((recipes, index) => 
       
      <tr className="hover" key={index}>
      <th>{index+ 1}</th>
      <td>{recipes.recipe_name}</td>
      <td>{recipes.preparing_time}</td>
      <td>{recipes.calories}</td>
      <td><button onClick={() => {handleRemoveRecipe(recipes.recipe_id)
        handleTotalTimeCalories(recipes.preparing_time, recipes.calories)
       }} className="btn bg-green-500">Preparing</button></td>
    </tr>
   
    )}
    </tbody>
  </table>
</div>
            </div>
            <div>
            <div className="overflow-x-auto">
            <h2 className="p-2 text-center font-bold">Currently Cooking : {currentlyCooking.length}</h2>
  <table className="table">
 
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        currentlyCooking.map((recipes, index) => 
       
      <tr className="hover" key={index}>
      <th>{index+ 1}</th>
      <td>{recipes.recipe_name}</td>
      <td>{recipes.preparing_time}</td>
      <td>{recipes.calories}</td>
      </tr>)}
      <tr>
        <td></td>
        <td></td>
        <td>Total Time: {totalTime}</td>
        <td>Total calories : {totalCalories}</td>
      </tr>
    </tbody>
  </table>
</div></div>
        </div>
    );
};

export default Sidebar;