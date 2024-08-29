
const usuarios = [];

export const adicionarUsuario = (usuario) => {
  usuarios.push(usuario);
};

export const verificarUsuario = (email, senha) => {
  return usuarios.find((user) => user.email === email && user.senha === senha);
};

export const getUsuarios = () => {
  return usuarios;
};
