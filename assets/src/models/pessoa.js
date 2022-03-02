
class Pessoa {
    constructor({nome, sobrenome, dataNasc, email, contato, telefone, cargo}){
        this._nome           = nome;
        this._sobrenome      = sobrenome;
        this._dataNascimento = dataNasc;
        this._email          = email;
        this._contato        = contato;
        this._telefone       = telefone;
        this._cargo          = cargo;
    }

    get nome(){
        return this._nome;
    }

    set nome(novoNome){
        this._nome = novoNome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(novoSobrenome){
        this._sobrenome = novoSobrenome;
    }

    get dataNascimento(){
        return this._dataNascimento;
    }

    set dataNascimento(novaDataNasc){
        this._dataNascimento = novaDataNasc;
    }

    get email(){
        return this._email;
    }

    set email(novoEmail){
        this._email = novoEmail;
    }

    get contato(){
        return this._contato;
    }

    set contato(novoContato){
        this._contato = novoContato;
    }

    get telefone(){
        return this._telefone;
    }

    set telefone(novoTel){
        this._telefone = novoTel;
    }

    get cargo(){
        return this._cargo;
    }

    set cargo(novoCargo){
        this._cargo = novoCargo;
    }

}

export {Pessoa}


