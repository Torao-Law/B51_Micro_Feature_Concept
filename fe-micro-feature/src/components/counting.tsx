import React, { useState } from "react";

type author = {
  name: string
  age: number
}

function Counting({ name, age }: author) {
  const [year, setYear] = useState<number>(2023)

  const increment = () : void => setYear(year + 1)

  return (
    <div>
      <h3>Pertambahan tahun di bumi bukan di isekai !</h3>
      <h6>{age}</h6>
      <h6>{name}</h6>

      <div>
        <p>{year}</p>
        <button onClick={increment}>Click here !</button>
      </div>
    </div>
  )
}


// const Counting: React.FC = (props: author) => {
//   const [year, setYear] = useState<number>(2023)

//   const increment = () : void => setYear(year + 1)

//   return (
//     <div>
//       <h3>Pertambahan tahun di bumi bukan di isekai !</h3>
//       <h6>{props.name}</h6>

//       <div>
//         <p>{year}</p>
//         <button onClick={increment}>Click here !</button>
//       </div>
//     </div>
//   )
// }

export default Counting;