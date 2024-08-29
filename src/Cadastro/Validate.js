
export const validateNome = (nome) => {
    if (!nome) return "O nome é obrigatório.";
    if (nome.length < 2) return "O nome deve ter pelo menos 2 caracteres.";
    return "";
  };
  
  export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "O email é obrigatório.";
    if (!regex.test(email)) return "O email não é válido.";
    return "";
  };
  
  export const validateSenha = (senha) => {
    if (!senha) return "A senha é obrigatória.";
    if (senha.length < 6) return "A senha deve ter pelo menos 6 caracteres.";
    return "";
  };
  
  export const validateCPF = (cpf) => {
    const regex = /^\d{11}$/;
    if (!cpf) return "O CPF é obrigatório.";
    if (!regex.test(cpf)) return "O CPF deve ter 11 dígitos numéricos.";
    return "";
  };
  