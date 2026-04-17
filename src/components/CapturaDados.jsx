import { useState } from 'react'

export default function CapturaDados({onCalculo}) {

    const [valorInicial, setValorInicial] = useState('')
    const [aporteMensal, setAporteMensal] = useState('')
    const [juros, setJuros] = useState('')
    const [periodo, setPeriodo] = useState('')
    

    const handleSubmit = (e) => {
        e.preventDefault()
        onCalculo({
            valorInicial,
            aporteMensal,
            juros,
            periodo
        })
    }

    const handleLimpar = (e) => {
        e.preventDefault()
        setValorInicial('')
        setAporteMensal('')
        setJuros('')
        setPeriodo('')
    }

    return (

    <main>
        <h3>Simulador de Investimentos</h3>
        <p>Descubra quanto seu dinheiro pode render com juros compostos</p>
        <form>
            <div>
                <label 
                    htmlFor="valorInicial"
                    className="form-label">
                        Valor Inicial (R$)
                </label>
                <input 
                    type='number'
                    id='valorInicial'
                    placeholder='R$ 99,99'
                    value={valorInicial}
                    min={0}
                    onChange={(e) => setValorInicial(e.target.value)}
                    />
            </div>
            <div>
                <label 
                    htmlFor="aporteMensal"
                    className='form-label'>
                        Aporte Mensal (R$)
                </label>
                <input 
                    type='number'
                    id='aporteMensal'
                    placeholder='R$ 9,99'
                    value={aporteMensal}
                     min={0}
                    onChange={(e) => setAporteMensal(e.target.value)}
                    />
            </div>
            <div>
                <label 
                    htmlFor="juros"
                    className="form-label">
                        Taxa de Juros (% ao mes)
                </label>
                <input 
                    type='number'
                    id='juros'
                    placeholder='0,8'
                    value={juros}
                    min={0}
                    step={0.01}
                    onChange={(e) => setJuros(e.target.value)}
                    />
            </div>
            <div>
                <label 
                    htmlFor="periodo"
                    className="form-label">
                        Período (meses)
                </label>
                <input 
                    type='number'
                    id='periodo'
                    placeholder='12'
                    value={periodo}
                    min={0}
                    step={1}
                    onChange={(e) => setPeriodo(e.target.value)}
                    />
            </div>
            <div className='d-flex gap-2'>
                <button 
                    type='submit'
                    className='btn btn-primary'
                    onClick={handleSubmit}>
                        Calcular
                </button>
                <button 
                    className='btn btn-secondary'
                    onClick={handleLimpar}>
                        Limpar
                </button>
            </div>
        </form>
    </main>

    )
}
