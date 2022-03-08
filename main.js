const BASEURL = "http://localhost:3333/api";

async function addNewToSend() {
  const form = document.querySelector('form');

  const formData = {
    grupo: form.grupo.value,
    razao_social: form.razao_social.value,
    nome_fantasia: form.nome_fantasia.value,
    cpf_cnpj: form.cpf_cnpj.value,
    inscricao_estadual: form.inscricao_estadual.value,
    data_nascimento: form.data_nascimento.value,
    endereco: form.endereco.value,
    numero: form.numero.value,
    complemento: form.complemento.value,
    bairro: form.bairro.value,
    cep: form.cep.value,
    cidade: form.cidade.value,
    uf: form.uf.value,
    telefone: form.telefone.value,
    telefone_celular: form.telefone_celular.value,
    email: form.email.value,
    email_nfe: form.email_nfe.value,	
  }
  axios.post(BASEURL, formData)
    .then(response => console.log(response.data))
    .catch(error => error)
}