import { PessoasCadastradas } from "./../controllers/cadastrados.js"
import { bancoDados } from './../db/bancoDados.js'

class QuadroCadastrados {
    capturarDados(event) {
        event.preventDefault();

        const inputs   = event.target;
        const dataForm = {}

        for (let i = 0; i < inputs.length; i++) {
            const { name, value } = inputs[i];
            if (name) {
                dataForm[name] = value;
            }

            inputs[i].value = ''
        }

        const { nome, sobrenome, dataNasc, email, contato, telefone, cargo } = dataForm;

        PessoasCadastradas.cadastrarPessoa(dataForm);
        this.contador()
    }

    contador() {

        const span     = document.getElementById('total-alunos')

        span.innerHTML = bancoDados.cadastrados.length

        this.templatePessoas(bancoDados.cadastrados)
    }

    templatePessoas(arr) {
        const ul     = document.querySelector('#lista-de-alunos')
        ul.innerHTML = ''

        arr.forEach((cad) => {
            const { nome, sobrenome, email, cargo } = cad

            const li     = document.createElement('li')
            li.innerHTML = `
                <p>${nome}</p>
                <p>${sobrenome}</p>
                <p>${email}</p>
                <p>${cargo}</p>
            `
            ul.appendChild(li)
        })
    }


    filtrosTemplate() {
        const selecao   = document.querySelector('#cargoOption')
        const valor     = selecao.value

        const filtrados = bancoDados.cadastrados.filter((filtros) => {
            if (valor === 'Todos') {
                return true
            }
            return filtros.cargo === valor
        })

        this.contador()
        this.templatePessoas(filtrados)
    }

    
}

export { QuadroCadastrados }