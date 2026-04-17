import React, { Component } from 'react'

export default class ExibeDados extends Component {
  render() {

    const {onDados} = this.props

    return (
      <main>
        <h3>Simulação</h3>

        {onDados ? (
            <section>
                <div>
                    <p>Valor Final Acumulado:</p>
                    <p>R$ {onDados.total}</p>
                </div>
                <div>
                    <div>
                        <p>Total Investido:</p>
                        <p>{onDados.totalInvestido}</p>
                    </div>            
                    <div>
                        <p>Juros Acumulados:</p>
                        <p>{onDados.juros}</p>
                    </div>            
                    <div>
                        <p>Numero de Aportes:</p>
                        <p>{onDados.aportes}</p>
                    </div>            
                    <div>
                        <p>Rentabilidade:</p>
                        <p>{onDados.rentabilidade}</p>
                    </div>            
                </div>
            </section>
        ):(
            <p>Nenhuma simulação realizada...</p>
        )}
        <hr />
        <h3>Histórico de Simulações</h3>

        <ul>
            <li></li>
        </ul>
      </main>
    )
  }
}