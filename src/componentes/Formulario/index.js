import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {

    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSubemter = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSubemter}>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o seu Nome'
                    value={nome}
                    aoAlterar={valor => setNome(valor)}
                    

                />

                <CampoTexto
                    obrigatorio={true}
                    label='Cargo'
                    placeholder='Digite o seu Cargo'
                    value={cargo}
                    aoAlterar={valor => setCargo(valor)}

                />

                <CampoTexto
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    value={imagem}
                    aoAlterar={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label='Time'
                    itens={props.times}
                    value={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>Criar Card</Botao>
            </form>
        </section>
    )

}

export default Formulario