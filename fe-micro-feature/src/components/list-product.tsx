import React from "react";
import Card from "../elements/card";
import { Article } from "../types/article";
import Dummy from "../mocks/article.json"

const ListProduct: React.FC = () => {
  const [article, setArticle] = React.useState<Article[]>([])
  const [form, setForm] = React.useState<Article>({
    title: "",
    content: ""
  })

  React.useEffect(() => {
    setArticle(Dummy)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
    e.preventDefault()

    setArticle([...article, form])

    setForm({
      title: "",
      content: ""
    })
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="pe-4 text-lg font-bold" htmlFor="title">Title</label>
            <input 
              name="title"
              className="border border-black"
              id="title"
              onChange={handleChange}
              value={form.title}
            />
          </div>

          <div>
            <label className="pe-4 text-lg font-bold" htmlFor="content">Content</label>
            <input 
              name="content"
              className="border border-black"
              id="content"
              onChange={handleChange}
              value={form.content}
            />
          </div>

          <button type="submit">Add Card</button>
        </form>
      </div>
    
      <div className="flex gap-2 mt-4">
        { article.map((data: Article, index: number) => {
          return (
            <div key={index}>
              <Card content={data.content} title={data.title}/>
            </div>
          )
        })}
      </div>
      </>
  )
}

export default ListProduct;