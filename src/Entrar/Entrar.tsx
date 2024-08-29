
import React, { useState } from 'react';
import './Entrar.css';
import { Fade } from 'react-awesome-reveal';
import { verificarUsuario } from '../ServidorFront/ServidorFront';
import { useNavigate } from 'react-router-dom';

const Entrar: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    senha: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let emailError = '';
    let senhaError = '';

    if (!email) {
      emailError = 'O email é obrigatório.';
    }

    if (!senha) {
      senhaError = 'A senha é obrigatória.';
    }

    if (emailError || senhaError) {
      setErrors({ email: emailError, senha: senhaError });
      return;
    }

    const usuario = verificarUsuario(email, senha);
    if (usuario) {
      console.log('Usuário autenticado com sucesso:', usuario);
      navigate('/usera'); // Redireciona para a tela UserA
    } else {
      setErrors({ email: '', senha: 'Credenciais inválidas' });
    }
  };

  return (
    <div className="entrar-container">
      <Fade>
        <h2>Entrar</h2>
      </Fade>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">Entrar</button>
      </form>
    </div>
  );
};

export default Entrar;
