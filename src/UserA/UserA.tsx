import React, { useState, useEffect } from 'react';
import './UserA.css';

const UserA: React.FC = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [historicoMedico, setHistoricoMedico] = useState('');
  const [alergias, setAlergias] = useState('');
  const [medicacoes, setMedicacoes] = useState('');
  const [cirurgias, setCirurgias] = useState('');
  const [contatoEmergencia, setContatoEmergencia] = useState('');
  const [planoSaude, setPlanoSaude] = useState('');
  const [internacoes, setInternacoes] = useState('');
  const [tratamentos, setTratamentos] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    // Simula a recuperação dos dados do usuário
    const fetchUserData = () => {
      const savedData = JSON.parse(localStorage.getItem('userData') || '{}');

      setNome(savedData.nome || '');
      setDataNascimento(savedData.dataNascimento || '');
      setCpf(savedData.cpf || '');
      setEndereco(savedData.endereco || '');
      setHistoricoMedico(savedData.historicoMedico || '');
      setAlergias(savedData.alergias || '');
      setMedicacoes(savedData.medicacoes || '');
      setCirurgias(savedData.cirurgias || '');
      setContatoEmergencia(savedData.contatoEmergencia || '');
      setPlanoSaude(savedData.planoSaude || '');
      setInternacoes(savedData.internacoes || '');
      setTratamentos(savedData.tratamentos || '');
    };

    fetchUserData();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      setUploadError(null);
    } else {
      setUploadError('Por favor, selecione um arquivo PDF.');
    }
  };

  const handleUpload = () => {
    if (pdfFile) {
      // Simula o carregamento do arquivo PDF
      setUploadSuccess('Arquivo PDF carregado com sucesso!');
      setUploadError(null);
    } else {
      setUploadError('Nenhum arquivo PDF selecionado.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      nome,
      dataNascimento,
      cpf,
      endereco,
      historicoMedico,
      alergias,
      medicacoes,
      cirurgias,
      contatoEmergencia,
      planoSaude,
      internacoes,
      tratamentos,
    };

    // Simula o salvamento dos dados
    localStorage.setItem('userData', JSON.stringify(userData));
    setFormSuccess('Dados salvos com sucesso!');
    setFormError(null);
  };

  return (
    <div className="usera-container">
      <form className="info-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome completo</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dataNascimento">Data de nascimento</label>
          <input
            type="date"
            id="dataNascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endereco">Endereço completo</label>
          <input
            type="text"
            id="endereco"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="historicoMedico">Histórico médico</label>
          <textarea
            id="historicoMedico"
            value={historicoMedico}
            onChange={(e) => setHistoricoMedico(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="alergias">Alergias conhecidas</label>
          <textarea
            id="alergias"
            value={alergias}
            onChange={(e) => setAlergias(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="medicacoes">Medicações atuais</label>
          <textarea
            id="medicacoes"
            value={medicacoes}
            onChange={(e) => setMedicacoes(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cirurgias">Histórico de cirurgias</label>
          <textarea
            id="cirurgias"
            value={cirurgias}
            onChange={(e) => setCirurgias(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contatoEmergencia">Informações de contato de emergência</label>
          <textarea
            id="contatoEmergencia"
            value={contatoEmergencia}
            onChange={(e) => setContatoEmergencia(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="planoSaude">Plano de saúde</label>
          <input
            type="text"
            id="planoSaude"
            value={planoSaude}
            onChange={(e) => setPlanoSaude(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="internacoes">Histórico de internações</label>
          <textarea
            id="internacoes"
            value={internacoes}
            onChange={(e) => setInternacoes(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tratamentos">Informações sobre tratamentos em andamento</label>
          <textarea
            id="tratamentos"
            value={tratamentos}
            onChange={(e) => setTratamentos(e.target.value)}
          />
        </div>

        <div className="upload-section">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
          />
          <button type="button" onClick={handleUpload}>
            Carregar PDF
          </button>
          {uploadSuccess && <p className="success">{uploadSuccess}</p>}
          {uploadError && <p className="error">{uploadError}</p>}
        </div>

        <button type="submit">Salvar Dados</button>
        {formSuccess && <p className="success">{formSuccess}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default UserA;
