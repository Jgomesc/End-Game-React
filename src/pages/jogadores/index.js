import './index.css'



export default function Index() {
    return (
        <main className='fundo'> 
            <h1 className='h1'>Adicionar Jogadores</h1>
            <div className='input'>
                
                <input type='text' placeholder="Nome do Jogador" className='style-input'/>
                <input type='text' placeholder="Nome do Time" className='style-input'/> 
                <input type='text' placeholder="Nº da Camisa" className='style-input'/>
            </div>

            <div className='button'>
                <button className='style-button'>Adicionar Jogador</button>
            </div>
        </main>
    )

}