
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from 'react-awesome-reveal';
import './Sobre.css'

function Sobree() {


  return (

    <div className="App">

      <div className='container A1'>
        <div className='row'>
          <div className='col-12 col-lg-6 col-md-6 B'>
            <img src="/src/images/c.png" alt="" />
          </div>
          <div className='col-12 col-lg-6 col-md-6 A'>
            <h3>O que o site é?</h3>
            <h5>EmergencyHealth surgiu da necessidade de termos informações precisas sobre os pacientes que chegam ao hospital. Muitas vezes, as informações fornecidas são vagas, o que pode levar a diagnósticos errados ou atrasos no tratamento, aumentando o risco de óbito. Nosso sistema coleta todos os dados importantes sobre o paciente, desde o histórico médico até alergias e medicações atuais. Quando um hospital credenciado precisar acessar essas informações, será possível realizar uma busca completa no banco de dados, garantindo um atendimento mais rápido e seguro para o paciente.
            </h5>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Sobree;
