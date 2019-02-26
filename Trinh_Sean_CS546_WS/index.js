const animals = require("./data/test");
const connection = require("./mongoConnection");

const main = async () => {
        try {
		//JUST FOR TESTING PURPOSES
		//const deleteAll = await animals.removeAll();
                const sasha = await animals.create("Sasha","Dog");
                console.log(sasha);

                const lucy = await animals.create("Lucy","Dog");

                const allAnimals = await animals.getAll();
                console.log(allAnimals);

                const duke = await animals.create("Duke","Walrus");
                console.log(duke);

                const sashita = await animals.rename(String(sasha._id), "Sashita");
                console.log(sashita);

                await animals.remove(String(lucy._id));

                const allAnimals2 = await animals.getAll();
                console.log(allAnimals2);

                //JUST FOR TESTING PURPOSES
                //const deleteAll = await animals.removeAll();

                const db = await connection();
                await db.serverConfig.close();
        } catch (error) { throw error; }
};

main().catch(error => {
        console.log(error);
});

