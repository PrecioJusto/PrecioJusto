const responses = {

  '-1': 'Error desconocido',
  '-2': 'Error de request',
  '-3': 'Error no autorizado',
  '-4': 'Puerto erroeno',

  /// ///////////////////////////
  /// //    API PRODUCTS    /////
  /// ///////////////////////////

  0: 'Error no se ha encontrado',
  1: 'Error no se ha encontrado la marca',
  2: 'Error no se ha encontrado la categoria',
  3: 'Error no se ha encontrado el pack',
  4: 'Error no se ha encontrado la receta',
  5: 'Error no se ha encontrado el supermercado',
  6: 'Error no se ha encontrado el container',
  7: 'Error no se ha encontrado el producto del supermercado',
  8: 'Error no se ha encontrado el producto',
  9: 'Error no se ha encontrado el producto de tipo "foodproduct"',
  10: 'Error no se ha encontrado la oferta',
  11: 'Error no se ha encontrado la oferta por porcentage',
  12: 'Error no se ha encontrado la oferta por unidad',
  13: 'Error no se ha encontrado la oferta por porcentage a la unidad',
  14: 'Error no se ha encontrado la oferta sin especificar',
  15: 'Error no se ha encontrado la oferta de precio plano',

  100: 'Error ya existe',
  101: 'Error ya existe la marca',
  102: 'Error ya existe la categoria',
  103: 'Error ya existe el pack',
  104: 'Error ya existe la receta',
  105: 'Error ya existe el supermercado',
  106: 'Error ya existe el container',
  107: 'Error ya existe el producto del supermercado',
  108: 'Error ya existe el producto',
  109: 'Error ya existe el producto de tipo "foodproduct"',
  110: 'Error ya existe la oferta',
  111: 'Error ya existe la oferta por porcentage',
  112: 'Error ya existe la oferta por unidad',
  113: 'Error ya existe la oferta por porcentage a la unidad',
  114: 'Error ya existe la oferta sin especificar',
  115: 'Error ya existe la oferta de precio plano',

  200: 'Error no tiene contenido',
  201: 'Error la marca no tiene contenido',
  202: 'Error la categoria no tiene contenido',
  203: 'Error la oferta no tiene contenido',
  204: 'Error el pack no tiene contenido',
  205: 'Error la receta no tiene contenido',
  206: 'Error el supermercado no tiene contenido',
  207: 'Error el container no tiene contenido',
  208: 'Error el producto de un supermercado no tiene contenido',
  209: 'Error el producto no tiene contenido',
  210: 'Error el producto de tipo "foodproduct" no tiene contenido',
  211: 'Error la oferta por porcentage no tiene contenido',
  212: 'Error la oferta por unidad no tiene contenido',
  213: 'Error la oferta por porcentage a la unidad no tiene contenido',
  214: 'Error la oferta sin especificar no tiene contenido',
  215: 'Error la oferta de precio plano no tiene contenido',

  /// ////////////////////////////
  /// ///  API APPLICATION  //////
  /// ////////////////////////////

  50: 'Error el usuario no se ha encontrado',
  51: 'Error la imagen no se ha encontrado',
  52: 'Error el carrito no se ha encontrado',
  53: 'Error el producto del carrito no se ha encontrado',

  150: 'Error el usuario ya existe',
  151: 'Error la imagen ya existe',
  152: 'Error el carrito ya existe',
  153: 'Error el producto del carrito ya existe',

  250: 'Error el usuario no tiene contenido',
  251: 'Error la imagen no tiene contenido',
  252: 'Error el carrito no tiene contenido',
  253: 'Error el producto del carrito no tiene contenido',

  300: 'Error el email no es valido',
  301: 'Error la contraseña no es valida',
  302: 'Error de validación del email',
  303: 'Error el email introducido ya existe',
  304: 'Error de validación del usuario',
  305: 'Error de validación de la contraseña',
  306: 'Error la contraseña de confirmación no coincide',
  307: 'Error el numero de telefono no es valido',
  308: 'Error esta cuenta no es nativa, entra con Oauth',
  309: 'Error esta cuenta esta inactiva, crea una nueva',

  350: 'Error al logearse con google Oauth',
  351: 'Error al logearse con Twitter Oauth',
  352: 'Error al logearse con Facebook Oauth',
};

export default function getMessageFromCode(code) {
  return responses[code];
}
