import { QuadroCadastrados } from "./models/QuadroCadastro.js";

const form       = document.querySelector('form')

const novoQuadro = new QuadroCadastrados()

form.addEventListener('submit', novoQuadro.capturarDados.bind(novoQuadro))

const btn        = document.querySelector('#btn')

btn.addEventListener('click', novoQuadro.filtrosTemplate.bind(novoQuadro))
   
