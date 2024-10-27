
import { useState } from 'react'
import Header from './components/Header'
import Recipes from './components/Recipes'
import Sidebar from './components/Sidebar'


function App() {

  const [wantToCook, setWantToCook] = useState([])
  const [currentlyCooking, setCurrentlyCooking] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

  const handleWantToCook =(recipe) =>{
   const isExist = wantToCook.find(
    prevRecipe => prevRecipe.recipe_id === recipe.recipe_id
   )
   if(!isExist){
    const newWantToCook = [...wantToCook, recipe];
    setWantToCook(newWantToCook)
   }else{
    alert('Recipe exist already in the queue.')
   }
  }

  const handleRemoveRecipe = id =>{
    const deleteRecipe = wantToCook.find(recipe => recipe.recipe_id === id)
    const updatedRecipe = wantToCook.filter(recipe => recipe.recipe_id !== id)
    setWantToCook(updatedRecipe);
    setCurrentlyCooking([...currentlyCooking, deleteRecipe])
  }

  const handleTotalTimeCalories = (time, calorie) =>{
        setTotalTime(totalTime + time);
        setTotalCalories(totalCalories + calorie)
  }
 
  return (
    <>
      <Header></Header>
     <div className='max-w-7xl mx-auto lg:flex gap-5 justify-between'>
    
      <Recipes handleWantToCook={handleWantToCook}></Recipes>
      
      <Sidebar 
      totalTime={totalTime}
      totalCalories={totalCalories}
      handleTotalTimeCalories={handleTotalTimeCalories}
      handleRemoveRecipe={handleRemoveRecipe}
      currentlyCooking={currentlyCooking}
      wantToCook={wantToCook}></Sidebar>
     </div>
    </>
  )
}

export default App
