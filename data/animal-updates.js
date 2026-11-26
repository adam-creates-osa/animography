// Small changes to animals in data/animals.js, without replacing that big file
// (so the photos the photo robot saved there stay safe).
// The game applies these right after loading data/animals.js.
// Later, if you copy a change into data/animals.js yourself, you can delete it here.
window.ANIMAL_UPDATES = {
  // Both toads are now listed as Extinct on the IUCN Red List → they become Secret Rare cards.
  "pass-stubfoot-toad": {
    status: "EX",
    needsCheck: false,
    summary: {
      en: "A small toad found only in Costa Rica's mountains. It was once common along forest streams, but it was last seen in 1986.",
      es: "Un sapito que vivía solo en las montañas de Costa Rica. Antes era común en las quebradas del bosque, pero se vio por última vez en 1986."
    },
    where: {
      en: "Stream banks in the cloud forests and rainforests of the Central Volcanic range and the Talamanca mountains, and nowhere else on Earth.",
      es: "Orillas de quebradas en los bosques nubosos y lluviosos de la cordillera Volcánica Central y de Talamanca, y en ningún otro lugar del mundo."
    },
    threats: {
      en: "Scientists think a fungus disease called chytrid, which attacks frogs and toads, wiped it out.",
      es: "Los científicos creen que una enfermedad por hongos llamada quitridio, que ataca a ranas y sapos, acabó con él."
    },
    help: {
      en: ["Its story helps us protect the harlequin toads that are still here, like the Variable Harlequin Toad.",
           "Clean your boots between hikes in different forests, so you don't carry the fungus.",
           "Never move frogs or toads from one place to another."],
      es: ["Su historia nos ayuda a proteger a los sapos arlequín que todavía están aquí, como el Sapo Arlequín Variable.",
           "Limpia tus botas entre caminatas en bosques diferentes, para no llevar el hongo.",
           "Nunca cambies ranas ni sapos de un lugar a otro."]
    },
    funFact: {
      en: "Its scientific name 'senex' means 'old man' in Latin. Males were bluish gray or black, while females could have lime or lemon-colored patches.",
      es: "Su nombre científico 'senex' significa 'anciano' en latín. Los machos eran gris azulado o negros, y las hembras podían tener manchas color lima o limón."
    }
  },

  "chiriqui-harlequin-frog": {
    status: "EX",
    needsCheck: false,
    summary: {
      en: "A colorful harlequin frog from the Talamanca mountains. It was once easy to find, but it hasn't been seen in Costa Rica since 1996.",
      es: "Un colorido sapo arlequín de la cordillera de Talamanca. Antes era fácil de encontrar, pero no se ha visto en Costa Rica desde 1996."
    },
    where: {
      en: "Mountain stream banks in the Talamanca range of Costa Rica and nearby western Panama.",
      es: "Orillas de quebradas de montaña en la cordillera de Talamanca de Costa Rica y el oeste de Panamá."
    },
    threats: {
      en: "A fungus disease called chytrid was most likely the main cause. Forest loss and trout put into its streams made things worse.",
      es: "Lo más probable es que la causa principal fuera una enfermedad por hongos llamada quitridio. La pérdida de bosque y las truchas que se soltaron en sus quebradas empeoraron las cosas."
    },
    help: {
      en: ["Its story helps us protect the harlequin frogs that are still here, like the Variable Harlequin Toad.",
           "Clean your boots between hikes in different forests, so you don't carry the fungus.",
           "Support cloud forest reserves in the Talamanca mountains."],
      es: ["Su historia nos ayuda a proteger a los sapos arlequín que todavía están aquí, como el Sapo Arlequín Variable.",
           "Limpia tus botas entre caminatas en bosques diferentes, para no llevar el hongo.",
           "Apoya las reservas de bosque nuboso de la cordillera de Talamanca."]
    },
    funFact: {
      en: "Males and females looked different: males were often yellow or lime green, while females were bigger and usually colored differently.",
      es: "Machos y hembras se veían distintos: los machos solían ser amarillos o verde lima, y las hembras eran más grandes y casi siempre de otros colores."
    }
  },

  // Extra-big fact sheet, with a "Could it still be out there?" section.
  "caribbean-monk-seal": {
    needsCheck: false,
    statusNote: {
      en: "Declared extinct by the IUCN and by the United States (2008). No one has confirmed seeing one since 1952, but some people still hope a few survive.",
      es: "Declarada extinta por la UICN y por Estados Unidos (2008). Nadie ha confirmado ver una desde 1952, pero algunas personas todavía tienen la esperanza de que sobrevivan unas pocas."
    },
    summary: {
      en: "The only seal that ever lived in the warm Caribbean Sea and the Gulf of Mexico. It was gentle and curious, rested on quiet sandy beaches, and was last confirmed in 1952. It's the only kind of seal known to have gone extinct because of people.",
      es: "La única foca que ha vivido en el cálido mar Caribe y el golfo de México. Era mansa y curiosa, descansaba en playas de arena tranquilas y se confirmó por última vez en 1952. Es la única especie de foca que sabemos que se extinguió por culpa de las personas."
    },
    where: {
      en: "Reefs, lagoons and remote sandy beaches all around the Caribbean: the Bahamas, the Florida Keys, the Gulf of Mexico, the Yucatán, the Greater and Lesser Antilles, and islands and cays near Central America, like Serranilla Bank off Nicaragua.",
      es: "Arrecifes, lagunas y playas de arena remotas por todo el Caribe: las Bahamas, los Cayos de Florida, el golfo de México, Yucatán, las Antillas Mayores y Menores, e islas y cayos cerca de Centroamérica, como el banco Serranilla frente a Nicaragua."
    },
    threats: {
      en: "For hundreds of years people hunted it for its oil and meat. Because it was calm and not afraid of people, it was very easy to catch. Its reef fish were also overfished. By the time it was protected in 1967, it was probably already gone.",
      es: "Durante cientos de años la cazaron por su aceite y su carne. Como era tranquila y no le tenía miedo a la gente, era muy fácil de atrapar. Además, los peces de arrecife que comía fueron sobrepescados. Cuando por fin la protegieron en 1967, probablemente ya había desaparecido."
    },
    help: {
      en: ["Its cousins, the Hawaiian and Mediterranean monk seals, still need protection. Learn about them and share their stories.",
           "If you ever see a seal on a Caribbean beach, keep your distance, take a photo and report it to local wildlife officials.",
           "Support marine protected areas and choose sustainable seafood, so reef animals have enough food."],
      es: ["Sus primas, la foca monje de Hawái y la del Mediterráneo, todavía necesitan protección. Aprende sobre ellas y comparte sus historias.",
           "Si alguna vez ves una foca en una playa del Caribe, mantén la distancia, tómale una foto y avisa a las autoridades de vida silvestre.",
           "Apoya las áreas marinas protegidas y escoge mariscos sostenibles, para que los animales del arrecife tengan suficiente comida."]
    },
    funFact: {
      en: "Tiny algae often grew on its fur, giving this seal a slightly green color, like a living reef rock!",
      es: "Algas diminutas solían crecer en su pelaje y le daban un tono un poco verde, ¡como una roca de arrecife viviente!"
    },
    more: [
      {
        icon: "🦭",
        title: { en: "What it was like", es: "Cómo era" },
        text: {
          en: ["It grew up to about 2.4 m (8 ft) long and weighed about 170 to 270 kg, as much as three or four grown-ups together!",
               "Its fur was brown or gray, with a lighter, yellowish belly. Young seals were paler than adults.",
               "On land it moved slowly, but it was curious and calm, and it showed little fear of people. Sadly, that made it easy to hunt."],
          es: ["Medía hasta unos 2,4 m de largo y pesaba entre 170 y 270 kg, ¡tanto como tres o cuatro adultos juntos!",
               "Su pelaje era café o gris, con la panza más clara y amarillenta. Las focas jóvenes eran más pálidas que los adultos.",
               "En tierra se movía despacio, pero era curiosa y tranquila, y casi no le tenía miedo a la gente. Por desgracia, eso la hacía fácil de cazar."]
        }
      },
      {
        icon: "🏝️",
        title: { en: "Life in the Caribbean", es: "Su vida en el Caribe" },
        text: {
          en: ["It most likely ate fish and crustaceans that it caught in shallow lagoons and coral reefs.",
               "Groups of about 20 to 40 seals, and sometimes up to 100, rested together on remote sandy beaches of islands and atolls.",
               "Pups were born on the beach, about 1 m long and 16 to 18 kg, with a black fuzzy coat. A seal could live about 20 years."],
          es: ["Lo más probable es que comiera peces y crustáceos que atrapaba en lagunas poco profundas y arrecifes de coral.",
               "Grupos de unas 20 a 40 focas, y a veces hasta 100, descansaban juntas en playas de arena remotas de islas y atolones.",
               "Las crías nacían en la playa, medían cerca de 1 m, pesaban de 16 a 18 kg y tenían un pelaje negro y peludito. Una foca podía vivir unos 20 años."]
        }
      },
      {
        icon: "📜",
        title: { en: "How it disappeared", es: "Cómo desapareció" },
        text: {
          en: ["1494: Sailors on Christopher Columbus's second voyage killed eight seals for food. It's the first European description of this animal.",
               "From the 1600s: Hunting parties sent by plantation owners killed many seals, sometimes hundreds in one night, for their oil.",
               "1850: There were already too few seals left to hunt for business.",
               "1897–1903: A female lived for about five and a half years at the New York Aquarium.",
               "1952: The last confirmed sighting, at Serranilla Bank, a group of cays off the coast of Nicaragua.",
               "2008: After a five-year search, the United States officially declared it extinct."],
          es: ["1494: Marineros del segundo viaje de Cristóbal Colón mataron ocho focas para comer. Es la primera descripción europea de este animal.",
               "Desde los años 1600: Grupos de cazadores enviados por dueños de plantaciones mataban muchas focas, a veces cientos en una sola noche, para sacarles el aceite.",
               "1850: Ya quedaban muy pocas focas como para cazarlas como negocio.",
               "1897–1903: Una hembra vivió unos cinco años y medio en el Acuario de Nueva York.",
               "1952: El último avistamiento confirmado, en el banco Serranilla, un grupo de cayos frente a la costa de Nicaragua.",
               "2008: Después de buscarla durante cinco años, Estados Unidos la declaró oficialmente extinta."]
        }
      },
      {
        icon: "🔎",
        style: "hope",
        title: { en: "Could it still be out there?", es: "¿Podría seguir allá afuera?" },
        text: {
          en: ["Some people hope so! Fishermen in Haiti and Jamaica still say they sometimes see seals. In a 1997 survey, some fishermen described animals whose size and color matched monk seals, and the scientists wrote that it's possible the Caribbean monk seal is not extinct.",
               "🌊 A hopeful idea: the blue holes of the Bahamas. The Bahamas were part of this seal's home, and they are full of blue holes and sea caves (Andros Island alone has about 200 blue holes!). Its cousin, the Mediterranean monk seal, hides in sea caves today to stay away from people. So could a few Caribbean monk seals be hiding somewhere quiet like that?",
               "🔬 What scientists say: it's very unlikely. Seals breathe air and need beaches to rest and have their pups, and a group of seals needs lots of fish, so someone would probably have spotted and photographed one by now. Many searches found none, and the seals people did see turned out to be Arctic seals that wandered far south, or escaped sea lions. A 1993 math study gave it only about a 5% chance of still being alive back then.",
               "So the chance is very, very small… but scientists would love to be proven wrong! A clear photo would be the proof they need. Other 'lost' animals have been found again, like Costa Rica's own Holdridge's toad."],
          es: ["¡Algunas personas creen que sí! Pescadores de Haití y Jamaica todavía dicen que a veces ven focas. En una encuesta de 1997, algunos pescadores describieron animales cuyo tamaño y color coincidían con focas monje, y los científicos escribieron que es posible que la foca monje del Caribe no esté extinta.",
               "🌊 Una idea con esperanza: los agujeros azules de las Bahamas. Las Bahamas eran parte del hogar de esta foca, y están llenas de agujeros azules y cuevas marinas (¡solo la isla Andros tiene unos 200 agujeros azules!). Su prima, la foca monje del Mediterráneo, se esconde hoy en cuevas marinas para alejarse de la gente. Entonces, ¿podrían unas pocas focas monje del Caribe estar escondidas en un lugar tranquilo así?",
               "🔬 Lo que dicen los científicos: es muy poco probable. Las focas respiran aire y necesitan playas para descansar y tener a sus crías, y un grupo de focas necesita muchos peces, así que alguien probablemente ya habría visto y fotografiado una. Muchas búsquedas no encontraron ninguna, y las focas que la gente sí vio resultaron ser focas del Ártico que se alejaron mucho al sur, o lobos marinos escapados. Un estudio matemático de 1993 le dio solo cerca de un 5% de probabilidad de seguir viva en ese entonces.",
               "Así que la probabilidad es muy, muy pequeña… ¡pero a los científicos les encantaría equivocarse! Una foto clara sería la prueba que necesitan. Otros animales 'perdidos' se han vuelto a encontrar, como el sapo de Holdridge de nuestra propia Costa Rica."]
        }
      },
      {
        icon: "💙",
        title: { en: "Its cousins today", es: "Sus primas hoy" },
        text: {
          en: ["Only two kinds of monk seals are left in the world: the Hawaiian monk seal (its closest relative) and the Mediterranean monk seal. Both have only small numbers left and are protected.",
               "Thanks to the Caribbean monk seal's sad story, people work harder today to protect its cousins' beaches and food."],
          es: ["Solo quedan dos tipos de focas monje en el mundo: la foca monje de Hawái (su pariente más cercana) y la foca monje del Mediterráneo. A las dos les quedan pocos individuos y están protegidas.",
               "Gracias a la triste historia de la foca monje del Caribe, hoy la gente trabaja más duro para proteger las playas y la comida de sus primas."]
        }
      }
    ],
    // Special chat replies for this animal (see data/chat.js)
    chat: {
      status: {
        en: ["Scientists say I'm extinct. No one has confirmed seeing one of us since 1952. 😢 But some people still hope a few of us are hiding somewhere quiet, maybe in the blue holes and sea caves of the Bahamas! 🌊 If you ever see a seal on a Caribbean beach, take a photo! 📸"],
        es: ["Los científicos dicen que estoy extinta. Nadie ha confirmado ver a una de nosotras desde 1952. 😢 ¡Pero algunas personas todavía creen que unas pocas estamos escondidas en un lugar tranquilo, tal vez en los agujeros azules y las cuevas marinas de las Bahamas! 🌊 Si alguna vez ves una foca en una playa del Caribe, ¡tómale una foto! 📸"]
      },
      where: {
        en: ["I used to rest on quiet sandy beaches all over the Caribbean: the Bahamas, the Florida Keys, the Gulf of Mexico, the Yucatán and cays near Central America. 🏝️ Some people wonder if a few of us are still hiding in the blue holes of the Bahamas… 🌊"],
        es: ["Antes descansaba en playas de arena tranquilas por todo el Caribe: las Bahamas, los Cayos de Florida, el golfo de México, Yucatán y cayos cerca de Centroamérica. 🏝️ Algunas personas se preguntan si unas pocas seguimos escondidas en los agujeros azules de las Bahamas… 🌊"]
      },
      how: {
        en: ["I'm a memory now… or am I? 😉 Some people think a few of us might still be hiding. Scientists say it's very unlikely, but I love that you remember me! 💚"],
        es: ["Ahora soy un recuerdo… ¿o no? 😉 Algunas personas creen que unas pocas podríamos seguir escondidas. Los científicos dicen que es muy poco probable, ¡pero me encanta que te acuerdes de mí! 💚"]
      }
    }
  }
};

// Apply the updates
(function () {
  for (const [id, changes] of Object.entries(window.ANIMAL_UPDATES)) {
    const animal = (window.ANIMALS || []).find(a => a.id === id);
    if (animal) Object.assign(animal, changes);
  }
})();
