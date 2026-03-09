// 1
const pessoa = {
    nome: "João Silva",
    idade: 17,
    email: "joao@email.com",
    endereco: {
      rua: "Rua A",
      numero: 10,
      cidade: "São Paulo"
    },
    hobbies: ["jogar", "assistir anime", "ouvir música"]
  };
  
  
  // 2
  console.log("=== OBJETO PARA JSON ===");
  
  let pessoaJSON = JSON.stringify(pessoa);
  
  console.log(typeof pessoaJSON);
  console.log(pessoaJSON);
  
  
  // 3
  console.log("=== JSON FORMATADO ===");
  
  let jsonBonito = JSON.stringify(pessoa, null, 2);
  
  console.log(jsonBonito);
  
  
  // 4
  let jsonRecebido = '{"nome":"Maria","idade":16,"turma":"3A"}';
  
  let objeto = JSON.parse(jsonRecebido);
  
  console.log("=== JSON PARA OBJETO ===");
  
  console.log(typeof objeto);
  console.log("Nome:", objeto.nome);
  console.log("Idade:", objeto.idade);
  
  
  // 5
  let filmes = [
    { id: 1, titulo: "Matrix", ano: 1999, genero: "Ficção" },
    { id: 2, titulo: "Titanic", ano: 1997, genero: "Romance" },
    { id: 3, titulo: "Toy Story", ano: 1995, genero: "Animação" }
];
  
  
  // 6
  console.log("=== CATÁLOGO DE FILMES ===");
  
  let filmesJSON = JSON.stringify(filmes, null, 2);
  
  console.log("Filmes em JSON:");
  console.log(filmesJSON);
  
  let filmesRecebidos = JSON.parse(filmesJSON);
  
  console.log("Filmes carregados novamente:");
  
  for (let i = 0; i < filmesRecebidos.length; i++) {
    let f = filmesRecebidos[i];
    console.log(f.id + ". " + f.titulo + " (" + f.ano + ") - " + f.genero);
  }