const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-19.8998467",
        lng:"-43.9931679",
        name: "Casa dos meninos",
        about: "Promove o atendimento de crianças e adolescentes, sob medida de proteção Abrigo em Entidade, buscando auxiliá-los em seu desenvolvimento físico, psicopedagógico e emocional.",
        whatsapp: "994821800",
        images: [
            "https://images.unsplash.com/photo-1562790519-bc8a4a47cd0e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1595009552535-be753447727e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 8h até 18h",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
   const selectedOrphanages = await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)

   //consultar somente 1 orphanato, pelo id
   const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="2"')
   console.log(orphanage)

   //deletar dado da tabela
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
  // console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"))
})