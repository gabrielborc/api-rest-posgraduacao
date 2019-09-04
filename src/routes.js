const Router = require('express');

//Controllers
const UsuarioController = require('./app/controllers/UsuarioController')
const FilialController = require('./app/controllers/FilialController');
const CargoController = require('./app/controllers/CargoController');
const FuncionarioController = require('./app/controllers/FuncionarioController');
const FuncionarioEnderecoController = require('./app/controllers/FuncionarioEnderecoController');
const FuncionarioTelefoneController = require('./app/controllers/FuncionarioTelefoneController');
const ClienteController = require('./app/controllers/ClienteController');
const ClienteEnderecoController = require('./app/controllers/ClienteEnderecoController');
const ClienteTelefoneController = require('./app/controllers/ClienteTelefoneController');
const FabricanteController = require('./app/controllers/FabricanteController');
const ModeloController = require('./app/controllers/ModeloController');
const ClasseController = require('./app/controllers/ClasseController');
const TanqueController = require('./app/controllers/TanqueController');
const CarroController = require('./app/controllers/CarroController');
const TabelaPrecoController = require('./app/controllers/TabelaPrecoController');
const AluguelController = require('./app/controllers/AluguelController');
const AluguelRetiradaController = require('./app/controllers/AluguelRetiradaController');
const AluguelDevolucaoController = require('./app/controllers/AluguelDevolucaoController');

const routes = new Router();

routes.get('/usuarios', UsuarioController.findAll.bind(UsuarioController));
routes.get('/usuarios/:id', UsuarioController.find.bind(UsuarioController));
routes.post('/usuarios', UsuarioController.create.bind(UsuarioController));
routes.put('/usuarios/:id', UsuarioController.update.bind(UsuarioController));
routes.delete('/usuarios/:id', UsuarioController.delete.bind(UsuarioController));

routes.get('/filiais', FilialController.findAll.bind(FilialController));
routes.get('/filiais/:id', FilialController.find.bind(FilialController));
routes.post('/filiais', FilialController.create.bind(FilialController));
routes.put('/filiais/:id', FilialController.update.bind(FilialController));
routes.delete('/filiais/:id', FilialController.delete.bind(FilialController));

routes.get('/cargos', CargoController.findAll.bind(CargoController));
routes.get('/cargos/:id', CargoController.find.bind(CargoController));
routes.post('/cargos', CargoController.create.bind(CargoController));
routes.put('/cargos/:id', CargoController.update.bind(CargoController));
routes.delete('/cargos/:id', CargoController.delete.bind(CargoController));

routes.get('/funcionarios', FuncionarioController.findAll.bind(FuncionarioController));
routes.get('/funcionarios/:id', FuncionarioController.find.bind(FuncionarioController));
routes.post('/funcionarios', FuncionarioController.create.bind(FuncionarioController));
routes.put('/funcionarios/:id', FuncionarioController.update.bind(FuncionarioController));
routes.delete('/funcionarios/:id', FuncionarioController.delete.bind(FuncionarioController));

routes.get('/funcionarios/:idFuncionario/enderecos', FuncionarioEnderecoController.findAll.bind(FuncionarioEnderecoController));
routes.get('/funcionarios/:idFuncionario/enderecos/:id', FuncionarioEnderecoController.find.bind(FuncionarioEnderecoController));
routes.post('/funcionarios/:idFuncionario/enderecos', FuncionarioEnderecoController.create.bind(FuncionarioEnderecoController));
routes.put('/funcionarios/:idFuncionario/enderecos/:id', FuncionarioEnderecoController.update.bind(FuncionarioEnderecoController));
routes.delete('/funcionarios/:idFuncionario/enderecos/:id', FuncionarioEnderecoController.delete.bind(FuncionarioEnderecoController));

routes.get('/funcionarios/:idFuncionario/telefones', FuncionarioTelefoneController.findAll.bind(FuncionarioTelefoneController));
routes.get('/funcionarios/:idFuncionario/telefones/:id', FuncionarioTelefoneController.find.bind(FuncionarioTelefoneController));
routes.post('/funcionarios/:idFuncionario/telefones', FuncionarioTelefoneController.create.bind(FuncionarioTelefoneController));
routes.put('/funcionarios/:idFuncionario/telefones/:id', FuncionarioTelefoneController.update.bind(FuncionarioTelefoneController));
routes.delete('/funcionarios/:idFuncionario/telefones/:id', FuncionarioTelefoneController.delete.bind(FuncionarioTelefoneController));

routes.get('/clientes', ClienteController.findAll.bind(ClienteController));
routes.get('/clientes/:id', ClienteController.find.bind(ClienteController));
routes.post('/clientes', ClienteController.create.bind(ClienteController));
routes.put('/clientes/:id', ClienteController.update.bind(ClienteController));
routes.delete('/clientes/:id', ClienteController.delete.bind(ClienteController));

routes.get('/clientes/:idCliente/enderecos', ClienteEnderecoController.findAll.bind(ClienteEnderecoController));
routes.get('/clientes/:idCliente/enderecos/:id', ClienteEnderecoController.find.bind(ClienteEnderecoController));
routes.post('/clientes/:idCliente/enderecos', ClienteEnderecoController.create.bind(ClienteEnderecoController));
routes.put('/clientes/:idCliente/enderecos/:id', ClienteEnderecoController.update.bind(ClienteEnderecoController));
routes.delete('/clientes/:idCliente/enderecos/:id', ClienteEnderecoController.delete.bind(ClienteEnderecoController));

routes.get('/clientes/:idCliente/telefones', ClienteTelefoneController.findAll.bind(ClienteTelefoneController));
routes.get('/clientes/:idCliente/telefones/:id', ClienteTelefoneController.find.bind(ClienteTelefoneController));
routes.post('/clientes/:idCliente/telefones', ClienteTelefoneController.create.bind(ClienteTelefoneController));
routes.put('/clientes/:idCliente/telefones/:id', ClienteTelefoneController.update.bind(ClienteTelefoneController));
routes.delete('/clientes/:idCliente/telefones/:id', ClienteTelefoneController.delete.bind(ClienteTelefoneController));

routes.get('/fabricantes', FabricanteController.findAll.bind(FabricanteController));
routes.get('/fabricantes/:id', FabricanteController.find.bind(FabricanteController));
routes.post('/fabricantes', FabricanteController.create.bind(FabricanteController));
routes.put('/fabricantes/:id', FabricanteController.update.bind(FabricanteController));
routes.delete('/fabricantes/:id', FabricanteController.delete.bind(FabricanteController));

routes.get('/modelos', ModeloController.findAll.bind(ModeloController));
routes.get('/modelos/:id', ModeloController.find.bind(ModeloController));
routes.post('/modelos', ModeloController.create.bind(ModeloController));
routes.put('/modelos/:id', ModeloController.update.bind(ModeloController));
routes.delete('/modelos/:id', ModeloController.delete.bind(ModeloController));

routes.get('/classes', ClasseController.findAll.bind(ClasseController));
routes.get('/classes/:id', ClasseController.find.bind(ClasseController));
routes.post('/classes', ClasseController.create.bind(ClasseController));
routes.put('/classes/:id', ClasseController.update.bind(ClasseController));
routes.delete('/classes/:id', ClasseController.delete.bind(ClasseController));

routes.get('/tanques', TanqueController.findAll.bind(TanqueController));
routes.get('/tanques/:id', TanqueController.find.bind(TanqueController));
routes.post('/tanques', TanqueController.create.bind(TanqueController));
routes.put('/tanques/:id', TanqueController.update.bind(TanqueController));
routes.delete('/tanques/:id', TanqueController.delete.bind(TanqueController));

routes.get('/carros', CarroController.findAll.bind(CarroController));
routes.get('/carros/:id', CarroController.find.bind(CarroController));
routes.post('/carros', CarroController.create.bind(CarroController));
routes.put('/carros/:id', CarroController.update.bind(CarroController));
routes.delete('/carros/:id', CarroController.delete.bind(CarroController));

routes.get('/filiais/:idFilial/precos', TabelaPrecoController.findAll.bind(TabelaPrecoController));
routes.get('/filiais/:idFilial/precos/:id', TabelaPrecoController.find.bind(TabelaPrecoController));
routes.post('/filiais/:idFilial/precos', TabelaPrecoController.create.bind(TabelaPrecoController));
routes.put('/filiais/:idFilial/precos/:id', TabelaPrecoController.update.bind(TabelaPrecoController));
routes.delete('/filiais/:idFilial/precos/:id', TabelaPrecoController.delete.bind(TabelaPrecoController));

routes.get('/alugueis', AluguelController.findAll.bind(AluguelController));
routes.get('/alugueis/:id', AluguelController.find.bind(AluguelController));
routes.post('/alugueis', AluguelController.create.bind(AluguelController));
routes.put('/alugueis/:id', AluguelController.update.bind(AluguelController));
routes.delete('/alugueis/:id', AluguelController.delete.bind(AluguelController));

routes.get('/alugueis/:idAluguel/retiradas', AluguelRetiradaController.findAll.bind(AluguelRetiradaController));
routes.post('/alugueis/:idAluguel/retiradas', AluguelRetiradaController.create.bind(AluguelRetiradaController));
routes.put('/alugueis/:idAluguel/retiradas', AluguelRetiradaController.update.bind(AluguelRetiradaController));
routes.delete('/alugueis/:idAluguel/retiradas', AluguelRetiradaController.delete.bind(AluguelRetiradaController));

routes.get('/alugueis/:idAluguel/devolucoes', AluguelDevolucaoController.findAll.bind(AluguelDevolucaoController));
routes.post('/alugueis/:idAluguel/devolucoes', AluguelDevolucaoController.create.bind(AluguelDevolucaoController));
routes.put('/alugueis/:idAluguel/devolucoes', AluguelDevolucaoController.update.bind(AluguelDevolucaoController));
routes.delete('/alugueis/:idAluguel/devolucoes', AluguelDevolucaoController.delete.bind(AluguelDevolucaoController));

module.exports = routes;