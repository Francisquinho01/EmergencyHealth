import React from 'react';
import './Funcionalidades.css'; 

const Funcionalidades: React.FC = () => {
  return (
    <section className="funcionalidades">
      <div className="container">
        <h2>Informações Disponibilizada (Apenas Hospitais Credenciados)</h2>
        <ul className="funcionalidades-lista">
          <li>Nome completo</li>
          <li>Data de nascimento</li>
          <li>CPF</li>
          <li>Endereço completo</li>
          <li>Histórico médico</li>
          <li>Alergias conhecidas</li>
          <li>Medicações atuais</li>
          <li>Histórico de cirurgias</li>
          <li>Informações de contato de emergência</li>
          <li>Plano de saúde</li>
          <li>Histórico de internações</li>
          <li>Informações sobre tratamentos em andamento</li>
         
        </ul>
      </div>
    </section>
  );
};

export default Funcionalidades;