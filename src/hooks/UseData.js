import { useEffect, useState } from "react";

function UseData() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    .then((res) => res.json())
    .then((data) => setData(data.meals))
  },[])


  return data
}

export default UseData