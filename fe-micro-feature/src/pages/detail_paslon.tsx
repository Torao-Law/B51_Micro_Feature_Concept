import React from "react";
import { useQuery } from "react-query";
import { API } from "../libs/api";

const DetailPaslon: React.FC = () => {
  // ################ V1
  // const [todos, setTodos] = React.useState<any>()

  // const getTodos = async () : Promise<void> => {
  //   try {
  //     const response = await API.get("/todos")

  //     setTodos(response.data.data)
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // React.useEffect(() => {
  //   getTodos()
  // }, [])


  
  // ################ V2
  const { data: todos, isLoading, error } = useQuery('todos', async () => {
    try {
      const response = await API.get("/todosAAAAAAAA")

      return response.data.data
    } catch (error) {
      throw error
    }
  })

  return (
    <>
      <h1>Ini dari detail paslon</h1>
      { isLoading ? (<h1>Is loadingg ..............</h1>) : ( todos?.map((item: any) => (
        <div key={item?.id}>
          <img src={item?.image} alt="img" />
          <p>{item?.title}</p>
          <p>{item?.description}</p>
        </div>
      )))}

      { error && (<h1>BANG ERROR</h1>)}
    </>
  )
}

export default DetailPaslon;