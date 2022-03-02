import { Pessoa } from "./../models/pessoa.js";
import { bancoDados } from "./../db/bancoDados.js"

class PessoasCadastradas {

    static cadastrarPessoa(cadastro) {

        const novoCadastro = new Pessoa(cadastro)

        const novoEmail    = bancoDados.cadastrados.find((pessoa) => {
            if (pessoa.email === novoCadastro.email) {
                return true
            } else {
                return false
            }
        })

        if (!novoEmail) {
            bancoDados.cadastrados.push(novoCadastro)
        }

        return true
    }
}

export { PessoasCadastradas }