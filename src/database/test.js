const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // Inseir dados na tabela
    // await saveOrphanage(db, {
    //     lat: '-9.6629944',
    //     lng: '-35.7386457',
    //     name: 'Lar das crianças',
    //     about: 'Presta assistência para crianças de 6 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.',
    //     whatsapp: '8276545894',
    //     images: [
    //     'https://images.unsplash.com/photo-1597997547878-c01a230efdc3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
    //     'https://images.unsplash.com/photo-1580673787750-2c5ef81571dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
    //     ].toString(),
    //     instructions: 'Venha como se sentir a vontade e traga muito amor e paciẽncia para dar!',
    //     opening_hours: 'Horário de visitas: das 8h até as 18h.',
    //     open_on_weekends: '0'
    // })

  //Consultar dados na tabela
  const selectedOrphanages = await db.all('SELECT * FROM orphanages')
  console.log(selectedOrphanages)

//   // Consultar pelo ID
//   const orphanage = await db.all("SELECT * FROM orphanages WHERE id = '1'")
//   console.log(orphanage)

//     // Deletar dado da tabela
//     console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
})