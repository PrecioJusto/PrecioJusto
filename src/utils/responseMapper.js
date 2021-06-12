const responses = {
  300: 'Error el email no es valido',
  301: 'Error la contraseña no es valida',
  302: 'Error de validación del email',
  303: 'Error el email introducido ya existe',
  304: 'Error de validación del usuario',
  305: 'Error de validación de la contraseña',
  306: 'Error la contraseña de confirmación no coincide',
  307: 'Error el numero de telefono no es valido',
  308: 'Error no puede entrar usando este metodo',
  309: 'Error al logearse con google Oauth',
  310: 'Error al logearse con Twitter Oauth',
  311: 'Error al logearse con Facebook Oauth',
};

export default function getMessageFromCode(code) {
  return responses[code];
}
