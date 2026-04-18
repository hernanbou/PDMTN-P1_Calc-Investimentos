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

    <main className='card bg-black text-light border-secondary shadow-sm mb-4'>
        <section className='card-body p-4'>
            <header className='mb-4'>
                <h3 className='mb-2'>Simulador de Investimentos</h3>
                <p className='text-secondary mb-0'>Descubra quanto seu dinheiro pode render com juros compostos</p>
            </header>
            <form onSubmit={handleSubmit}>
                <div className='row g-3'>
                    <div className='col-12 col-lg-6'>
                        <label 
                            htmlFor="valorInicial"
                            className="form-label">
                                Valor Inicial (R$)
                        </label>
                        <input 
                            className='form-control bg-dark text-light border-secondary'
                            type='number'
                            id='valorInicial'
                            placeholder='R$ 99,99'
                            value={valorInicial}
                            min={0}
                            onChange={(e) => setValorInicial(e.target.value)}
                            />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <label 
                            htmlFor="aporteMensal"
                            className='form-label'>
                                Aporte Mensal (R$)
                        </label>
                        <input 
                            className='form-control bg-dark text-light border-secondary'
                            type='number'
                            id='aporteMensal'
                            placeholder='R$ 9,99'
                            value={aporteMensal}
                            min={0}
                            onChange={(e) => setAporteMensal(e.target.value)}
                            />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <label 
                            htmlFor="juros"
                            className="form-label">
                                Taxa de Juros (% ao mes)
                        </label>
                        <input 
                            className='form-control bg-dark text-light border-secondary'
                            type='number'
                            id='juros'
                            placeholder='0,8'
                            value={juros}
                            min={0}
                            step={0.01}
                            onChange={(e) => setJuros(e.target.value)}
                            />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <label 
                            htmlFor="periodo"
                            className="form-label">
                                Período (meses)
                        </label>
                        <input 
                            className='form-control bg-dark text-light border-secondary'
                            type='number'
                            id='periodo'
                            placeholder='12'
                            value={periodo}
                            min={0}
                            step={1}
                            onChange={(e) => setPeriodo(e.target.value)}
                            />
                    </div>
                    <div className='d-flex flex-column flex-lg-row mt-4 gap-2'>
                        <button 
                            type='submit'
                            className='btn btn-success w-100 fw-bold'
                            >
                                Calcular
                        </button>
                        <button 
                            className='btn btn-danger w-100'
                            onClick={handleLimpar}>
                                Limpar
                        </button>
                    </div>
                </div>
            </form>
        </section>
    </main>

    )
}
