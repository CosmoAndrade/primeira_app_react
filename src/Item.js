import "./styles.css";
import { useState } from "react";

function Item() {
  const [valor, setValor] = useState(0);

  function Adicionar() {
    setValor(valor + 1);
  }

  function Remover() {
    setValor(valor - 1);
  }

  return (
    <div>
      <button className="btn" onClick={Adicionar}>
        Adicionar
      </button>
      <button className="btn" onClick={Remover}>
        Remover
      </button>

      <p>{valor}</p>
    </div>
  );
}

export default Item;
