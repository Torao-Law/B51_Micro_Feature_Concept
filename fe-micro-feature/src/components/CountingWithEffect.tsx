import React from 'react'

export default function CountingWithEffect() {
  // const [count, setCount] = React.useState<number>(0)

  // function setTime() : void {
  //   setCount(count + 1)
  // }

  // setTimeout(setTime, 1000)

  // v1
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // })

  // v2
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // }, [])

  const [count, setCount] = React.useState<number>(0);
  const [calculation, setCalculation] = React.useState<number>(0);

  
  React.useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    // <div>{count}</div>
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  )
}
