const participante = [
    { codigo: 4, nome: 'Marjorie', grupo: 'A' },
    { codigo: 6, nome: 'Bryan', grupo: 'C' },
    { codigo: 3, nome: 'Nico', grupo: 'B' },
    { codigo: 1, nome: 'Maria', grupo: 'C' },
    { codigo: 2, nome: 'Julian', grupo: 'B' },
    { codigo: 5, nome: 'Jason', grupo: 'A' },
    { codigo: 7, nome: 'Bea', grupo: 'D' },
    { codigo: 8, nome: 'Edward', grupo: 'D' },
  ]
  
  participante.map(participante => {
  
    switch(participante.grupo) {
      case 'A':
        console.log(participante.nome + ' Goes to Miami-US')
        break;
      case 'B':
        console.log(participante.nome + ' Goes to Barcelona-ES')
        break;
      case 'C': 
        console.log(participante.nome + ' Goes to Osaka-JP')
        break;
      default:
        console.log(participante.nome + ' Goes to Buenos Aires-AR')
        break;
    }
  
  })