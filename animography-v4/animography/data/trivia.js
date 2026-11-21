// Trivia questions — FIRST DRAFTS for you to check and fix.
// Each question: "a" lists the 4 options, and the FIRST option is always the right one.
// (The game shuffles the options, so the right answer won't always be first on screen.)
// "animal" links the question to an animal page.
// The game also makes extra "What is this animal's status?" questions automatically
// from data/animals.js, so they stay up to date.
window.TRIVIA = [
  {
    "id": "q1", "animal": "leatherback-turtle",
    "q": { "en": "Which is the biggest turtle in the world?", "es": "¿Cuál es la tortuga más grande del mundo?" },
    "a": { "en": ["Leatherback", "Hawksbill", "Green turtle", "Olive ridley"], "es": ["Baula", "Carey", "Tortuga verde", "Lora"] },
    "why": { "en": "Leatherbacks are the biggest turtles on Earth!", "es": "¡Las baulas son las tortugas más grandes del planeta!" }
  },
  {
    "id": "q2", "animal": "leatherback-turtle",
    "q": { "en": "What is a leatherback's favorite food?", "es": "¿Cuál es la comida favorita de la tortuga baula?" },
    "a": { "en": ["Jellyfish", "Sea sponges", "Seaweed", "Crabs"], "es": ["Medusas", "Esponjas marinas", "Algas", "Cangrejos"] },
    "why": { "en": "That's why plastic bags are so dangerous: they look like jellyfish.", "es": "Por eso las bolsas plásticas son tan peligrosas: parecen medusas." }
  },
  {
    "id": "q3", "animal": "leatherback-turtle",
    "q": { "en": "What covers a leatherback's back?", "es": "¿Qué cubre la espalda de la tortuga baula?" },
    "a": { "en": ["Tough, leathery skin", "A hard, bony shell", "Feathers", "Spikes"], "es": ["Una piel gruesa como cuero", "Un caparazón duro de hueso", "Plumas", "Púas"] },
    "why": { "en": "That leathery skin is how it got its name.", "es": "Esa piel como cuero es la razón de su nombre en inglés." }
  },
  {
    "id": "q4", "animal": "hawksbill-turtle",
    "q": { "en": "What do hawksbill turtles mostly eat?", "es": "¿Qué comen principalmente las tortugas carey?" },
    "a": { "en": ["Sea sponges", "Jellyfish", "Sea grass", "Small sharks"], "es": ["Esponjas marinas", "Medusas", "Pasto marino", "Tiburones pequeños"] },
    "why": { "en": "Eating sponges helps keep coral reefs healthy.", "es": "Comer esponjas ayuda a mantener sanos los arrecifes." }
  },
  {
    "id": "q5", "animal": "hawksbill-turtle",
    "q": { "en": "'Carey' jewelry is made from…", "es": "Las joyas de 'carey' están hechas de…" },
    "a": { "en": ["Hawksbill turtle shells", "Coconut shells", "Seashells", "Plastic"], "es": ["Caparazones de tortuga carey", "Cáscaras de coco", "Conchas de mar", "Plástico"] },
    "why": { "en": "That's why you should never buy it: every piece hurts a hawksbill.", "es": "Por eso nunca debes comprarlas: cada pieza le hace daño a una tortuga carey." }
  },
  {
    "id": "q6", "animal": "bairds-tapir",
    "q": { "en": "What is the largest land animal in Central America?", "es": "¿Cuál es el animal terrestre más grande de Centroamérica?" },
    "a": { "en": ["Baird's tapir", "Jaguar", "White-lipped peccary", "Giant anteater"], "es": ["La danta", "El jaguar", "El chancho de monte", "El oso hormiguero gigante"] },
    "why": { "en": "Tapirs are big, gentle plant-eaters.", "es": "Las dantas son grandes y tranquilas, y comen plantas." }
  },
  {
    "id": "q7", "animal": "bairds-tapir",
    "q": { "en": "Tapirs are called 'gardeners of the forest' because they…", "es": "A las dantas les dicen 'jardineras del bosque' porque…" },
    "a": { "en": ["Spread seeds in their poop", "Dig holes for trees", "Water plants with their nose", "Cut the grass"], "es": ["Riegan semillas en su popó", "Hacen huecos para los árboles", "Riegan plantas con la nariz", "Cortan el zacate"] },
    "why": { "en": "New trees grow from the seeds they spread!", "es": "¡De las semillas que riegan crecen árboles nuevos!" }
  },
  {
    "id": "q8", "animal": "great-green-macaw",
    "q": { "en": "The great green macaw depends on which tree for food and nests?", "es": "¿De qué árbol depende la lapa verde para comer y anidar?" },
    "a": { "en": ["Almendro", "Guanacaste", "Mango", "Coconut palm"], "es": ["Almendro", "Guanacaste", "Mango", "Palma de coco"] },
    "why": { "en": "Planting almendro trees helps great green macaws.", "es": "Sembrar almendros ayuda a la lapa verde." }
  },
  {
    "id": "q9", "animal": "scarlet-macaw",
    "q": { "en": "Which macaw is coming back in Costa Rica thanks to protection?", "es": "¿Qué lapa está regresando en Costa Rica gracias a la protección?" },
    "a": { "en": ["Scarlet macaw", "Blue-and-yellow macaw", "Hyacinth macaw", "Military macaw"], "es": ["La lapa roja", "La guacamaya azul y amarilla", "La guacamaya jacinto", "La guacamaya verde militar"] },
    "why": { "en": "A real success story: protection works!", "es": "Una historia de éxito real: ¡la protección funciona!" }
  },
  {
    "id": "q10", "animal": "golden-toad",
    "q": { "en": "Where did the golden toad live?", "es": "¿Dónde vivía el sapo dorado?" },
    "a": { "en": ["Only in Monteverde", "All over Costa Rica", "Only in Tortuguero", "In the ocean"], "es": ["Solo en Monteverde", "En toda Costa Rica", "Solo en Tortuguero", "En el océano"] },
    "why": { "en": "It lived in a small patch of Monteverde cloud forest and nowhere else.", "es": "Vivía en un pedacito de bosque nuboso de Monteverde y en ningún otro lugar." }
  },
  {
    "id": "q11", "animal": "golden-toad",
    "q": { "en": "When was the golden toad last seen?", "es": "¿Cuándo se vio por última vez el sapo dorado?" },
    "a": { "en": ["1989", "1952", "2010", "1900"], "es": ["1989", "1952", "2010", "1900"] },
    "why": { "en": "Its story reminds us to protect the frogs we still have.", "es": "Su historia nos recuerda proteger a las ranas que todavía tenemos." }
  },
  {
    "id": "q12", "animal": "golden-toad",
    "q": { "en": "Why should you clean your boots between hikes in different forests?", "es": "¿Por qué debes limpiar tus botas entre caminatas en bosques diferentes?" },
    "a": { "en": ["To avoid spreading a disease that hurts frogs", "Because mud is heavy", "So the trail stays shiny", "Frogs don't like dirty shoes"], "es": ["Para no regar una enfermedad que afecta a las ranas", "Porque el barro pesa", "Para que el sendero brille", "A las ranas no les gustan los zapatos sucios"] },
    "why": { "en": "A fungus disease can travel on muddy boots.", "es": "Una enfermedad por hongos puede viajar en botas con barro." }
  },
  {
    "id": "q13", "animal": "caribbean-monk-seal",
    "q": { "en": "When was a Caribbean monk seal last confirmed?", "es": "¿Cuándo se confirmó por última vez una foca monje del Caribe?" },
    "a": { "en": ["1952", "1989", "2008", "1800"], "es": ["1952", "1989", "2008", "1800"] },
    "why": { "en": "Its cousin, the Hawaiian monk seal, is being helped today.", "es": "Su prima, la foca monje de Hawái, está recibiendo ayuda hoy." }
  },
  {
    "id": "q14", "animal": "west-indian-manatee",
    "q": { "en": "A manatee's closest living relatives are…", "es": "Los parientes vivos más cercanos del manatí son…" },
    "a": { "en": ["Elephants", "Dolphins", "Seals", "Hippos"], "es": ["Los elefantes", "Los delfines", "Las focas", "Los hipopótamos"] },
    "why": { "en": "Surprising, right? Manatees and elephants share an ancient ancestor.", "es": "¿Sorprendente, verdad? Manatíes y elefantes comparten un ancestro muy antiguo." }
  },
  {
    "id": "q15", "animal": "spider-monkey",
    "q": { "en": "What can a spider monkey's tail do?", "es": "¿Qué puede hacer la cola del mono araña?" },
    "a": { "en": ["Hold its whole body weight", "Glow in the dark", "Help it swim fast", "Nothing, it's just for looks"], "es": ["Sostener todo su peso", "Brillar en la oscuridad", "Ayudarle a nadar rápido", "Nada, es solo decoración"] },
    "why": { "en": "It works like a fifth hand!", "es": "¡Funciona como una quinta mano!" }
  },
  {
    "id": "q16", "animal": "squirrel-monkey",
    "q": { "en": "What is Costa Rica's smallest monkey?", "es": "¿Cuál es el mono más pequeño de Costa Rica?" },
    "a": { "en": ["Squirrel monkey (mono tití)", "White-faced capuchin", "Howler monkey", "Spider monkey"], "es": ["El mono tití", "El mono carablanca", "El mono congo", "El mono araña"] },
    "why": { "en": "Squirrel monkeys live only on the Pacific coast of Costa Rica and nearby Panama.", "es": "Los monos tití viven solo en la costa pacífica de Costa Rica y cerca en Panamá." }
  },
  {
    "id": "q17", "animal": "mantled-howler",
    "q": { "en": "How far away can you hear a howler monkey?", "es": "¿Desde qué distancia se puede escuchar a un mono congo?" },
    "a": { "en": ["Several kilometers", "Only 1 meter", "Only underwater", "You can't hear them"], "es": ["Varios kilómetros", "Solo 1 metro", "Solo bajo el agua", "No se pueden escuchar"] },
    "why": { "en": "They're some of the loudest land animals in the world!", "es": "¡Son de los animales terrestres más ruidosos del mundo!" }
  },
  {
    "id": "q18", "animal": "white-faced-capuchin",
    "q": { "en": "A capuchin monkey walks up to you on the beach. What should you do?", "es": "Un mono carablanca se te acerca en la playa. ¿Qué debes hacer?" },
    "a": { "en": ["Keep your bags zipped and don't feed it", "Share your snacks", "Pick it up for a selfie", "Chase it away with a stick"], "es": ["Cerrar tus bolsos y no darle comida", "Compartir tus snacks", "Alzarlo para una selfie", "Espantarlo con un palo"] },
    "why": { "en": "Human food makes monkeys sick and pushy.", "es": "La comida humana enferma a los monos y los vuelve agresivos." }
  },
  {
    "id": "q19", "animal": "blue-whale",
    "q": { "en": "A blue whale's heart is about the size of…", "es": "El corazón de una ballena azul es del tamaño de…" },
    "a": { "en": ["A small car", "A basketball", "An apple", "A house"], "es": ["Un carro pequeño", "Una bola de baloncesto", "Una manzana", "Una casa"] },
    "why": { "en": "The blue whale is the biggest animal that has ever lived.", "es": "La ballena azul es el animal más grande que ha existido." }
  },
  {
    "id": "q20", "animal": "blue-whale",
    "q": { "en": "Where do blue whales feed and raise calves off Costa Rica?", "es": "¿Dónde se alimentan y crían las ballenas azules frente a Costa Rica?" },
    "a": { "en": ["The Costa Rica Thermal Dome", "Lake Arenal", "Río Celeste", "The Tortuguero canals"], "es": ["El Domo Térmico de Costa Rica", "El lago Arenal", "El Río Celeste", "Los canales de Tortuguero"] },
    "why": { "en": "The Thermal Dome is a special area of the Pacific Ocean.", "es": "El Domo Térmico es una zona especial del océano Pacífico." }
  },
  {
    "id": "q21", "animal": "sperm-whale",
    "q": { "en": "What do sperm whales dive deep to hunt?", "es": "¿Qué cazan los cachalotes cuando bucean a lo profundo?" },
    "a": { "en": ["Squid", "Coconuts", "Sea turtles", "Seaweed"], "es": ["Calamares", "Cocos", "Tortugas marinas", "Algas"] },
    "why": { "en": "They hunt in the dark, deep ocean.", "es": "Cazan en lo profundo y oscuro del océano." }
  },
  {
    "id": "q22", "animal": "white-lipped-peccary",
    "q": { "en": "How do white-lipped peccaries warn others of danger?", "es": "¿Cómo avisan del peligro los chanchos de monte?" },
    "a": { "en": ["By clacking their teeth", "By whistling a song", "By changing color", "By flapping their ears"], "es": ["Castañeteando los dientes", "Silbando una canción", "Cambiando de color", "Moviendo las orejas"] },
    "why": { "en": "If you hear clacking in Corcovado, listen to your guide!", "es": "Si escuchas castañeteo en Corcovado, ¡hazle caso a tu guía!" }
  },
  {
    "id": "q23", "animal": "jaguar",
    "q": { "en": "What do jaguars hunt on the beaches of Tortuguero?", "es": "¿Qué cazan los jaguares en las playas de Tortuguero?" },
    "a": { "en": ["Sea turtles", "Whales", "Macaws", "Manatees"], "es": ["Tortugas marinas", "Ballenas", "Lapas", "Manatíes"] },
    "why": { "en": "Jaguars love water and are strong swimmers.", "es": "A los jaguares les encanta el agua y son grandes nadadores." }
  },
  {
    "id": "q24", "animal": "jaguar",
    "q": { "en": "Since what year has sport hunting been banned in Costa Rica?", "es": "¿Desde qué año está prohibida la cacería deportiva en Costa Rica?" },
    "a": { "en": ["2012", "1950", "1990", "2024"], "es": ["2012", "1950", "1990", "2024"] },
    "why": { "en": "It was a big step for Costa Rica's wildlife.", "es": "Fue un gran paso para la vida silvestre de Costa Rica." }
  },
  {
    "id": "q25", "animal": "leatherback-turtle",
    "q": { "en": "You're on a sea turtle nesting beach at night. What should you do?", "es": "Estás en una playa de anidación de tortugas por la noche. ¿Qué debes hacer?" },
    "a": { "en": ["Keep lights off and follow a certified guide", "Use a flashlight to find turtles", "Play loud music", "Make a bonfire"], "es": ["Mantener las luces apagadas y seguir a un guía certificado", "Usar una linterna para buscar tortugas", "Poner música fuerte", "Hacer una fogata"] },
    "why": { "en": "Bright lights confuse mother turtles and their babies.", "es": "Las luces fuertes confunden a las tortugas madres y a sus crías." }
  },
  {
    "id": "q26", "animal": "giant-anteater",
    "q": { "en": "How many teeth does a giant anteater have?", "es": "¿Cuántos dientes tiene un oso hormiguero gigante?" },
    "a": { "en": ["None at all", "100", "Two big tusks", "32, like us"], "es": ["Ninguno", "100", "Dos colmillos grandes", "32, como nosotros"] },
    "why": { "en": "It uses its long, sticky tongue instead.", "es": "En vez de dientes, usa su lengua larga y pegajosa." }
  },
  {
    "id": "q27", "animal": "talamancan-shrew",
    "q": { "en": "Shrews look like mice, but they are closer relatives of…", "es": "Las musarañas parecen ratones, pero son parientes más cercanos de…" },
    "a": { "en": ["Moles and hedgehogs", "Rabbits", "Squirrels", "Bats"], "es": ["Los topos y los erizos", "Los conejos", "Las ardillas", "Los murciélagos"] },
    "why": { "en": "Looks can be tricky!", "es": "¡Las apariencias engañan!" }
  },
  {
    "id": "q28", "animal": "van-gelders-bat",
    "q": { "en": "About how many kinds of bats live in Costa Rica?", "es": "¿Más o menos cuántos tipos de murciélagos viven en Costa Rica?" },
    "a": { "en": ["More than 100", "About 10", "Just 3", "None"], "es": ["Más de 100", "Unos 10", "Solo 3", "Ninguno"] },
    "why": { "en": "Bats are amazing helpers: they eat lots of mosquitoes.", "es": "Los murciélagos son grandes ayudantes: comen muchísimos zancudos." }
  },
  {
    "id": "q29", "animal": "oncilla",
    "q": { "en": "An oncilla (tigrillo) is about the size of…", "es": "Un tigrillo es más o menos del tamaño de…" },
    "a": { "en": ["A house cat", "A jaguar", "A horse", "A mouse"], "es": ["Un gato doméstico", "Un jaguar", "Un caballo", "Un ratón"] },
    "why": { "en": "It's a small, shy wild cat of the cloud forest.", "es": "Es un gato salvaje pequeño y tímido del bosque nuboso." }
  },
  {
    "id": "q30", "animal": "rodriguez-harvest-mouse",
    "q": { "en": "Where in the world does Rodriguez's harvest mouse live?", "es": "¿En qué parte del mundo vive el ratón cosechero de Rodríguez?" },
    "a": { "en": ["Only in Costa Rica", "All over the world", "Only in Mexico", "In the ocean"], "es": ["Solo en Costa Rica", "En todo el mundo", "Solo en México", "En el océano"] },
    "why": { "en": "A true Costa Rican!", "es": "¡Un verdadero tico!" }
  }
];
