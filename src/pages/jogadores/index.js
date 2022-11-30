import './index.css'
import { useState } from 'react'


export default function Index() {
    const [nome, setNome] = useState('');
    const [time, setTime] = useState('')
    const [numero, setNumero] = useState('')
    const [exibir, setExibir] = useState('')

    async function addJogador() {

        const resp = await axios.post('http://localhost:5000/jogadores', 
        {
            nome: nome,
            time: time,
            numero: numero
        })

        setExibir(resp.data)
    }

    return (
        <main className='fundo'> 
            <h1 className='h1'>Adicionar Jogadores</h1>
            <div className='input'>

                <input type='text' placeholder="Nome do Jogador" className='style-input' value={nome} onChange={e => setNome(e.target.value)}/>

                <input type='text' placeholder="Nome do Time" className='style-input' value={time} onChange={e => setTime(e.target.value)}/> 

                <input type='text' placeholder="Nº da Camisa" className='style-input' value={numero} onChange={e => setNumero(Number(e.target.value))}/>

            </div>

            <div className='button'>
                <button className='style-button' onClick={addJogador}>Adicionar Jogador</button>
            </div>

            <div className='button'>
                Infos: {exibir}
            </div>
        </main>
    )

}