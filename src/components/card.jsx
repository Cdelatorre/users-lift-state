import { useEffect, useState } from "react";
import Button from "./button";

const Card = ({ user, onDelete }) => {
  const colorsArr = ['red', 'yellow', 'blue'];
  const [color, setColor] = useState("white")

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorsArr.length);
    const randomColor = colorsArr[randomIndex]
    setColor(randomColor)
  }

  useEffect(() => {
    console.log('entro')

    return () => {
      console.log('card unmounted')
    }
  }, [])

  return (
    <div style={{ backgroundColor: color }} className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.email}</p>
        <Button type="danger" text="Eliminar" onClick={() => onDelete(user.id)} />
        <Button type="primary" text="Imprimir por consola" onClick={getRandomColor} />
      </div>
    </div>
  );
};
// no escribo onDelete(user.id) directamente, eso querria decir que EJECUTO esta función directamente, para salvaguardar este comportamiento, creo una función anonima que llama a esa función.
export default Card;
