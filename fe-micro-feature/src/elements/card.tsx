import { Article } from "../types/article";

function Card({ title, content }: Article) {
  return (
    <div className="rounded-lg h-72 w-56 border-2 border-red-500">
      <p>{title}</p>
      <p>{content}</p>
    </div>
  )
};

export default Card;