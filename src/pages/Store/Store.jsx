import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import UseData from '../../hooks/UseData'

const Store = () => {
  const meals = UseData()

  return (
    <div className='row g-5'>
      {meals?.map((meal) => (
        <Meal key={meal.idMeal} meal={meal}></Meal>
      ))}
    </div>
  )
}

function Meal({ meal }) {
  const navigate = useNavigate()
  return (
    <div className='col-md-4'>
      <h2>{meal.strMeal}</h2>
      <p>{meal.strArea}</p>

      <Button
        variant='primary'
        onClick={() => navigate(`/details/${meal.idMeal}`)}
      >
        details
      </Button>
    </div>
  )
}


export default Store
