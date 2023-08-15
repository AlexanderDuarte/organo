import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {

const [valor, setValor] = useState('')

const aoDigitado = (evento) => {
    props.aoAlterar(evento.target.value)
    console.log(valor);

}

    

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.value} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto