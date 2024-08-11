class Studant {
    constructor(
      nome,
      cpf,
      nascimento,
      nacionalidade,
      email,
      telefone,
      rua,
      estado,
      cidade,
      barrio,
      cep
    ) {
      this.nome = nome;
      this.cpf = cpf;
      this.nascimento = nascimento;
      this.nacionalidade = nacionalidade;
      this.email = email;
      this.telefone = telefone;
      this.rua = rua;
      this.estado = estado;
      this.cidade = cidade;
      this.barrio = barrio;
      this.cep = cep;
    }


  
  }

  document.getElementById('miForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    enviarFormulario();

});

  
  function enviarFormulario() {
    const nome = document.getElementById("name").value;
    const cpf = document.getElementById("cpf").value;
    const nascimento = document.getElementById("nascimento").value;
    const nacionalidade = document.getElementById("nacionalidade").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const rua = document.getElementById("rua").value;
    const estado = document.getElementById("estados").value;
    const cidade = document.getElementById("cidades").value;
    const barrio = document.getElementById("barrio").value;
    const cep = document.getElementById("cpe").value;
  
    const student = new Studant(
      nome,
      cpf,
      nascimento,
      nacionalidade,
      email,
      telefone,
      rua,
      estado,
      cidade,
      barrio,
      cep
    );
    
    if(nome =="" || cpf=="" || nascimento=="" || email=="" || rua=="" || estado==""){
        Swal.fire({
            title: 'Error!',
            text: 'Algumas informações são necessárias',
            icon: 'error',
            confirmButtonText: 'OK'
        })
    }
        
    else{
        Swal.fire({
            title: "Bem-vindo!",
            imageUrl: "https://unsplash.it/400/200",
            html: `
                <b>Suas informações foram armazenadas em nosso banco de dados. </b><br>,
                nome: ${nome} <br>
                Cpf: ${cpf} <br>
                Telefone:${telefone}<br>
                Email: ${email}<br>
                Estado: ${estado}
            `,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });


    }

    console.log(student);
  }