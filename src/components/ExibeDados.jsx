import React, { Component } from 'react'

export default class ExibeDados extends Component {
  render() {

    const {onDados, onHistory} = this.props

    return (
        <>
            <main className='card bg-black text-light border-secondary shadow-sm mb-4'>
                <section className='card-body p-4'>
                    <h3 className='mb-4'>Simulação</h3>

                {onDados ? (
                    <section>
                            <div className='bg-dark border-secondary rounded p-3 mb-4'>
                                <p className='text-secondary mb-2'>Valor Final Acumulado:</p>
                                <p className='display-6 fw-bold text-success mb-0'>R$ {onDados.total}</p>
                            </div>
                            <div className='row g-3'>
                                <div className='col-12 col-lg-6'>
                                    <div className='bg-dark border-secondary rounded p-3 h-100'>
                                        <p className='text-secondary mb-1'>Total Investido:</p>
                                        <p className='fs-5 fw-semibold mb-0'>{onDados.totalInvestido}</p>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6'>           
                                    <div className='bg-dark border-secondary rounded p-3 h-100'>
                                        <p className='text-secondary mb-1'>Juros Acumulados:</p>
                                        <p className='fs-5 fw-semibold mb-0'>{onDados.juros}</p>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6'>            
                                    <div className='bg-dark border-secondary rounded p-3 h-100'>
                                        <p className='text-secondary mb-1'>Numero de Aportes:</p>
                                        <p className='fs-5 fw-semibold mb-0'>{onDados.aportes}</p>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6'>           
                                    <div className='bg-dark border-secondary rounded p-3 h-100'>
                                        <p className='text-secondary mb-1 '>Rentabilidade:</p>
                                        <p className='fs-5 fw-semibold text-success mb-0'>{onDados.rentabilidade}%</p>
                                    </div>
                                </div>
                            </div>            
                    </section>
                    ):(
                    <p className='alert alert-secondary mb-0'>Nenhuma simulação realizada...</p>
                )}
                </section>
            </main>
            <section className='card bg-black text-light border-secondary shadow-sm'>
                <div className='card-body p-4'>
                    <div className='d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-2 mb-3'>
                        <h3 className='mb-0'>Histórico de Simulações</h3>
                        <p className='text-secondary small'>Simulações:</p>
                    </div>

                    {onHistory.length === 0 ? (
                        <p className='alert alert-secondary mb-0'>Não existe historico de Simulações</p>
                    ):(
                        <div className='table-responsivel'>
                            <table className='table table-dark table-striped table-hover align-middle mb-0'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Data</th>
                                        <th scope='col' className='text-end'>Valor Final</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {onHistory.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.data}</td>
                                            <td className='text-success fw-semibold'>R$ {item.valorFinal}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
  }
}