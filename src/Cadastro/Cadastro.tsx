import React, { useState } from 'react';
import './Cadastro.css';
import { Fade } from 'react-awesome-reveal';
import { validateNome, validateEmail, validateSenha, validateCPF } from './Validate';
import { useNavigate } from 'react-router-dom';
import { adicionarUsuario } from '../ServidorFront/ServidorFront';



const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [errors, setErrors] = useState({
    nome: '',
    email: '',
    senha: '',
    cpf: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nomeError = validateNome(nome);
    const emailError = validateEmail(email);
    const senhaError = validateSenha(senha);
    const cpfError = validateCPF(cpf);

    if (nomeError || emailError || senhaError || cpfError) {
      setErrors({
        nome: nomeError,
        email: emailError,
        senha: senhaError,
        cpf: cpfError
      });
      return;
    }

    
    adicionarUsuario({ nome, email, senha, cpf });

    console.log('Cadastro enviado:', { nome, email, senha, cpf });

    navigate('/'); 
  };

  return (
    <div className="cadastro-container A">
      <Fade>
        <img src="/src/images/F.png" alt="" />
      </Fade>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            className="form-control"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          {errors.nome && <p className="error">{errors.nome}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            className="form-control"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {errors.senha && <p className="error">{errors.senha}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            className="form-control"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          {errors.cpf && <p className="error">{errors.cpf}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
