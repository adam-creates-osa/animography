// Animography animal list — FIRST DRAFTS for you to check and fix.
// Everything between the [ and ] is plain JSON, so the weekly IUCN updater can edit "status" safely.
// Fields:
//   status      IUCN code: EX extinct, CR critically endangered, EN endangered, VU vulnerable, NT near threatened, LC least concern
//   checked     date the status was last checked
//   needsCheck  true = sources disagree or facts are thin; please double-check
//   photo       Wikimedia Commons file name + photographer. cardOk:true = public domain/CC0, allowed on cards
//   wiki        English Wikipedia page name (for the "Learn more" link)
window.ANIMALS = [
  {
    "id": "jaguar",
    "group": "mammal",
    "emoji": "🐆",
    "scientific": "Panthera onca",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Jaguar",
      "es": "Jaguar"
    },
    "statusNote": {
      "en": "Not threatened worldwide, but rare in Costa Rica. Hunting wild animals for sport has been banned in Costa Rica since 2012.",
      "es": "No está amenazado a nivel mundial, pero es raro en Costa Rica. La cacería deportiva está prohibida en Costa Rica desde 2012."
    },
    "summary": {
      "en": "The biggest wild cat in the Americas. Its bite is so strong it can crack a turtle's shell.",
      "es": "El felino salvaje más grande de América. Su mordida es tan fuerte que puede romper el caparazón de una tortuga."
    },
    "where": {
      "en": "Big, wild forests like Corcovado, Tortuguero and the Talamanca mountains.",
      "es": "Bosques grandes y salvajes como Corcovado, Tortuguero y la cordillera de Talamanca."
    },
    "threats": {
      "en": "Its forests are being cut into small pieces, its prey is hunted, and some farmers fear it will attack their cattle.",
      "es": "Sus bosques se están dividiendo en pedazos pequeños, sus presas son cazadas y algunos ganaderos temen que ataque su ganado."
    },
    "help": {
      "en": [
        "Support groups that help farmers and jaguars live side by side.",
        "Never buy anything made from wild cat fur, teeth or claws.",
        "On tours, stay on the trail and follow your guide's rules."
      ],
      "es": [
        "Apoya a grupos que ayudan a ganaderos y jaguares a convivir.",
        "Nunca compres nada hecho con piel, dientes o garras de felinos salvajes.",
        "En los tours, quédate en el sendero y sigue las reglas de tu guía."
      ]
    },
    "funFact": {
      "en": "Jaguars love water! In Tortuguero they even hunt sea turtles right on the beach.",
      "es": "¡A los jaguares les encanta el agua! En Tortuguero hasta cazan tortugas marinas en la playa."
    },
    "wiki": "Jaguar",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/199707587/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/199707587/large.jpeg",
      "author": "Michelle Monge-Velazquez",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/199707587",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "bairds-tapir",
    "group": "mammal",
    "emoji": "🐾",
    "scientific": "Tapirus bairdii",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Baird's Tapir",
      "es": "Danta"
    },
    "summary": {
      "en": "The largest land animal in Central America. Its nose is a short, wiggly trunk it uses to grab leaves.",
      "es": "El animal terrestre más grande de Centroamérica. Su nariz es una trompa corta y flexible que usa para agarrar hojas."
    },
    "where": {
      "en": "Corcovado, the Talamanca highlands (Chirripó, La Amistad) and the volcanoes of the north.",
      "es": "Corcovado, las tierras altas de Talamanca (Chirripó, La Amistad) y los volcanes del norte."
    },
    "threats": {
      "en": "Forest loss, hunting and cars. Tapirs have just one baby about every two years, so populations recover slowly.",
      "es": "La pérdida de bosque, la cacería y los carros. Las dantas tienen una sola cría cada dos años más o menos, así que sus poblaciones se recuperan despacio."
    },
    "help": {
      "en": [
        "Drive slowly where you see wildlife-crossing signs.",
        "Never feed a tapir, even if it walks up to you.",
        "Support projects that replant forests and connect parks."
      ],
      "es": [
        "Maneja despacio donde veas rótulos de cruce de fauna.",
        "Nunca alimentes a una danta, aunque se te acerque.",
        "Apoya proyectos que reforestan y conectan parques."
      ]
    },
    "funFact": {
      "en": "Tapirs are called 'gardeners of the forest' because they spread seeds everywhere in their poop.",
      "es": "A las dantas les dicen 'jardineras del bosque' porque riegan semillas por todas partes en su popó."
    },
    "wiki": "Baird's_tapir",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/527869886/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/527869886/large.jpg",
      "author": "Cricket Raspet",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/527869886",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "great-green-macaw",
    "group": "bird",
    "emoji": "🦜",
    "scientific": "Ara ambiguus",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Great Green Macaw",
      "es": "Lapa Verde"
    },
    "summary": {
      "en": "A big, bright green parrot with a red forehead and blue wing tips. It is one of Costa Rica's rarest birds.",
      "es": "Un loro grande y verde brillante, con la frente roja y las puntas de las alas azules. Es una de las aves más raras de Costa Rica."
    },
    "where": {
      "en": "The northern Caribbean lowlands, around Maquenque and Sarapiquí.",
      "es": "Las llanuras del Caribe norte, alrededor de Maquenque y Sarapiquí."
    },
    "threats": {
      "en": "It depends on the almendro tree for food and nests, and many of these trees were cut down. Chicks are also stolen for the pet trade.",
      "es": "Depende del árbol de almendro para comer y anidar, y muchos de esos árboles fueron talados. Además, roban pichones para venderlos como mascotas."
    },
    "help": {
      "en": [
        "Never buy a wild parrot or macaw as a pet.",
        "Support projects that plant almendro trees.",
        "Report anyone selling wild birds to SINAC, Costa Rica's park service."
      ],
      "es": [
        "Nunca compres un loro o lapa silvestre como mascota.",
        "Apoya proyectos que siembran árboles de almendro.",
        "Denuncia ante el SINAC a quien venda aves silvestres."
      ]
    },
    "funFact": {
      "en": "Great green macaw pairs stay together and share the work of raising their chicks.",
      "es": "Las parejas de lapa verde se mantienen juntas y comparten el trabajo de criar a sus pichones."
    },
    "wiki": "Great_green_macaw",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/331568941/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/331568941/large.jpeg",
      "author": "Millie Basden",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/331568941",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "scarlet-macaw",
    "group": "bird",
    "emoji": "🦜",
    "scientific": "Ara macao",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Scarlet Macaw",
      "es": "Lapa Roja"
    },
    "statusNote": {
      "en": "Not threatened worldwide, but it disappeared from much of Costa Rica. Protection is helping it come back: a real success story!",
      "es": "No está amenazada a nivel mundial, pero desapareció de gran parte de Costa Rica. La protección la está ayudando a regresar: ¡una historia de éxito!"
    },
    "summary": {
      "en": "A rainbow-colored parrot with red, yellow and blue feathers and a loud, happy squawk.",
      "es": "Un loro de colores de arcoíris, con plumas rojas, amarillas y azules, y un graznido fuerte y alegre."
    },
    "where": {
      "en": "Carara National Park, the Osa Peninsula and the central Pacific coast.",
      "es": "El Parque Nacional Carara, la península de Osa y el Pacífico central."
    },
    "threats": {
      "en": "In the past, many were taken for the pet trade and their forests were cut down.",
      "es": "En el pasado, muchas fueron capturadas para venderlas como mascotas y sus bosques fueron talados."
    },
    "help": {
      "en": [
        "Never buy a wild parrot as a pet.",
        "Don't feed wild macaws; human food can make them sick.",
        "Visit and support rescue centers that release macaws back into the wild."
      ],
      "es": [
        "Nunca compres un loro silvestre como mascota.",
        "No alimentes a las lapas silvestres; la comida humana puede enfermarlas.",
        "Visita y apoya centros de rescate que liberan lapas a la naturaleza."
      ]
    },
    "funFact": {
      "en": "Scarlet macaws can live for decades and usually stay with the same partner.",
      "es": "Las lapas rojas pueden vivir por décadas y suelen quedarse con la misma pareja."
    },
    "wiki": "Scarlet_macaw",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/395848909/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/395848909/large.jpeg",
      "author": "Cricket Raspet",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/395848909",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "leatherback-turtle",
    "group": "reptile",
    "emoji": "🐢",
    "scientific": "Dermochelys coriacea",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Leatherback Sea Turtle",
      "es": "Tortuga Baula"
    },
    "statusNote": {
      "en": "Vulnerable worldwide. The population in the eastern Pacific, which nests in Guanacaste, is Critically Endangered.",
      "es": "Vulnerable a nivel mundial. La población del Pacífico oriental, que anida en Guanacaste, está En peligro crítico."
    },
    "summary": {
      "en": "The biggest turtle in the world. Instead of a hard shell, its back is covered in tough, leathery skin.",
      "es": "La tortuga más grande del mundo. En vez de un caparazón duro, su espalda está cubierta de una piel gruesa como cuero."
    },
    "where": {
      "en": "Nests at Playa Grande (Las Baulas National Park) on the Pacific and at beaches like Pacuare and Gandoca on the Caribbean.",
      "es": "Anida en Playa Grande (Parque Nacional Marino Las Baulas) en el Pacífico y en playas como Pacuare y Gandoca en el Caribe."
    },
    "threats": {
      "en": "Plastic bags that look like jellyfish, egg poaching, fishing nets and bright lights on nesting beaches.",
      "es": "Bolsas plásticas que parecen medusas, el saqueo de huevos, las redes de pesca y las luces fuertes en las playas de anidación."
    },
    "help": {
      "en": [
        "Say no to plastic bags and balloons.",
        "Keep lights off on nesting beaches at night.",
        "Only watch turtles nesting with a certified guide.",
        "Never buy or eat turtle eggs."
      ],
      "es": [
        "Di no a las bolsas plásticas y los globos.",
        "Mantén las luces apagadas en las playas de anidación por la noche.",
        "Observa tortugas anidando solo con un guía certificado.",
        "Nunca compres ni comas huevos de tortuga."
      ]
    },
    "funFact": {
      "en": "Leatherbacks can dive more than 1,000 meters deep to find jellyfish, their favorite food.",
      "es": "Las baulas pueden bucear a más de 1.000 metros de profundidad para buscar medusas, su comida favorita."
    },
    "wiki": "Leatherback_sea_turtle",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/180882941/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/180882941/large.jpeg",
      "author": "Joshua Smith",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/180882941",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "hawksbill-turtle",
    "group": "reptile",
    "emoji": "🐢",
    "scientific": "Eretmochelys imbricata",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Hawksbill Sea Turtle",
      "es": "Tortuga Carey"
    },
    "summary": {
      "en": "A beautiful sea turtle with a patterned shell and a pointy beak, like a hawk's.",
      "es": "Una hermosa tortuga marina con un caparazón decorado y un pico puntiagudo, como el de un halcón."
    },
    "where": {
      "en": "Coral reefs and beaches on the Caribbean (Tortuguero, Cahuita) and mangroves on the Pacific (Osa, Golfo Dulce).",
      "es": "Arrecifes y playas del Caribe (Tortuguero, Cahuita) y manglares del Pacífico (Osa, Golfo Dulce)."
    },
    "threats": {
      "en": "For centuries, people made jewelry from its shell. Egg poaching and damaged coral reefs also hurt it.",
      "es": "Durante siglos se hicieron joyas con su caparazón. El saqueo de huevos y los arrecifes dañados también la afectan."
    },
    "help": {
      "en": [
        "Never buy 'tortoiseshell' (carey) jewelry or souvenirs.",
        "When snorkeling, never touch or stand on coral.",
        "Volunteer or donate to sea turtle projects."
      ],
      "es": [
        "Nunca compres joyas o recuerdos de carey.",
        "Cuando hagas snorkel, nunca toques ni te pares sobre el coral.",
        "Haz voluntariado o dona a proyectos de tortugas marinas."
      ]
    },
    "funFact": {
      "en": "Hawksbills mostly eat sea sponges, which helps keep coral reefs healthy.",
      "es": "Las tortugas carey comen sobre todo esponjas marinas, y eso ayuda a mantener sanos los arrecifes."
    },
    "wiki": "Hawksbill_sea_turtle",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/186782696/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/186782696/large.jpg",
      "author": "anasacuta",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/186782696",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "spider-monkey",
    "group": "mammal",
    "emoji": "🐒",
    "scientific": "Ateles geoffroyi",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Geoffroy's Spider Monkey",
      "es": "Mono Araña"
    },
    "summary": {
      "en": "A long-armed monkey that swings through the treetops. Its tail works like an extra hand.",
      "es": "Un mono de brazos largos que se columpia por las copas de los árboles. Su cola funciona como una mano extra."
    },
    "where": {
      "en": "Corcovado, Santa Rosa, Tortuguero and other big forests.",
      "es": "Corcovado, Santa Rosa, Tortuguero y otros bosques grandes."
    },
    "threats": {
      "en": "Losing its forests and being taken as a pet. Mothers have a baby only every few years.",
      "es": "La pérdida de sus bosques y la captura como mascota. Las madres tienen una cría solo cada pocos años."
    },
    "help": {
      "en": [
        "Never feed monkeys.",
        "Don't take photos holding captive monkeys.",
        "Support forest corridors and monkey bridges."
      ],
      "es": [
        "Nunca alimentes a los monos.",
        "No te tomes fotos cargando monos en cautiverio.",
        "Apoya los corredores biológicos y los puentes para monos."
      ]
    },
    "funFact": {
      "en": "A spider monkey can hang from a branch by its tail alone, while using both hands to eat fruit.",
      "es": "Un mono araña puede colgarse de una rama solo con la cola, mientras usa las dos manos para comer fruta."
    },
    "wiki": "Geoffroy's_spider_monkey",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/506421718/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/506421718/large.jpg",
      "author": "Bennett Grappone",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/506421718",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "squirrel-monkey",
    "group": "mammal",
    "emoji": "🐒",
    "scientific": "Saimiri oerstedii",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Central American Squirrel Monkey",
      "es": "Mono Tití"
    },
    "summary": {
      "en": "Costa Rica's smallest monkey, with an orange back and a cute black-and-white face.",
      "es": "El mono más pequeño de Costa Rica, con la espalda anaranjada y una carita blanca y negra."
    },
    "where": {
      "en": "Only on the Pacific coast of Costa Rica and nearby Panama, such as Manuel Antonio and the Osa Peninsula.",
      "es": "Solo en la costa pacífica de Costa Rica y cerca en Panamá, como Manuel Antonio y la península de Osa."
    },
    "threats": {
      "en": "Losing forest, getting shocked by power lines and being sold as pets.",
      "es": "La pérdida de bosque, las descargas de los cables eléctricos y la venta como mascotas."
    },
    "help": {
      "en": [
        "Support monkey bridges and covered power lines.",
        "Never feed monkeys.",
        "Choose hotels that protect their forest."
      ],
      "es": [
        "Apoya los puentes para monos y los cables eléctricos forrados.",
        "Nunca alimentes a los monos.",
        "Escoge hoteles que protegen su bosque."
      ]
    },
    "funFact": {
      "en": "Squirrel monkeys travel in big, noisy groups and are always on the move.",
      "es": "Los monos tití andan en grupos grandes y ruidosos y siempre están en movimiento."
    },
    "wiki": "Central_American_squirrel_monkey",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/359064432/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/359064432/large.jpeg",
      "author": "Liam Steele",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/359064432",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "golden-toad",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Incilius periglenes",
    "status": "EX",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Golden Toad",
      "es": "Sapo Dorado"
    },
    "summary": {
      "en": "A tiny toad that lived only in the Monteverde cloud forest. Males were a brilliant golden orange. It was last seen in 1989.",
      "es": "Un sapito que vivía solo en el bosque nuboso de Monteverde. Los machos eran de un naranja dorado brillante. Se vio por última vez en 1989."
    },
    "where": {
      "en": "A small area of cloud forest in Monteverde, and nowhere else on Earth.",
      "es": "Una pequeña zona de bosque nuboso en Monteverde, y en ningún otro lugar del mundo."
    },
    "threats": {
      "en": "Scientists think unusual weather and a fungus disease that attacks frogs and toads worked together to wipe it out.",
      "es": "Los científicos creen que un clima inusual y una enfermedad por hongos que ataca a ranas y sapos se combinaron y acabaron con él."
    },
    "help": {
      "en": [
        "Its story helps us protect the frogs that are still here.",
        "Clean your boots between hikes in different forests.",
        "Never move frogs from one place to another."
      ],
      "es": [
        "Su historia nos ayuda a proteger a las ranas que todavía están aquí.",
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca cambies ranas de un lugar a otro."
      ]
    },
    "funFact": {
      "en": "Males and females looked totally different: females were dark with bright red spots.",
      "es": "Los machos y las hembras se veían totalmente distintos: las hembras eran oscuras con manchas rojas brillantes."
    },
    "wiki": "Golden_toad",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/98915580/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/98915580/large.jpeg",
      "author": "Zac Peterson",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/98915580",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "caribbean-monk-seal",
    "group": "mammal",
    "emoji": "🦭",
    "scientific": "Neomonachus tropicalis",
    "status": "EX",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Caribbean Monk Seal",
      "es": "Foca Monje del Caribe"
    },
    "summary": {
      "en": "The only seal that lived in the warm Caribbean Sea. It was last confirmed in 1952.",
      "es": "La única foca que vivía en el cálido mar Caribe. Se confirmó por última vez en 1952."
    },
    "where": {
      "en": "Reefs and islands across the Caribbean, including the southwestern Caribbean near Central America.",
      "es": "Arrecifes e islas de todo el Caribe, incluyendo el suroeste del Caribe, cerca de Centroamérica."
    },
    "threats": {
      "en": "It was hunted for its oil, and the reef fish it ate were overfished.",
      "es": "Fue cazada por su aceite, y los peces de arrecife que comía fueron sobrepescados."
    },
    "help": {
      "en": [
        "Its cousin, the Hawaiian monk seal, is being helped today. We can learn from both stories.",
        "Support marine protected areas.",
        "Choose sustainable seafood."
      ],
      "es": [
        "Su prima, la foca monje de Hawái, está recibiendo ayuda hoy. Podemos aprender de ambas historias.",
        "Apoya las áreas marinas protegidas.",
        "Escoge mariscos sostenibles."
      ]
    },
    "funFact": {
      "en": "Sailors on Christopher Columbus's second voyage wrote about seeing these seals in 1494.",
      "es": "Los marineros del segundo viaje de Cristóbal Colón escribieron que vieron estas focas en 1494."
    },
    "wiki": "Caribbean_monk_seal",
    "photo": {
      "file": "Caribbean monk seals New York.jpg",
      "author": "Unknown, 1910",
      "cardOk": true,
      "source": "Wikimedia Commons",
      "license": "Public domain"
    }
  },
  {
    "id": "mantled-howler",
    "group": "mammal",
    "emoji": "🐒",
    "scientific": "Alouatta palliata",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Mantled Howler Monkey",
      "es": "Mono Congo"
    },
    "summary": {
      "en": "A black monkey with golden fur on its sides. Its roar is one of the loudest sounds made by any land animal.",
      "es": "Un mono negro con pelo dorado en los costados. Su rugido es uno de los sonidos más fuertes de cualquier animal terrestre."
    },
    "where": {
      "en": "Almost everywhere with trees: from the dry forests of Guanacaste to the Caribbean coast.",
      "es": "Casi en cualquier lugar con árboles: desde los bosques secos de Guanacaste hasta la costa caribeña."
    },
    "threats": {
      "en": "Losing forest, uncovered power lines and crossing busy roads.",
      "es": "La pérdida de bosque, los cables eléctricos sin forrar y cruzar calles transitadas."
    },
    "help": {
      "en": [
        "Support covered power lines and monkey bridges.",
        "Plant native trees.",
        "Never feed howler monkeys."
      ],
      "es": [
        "Apoya los cables forrados y los puentes para monos.",
        "Siembra árboles nativos.",
        "Nunca alimentes a los monos congo."
      ]
    },
    "funFact": {
      "en": "Howlers can be heard several kilometers away. They often 'sing' at sunrise!",
      "es": "A los monos congo se les escucha a varios kilómetros. ¡Muchas veces 'cantan' al amanecer!"
    },
    "wiki": "Mantled_howler",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/522694169/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/522694169/large.jpg",
      "author": "rowan_m",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/522694169",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "white-faced-capuchin",
    "group": "mammal",
    "emoji": "🐒",
    "scientific": "Cebus imitator",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "White-faced Capuchin",
      "es": "Mono Carablanca"
    },
    "summary": {
      "en": "A clever black monkey with a white face and shoulders. It is one of the smartest monkeys in the world.",
      "es": "Un mono negro e inteligente con la cara y los hombros blancos. Es uno de los monos más listos del mundo."
    },
    "where": {
      "en": "Forests on both coasts, like Manuel Antonio, Santa Rosa and Cahuita.",
      "es": "Bosques de ambas costas, como Manuel Antonio, Santa Rosa y Cahuita."
    },
    "threats": {
      "en": "Habitat loss, the pet trade, and human food that makes them sick and pushy.",
      "es": "La pérdida de hábitat, el comercio de mascotas y la comida humana que los enferma y los vuelve agresivos."
    },
    "help": {
      "en": [
        "Never feed capuchins.",
        "Keep your bags zipped on the beach.",
        "Report monkeys kept as pets to SINAC."
      ],
      "es": [
        "Nunca alimentes a los monos carablanca.",
        "Mantén tus bolsos cerrados en la playa.",
        "Denuncia ante el SINAC a los monos que tengan como mascota."
      ]
    },
    "funFact": {
      "en": "Some capuchins rub crushed plants on their fur, maybe to keep bugs away.",
      "es": "Algunos monos carablanca se frotan plantas machacadas en el pelo, quizás para alejar a los insectos."
    },
    "wiki": "Panamanian_white-faced_capuchin",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/136634265/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/136634265/large.jpg",
      "author": "Matthew Gerke",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/136634265",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "white-lipped-peccary",
    "group": "mammal",
    "emoji": "🐗",
    "scientific": "Tayassu pecari",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "White-lipped Peccary",
      "es": "Chancho de Monte"
    },
    "summary": {
      "en": "A wild, pig-like animal with a white chin that lives in big herds.",
      "es": "Un animal salvaje parecido a un cerdo, con la barbilla blanca, que vive en grandes manadas."
    },
    "where": {
      "en": "Mostly Corcovado National Park, its last big stronghold in Costa Rica.",
      "es": "Sobre todo en el Parque Nacional Corcovado, su último gran refugio en Costa Rica."
    },
    "threats": {
      "en": "Hunting and forest loss. It has disappeared from most of the places in Costa Rica where it used to live.",
      "es": "La cacería y la pérdida de bosque. Ha desaparecido de la mayoría de los lugares de Costa Rica donde vivía."
    },
    "help": {
      "en": [
        "Never buy wild-animal meat.",
        "Support park rangers who stop poachers.",
        "In Corcovado, follow your guide's instructions if you meet a herd."
      ],
      "es": [
        "Nunca compres carne de animales silvestres.",
        "Apoya a los guardaparques que detienen a los cazadores.",
        "En Corcovado, sigue las instrucciones de tu guía si te encuentras una manada."
      ]
    },
    "funFact": {
      "en": "When they feel in danger, peccaries clack their teeth loudly as a warning.",
      "es": "Cuando se sienten en peligro, los chanchos de monte castañetean los dientes fuerte como advertencia."
    },
    "wiki": "White-lipped_peccary",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63585488/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/63585488/large.jpeg",
      "author": "Rob Foster",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/63585488",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "oncilla",
    "group": "mammal",
    "emoji": "🐈",
    "scientific": "Leopardus tigrinus",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Oncilla",
      "es": "Tigrillo"
    },
    "statusNote": {
      "en": "Scientists recently proposed that Costa Rica's oncillas are a separate species, the clouded tiger cat (Leopardus pardinoides). The IUCN hasn't confirmed this yet.",
      "es": "Hace poco, unos científicos propusieron que los tigrillos de Costa Rica son una especie aparte (Leopardus pardinoides). La UICN todavía no lo ha confirmado."
    },
    "summary": {
      "en": "A spotted wild cat about the size of a house cat. It is shy and very rarely seen.",
      "es": "Un gato salvaje con manchas, del tamaño de un gato doméstico. Es tímido y casi nunca se deja ver."
    },
    "where": {
      "en": "Cool cloud forests high in the mountains, like Talamanca and the Central Volcanic range.",
      "es": "Bosques nubosos frescos en lo alto de las montañas, como Talamanca y la cordillera Volcánica Central."
    },
    "threats": {
      "en": "Forest loss, cars on mountain roads, and pet dogs that chase it.",
      "es": "La pérdida de bosque, los carros en las carreteras de montaña y los perros que lo persiguen."
    },
    "help": {
      "en": [
        "Keep pet dogs and cats inside at night if you live near forest.",
        "Drive slowly on mountain roads.",
        "Support cloud forest reserves."
      ],
      "es": [
        "Si vives cerca del bosque, mantén a tus perros y gatos adentro por la noche.",
        "Maneja despacio en las carreteras de montaña.",
        "Apoya las reservas de bosque nuboso."
      ]
    },
    "funFact": {
      "en": "Some oncillas in Costa Rica are completely black!",
      "es": "¡Algunos tigrillos en Costa Rica son completamente negros!"
    },
    "wiki": "Oncilla",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/720982266/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/720982266/large.jpg",
      "author": "Michelle Monge-Velazquez",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/720982266",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "west-indian-manatee",
    "group": "mammal",
    "emoji": "🌊",
    "scientific": "Trichechus manatus",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "West Indian Manatee",
      "es": "Manatí"
    },
    "summary": {
      "en": "A gentle, slow 'sea cow' that grazes on water plants.",
      "es": "Una 'vaca marina' tranquila y lenta que come plantas acuáticas."
    },
    "where": {
      "en": "Rivers, canals and lagoons on the Caribbean side, like Tortuguero, Barra del Colorado and Gandoca-Manzanillo.",
      "es": "Ríos, canales y lagunas del Caribe, como Tortuguero, Barra del Colorado y Gandoca-Manzanillo."
    },
    "threats": {
      "en": "Being hit by boats, getting tangled in fishing gear, and past hunting.",
      "es": "Los golpes de lanchas, enredarse en artes de pesca y la cacería del pasado."
    },
    "help": {
      "en": [
        "On boat tours, ask the driver to go slowly in canals.",
        "Never leave fishing line or nets in the water.",
        "Support Caribbean wetland protection."
      ],
      "es": [
        "En los tours en lancha, pide que vayan despacio por los canales.",
        "Nunca dejes cuerdas de pesca o redes en el agua.",
        "Apoya la protección de los humedales del Caribe."
      ]
    },
    "funFact": {
      "en": "A manatee's closest living relatives are elephants!",
      "es": "¡Los parientes vivos más cercanos del manatí son los elefantes!"
    },
    "wiki": "West_Indian_manatee",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/61186254/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/61186254/large.jpg",
      "author": "Samuel Paul Galick",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/61186254",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "giant-anteater",
    "group": "mammal",
    "emoji": "🐜",
    "scientific": "Myrmecophaga tridactyla",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Giant Anteater",
      "es": "Oso Hormiguero Gigante"
    },
    "statusNote": {
      "en": "Extremely rare in Costa Rica. Scientists aren't sure it still lives here.",
      "es": "Extremadamente raro en Costa Rica. Los científicos no están seguros de que todavía viva aquí."
    },
    "summary": {
      "en": "A big animal with a long snout, a bushy tail and no teeth at all.",
      "es": "Un animal grande con un hocico largo, una cola peluda y ningún diente."
    },
    "where": {
      "en": "Possibly remote lowland forests in the south, such as the Osa Peninsula.",
      "es": "Posiblemente en bosques bajos y remotos del sur, como la península de Osa."
    },
    "threats": {
      "en": "Habitat loss, fires and roads.",
      "es": "La pérdida de hábitat, los incendios y las carreteras."
    },
    "help": {
      "en": [
        "If you ever see one, take a photo and report it to SINAC or on iNaturalist.",
        "Support forest protection in the south of Costa Rica."
      ],
      "es": [
        "Si alguna vez ves uno, tómale una foto y repórtalo al SINAC o en iNaturalist.",
        "Apoya la protección de los bosques del sur de Costa Rica."
      ]
    },
    "funFact": {
      "en": "Its sticky tongue can stretch about 60 cm (2 feet) and flick in and out super fast to slurp up ants.",
      "es": "Su lengua pegajosa mide unos 60 cm y entra y sale rapidísimo para atrapar hormigas."
    },
    "wiki": "Giant_anteater",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/345917023/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/345917023/large.jpeg",
      "author": "djcooker",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/345917023",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "harris-rice-water-rat",
    "group": "mammal",
    "emoji": "🐭",
    "scientific": "Sigmodontomys aphrastus",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Harris's Rice Water Rat",
      "es": "Rata de Agua de Harris"
    },
    "summary": {
      "en": "A mysterious rodent known from only a few specimens ever found.",
      "es": "Un roedor misterioso, conocido por muy pocos ejemplares encontrados."
    },
    "where": {
      "en": "Wet mountain forests near streams.",
      "es": "Bosques húmedos de montaña cerca de quebradas."
    },
    "threats": {
      "en": "Forest loss in its very small range.",
      "es": "La pérdida de bosque en su área tan pequeña."
    },
    "help": {
      "en": [
        "Support protection of mountain streams and forests."
      ],
      "es": [
        "Apoya la protección de las quebradas y bosques de montaña."
      ]
    },
    "funFact": {
      "en": "It is so rare that scientists still know very little about how it lives.",
      "es": "Es tan rara que los científicos todavía saben muy poco sobre cómo vive."
    },
    "wiki": "Harris's_rice_water_rat",
    "photo": {
      "url": "https://collections.nmnh.si.edu/media/?i=14166063&h=2000",
      "large": "https://collections.nmnh.si.edu/media/?i=14166063&h=2000",
      "author": "R. Pine",
      "license": "CC0",
      "page": "https://www.gbif.org/occurrence/1317491312",
      "source": "GBIF",
      "cardOk": true
    }
  },
  {
    "id": "rodriguez-harvest-mouse",
    "group": "mammal",
    "emoji": "🐭",
    "scientific": "Reithrodontomys rodriguezi",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Rodriguez's Harvest Mouse",
      "es": "Ratón Cosechero de Rodríguez"
    },
    "summary": {
      "en": "A small mouse found only in Costa Rica.",
      "es": "Un ratoncito que solo existe en Costa Rica."
    },
    "where": {
      "en": "High mountain areas of Costa Rica.",
      "es": "Zonas de montaña alta de Costa Rica."
    },
    "threats": {
      "en": "It lives in a very small area, so any habitat loss affects it a lot.",
      "es": "Vive en un área muy pequeña, así que cualquier pérdida de hábitat le afecta mucho."
    },
    "help": {
      "en": [
        "Support protection of Costa Rica's highland forests."
      ],
      "es": [
        "Apoya la protección de los bosques de altura de Costa Rica."
      ]
    },
    "funFact": {
      "en": "It lives nowhere else on Earth: a true Costa Rican!",
      "es": "No vive en ningún otro lugar del mundo: ¡un verdadero tico!"
    },
    "wiki": "Rodríguez's_harvest_mouse",
    "photo": null
  },
  {
    "id": "dices-cottontail",
    "group": "mammal",
    "emoji": "🐇",
    "scientific": "Sylvilagus dicei",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Dice's Cottontail",
      "es": "Conejo de Dice"
    },
    "summary": {
      "en": "A dark, fluffy rabbit that lives high in the mountains.",
      "es": "Un conejo oscuro y peludo que vive en lo alto de las montañas."
    },
    "where": {
      "en": "The cold highlands of the Talamanca mountains in Costa Rica and Panama.",
      "es": "Las tierras altas y frías de la cordillera de Talamanca, en Costa Rica y Panamá."
    },
    "threats": {
      "en": "Habitat loss and a small range.",
      "es": "La pérdida de hábitat y un área pequeña."
    },
    "help": {
      "en": [
        "Stay on trails when hiking in the highlands, like Chirripó.",
        "Keep dogs on a leash in the mountains."
      ],
      "es": [
        "Quédate en los senderos cuando camines en zonas altas, como el Chirripó.",
        "Mantén a los perros con correa en las montañas."
      ]
    },
    "funFact": {
      "en": "It is one of the few rabbits that lives in Central America's high mountains.",
      "es": "Es uno de los pocos conejos que viven en las montañas altas de Centroamérica."
    },
    "wiki": "Dice's_cottontail",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/645827148/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/645827148/large.jpg",
      "author": "Anthony Mora Aguilar",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/645827148",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "talamancan-shrew",
    "group": "mammal",
    "emoji": "🐭",
    "scientific": "Cryptotis gracilis",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Talamancan Small-eared Shrew",
      "es": "Musaraña de Talamanca"
    },
    "summary": {
      "en": "A tiny, busy insect-eater with very small ears.",
      "es": "Un animalito pequeño y muy activo que come insectos y tiene orejas diminutas."
    },
    "where": {
      "en": "High forests of the Talamanca mountains.",
      "es": "Bosques altos de la cordillera de Talamanca."
    },
    "threats": {
      "en": "Habitat loss in its small mountain home.",
      "es": "La pérdida de hábitat en su pequeño hogar de montaña."
    },
    "help": {
      "en": [
        "Support protection of La Amistad and Chirripó national parks."
      ],
      "es": [
        "Apoya la protección de los parques nacionales La Amistad y Chirripó."
      ]
    },
    "funFact": {
      "en": "Shrews look like mice, but they are actually more closely related to moles and hedgehogs.",
      "es": "Las musarañas parecen ratones, pero en realidad son parientes más cercanos de los topos y los erizos."
    },
    "wiki": "Talamancan_small-eared_shrew",
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Cryptotis_gracilis.jpg?width=500",
      "large": "https://commons.wikimedia.org/wiki/Special:FilePath/Cryptotis_gracilis.jpg?width=1024",
      "author": "Katie Sayers",
      "license": "CC0",
      "page": "https://commons.wikimedia.org/wiki/File:Cryptotis_gracilis.jpg",
      "source": "Wikimedia Commons",
      "cardOk": true
    }
  },
  {
    "id": "van-gelders-bat",
    "group": "mammal",
    "emoji": "🦇",
    "scientific": "Bauerus dubiaquercus",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Van Gelder's Bat",
      "es": "Murciélago de Van Gelder"
    },
    "summary": {
      "en": "A rare, big-eared bat that hunts insects at night.",
      "es": "Un murciélago raro, de orejas grandes, que caza insectos de noche."
    },
    "where": {
      "en": "Forests in Central America, including Costa Rica.",
      "es": "Bosques de Centroamérica, incluyendo Costa Rica."
    },
    "threats": {
      "en": "Forest loss.",
      "es": "La pérdida de bosque."
    },
    "help": {
      "en": [
        "Never disturb bats resting in caves or trees.",
        "Bats eat tons of mosquitoes. Tell people why bats are our friends!"
      ],
      "es": [
        "Nunca molestes a los murciélagos que descansan en cuevas o árboles.",
        "Los murciélagos comen muchísimos zancudos. ¡Cuéntale a la gente por qué son nuestros amigos!"
      ]
    },
    "funFact": {
      "en": "Costa Rica has more than 100 kinds of bats!",
      "es": "¡Costa Rica tiene más de 100 tipos de murciélagos!"
    },
    "wiki": "Van_Gelder's_bat",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13060067/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/13060067/large.jpg",
      "author": "Dan Riskin",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/13060067",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "tacarcuna-bat",
    "group": "mammal",
    "emoji": "🦇",
    "scientific": "Lasiurus castaneus",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Tacarcuna Bat",
      "es": "Murciélago de Tacarcuna"
    },
    "summary": {
      "en": "A reddish-brown bat that roosts in tree leaves instead of caves.",
      "es": "Un murciélago café rojizo que descansa entre las hojas de los árboles en vez de en cuevas."
    },
    "where": {
      "en": "Forests of Costa Rica and Panama.",
      "es": "Bosques de Costa Rica y Panamá."
    },
    "threats": {
      "en": "Forest loss.",
      "es": "La pérdida de bosque."
    },
    "help": {
      "en": [
        "Protect big old trees, since they are bat homes.",
        "Never disturb resting bats."
      ],
      "es": [
        "Protege los árboles grandes y viejos, porque son casas de murciélagos.",
        "Nunca molestes a los murciélagos que descansan."
      ]
    },
    "funFact": {
      "en": "Its fur color helps it hide among dead leaves while it sleeps.",
      "es": "El color de su pelo le ayuda a esconderse entre hojas secas mientras duerme."
    },
    "wiki": "Tacarcuna_bat",
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Lasiurus_castaneus.jpg?width=500",
      "large": "https://commons.wikimedia.org/wiki/Special:FilePath/Lasiurus_castaneus.jpg?width=1024",
      "author": "Unknown author Unknown author",
      "license": "CC BY",
      "page": "https://commons.wikimedia.org/wiki/File:Lasiurus_castaneus.jpg",
      "source": "Wikimedia Commons",
      "cardOk": true
    }
  },
  {
    "id": "blue-whale",
    "group": "mammal",
    "emoji": "🐋",
    "scientific": "Balaenoptera musculus",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Blue Whale",
      "es": "Ballena Azul"
    },
    "summary": {
      "en": "The biggest animal that has ever lived, even bigger than any dinosaur.",
      "es": "El animal más grande que ha existido, incluso más grande que cualquier dinosaurio."
    },
    "where": {
      "en": "The Costa Rica Thermal Dome, a special area of the Pacific Ocean off Costa Rica's coast where blue whales feed and raise calves.",
      "es": "El Domo Térmico de Costa Rica, una zona especial del océano Pacífico frente a la costa, donde las ballenas azules se alimentan y crían."
    },
    "threats": {
      "en": "Ship strikes, ocean noise and getting tangled in fishing gear. Whaling in the past nearly wiped them out.",
      "es": "Los choques con barcos, el ruido en el océano y enredarse en artes de pesca. La caza de ballenas del pasado casi las elimina."
    },
    "help": {
      "en": [
        "Choose whale-watching tours that keep a respectful distance.",
        "Use less plastic.",
        "Support protection of the Thermal Dome."
      ],
      "es": [
        "Escoge tours de avistamiento que mantengan una distancia respetuosa.",
        "Usa menos plástico.",
        "Apoya la protección del Domo Térmico."
      ]
    },
    "funFact": {
      "en": "A blue whale's heart is about the size of a small car!",
      "es": "¡El corazón de una ballena azul es del tamaño de un carro pequeño!"
    },
    "wiki": "Blue_whale",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/615864130/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/615864130/large.jpg",
      "author": "Tomás Tamagno",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/615864130",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "sperm-whale",
    "group": "mammal",
    "emoji": "🐳",
    "scientific": "Physeter macrocephalus",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Sperm Whale",
      "es": "Cachalote"
    },
    "summary": {
      "en": "A whale with a giant square head and the biggest brain of any animal.",
      "es": "Una ballena con una cabeza enorme y cuadrada, y el cerebro más grande de cualquier animal."
    },
    "where": {
      "en": "Deep waters of the Pacific Ocean off Costa Rica.",
      "es": "Aguas profundas del océano Pacífico frente a Costa Rica."
    },
    "threats": {
      "en": "Ship strikes, ocean noise, plastic and fishing gear. Past whaling also hurt them badly.",
      "es": "Los choques con barcos, el ruido en el océano, el plástico y las artes de pesca. La caza de ballenas del pasado también las afectó mucho."
    },
    "help": {
      "en": [
        "Use less plastic.",
        "Choose responsible whale-watching tours."
      ],
      "es": [
        "Usa menos plástico.",
        "Escoge tours de avistamiento de ballenas responsables."
      ]
    },
    "funFact": {
      "en": "Sperm whales dive deep into the dark ocean to hunt squid.",
      "es": "Los cachalotes bucean a lo profundo del océano oscuro para cazar calamares."
    },
    "wiki": "Sperm_whale",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/219667126/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/219667126/large.jpg",
      "author": "Vsevolod Rudyi",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/219667126",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "neotropical-otter",
    "group": "mammal",
    "emoji": "🦦",
    "scientific": "Lontra longicaudis",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Neotropical Otter",
      "es": "Nutria"
    },
    "summary": {
      "en": "A playful river otter with thick brown fur.",
      "es": "Una nutria de río juguetona con pelo café y espeso."
    },
    "where": {
      "en": "Clean rivers all over the country, from Tortuguero to Corcovado.",
      "es": "Ríos limpios de todo el país, de Tortuguero a Corcovado."
    },
    "threats": {
      "en": "Polluted rivers, dams and hunting.",
      "es": "Los ríos contaminados, las represas y la cacería."
    },
    "help": {
      "en": [
        "Keep streams and rivers clean.",
        "Protect the forest along riverbanks.",
        "Don't use pesticides near water."
      ],
      "es": [
        "Mantén limpias las quebradas y los ríos.",
        "Protege el bosque a la orilla de los ríos.",
        "No uses plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "Otters are a sign of a healthy river.",
      "es": "Las nutrias son señal de un río sano."
    },
    "wiki": "Lontra_longicaudis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/430222515/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/430222515/large.jpeg",
      "author": "Naelin",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/430222515",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "margay",
    "group": "mammal",
    "emoji": "🐈",
    "scientific": "Leopardus wiedii",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Margay",
      "es": "Caucel"
    },
    "summary": {
      "en": "A small spotted cat with huge eyes and a long tail, made for life in the trees.",
      "es": "Un felino pequeño con manchas, ojos enormes y cola larga, hecho para vivir en los árboles."
    },
    "where": {
      "en": "Forests all over the country.",
      "es": "Bosques de todo el país."
    },
    "threats": {
      "en": "Forest loss, cars on roads, and hunting of the animals it eats.",
      "es": "La pérdida de bosque, los carros en las carreteras y la cacería de los animales que come."
    },
    "help": {
      "en": [
        "Drive slowly where you see wildlife-crossing signs.",
        "Never buy spotted fur or wild cats as pets.",
        "Support corridors that connect forests."
      ],
      "es": [
        "Maneja despacio donde veas rótulos de cruce de fauna.",
        "Nunca compres pieles con manchas ni felinos como mascotas.",
        "Apoya los corredores que conectan bosques."
      ]
    },
    "funFact": {
      "en": "It can turn its ankles around to climb down trees head-first, like a squirrel!",
      "es": "¡Puede girar los tobillos para bajar de los árboles de cabeza, como una ardilla!"
    },
    "wiki": "Leopardus_wiedii",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/239567366/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/239567366/large.jpg",
      "author": "Sam Eberhard",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/239567366",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "ocelot",
    "group": "mammal",
    "emoji": "🐆",
    "scientific": "Leopardus pardalis",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Ocelot",
      "es": "Manigordo"
    },
    "summary": {
      "en": "A medium-sized wild cat with chain-like spots.",
      "es": "Un felino mediano con manchas como cadenas."
    },
    "where": {
      "en": "Forests from Corcovado to Guanacaste.",
      "es": "Bosques desde Corcovado hasta Guanacaste."
    },
    "threats": {
      "en": "Forest loss, cars on roads, and hunting of the animals it eats.",
      "es": "La pérdida de bosque, los carros en las carreteras y la cacería de los animales que come."
    },
    "help": {
      "en": [
        "Drive slowly where you see wildlife-crossing signs.",
        "Never buy spotted fur or wild cats as pets.",
        "Support corridors that connect forests."
      ],
      "es": [
        "Maneja despacio donde veas rótulos de cruce de fauna.",
        "Nunca compres pieles con manchas ni felinos como mascotas.",
        "Apoya los corredores que conectan bosques."
      ]
    },
    "funFact": {
      "en": "In Costa Rica it's called 'manigordo', meaning 'fat hands', because of its big front paws!",
      "es": "En Costa Rica le dicen 'manigordo' por sus patas delanteras grandes."
    },
    "wiki": "Leopardus_pardalis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/614905770/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/614905770/large.jpg",
      "author": "Jacek Pietruszewski",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/614905770",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "puma",
    "group": "mammal",
    "emoji": "🐆",
    "scientific": "Puma concolor",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Puma",
      "es": "Puma"
    },
    "summary": {
      "en": "A big tawny cat, the second-largest in Costa Rica after the jaguar.",
      "es": "Un felino grande color arena, el segundo más grande de Costa Rica después del jaguar."
    },
    "where": {
      "en": "Big forests and mountains all over the country.",
      "es": "Bosques grandes y montañas de todo el país."
    },
    "threats": {
      "en": "Forest loss, cars on roads, and hunting of the animals it eats.",
      "es": "La pérdida de bosque, los carros en las carreteras y la cacería de los animales que come."
    },
    "help": {
      "en": [
        "Drive slowly where you see wildlife-crossing signs.",
        "Never buy spotted fur or wild cats as pets.",
        "Support corridors that connect forests."
      ],
      "es": [
        "Maneja despacio donde veas rótulos de cruce de fauna.",
        "Nunca compres pieles con manchas ni felinos como mascotas.",
        "Apoya los corredores que conectan bosques."
      ]
    },
    "funFact": {
      "en": "Pumas can't roar, but they purr like house cats!",
      "es": "Los pumas no pueden rugir, ¡pero ronronean como gatos!"
    },
    "wiki": "Puma_concolor",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/747830974/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/747830974/large.jpg",
      "author": "Carrie Seltzer",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/747830974",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "jaguarundi",
    "group": "mammal",
    "emoji": "🐈",
    "scientific": "Herpailurus yagouaroundi",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Jaguarundi",
      "es": "León Breñero"
    },
    "summary": {
      "en": "A small, sleek wild cat with a long body, a bit like an otter.",
      "es": "Un felino pequeño y elegante de cuerpo largo, parecido a una nutria."
    },
    "where": {
      "en": "Forest edges and brushy areas.",
      "es": "Orillas de bosque y charrales."
    },
    "threats": {
      "en": "Forest loss, cars on roads, and hunting of the animals it eats.",
      "es": "La pérdida de bosque, los carros en las carreteras y la cacería de los animales que come."
    },
    "help": {
      "en": [
        "Drive slowly where you see wildlife-crossing signs.",
        "Never buy spotted fur or wild cats as pets.",
        "Support corridors that connect forests."
      ],
      "es": [
        "Maneja despacio donde veas rótulos de cruce de fauna.",
        "Nunca compres pieles con manchas ni felinos como mascotas.",
        "Apoya los corredores que conectan bosques."
      ]
    },
    "funFact": {
      "en": "Unlike most cats, it often hunts during the day.",
      "es": "A diferencia de casi todos los felinos, muchas veces caza de día."
    },
    "wiki": "Herpailurus_yagouaroundi",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/310267736/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/310267736/large.jpeg",
      "author": "Ben Jobson",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/310267736",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "two-toed-sloth",
    "group": "mammal",
    "emoji": "🦥",
    "scientific": "Choloepus hoffmanni",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Hoffmann's Two-toed Sloth",
      "es": "Perezoso de Dos Dedos"
    },
    "summary": {
      "en": "A shaggy sloth with two fingers on each front foot. It's active at night.",
      "es": "Un perezoso peludo con dos dedos en cada mano. Es activo de noche."
    },
    "where": {
      "en": "Forests and even gardens on both coasts.",
      "es": "Bosques y hasta jardines de ambas costas."
    },
    "threats": {
      "en": "Uncovered power lines, roads, dogs, and people grabbing them for selfies.",
      "es": "Los cables eléctricos sin forrar, las carreteras, los perros y la gente que los agarra para selfies."
    },
    "help": {
      "en": [
        "Never touch or hold a sloth for a photo: it stresses them.",
        "Support covered power lines and wildlife bridges.",
        "Support licensed sloth rescue centers."
      ],
      "es": [
        "Nunca toques ni cargues un perezoso para una foto: los estresa.",
        "Apoya los cables forrados y los puentes de fauna.",
        "Apoya los centros de rescate de perezosos autorizados."
      ]
    },
    "funFact": {
      "en": "Sloths climb down from their tree about once a week to poop!",
      "es": "¡Los perezosos bajan de su árbol más o menos una vez por semana para hacer popó!"
    },
    "wiki": "Choloepus_hoffmanni",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/144252981/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/144252981/large.jpeg",
      "author": "Adrienne van den Beemt",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/144252981",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "three-toed-sloth",
    "group": "mammal",
    "emoji": "🦥",
    "scientific": "Bradypus variegatus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Brown-throated Three-toed Sloth",
      "es": "Perezoso de Tres Dedos"
    },
    "summary": {
      "en": "A sloth with a smiling face and three long claws on each hand.",
      "es": "Un perezoso con cara sonriente y tres garras largas en cada mano."
    },
    "where": {
      "en": "Lowland forests, like Manuel Antonio and Cahuita.",
      "es": "Bosques bajos, como Manuel Antonio y Cahuita."
    },
    "threats": {
      "en": "Uncovered power lines, roads, dogs, and people grabbing them for selfies.",
      "es": "Los cables eléctricos sin forrar, las carreteras, los perros y la gente que los agarra para selfies."
    },
    "help": {
      "en": [
        "Never touch or hold a sloth for a photo: it stresses them.",
        "Support covered power lines and wildlife bridges.",
        "Support licensed sloth rescue centers."
      ],
      "es": [
        "Nunca toques ni cargues un perezoso para una foto: los estresa.",
        "Apoya los cables forrados y los puentes de fauna.",
        "Apoya los centros de rescate de perezosos autorizados."
      ]
    },
    "funFact": {
      "en": "Algae grows in its fur, giving it a greenish camouflage.",
      "es": "En su pelo crecen algas que le dan un camuflaje verdoso."
    },
    "wiki": "Bradypus_variegatus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/89053400/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/89053400/large.jpeg",
      "author": "Thomas Galewski",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/89053400",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "northern-tamandua",
    "group": "mammal",
    "emoji": "🐜",
    "scientific": "Tamandua mexicana",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Northern Tamandua",
      "es": "Oso Colmenero"
    },
    "summary": {
      "en": "A tree-climbing anteater with a golden body and a black 'vest'.",
      "es": "Un oso hormiguero trepador con el cuerpo dorado y un 'chaleco' negro."
    },
    "where": {
      "en": "Forests all over the country.",
      "es": "Bosques de todo el país."
    },
    "threats": {
      "en": "Forest loss, hunting, roads and loose dogs.",
      "es": "La pérdida de bosque, la cacería, las carreteras y los perros sueltos."
    },
    "help": {
      "en": [
        "Drive slowly in forest areas.",
        "Never buy wild-animal meat.",
        "Keep dogs on a leash near forests."
      ],
      "es": [
        "Maneja despacio en zonas de bosque.",
        "Nunca compres carne de animales silvestres.",
        "Mantén a los perros con correa cerca del bosque."
      ]
    },
    "funFact": {
      "en": "It can eat thousands of ants and termites in a single day.",
      "es": "Puede comer miles de hormigas y comejenes en un solo día."
    },
    "wiki": "Tamandua_mexicana",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/637857552/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/637857552/large.jpg",
      "author": "Eyder Fonseca Sanchez",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/637857552",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "silky-anteater",
    "group": "mammal",
    "emoji": "🐜",
    "scientific": "Cyclopes didactylus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Silky Anteater",
      "es": "Serafín de Platanar"
    },
    "summary": {
      "en": "The world's smallest anteater, with soft golden fur.",
      "es": "El oso hormiguero más pequeño del mundo, con pelo dorado y suave."
    },
    "where": {
      "en": "Rainforests and mangroves.",
      "es": "Bosques lluviosos y manglares."
    },
    "threats": {
      "en": "Forest loss, hunting, roads and loose dogs.",
      "es": "La pérdida de bosque, la cacería, las carreteras y los perros sueltos."
    },
    "help": {
      "en": [
        "Drive slowly in forest areas.",
        "Never buy wild-animal meat.",
        "Keep dogs on a leash near forests."
      ],
      "es": [
        "Maneja despacio en zonas de bosque.",
        "Nunca compres carne de animales silvestres.",
        "Mantén a los perros con correa cerca del bosque."
      ]
    },
    "funFact": {
      "en": "It's about the size of a squirrel and sleeps curled up in a ball in the trees.",
      "es": "Es del tamaño de una ardilla y duerme hecho una bolita en los árboles."
    },
    "wiki": "Cyclopes_didactylus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/339473691/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/339473691/large.jpeg",
      "author": "steve b",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/339473691",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "kinkajou",
    "group": "mammal",
    "emoji": "🐻",
    "scientific": "Potos flavus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Kinkajou",
      "es": "Martilla"
    },
    "summary": {
      "en": "A golden night-time tree animal with a grabbing tail and a long tongue.",
      "es": "Un animal dorado y nocturno de los árboles, con cola que agarra y lengua larga."
    },
    "where": {
      "en": "Forests all over the country.",
      "es": "Bosques de todo el país."
    },
    "threats": {
      "en": "Forest loss, hunting, roads and loose dogs.",
      "es": "La pérdida de bosque, la cacería, las carreteras y los perros sueltos."
    },
    "help": {
      "en": [
        "Drive slowly in forest areas.",
        "Never buy wild-animal meat.",
        "Keep dogs on a leash near forests."
      ],
      "es": [
        "Maneja despacio en zonas de bosque.",
        "Nunca compres carne de animales silvestres.",
        "Mantén a los perros con correa cerca del bosque."
      ]
    },
    "funFact": {
      "en": "It's nicknamed the 'honey bear' because it loves fruit and nectar.",
      "es": "Le dicen 'oso de miel' porque le encantan las frutas y el néctar."
    },
    "wiki": "Potos_flavus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/143955539/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/143955539/large.jpeg",
      "author": "Adrienne van den Beemt",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/143955539",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "crab-eating-raccoon",
    "group": "mammal",
    "emoji": "🦝",
    "scientific": "Procyon cancrivorus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Crab-eating Raccoon",
      "es": "Mapache Cangrejero"
    },
    "summary": {
      "en": "A long-legged raccoon that hunts crabs in mangroves.",
      "es": "Un mapache de patas largas que caza cangrejos en los manglares."
    },
    "where": {
      "en": "Mangroves, rivers and beaches.",
      "es": "Manglares, ríos y playas."
    },
    "threats": {
      "en": "Forest loss, hunting, roads and loose dogs.",
      "es": "La pérdida de bosque, la cacería, las carreteras y los perros sueltos."
    },
    "help": {
      "en": [
        "Drive slowly in forest areas.",
        "Never buy wild-animal meat.",
        "Keep dogs on a leash near forests."
      ],
      "es": [
        "Maneja despacio en zonas de bosque.",
        "Nunca compres carne de animales silvestres.",
        "Mantén a los perros con correa cerca del bosque."
      ]
    },
    "funFact": {
      "en": "It feels for food underwater with its sensitive hands.",
      "es": "Busca comida bajo el agua tocando con sus manos sensibles."
    },
    "wiki": "Procyon_cancrivorus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/140948898/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/140948898/large.jpg",
      "author": "João Vitor Oliveira de Souza",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/140948898",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "white-nosed-coati",
    "group": "mammal",
    "emoji": "🦝",
    "scientific": "Nasua narica",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "White-nosed Coati",
      "es": "Pizote"
    },
    "summary": {
      "en": "A curious raccoon relative with a long snout and a tail held straight up.",
      "es": "Un pariente curioso del mapache, con hocico largo y la cola parada."
    },
    "where": {
      "en": "Forests and parks all over the country.",
      "es": "Bosques y parques de todo el país."
    },
    "threats": {
      "en": "Forest loss, hunting, roads and loose dogs.",
      "es": "La pérdida de bosque, la cacería, las carreteras y los perros sueltos."
    },
    "help": {
      "en": [
        "Never feed coatis: human food makes them sick and pushy.",
        "Keep your snacks zipped away in parks.",
        "Drive slowly in forest areas."
      ],
      "es": [
        "Nunca alimentes a los pizotes: la comida humana los enferma y los vuelve atrevidos.",
        "Guarda bien tus snacks en los parques.",
        "Maneja despacio en zonas de bosque."
      ]
    },
    "funFact": {
      "en": "Females and young travel in big groups called 'bands'.",
      "es": "Las hembras y las crías andan en grupos grandes llamados 'bandas'."
    },
    "wiki": "Nasua_narica",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/30276887/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/30276887/large.jpg",
      "author": "Mike Duran",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/30276887",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "tayra",
    "group": "mammal",
    "emoji": "🦡",
    "scientific": "Eira barbara",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Tayra",
      "es": "Tolomuco"
    },
    "summary": {
      "en": "A fast, dark weasel-like animal with a golden head.",
      "es": "Un animal rápido y oscuro parecido a una comadreja, con la cabeza dorada."
    },
    "where": {
      "en": "Forests all over the country.",
      "es": "Bosques de todo el país."
    },
    "threats": {
      "en": "Forest loss, hunting, roads and loose dogs.",
      "es": "La pérdida de bosque, la cacería, las carreteras y los perros sueltos."
    },
    "help": {
      "en": [
        "Drive slowly in forest areas.",
        "Never buy wild-animal meat.",
        "Keep dogs on a leash near forests."
      ],
      "es": [
        "Maneja despacio en zonas de bosque.",
        "Nunca compres carne de animales silvestres.",
        "Mantén a los perros con correa cerca del bosque."
      ]
    },
    "funFact": {
      "en": "Tayras sometimes hide unripe fruit and come back when it's ripe!",
      "es": "¡A veces los tolomucos esconden frutas verdes y regresan cuando ya están maduras!"
    },
    "wiki": "Eira_barbara",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/599039575/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/599039575/large.jpg",
      "author": "Blake Ross",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/599039575",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "collared-peccary",
    "group": "mammal",
    "emoji": "🐗",
    "scientific": "Pecari tajacu",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Collared Peccary",
      "es": "Saíno"
    },
    "summary": {
      "en": "A small wild pig-like animal with a pale collar around its neck.",
      "es": "Un animal salvaje pequeño parecido a un cerdo, con un collar claro en el cuello."
    },
    "where": {
      "en": "Forests all over the country.",
      "es": "Bosques de todo el país."
    },
    "threats": {
      "en": "Forest loss, hunting, roads and loose dogs.",
      "es": "La pérdida de bosque, la cacería, las carreteras y los perros sueltos."
    },
    "help": {
      "en": [
        "Drive slowly in forest areas.",
        "Never buy wild-animal meat.",
        "Keep dogs on a leash near forests."
      ],
      "es": [
        "Maneja despacio en zonas de bosque.",
        "Nunca compres carne de animales silvestres.",
        "Mantén a los perros con correa cerca del bosque."
      ]
    },
    "funFact": {
      "en": "Peccaries recognize each other by smell, using a scent gland on their backs.",
      "es": "Los saínos se reconocen por el olor de una glándula en la espalda."
    },
    "wiki": "Pecari_tajacu",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/505661570/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/505661570/large.jpg",
      "author": "Bennett Grappone",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/505661570",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "white-tailed-deer",
    "group": "mammal",
    "emoji": "🦌",
    "scientific": "Odocoileus virginianus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "White-tailed Deer",
      "es": "Venado Cola Blanca"
    },
    "summary": {
      "en": "A graceful deer that flashes its white tail when it runs.",
      "es": "Un venado elegante que muestra su cola blanca cuando corre."
    },
    "where": {
      "en": "Dry forests and open areas, especially in Guanacaste.",
      "es": "Bosques secos y zonas abiertas, sobre todo en Guanacaste."
    },
    "threats": {
      "en": "Forest loss, hunting, roads and loose dogs.",
      "es": "La pérdida de bosque, la cacería, las carreteras y los perros sueltos."
    },
    "help": {
      "en": [
        "Drive slowly in forest areas.",
        "Never buy wild-animal meat.",
        "Keep dogs on a leash near forests."
      ],
      "es": [
        "Maneja despacio en zonas de bosque.",
        "Nunca compres carne de animales silvestres.",
        "Mantén a los perros con correa cerca del bosque."
      ]
    },
    "funFact": {
      "en": "It's a national symbol of Costa Rica's wildlife!",
      "es": "¡Es símbolo nacional de la fauna de Costa Rica!"
    },
    "wiki": "Odocoileus_virginianus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/11066858/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/11066858/large.jpg",
      "author": "Andy Wilson",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/11066858",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "red-brocket",
    "group": "mammal",
    "emoji": "🦌",
    "scientific": "Mazama temama",
    "status": "DD",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Central American Red Brocket",
      "es": "Cabro de Monte"
    },
    "summary": {
      "en": "A small, shy reddish deer with short spike antlers.",
      "es": "Un venado pequeño, tímido y rojizo, con cuernos cortos y rectos."
    },
    "where": {
      "en": "Thick forests all over the country.",
      "es": "Bosques espesos de todo el país."
    },
    "threats": {
      "en": "Forest loss, hunting, roads and loose dogs.",
      "es": "La pérdida de bosque, la cacería, las carreteras y los perros sueltos."
    },
    "help": {
      "en": [
        "Drive slowly in forest areas.",
        "Never buy wild-animal meat.",
        "Keep dogs on a leash near forests."
      ],
      "es": [
        "Maneja despacio en zonas de bosque.",
        "Nunca compres carne de animales silvestres.",
        "Mantén a los perros con correa cerca del bosque."
      ]
    },
    "funFact": {
      "en": "Its short antlers help it move through thick forest.",
      "es": "Sus cuernos cortos le ayudan a moverse por el bosque espeso."
    },
    "wiki": "Mazama_temama",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/103302459/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/103302459/large.jpeg",
      "author": "Zac Peterson",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/103302459",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "agouti",
    "group": "mammal",
    "emoji": "🐀",
    "scientific": "Dasyprocta punctata",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Central American Agouti",
      "es": "Guatusa"
    },
    "summary": {
      "en": "A long-legged rodent that looks like a giant guinea pig.",
      "es": "Un roedor de patas largas que parece un cuilo gigante."
    },
    "where": {
      "en": "Forests and parks all over the country.",
      "es": "Bosques y parques de todo el país."
    },
    "threats": {
      "en": "Forest loss, hunting, roads and loose dogs.",
      "es": "La pérdida de bosque, la cacería, las carreteras y los perros sueltos."
    },
    "help": {
      "en": [
        "Drive slowly in forest areas.",
        "Never buy wild-animal meat.",
        "Keep dogs on a leash near forests."
      ],
      "es": [
        "Maneja despacio en zonas de bosque.",
        "Nunca compres carne de animales silvestres.",
        "Mantén a los perros con correa cerca del bosque."
      ]
    },
    "funFact": {
      "en": "Agoutis bury seeds and forget some of them, planting new trees!",
      "es": "Las guatusas entierran semillas y se les olvidan algunas: ¡así siembran árboles!"
    },
    "wiki": "Dasyprocta_punctata",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/25796566/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/25796566/large.jpg",
      "author": "Ken-ichi Ueda",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/25796566",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "lowland-paca",
    "group": "mammal",
    "emoji": "🐀",
    "scientific": "Cuniculus paca",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Lowland Paca",
      "es": "Tepezcuintle"
    },
    "summary": {
      "en": "A large, spotted night-time rodent.",
      "es": "Un roedor grande, con manchas, que sale de noche."
    },
    "where": {
      "en": "Forests near rivers.",
      "es": "Bosques cerca de los ríos."
    },
    "threats": {
      "en": "Hunting for its meat, and forest loss.",
      "es": "La cacería por su carne y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Drive slowly in forest areas.",
        "Never buy wild-animal meat.",
        "Keep dogs on a leash near forests."
      ],
      "es": [
        "Maneja despacio en zonas de bosque.",
        "Nunca compres carne de animales silvestres.",
        "Mantén a los perros con correa cerca del bosque."
      ]
    },
    "funFact": {
      "en": "It's an excellent swimmer and escapes predators by diving into rivers.",
      "es": "Es una gran nadadora y escapa de los depredadores lanzándose al río."
    },
    "wiki": "Cuniculus_paca",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/31988178/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/31988178/large.jpeg",
      "author": "Rob Foster",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/31988178",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "hairy-dwarf-porcupine",
    "group": "mammal",
    "emoji": "🦔",
    "scientific": "Coendou mexicanus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Mexican Hairy Dwarf Porcupine",
      "es": "Puercoespín"
    },
    "summary": {
      "en": "A tree porcupine with spines hidden in long hair and a grabbing tail.",
      "es": "Un puercoespín de árbol con espinas escondidas entre pelo largo y cola que agarra."
    },
    "where": {
      "en": "Forests all over the country.",
      "es": "Bosques de todo el país."
    },
    "threats": {
      "en": "Forest loss, hunting, roads and loose dogs.",
      "es": "La pérdida de bosque, la cacería, las carreteras y los perros sueltos."
    },
    "help": {
      "en": [
        "Drive slowly in forest areas.",
        "Never buy wild-animal meat.",
        "Keep dogs on a leash near forests."
      ],
      "es": [
        "Maneja despacio en zonas de bosque.",
        "Nunca compres carne de animales silvestres.",
        "Mantén a los perros con correa cerca del bosque."
      ]
    },
    "funFact": {
      "en": "Its tail can wrap around branches like a monkey's.",
      "es": "Su cola se enrolla en las ramas como la de un mono."
    },
    "wiki": "Coendou_mexicanus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/722564639/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/722564639/large.jpg",
      "author": "Dixie Sommers",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/722564639",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "variegated-squirrel",
    "group": "mammal",
    "emoji": "🐿️",
    "scientific": "Sciurus variegatoides",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Variegated Squirrel",
      "es": "Ardilla Chiza"
    },
    "summary": {
      "en": "A big squirrel that comes in many different color patterns.",
      "es": "Una ardilla grande que viene en muchos colores diferentes."
    },
    "where": {
      "en": "Forests, farms and parks.",
      "es": "Bosques, fincas y parques."
    },
    "threats": {
      "en": "It is not in danger today. Common animals still need healthy habitats to stay common!",
      "es": "Hoy no está en peligro. ¡Los animales comunes también necesitan hábitats sanos para seguir siéndolo!"
    },
    "help": {
      "en": [
        "Plant native trees and flowers.",
        "Keep pet cats indoors.",
        "Put stickers on big windows so birds don't crash into them."
      ],
      "es": [
        "Siembra árboles y flores nativas.",
        "Mantén a los gatos dentro de la casa.",
        "Pon calcomanías en las ventanas grandes para que las aves no choquen."
      ]
    },
    "funFact": {
      "en": "Squirrels in different parts of Costa Rica can look totally different.",
      "es": "Las ardillas de distintas partes de Costa Rica pueden verse totalmente diferentes."
    },
    "wiki": "Sciurus_variegatoides",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/110613789/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/110613789/large.jpg",
      "author": "Morten Ross",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/110613789",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "honduran-white-bat",
    "group": "mammal",
    "emoji": "🦇",
    "scientific": "Ectophylla alba",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Honduran White Bat",
      "es": "Murciélago Blanco"
    },
    "summary": {
      "en": "A tiny, fluffy white bat with a yellow nose and ears.",
      "es": "Un murciélago diminuto, blanco y peludo, con nariz y orejas amarillas."
    },
    "where": {
      "en": "Caribbean rainforests.",
      "es": "Bosques lluviosos del Caribe."
    },
    "threats": {
      "en": "Forest loss, and people who fear bats and destroy their roosts.",
      "es": "La pérdida de bosque y las personas que les tienen miedo y destruyen sus refugios."
    },
    "help": {
      "en": [
        "Never disturb bats resting in caves, trees or leaves.",
        "Tell people why bats are our friends: they eat insects and spread seeds.",
        "Protect old trees and forests."
      ],
      "es": [
        "Nunca molestes a los murciélagos que descansan en cuevas, árboles u hojas.",
        "Cuéntale a la gente por qué son nuestros amigos: comen insectos y riegan semillas.",
        "Protege los árboles viejos y los bosques."
      ]
    },
    "funFact": {
      "en": "It makes tents by cutting heliconia leaves and hides under them in groups.",
      "es": "Hace 'tiendas de campaña' cortando hojas de platanilla y se esconde debajo en grupo."
    },
    "wiki": "Ectophylla_alba",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/390362630/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/390362630/large.jpeg",
      "author": "Dean Hester",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/390362630",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "greater-bulldog-bat",
    "group": "mammal",
    "emoji": "🦇",
    "scientific": "Noctilio leporinus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Greater Bulldog Bat",
      "es": "Murciélago Pescador"
    },
    "summary": {
      "en": "A big bat that catches fish with its long claws.",
      "es": "Un murciélago grande que pesca con sus garras largas."
    },
    "where": {
      "en": "Rivers, lagoons and coasts.",
      "es": "Ríos, lagunas y costas."
    },
    "threats": {
      "en": "Forest loss, and people who fear bats and destroy their roosts.",
      "es": "La pérdida de bosque y las personas que les tienen miedo y destruyen sus refugios."
    },
    "help": {
      "en": [
        "Never disturb bats resting in caves, trees or leaves.",
        "Tell people why bats are our friends: they eat insects and spread seeds.",
        "Protect old trees and forests."
      ],
      "es": [
        "Nunca molestes a los murciélagos que descansan en cuevas, árboles u hojas.",
        "Cuéntale a la gente por qué son nuestros amigos: comen insectos y riegan semillas.",
        "Protege los árboles viejos y los bosques."
      ]
    },
    "funFact": {
      "en": "It uses echolocation to find ripples made by fish on the water.",
      "es": "Usa la ecolocalización para encontrar las ondas que hacen los peces en el agua."
    },
    "wiki": "Noctilio_leporinus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/260067481/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/260067481/large.jpg",
      "author": "Annette Herz",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/260067481",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "spectral-bat",
    "group": "mammal",
    "emoji": "🦇",
    "scientific": "Vampyrum spectrum",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Spectral Bat",
      "es": "Falso Vampiro"
    },
    "summary": {
      "en": "The biggest bat in the Americas, with wings up to about 1 meter across.",
      "es": "El murciélago más grande de América, con alas de hasta un metro de punta a punta."
    },
    "where": {
      "en": "Lowland forests.",
      "es": "Bosques bajos."
    },
    "threats": {
      "en": "Forest loss, and people who fear bats and destroy their roosts.",
      "es": "La pérdida de bosque y las personas que les tienen miedo y destruyen sus refugios."
    },
    "help": {
      "en": [
        "Never disturb bats resting in caves, trees or leaves.",
        "Tell people why bats are our friends: they eat insects and spread seeds.",
        "Protect old trees and forests."
      ],
      "es": [
        "Nunca molestes a los murciélagos que descansan en cuevas, árboles u hojas.",
        "Cuéntale a la gente por qué son nuestros amigos: comen insectos y riegan semillas.",
        "Protege los árboles viejos y los bosques."
      ]
    },
    "funFact": {
      "en": "Despite its spooky name, it doesn't drink blood: it hunts birds and mice.",
      "es": "Aunque su nombre asusta, no toma sangre: caza aves y ratones."
    },
    "wiki": "Vampyrum_spectrum",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/53707850/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/53707850/large.jpg",
      "author": "Matt Muir",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/53707850",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "water-opossum",
    "group": "mammal",
    "emoji": "🐀",
    "scientific": "Chironectes minimus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Water Opossum",
      "es": "Zorro de Agua"
    },
    "summary": {
      "en": "The only marsupial that lives in water, with webbed back feet.",
      "es": "El único marsupial que vive en el agua, con patas traseras palmeadas."
    },
    "where": {
      "en": "Clean forest streams.",
      "es": "Quebradas limpias del bosque."
    },
    "threats": {
      "en": "Polluted streams and forest loss.",
      "es": "Las quebradas contaminadas y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Keep streams and rivers clean.",
        "Protect the forest along riverbanks.",
        "Don't use pesticides near water."
      ],
      "es": [
        "Mantén limpias las quebradas y los ríos.",
        "Protege el bosque a la orilla de los ríos.",
        "No uses plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "Mothers can close their pouch tight so babies stay dry underwater!",
      "es": "¡Las mamás pueden cerrar su bolsa para que las crías no se mojen bajo el agua!"
    },
    "wiki": "Chironectes_minimus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/91742388/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/91742388/large.jpeg",
      "author": "Eduardo Chacón Madrigal",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/91742388",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "nine-banded-armadillo",
    "group": "mammal",
    "emoji": "🐾",
    "scientific": "Dasypus novemcinctus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Nine-banded Armadillo",
      "es": "Cusuco"
    },
    "summary": {
      "en": "An armored animal with bony bands on its back.",
      "es": "Un animal con armadura y bandas de hueso en la espalda."
    },
    "where": {
      "en": "Forests and farms all over the country.",
      "es": "Bosques y fincas de todo el país."
    },
    "threats": {
      "en": "Forest loss, hunting, roads and loose dogs.",
      "es": "La pérdida de bosque, la cacería, las carreteras y los perros sueltos."
    },
    "help": {
      "en": [
        "Drive slowly in forest areas.",
        "Never buy wild-animal meat.",
        "Keep dogs on a leash near forests."
      ],
      "es": [
        "Maneja despacio en zonas de bosque.",
        "Nunca compres carne de animales silvestres.",
        "Mantén a los perros con correa cerca del bosque."
      ]
    },
    "funFact": {
      "en": "It almost always gives birth to four identical babies!",
      "es": "¡Casi siempre tiene cuatro crías idénticas!"
    },
    "wiki": "Dasypus_novemcinctus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/552761863/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/552761863/large.jpg",
      "author": "Bruno Henrique Aranda",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/552761863",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "humpback-whale",
    "group": "mammal",
    "emoji": "🐋",
    "scientific": "Megaptera novaeangliae",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Humpback Whale",
      "es": "Ballena Jorobada"
    },
    "summary": {
      "en": "A big whale famous for jumping and singing.",
      "es": "Una ballena grande, famosa por sus saltos y sus cantos."
    },
    "where": {
      "en": "Marino Ballena National Park in Uvita and the Osa coast.",
      "es": "El Parque Nacional Marino Ballena en Uvita y la costa de Osa."
    },
    "threats": {
      "en": "Ship strikes, fishing nets, ocean noise and plastic.",
      "es": "Los choques con barcos, las redes de pesca, el ruido en el océano y el plástico."
    },
    "help": {
      "en": [
        "Choose tours that keep a respectful distance.",
        "Use less plastic.",
        "Support marine protected areas like Marino Ballena."
      ],
      "es": [
        "Escoge tours que mantengan una distancia respetuosa.",
        "Usa menos plástico.",
        "Apoya áreas marinas protegidas como Marino Ballena."
      ]
    },
    "funFact": {
      "en": "Humpbacks from both the north and the south visit Costa Rica, so whale season here is extra long!",
      "es": "Llegan jorobadas del norte y del sur, ¡así que la temporada de ballenas aquí es extra larga!"
    },
    "wiki": "Megaptera_novaeangliae",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/351464314/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/351464314/large.jpeg",
      "author": "cactusauria",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/351464314",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "guiana-dolphin",
    "group": "mammal",
    "emoji": "🐬",
    "scientific": "Sotalia guianensis",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Guiana Dolphin",
      "es": "Delfín Costero"
    },
    "summary": {
      "en": "A small gray dolphin of coastal waters.",
      "es": "Un delfín pequeño y gris de aguas cercanas a la costa."
    },
    "where": {
      "en": "Gandoca-Manzanillo, on the Caribbean coast.",
      "es": "Gandoca-Manzanillo, en la costa del Caribe."
    },
    "threats": {
      "en": "Ship strikes, fishing nets, ocean noise and plastic.",
      "es": "Los choques con barcos, las redes de pesca, el ruido en el océano y el plástico."
    },
    "help": {
      "en": [
        "Choose tours that keep a respectful distance.",
        "Use less plastic.",
        "Support marine protected areas like Marino Ballena."
      ],
      "es": [
        "Escoge tours que mantengan una distancia respetuosa.",
        "Usa menos plástico.",
        "Apoya áreas marinas protegidas como Marino Ballena."
      ]
    },
    "funFact": {
      "en": "It lives close to shore and in river mouths.",
      "es": "Vive cerca de la orilla y en las desembocaduras de los ríos."
    },
    "wiki": "Sotalia_guianensis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/631192662/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/631192662/large.jpg",
      "author": "Reizo Knapp",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/631192662",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "bottlenose-dolphin",
    "group": "mammal",
    "emoji": "🐬",
    "scientific": "Tursiops truncatus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Bottlenose Dolphin",
      "es": "Delfín Nariz de Botella"
    },
    "summary": {
      "en": "A smart, playful dolphin with a short, thick snout.",
      "es": "Un delfín inteligente y juguetón, con el hocico corto y grueso."
    },
    "where": {
      "en": "Both coasts.",
      "es": "Ambas costas."
    },
    "threats": {
      "en": "Ship strikes, fishing nets, ocean noise and plastic.",
      "es": "Los choques con barcos, las redes de pesca, el ruido en el océano y el plástico."
    },
    "help": {
      "en": [
        "Choose tours that keep a respectful distance.",
        "Use less plastic.",
        "Support marine protected areas like Marino Ballena."
      ],
      "es": [
        "Escoge tours que mantengan una distancia respetuosa.",
        "Usa menos plástico.",
        "Apoya áreas marinas protegidas como Marino Ballena."
      ]
    },
    "funFact": {
      "en": "Each dolphin has its own special whistle, like a name!",
      "es": "¡Cada delfín tiene su propio silbido especial, como un nombre!"
    },
    "wiki": "Tursiops_truncatus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/358932447/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/358932447/large.jpeg",
      "author": "Buckelkopfcichlide",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/358932447",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "galapagos-sea-lion",
    "group": "mammal",
    "emoji": "🦭",
    "scientific": "Zalophus wollebaeki",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Galápagos Sea Lion",
      "es": "Lobo Marino de Galápagos"
    },
    "statusNote": {
      "en": "A rare visitor, not a resident of Costa Rica.",
      "es": "Es un visitante raro, no vive en Costa Rica."
    },
    "summary": {
      "en": "A playful sea lion that sometimes swims all the way to Costa Rica.",
      "es": "Un lobo marino juguetón que a veces nada hasta Costa Rica."
    },
    "where": {
      "en": "A rare visitor to Cocos Island and the Pacific coast.",
      "es": "Visitante raro de la Isla del Coco y la costa del Pacífico."
    },
    "threats": {
      "en": "Ship strikes, fishing nets, ocean noise and plastic.",
      "es": "Los choques con barcos, las redes de pesca, el ruido en el océano y el plástico."
    },
    "help": {
      "en": [
        "Choose tours that keep a respectful distance.",
        "Use less plastic.",
        "Support marine protected areas like Marino Ballena."
      ],
      "es": [
        "Escoge tours que mantengan una distancia respetuosa.",
        "Usa menos plástico.",
        "Apoya áreas marinas protegidas como Marino Ballena."
      ]
    },
    "funFact": {
      "en": "Sea lions can 'walk' on land by turning their back flippers forward.",
      "es": "Los lobos marinos pueden 'caminar' en tierra girando sus aletas traseras hacia adelante."
    },
    "wiki": "Zalophus_wollebaeki",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/574842170/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/574842170/large.jpg",
      "author": "Raúl A. Ruiz M.",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/574842170",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "false-killer-whale",
    "group": "mammal",
    "emoji": "🐋",
    "scientific": "Pseudorca crassidens",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "False Killer Whale",
      "es": "Falsa Orca"
    },
    "summary": {
      "en": "A large black dolphin that travels in close family groups.",
      "es": "Un delfín grande y negro que viaja en grupos familiares unidos."
    },
    "where": {
      "en": "Deep Pacific waters.",
      "es": "Aguas profundas del Pacífico."
    },
    "threats": {
      "en": "Ship strikes, fishing nets, ocean noise and plastic.",
      "es": "Los choques con barcos, las redes de pesca, el ruido en el océano y el plástico."
    },
    "help": {
      "en": [
        "Choose tours that keep a respectful distance.",
        "Use less plastic.",
        "Support marine protected areas like Marino Ballena."
      ],
      "es": [
        "Escoge tours que mantengan una distancia respetuosa.",
        "Usa menos plástico.",
        "Apoya áreas marinas protegidas como Marino Ballena."
      ]
    },
    "funFact": {
      "en": "Despite its name, it's actually a big dolphin.",
      "es": "Aunque se llame así, en realidad es un delfín grande."
    },
    "wiki": "Pseudorca_crassidens",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/432072959/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/432072959/large.jpg",
      "author": "Tony King",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/432072959",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "spotted-dolphin",
    "group": "mammal",
    "emoji": "🐬",
    "scientific": "Stenella attenuata",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Pantropical Spotted Dolphin",
      "es": "Delfín Manchado"
    },
    "summary": {
      "en": "A dolphin that gets more spots as it grows older.",
      "es": "Un delfín que tiene más manchas conforme crece."
    },
    "where": {
      "en": "Pacific waters, like the Golfo Dulce.",
      "es": "Aguas del Pacífico, como el golfo Dulce."
    },
    "threats": {
      "en": "Ship strikes, fishing nets, ocean noise and plastic.",
      "es": "Los choques con barcos, las redes de pesca, el ruido en el océano y el plástico."
    },
    "help": {
      "en": [
        "Choose tours that keep a respectful distance.",
        "Use less plastic.",
        "Support marine protected areas like Marino Ballena."
      ],
      "es": [
        "Escoge tours que mantengan una distancia respetuosa.",
        "Usa menos plástico.",
        "Apoya áreas marinas protegidas como Marino Ballena."
      ]
    },
    "funFact": {
      "en": "Babies are born with no spots at all!",
      "es": "¡Las crías nacen sin ninguna mancha!"
    },
    "wiki": "Stenella_attenuata",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/411917278/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/411917278/large.jpeg",
      "author": "Agustina Medina",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/411917278",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "mangrove-hummingbird",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Amazilia boucardi",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Mangrove Hummingbird",
      "es": "Colibrí de Manglar"
    },
    "summary": {
      "en": "A green hummingbird found only in Costa Rica.",
      "es": "Un colibrí verde que solo existe en Costa Rica."
    },
    "where": {
      "en": "Pacific mangroves, like the Gulf of Nicoya and Térraba-Sierpe.",
      "es": "Manglares del Pacífico, como el golfo de Nicoya y Térraba-Sierpe."
    },
    "threats": {
      "en": "Mangroves cut down for shrimp farms, salt ponds and buildings.",
      "es": "La tala de manglares para camaroneras, salineras y construcciones."
    },
    "help": {
      "en": [
        "Plant native flowers in your garden.",
        "Avoid pesticides.",
        "Support forest and mangrove protection."
      ],
      "es": [
        "Siembra flores nativas en tu jardín.",
        "Evita los plaguicidas.",
        "Apoya la protección de bosques y manglares."
      ]
    },
    "funFact": {
      "en": "It drinks nectar mostly from the flowers of a special mangrove tree, the tea mangrove.",
      "es": "Toma néctar sobre todo de las flores de un manglar especial, el mangle piñuela."
    },
    "wiki": "Amazilia_boucardi",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/311298/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/311298/large.jpg",
      "author": "David A. Rodríguez Arias",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/311298",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "guanacaste-hummingbird",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Amazilia alfaroana",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Guanacaste Hummingbird",
      "es": "Colibrí de Guanacaste"
    },
    "summary": {
      "en": "A mystery hummingbird known from a single specimen collected more than 100 years ago.",
      "es": "Un colibrí misterioso, conocido por un solo ejemplar recolectado hace más de 100 años."
    },
    "where": {
      "en": "Northern Guanacaste, near Miravalles Volcano.",
      "es": "El norte de Guanacaste, cerca del volcán Miravalles."
    },
    "threats": {
      "en": "No one knows if it still exists: scientists have never seen it alive.",
      "es": "Nadie sabe si todavía existe: los científicos nunca lo han visto vivo."
    },
    "help": {
      "en": [
        "Birdwatchers in Guanacaste: photograph any unusual hummingbird and report it on eBird.",
        "Support forest protection around Miravalles and Rincón de la Vieja."
      ],
      "es": [
        "Observadores de aves en Guanacaste: fotografíen cualquier colibrí extraño y repórtenlo en eBird.",
        "Apoya la protección de los bosques de Miravalles y Rincón de la Vieja."
      ]
    },
    "funFact": {
      "en": "Some scientists wonder if it was really a hybrid of two other hummingbirds!",
      "es": "¡Algunos científicos se preguntan si en realidad era un híbrido de otros dos colibríes!"
    },
    "wiki": "Amazilia_alfaroana",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/231184498/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/231184498/large.jpg",
      "author": "Christoph Moning",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/231184498",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "turquoise-cotinga",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Cotinga ridgwayi",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Turquoise Cotinga",
      "es": "Cotinga Turquesa"
    },
    "summary": {
      "en": "A dazzling turquoise-blue bird with a purple throat.",
      "es": "Un ave de un azul turquesa deslumbrante con la garganta morada."
    },
    "where": {
      "en": "The southern Pacific: the Osa Peninsula, Carara and the Fila Costeña.",
      "es": "El Pacífico sur: la península de Osa, Carara y la Fila Costeña."
    },
    "threats": {
      "en": "Its forests are being cut down and broken into small pieces.",
      "es": "Sus bosques se están talando y dividiendo en pedazos pequeños."
    },
    "help": {
      "en": [
        "Support biological corridors that connect forests.",
        "Choose shade-grown, bird-friendly coffee.",
        "Go birdwatching with local guides: it shows forests are worth more standing."
      ],
      "es": [
        "Apoya los corredores biológicos que conectan bosques.",
        "Escoge café de sombra, amigable con las aves.",
        "Sal a ver aves con guías locales: demuestra que el bosque en pie vale más."
      ]
    },
    "funFact": {
      "en": "Males shine turquoise; females are brown and spotted so they can hide on the nest.",
      "es": "Los machos brillan en turquesa; las hembras son cafés y moteadas para esconderse en el nido."
    },
    "wiki": "Cotinga_ridgwayi",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/411808722/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/411808722/large.jpeg",
      "author": "Anthony Mora Aguilar",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/411808722",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "yellow-billed-cotinga",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Carpodectes antoniae",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Yellow-billed Cotinga",
      "es": "Cotinga Piquiamarilla"
    },
    "summary": {
      "en": "A snow-white bird with a yellow bill that lives near mangroves.",
      "es": "Un ave blanca como la nieve, de pico amarillo, que vive cerca de los manglares."
    },
    "where": {
      "en": "Mangroves and forests of the southern Pacific, like Térraba-Sierpe.",
      "es": "Manglares y bosques del Pacífico sur, como Térraba-Sierpe."
    },
    "threats": {
      "en": "Its forests are being cut down and broken into small pieces.",
      "es": "Sus bosques se están talando y dividiendo en pedazos pequeños."
    },
    "help": {
      "en": [
        "Support biological corridors that connect forests.",
        "Choose shade-grown, bird-friendly coffee.",
        "Go birdwatching with local guides: it shows forests are worth more standing."
      ],
      "es": [
        "Apoya los corredores biológicos que conectan bosques.",
        "Escoge café de sombra, amigable con las aves.",
        "Sal a ver aves con guías locales: demuestra que el bosque en pie vale más."
      ]
    },
    "funFact": {
      "en": "From far away, males look like white balls sitting in the treetops.",
      "es": "De lejos, los machos parecen bolitas blancas en las copas de los árboles."
    },
    "wiki": "Carpodectes_antoniae",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13718239/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/13718239/large.jpeg",
      "author": "Reuven Martin",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/13718239",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "three-wattled-bellbird",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Procnias tricarunculatus",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Three-wattled Bellbird",
      "es": "Pájaro Campana"
    },
    "summary": {
      "en": "A brown-and-white bird with three worm-like wattles hanging from its beak.",
      "es": "Un ave café y blanca con tres carnosidades como gusanitos colgando del pico."
    },
    "where": {
      "en": "Monteverde and other cloud forests; it travels up and down the mountains with the seasons.",
      "es": "Monteverde y otros bosques nubosos; sube y baja las montañas según la época."
    },
    "threats": {
      "en": "Its forests are being cut down and broken into small pieces.",
      "es": "Sus bosques se están talando y dividiendo en pedazos pequeños."
    },
    "help": {
      "en": [
        "Support biological corridors that connect forests.",
        "Choose shade-grown, bird-friendly coffee.",
        "Go birdwatching with local guides: it shows forests are worth more standing."
      ],
      "es": [
        "Apoya los corredores biológicos que conectan bosques.",
        "Escoge café de sombra, amigable con las aves.",
        "Sal a ver aves con guías locales: demuestra que el bosque en pie vale más."
      ]
    },
    "funFact": {
      "en": "Its loud 'BONK!' call can be heard from far across the valley.",
      "es": "Su fuerte llamado '¡BONK!' se escucha desde el otro lado del valle."
    },
    "wiki": "Procnias_tricarunculatus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/528285529/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/528285529/large.jpg",
      "author": "Steph Brulot-Sawchyn",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/528285529",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "bare-necked-umbrellabird",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Cephalopterus glabricollis",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Bare-necked Umbrellabird",
      "es": "Pájaro Sombrilla"
    },
    "summary": {
      "en": "A black bird with an umbrella-shaped crest and a bright red throat sac.",
      "es": "Un ave negra con una cresta en forma de sombrilla y una bolsa roja brillante en la garganta."
    },
    "where": {
      "en": "Caribbean slopes: it nests in the mountains and moves down to the lowlands.",
      "es": "La vertiente del Caribe: anida en las montañas y baja a las tierras bajas."
    },
    "threats": {
      "en": "Its forests are being cut down and broken into small pieces.",
      "es": "Sus bosques se están talando y dividiendo en pedazos pequeños."
    },
    "help": {
      "en": [
        "Support biological corridors that connect forests.",
        "Choose shade-grown, bird-friendly coffee.",
        "Go birdwatching with local guides: it shows forests are worth more standing."
      ],
      "es": [
        "Apoya los corredores biológicos que conectan bosques.",
        "Escoge café de sombra, amigable con las aves.",
        "Sal a ver aves con guías locales: demuestra que el bosque en pie vale más."
      ]
    },
    "funFact": {
      "en": "Males puff up their red throat sac like a balloon to impress females.",
      "es": "Los machos inflan su bolsa roja como un globo para impresionar a las hembras."
    },
    "wiki": "Cephalopterus_glabricollis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/468360633/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/468360633/large.jpg",
      "author": "Elizabeth Axley",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/468360633",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "great-curassow",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Crax rubra",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Great Curassow",
      "es": "Pavón"
    },
    "summary": {
      "en": "A big, turkey-like bird. Males are black with a curly crest and a yellow knob on the beak.",
      "es": "Un ave grande parecida a un pavo. Los machos son negros, con cresta rizada y una bolita amarilla en el pico."
    },
    "where": {
      "en": "Big forests like Corcovado and Santa Rosa.",
      "es": "Bosques grandes como Corcovado y Santa Rosa."
    },
    "threats": {
      "en": "Hunting and forest loss.",
      "es": "La cacería y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Drive slowly in forest areas.",
        "Never buy wild-animal meat.",
        "Keep dogs on a leash near forests."
      ],
      "es": [
        "Maneja despacio en zonas de bosque.",
        "Nunca compres carne de animales silvestres.",
        "Mantén a los perros con correa cerca del bosque."
      ]
    },
    "funFact": {
      "en": "Curassows spend most of their time walking on the forest floor looking for fruit.",
      "es": "Los pavones pasan casi todo el tiempo caminando en el suelo del bosque buscando frutas."
    },
    "wiki": "Crax_rubra",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/110501089/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/110501089/large.jpg",
      "author": "Morten Ross",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/110501089",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "harpy-eagle",
    "group": "bird",
    "emoji": "🦅",
    "scientific": "Harpia harpyja",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Harpy Eagle",
      "es": "Águila Arpía"
    },
    "statusNote": {
      "en": "Very rare in Costa Rica today.",
      "es": "Muy rara en Costa Rica hoy en día."
    },
    "summary": {
      "en": "One of the most powerful eagles in the world, with huge claws.",
      "es": "Una de las águilas más poderosas del mundo, con garras enormes."
    },
    "where": {
      "en": "Almost gone from Costa Rica; rare sightings in remote forests near Panama.",
      "es": "Casi desaparecida de Costa Rica; hay avistamientos raros en bosques remotos cerca de Panamá."
    },
    "threats": {
      "en": "Forest loss, and people who shoot or poison birds of prey.",
      "es": "La pérdida de bosque y las personas que disparan o envenenan a las aves rapaces."
    },
    "help": {
      "en": [
        "Never shoot or harm birds of prey: they keep nature in balance.",
        "Support big protected forests.",
        "Take injured raptors to a wildlife rescue center."
      ],
      "es": [
        "Nunca dispares ni hagas daño a las aves rapaces: mantienen el equilibrio de la naturaleza.",
        "Apoya los grandes bosques protegidos.",
        "Lleva a las rapaces heridas a un centro de rescate."
      ]
    },
    "funFact": {
      "en": "It snatches sloths and monkeys right out of the treetops.",
      "es": "Atrapa perezosos y monos directamente de las copas de los árboles."
    },
    "wiki": "Harpia_harpyja",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/447088675/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/447088675/large.jpeg",
      "author": "Christoph Moning",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/447088675",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "solitary-eagle",
    "group": "bird",
    "emoji": "🦅",
    "scientific": "Buteogallus solitarius",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Solitary Eagle",
      "es": "Águila Solitaria"
    },
    "summary": {
      "en": "A large, dark slate-gray eagle of the mountains.",
      "es": "Un águila grande, gris oscura, de las montañas."
    },
    "where": {
      "en": "Remote mountain forests, like the Talamanca range.",
      "es": "Bosques remotos de montaña, como la cordillera de Talamanca."
    },
    "threats": {
      "en": "Forest loss, and people who shoot or poison birds of prey.",
      "es": "La pérdida de bosque y las personas que disparan o envenenan a las aves rapaces."
    },
    "help": {
      "en": [
        "Never shoot or harm birds of prey: they keep nature in balance.",
        "Support big protected forests.",
        "Take injured raptors to a wildlife rescue center."
      ],
      "es": [
        "Nunca dispares ni hagas daño a las aves rapaces: mantienen el equilibrio de la naturaleza.",
        "Apoya los grandes bosques protegidos.",
        "Lleva a las rapaces heridas a un centro de rescate."
      ]
    },
    "funFact": {
      "en": "It's so rare that many birdwatchers never see one in their whole life.",
      "es": "Es tan rara que muchos observadores de aves nunca ven una en toda su vida."
    },
    "wiki": "Buteogallus_solitarius",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/356691261/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/356691261/large.jpg",
      "author": "Ryan F. Mandelbaum",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/356691261",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "crested-eagle",
    "group": "bird",
    "emoji": "🦅",
    "scientific": "Morphnus guianensis",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Crested Eagle",
      "es": "Águila Crestada"
    },
    "summary": {
      "en": "A large eagle with a tall crest, cousin of the harpy eagle.",
      "es": "Un águila grande con una cresta alta, prima del águila arpía."
    },
    "where": {
      "en": "Very rare, in remote lowland forests.",
      "es": "Muy rara, en bosques bajos y remotos."
    },
    "threats": {
      "en": "Forest loss, and people who shoot or poison birds of prey.",
      "es": "La pérdida de bosque y las personas que disparan o envenenan a las aves rapaces."
    },
    "help": {
      "en": [
        "Never shoot or harm birds of prey: they keep nature in balance.",
        "Support big protected forests.",
        "Take injured raptors to a wildlife rescue center."
      ],
      "es": [
        "Nunca dispares ni hagas daño a las aves rapaces: mantienen el equilibrio de la naturaleza.",
        "Apoya los grandes bosques protegidos.",
        "Lleva a las rapaces heridas a un centro de rescate."
      ]
    },
    "funFact": {
      "en": "It's smaller than the harpy, but still strong enough to hunt monkeys and snakes.",
      "es": "Es más pequeña que la arpía, pero igual de fuerte para cazar monos y serpientes."
    },
    "wiki": "Morphnus_guianensis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/137644696/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/137644696/large.jpg",
      "author": "NINA WENÓLI",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/137644696",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "ornate-hawk-eagle",
    "group": "bird",
    "emoji": "🦅",
    "scientific": "Spizaetus ornatus",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Ornate Hawk-Eagle",
      "es": "Águila Penachuda"
    },
    "summary": {
      "en": "A beautiful eagle with an orange neck, a striped belly and a pointed crest.",
      "es": "Un águila hermosa con el cuello anaranjado, el pecho rayado y una cresta puntiaguda."
    },
    "where": {
      "en": "Large forests like Corcovado and Tortuguero.",
      "es": "Bosques grandes como Corcovado y Tortuguero."
    },
    "threats": {
      "en": "Forest loss, and people who shoot or poison birds of prey.",
      "es": "La pérdida de bosque y las personas que disparan o envenenan a las aves rapaces."
    },
    "help": {
      "en": [
        "Never shoot or harm birds of prey: they keep nature in balance.",
        "Support big protected forests.",
        "Take injured raptors to a wildlife rescue center."
      ],
      "es": [
        "Nunca dispares ni hagas daño a las aves rapaces: mantienen el equilibrio de la naturaleza.",
        "Apoya los grandes bosques protegidos.",
        "Lleva a las rapaces heridas a un centro de rescate."
      ]
    },
    "funFact": {
      "en": "It raises its crest like a crown when it gets excited.",
      "es": "Levanta la cresta como una corona cuando se emociona."
    },
    "wiki": "Spizaetus_ornatus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/178209306/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/178209306/large.jpg",
      "author": "Trevor Van Loon",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/178209306",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "yellow-naped-parrot",
    "group": "bird",
    "emoji": "🦜",
    "scientific": "Amazona auropalliata",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Yellow-naped Parrot",
      "es": "Loro Nuca Amarilla"
    },
    "summary": {
      "en": "A green parrot with a yellow patch on the back of its neck.",
      "es": "Un loro verde con una mancha amarilla en la nuca."
    },
    "where": {
      "en": "The dry forests of Guanacaste.",
      "es": "Los bosques secos de Guanacaste."
    },
    "threats": {
      "en": "Chicks are stolen for the pet trade, and the big trees they nest in are cut down.",
      "es": "Roban pichones para venderlos como mascotas y talan los árboles grandes donde anidan."
    },
    "help": {
      "en": [
        "Never buy a wild parrot as a pet.",
        "Report anyone selling wild birds to SINAC.",
        "Support nest-protection and reforestation projects."
      ],
      "es": [
        "Nunca compres un loro silvestre como mascota.",
        "Denuncia ante el SINAC a quien venda aves silvestres.",
        "Apoya proyectos que protegen nidos y reforestan."
      ]
    },
    "funFact": {
      "en": "It's one of the best 'talkers' among parrots, which sadly makes it a target for poachers.",
      "es": "Es de los loros que mejor 'hablan', y por eso, tristemente, lo buscan los cazadores ilegales."
    },
    "wiki": "Amazona_auropalliata",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/267252787/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/267252787/large.jpeg",
      "author": "er-birds",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/267252787",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "black-cheeked-ant-tanager",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Habia atrimaxillaris",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Black-cheeked Ant-Tanager",
      "es": "Tangara Hormiguera Carinegra"
    },
    "summary": {
      "en": "A dark bird with a pinkish-red throat, found only in Costa Rica.",
      "es": "Un ave oscura con la garganta rojiza, que solo existe en Costa Rica."
    },
    "where": {
      "en": "Only around the Osa Peninsula and Golfo Dulce.",
      "es": "Solo alrededor de la península de Osa y el golfo Dulce."
    },
    "threats": {
      "en": "Its forests are being cut down and broken into small pieces.",
      "es": "Sus bosques se están talando y dividiendo en pedazos pequeños."
    },
    "help": {
      "en": [
        "Support biological corridors that connect forests.",
        "Choose shade-grown, bird-friendly coffee.",
        "Go birdwatching with local guides: it shows forests are worth more standing."
      ],
      "es": [
        "Apoya los corredores biológicos que conectan bosques.",
        "Escoge café de sombra, amigable con las aves.",
        "Sal a ver aves con guías locales: demuestra que el bosque en pie vale más."
      ]
    },
    "funFact": {
      "en": "It follows army ant swarms to catch the insects trying to escape.",
      "es": "Sigue a las hormigas arrieras para atrapar los insectos que huyen."
    },
    "wiki": "Habia_atrimaxillaris",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/348771991/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/348771991/large.jpg",
      "author": "Ken-ichi Ueda",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/348771991",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "agami-heron",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Agamia agami",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Agami Heron",
      "es": "Garza Agamí"
    },
    "summary": {
      "en": "A shy heron with chestnut, blue and silver feathers and a very long bill.",
      "es": "Una garza tímida con plumas castañas, azules y plateadas, y un pico muy largo."
    },
    "where": {
      "en": "Shady rivers and swamps, like Tortuguero and Caño Negro.",
      "es": "Ríos sombreados y pantanos, como Tortuguero y Caño Negro."
    },
    "threats": {
      "en": "Wetlands are drained for farms, and rivers get polluted.",
      "es": "Se secan humedales para hacer fincas y los ríos se contaminan."
    },
    "help": {
      "en": [
        "Support wetlands like Palo Verde and Caño Negro.",
        "Keep your distance from nesting colonies.",
        "Use fewer pesticides near water."
      ],
      "es": [
        "Apoya humedales como Palo Verde y Caño Negro.",
        "Mantén distancia de las colonias de anidación.",
        "Usa menos plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "It's so shy that it's one of the hardest herons to see.",
      "es": "Es tan tímida que es una de las garzas más difíciles de ver."
    },
    "wiki": "Agamia_agami",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/424902312/medium.png",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/424902312/large.png",
      "author": "Dean Hester",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/424902312",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "galapagos-petrel",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Pterodroma phaeopygia",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Galápagos Petrel",
      "es": "Petrel de Galápagos"
    },
    "summary": {
      "en": "A seabird that nests in the Galápagos and feeds in the ocean off Costa Rica.",
      "es": "Un ave marina que anida en Galápagos y se alimenta en el mar frente a Costa Rica."
    },
    "where": {
      "en": "The open Pacific Ocean, including around Cocos Island.",
      "es": "El océano Pacífico abierto, incluso alrededor de la Isla del Coco."
    },
    "threats": {
      "en": "Plastic in the ocean, fishing lines and hooks, and predators brought to its nesting islands.",
      "es": "El plástico en el mar, las cuerdas y anzuelos de pesca, y los depredadores llevados a sus islas de anidación."
    },
    "help": {
      "en": [
        "Use less plastic.",
        "Never leave fishing line or hooks behind.",
        "Support marine protected areas."
      ],
      "es": [
        "Usa menos plástico.",
        "Nunca dejes cuerdas ni anzuelos de pesca tirados.",
        "Apoya las áreas marinas protegidas."
      ]
    },
    "funFact": {
      "en": "It can fly enormous distances over the ocean without landing.",
      "es": "Puede volar distancias enormes sobre el mar sin posarse."
    },
    "wiki": "Pterodroma_phaeopygia",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/64239044/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/64239044/large.jpg",
      "author": "William Stephens",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/64239044",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "pink-footed-shearwater",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Ardenna creatopus",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Pink-footed Shearwater",
      "es": "Pardela Patirrosada"
    },
    "summary": {
      "en": "A big brown seabird with pink feet that nests on islands off Chile.",
      "es": "Un ave marina grande y café, de patas rosadas, que anida en islas de Chile."
    },
    "where": {
      "en": "Passes through the Pacific waters off Costa Rica.",
      "es": "Pasa por las aguas del Pacífico frente a Costa Rica."
    },
    "threats": {
      "en": "Plastic in the ocean, fishing lines and hooks, and predators brought to its nesting islands.",
      "es": "El plástico en el mar, las cuerdas y anzuelos de pesca, y los depredadores llevados a sus islas de anidación."
    },
    "help": {
      "en": [
        "Use less plastic.",
        "Never leave fishing line or hooks behind.",
        "Support marine protected areas."
      ],
      "es": [
        "Usa menos plástico.",
        "Nunca dejes cuerdas ni anzuelos de pesca tirados.",
        "Apoya las áreas marinas protegidas."
      ]
    },
    "funFact": {
      "en": "Every year it flies from Chile to North America and back.",
      "es": "Cada año vuela desde Chile hasta Norteamérica y regresa."
    },
    "wiki": "Ardenna_creatopus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/444278538/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/444278538/large.jpeg",
      "author": "Charlotte Kirchner",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/444278538",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "cocos-finch",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Pinaroloxias inornata",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Cocos Finch",
      "es": "Pinzón de la Isla del Coco"
    },
    "summary": {
      "en": "The only one of 'Darwin's finches' that lives outside the Galápagos.",
      "es": "El único de los 'pinzones de Darwin' que vive fuera de Galápagos."
    },
    "where": {
      "en": "Only on Cocos Island.",
      "es": "Solo en la Isla del Coco."
    },
    "threats": {
      "en": "Rats, cats, pigs and deer that people brought to Cocos Island damage its home.",
      "es": "Ratas, gatos, cerdos y venados que la gente llevó a la Isla del Coco dañan su hogar."
    },
    "help": {
      "en": [
        "Support Cocos Island National Park.",
        "Never bring animals or plants to islands.",
        "Learn about how islands protect unique species."
      ],
      "es": [
        "Apoya el Parque Nacional Isla del Coco.",
        "Nunca lleves animales ni plantas a las islas.",
        "Aprende cómo las islas protegen especies únicas."
      ]
    },
    "funFact": {
      "en": "Darwin's finches helped scientists understand how species change over time.",
      "es": "Los pinzones de Darwin ayudaron a entender cómo cambian las especies con el tiempo."
    },
    "wiki": "Pinaroloxias_inornata",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/425674055/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/425674055/large.jpeg",
      "author": "mikazilla",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/425674055",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "cocos-cuckoo",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Coccyzus ferrugineus",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Cocos Cuckoo",
      "es": "Cuclillo de la Isla del Coco"
    },
    "summary": {
      "en": "A brown cuckoo found only on Cocos Island.",
      "es": "Un cuclillo café que solo vive en la Isla del Coco."
    },
    "where": {
      "en": "Only on Cocos Island.",
      "es": "Solo en la Isla del Coco."
    },
    "threats": {
      "en": "Rats, cats, pigs and deer that people brought to Cocos Island damage its home.",
      "es": "Ratas, gatos, cerdos y venados que la gente llevó a la Isla del Coco dañan su hogar."
    },
    "help": {
      "en": [
        "Support Cocos Island National Park.",
        "Never bring animals or plants to islands.",
        "Learn about how islands protect unique species."
      ],
      "es": [
        "Apoya el Parque Nacional Isla del Coco.",
        "Nunca lleves animales ni plantas a las islas.",
        "Aprende cómo las islas protegen especies únicas."
      ]
    },
    "funFact": {
      "en": "It hunts caterpillars and insects in the island's forests.",
      "es": "Caza orugas e insectos en los bosques de la isla."
    },
    "wiki": "Coccyzus_ferrugineus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/196066305/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/196066305/large.jpeg",
      "author": "Oliver Komar",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/196066305",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "cocos-flycatcher",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Nesotriccus ridgwayi",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Cocos Flycatcher",
      "es": "Mosquerito de la Isla del Coco"
    },
    "summary": {
      "en": "A tiny, plain flycatcher found only on Cocos Island.",
      "es": "Un mosquerito pequeño y sencillo que solo vive en la Isla del Coco."
    },
    "where": {
      "en": "Only on Cocos Island.",
      "es": "Solo en la Isla del Coco."
    },
    "threats": {
      "en": "Rats, cats, pigs and deer that people brought to Cocos Island damage its home.",
      "es": "Ratas, gatos, cerdos y venados que la gente llevó a la Isla del Coco dañan su hogar."
    },
    "help": {
      "en": [
        "Support Cocos Island National Park.",
        "Never bring animals or plants to islands.",
        "Learn about how islands protect unique species."
      ],
      "es": [
        "Apoya el Parque Nacional Isla del Coco.",
        "Nunca lleves animales ni plantas a las islas.",
        "Aprende cómo las islas protegen especies únicas."
      ]
    },
    "funFact": {
      "en": "It's tiny, but it's one of the island's very few native land birds.",
      "es": "Es pequeñito, pero es una de las pocas aves terrestres nativas de la isla."
    },
    "wiki": "Nesotriccus_ridgwayi",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/132039438/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/132039438/large.jpg",
      "author": "Jan Axel Cubilla Rodríguez",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/132039438",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "yellow-throated-toucan",
    "group": "bird",
    "emoji": "🦜",
    "scientific": "Ramphastos ambiguus",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Yellow-throated Toucan",
      "es": "Tucán Dios-te-dé"
    },
    "summary": {
      "en": "A large black toucan with a yellow throat and a two-colored bill.",
      "es": "Un tucán grande y negro con la garganta amarilla y el pico de dos colores."
    },
    "where": {
      "en": "Lowland forests on both coasts.",
      "es": "Bosques bajos de ambas costas."
    },
    "threats": {
      "en": "Its forests are being cut down and broken into small pieces.",
      "es": "Sus bosques se están talando y dividiendo en pedazos pequeños."
    },
    "help": {
      "en": [
        "Support biological corridors that connect forests.",
        "Choose shade-grown, bird-friendly coffee.",
        "Go birdwatching with local guides: it shows forests are worth more standing."
      ],
      "es": [
        "Apoya los corredores biológicos que conectan bosques.",
        "Escoge café de sombra, amigable con las aves.",
        "Sal a ver aves con guías locales: demuestra que el bosque en pie vale más."
      ]
    },
    "funFact": {
      "en": "In Costa Rica it's called 'Dios-te-dé' because its call sounds like those words.",
      "es": "En Costa Rica le dicen 'Dios-te-dé' porque su canto suena como esas palabras."
    },
    "wiki": "Ramphastos_ambiguus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/110613335/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/110613335/large.jpg",
      "author": "Morten Ross",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/110613335",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "keel-billed-motmot",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Electron carinatum",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Keel-billed Motmot",
      "es": "Momoto Piquiquillado"
    },
    "summary": {
      "en": "A green motmot with a rusty forehead and a wide, keeled bill.",
      "es": "Un momoto verde con la frente rojiza y un pico ancho con quilla."
    },
    "where": {
      "en": "Caribbean foothills; it's rare.",
      "es": "Las faldas de las montañas del Caribe; es raro."
    },
    "threats": {
      "en": "Its forests are being cut down and broken into small pieces.",
      "es": "Sus bosques se están talando y dividiendo en pedazos pequeños."
    },
    "help": {
      "en": [
        "Support biological corridors that connect forests.",
        "Choose shade-grown, bird-friendly coffee.",
        "Go birdwatching with local guides: it shows forests are worth more standing."
      ],
      "es": [
        "Apoya los corredores biológicos que conectan bosques.",
        "Escoge café de sombra, amigable con las aves.",
        "Sal a ver aves con guías locales: demuestra que el bosque en pie vale más."
      ]
    },
    "funFact": {
      "en": "Motmots swing their tails back and forth like a clock's pendulum.",
      "es": "Los momotos mueven la cola de lado a lado como el péndulo de un reloj."
    },
    "wiki": "Electron_carinatum",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/465085588/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/465085588/large.jpg",
      "author": "Elizabeth Axley",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/465085588",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "rufous-vented-ground-cuckoo",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Neomorphus geoffroyi",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Rufous-vented Ground-Cuckoo",
      "es": "Cuco Hormiguero"
    },
    "summary": {
      "en": "A big cuckoo that runs on the forest floor, following army ants and peccaries.",
      "es": "Un cuco grande que corre por el suelo del bosque siguiendo hormigas arrieras y chanchos de monte."
    },
    "where": {
      "en": "Remote rainforests.",
      "es": "Bosques lluviosos remotos."
    },
    "threats": {
      "en": "Its forests are being cut down and broken into small pieces.",
      "es": "Sus bosques se están talando y dividiendo en pedazos pequeños."
    },
    "help": {
      "en": [
        "Support biological corridors that connect forests.",
        "Choose shade-grown, bird-friendly coffee.",
        "Go birdwatching with local guides: it shows forests are worth more standing."
      ],
      "es": [
        "Apoya los corredores biológicos que conectan bosques.",
        "Escoge café de sombra, amigable con las aves.",
        "Sal a ver aves con guías locales: demuestra que el bosque en pie vale más."
      ]
    },
    "funFact": {
      "en": "It snaps its bill loudly, a sound that sometimes gives it away.",
      "es": "Truena el pico con fuerza, un sonido que a veces lo delata."
    },
    "wiki": "Neomorphus_geoffroyi",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/634705502/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/634705502/large.jpg",
      "author": "er-birds",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/634705502",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "red-fronted-parrotlet",
    "group": "bird",
    "emoji": "🦜",
    "scientific": "Touit costaricensis",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Red-fronted Parrotlet",
      "es": "Periquito Frentirrojo"
    },
    "summary": {
      "en": "A small green parrot with a red face, living in the mountains of Costa Rica and Panama.",
      "es": "Un loro pequeño y verde, de cara roja, que vive en las montañas de Costa Rica y Panamá."
    },
    "where": {
      "en": "Cloud forests of the Central and Talamanca mountains.",
      "es": "Bosques nubosos de la cordillera Central y Talamanca."
    },
    "threats": {
      "en": "Chicks are stolen for the pet trade, and the big trees they nest in are cut down.",
      "es": "Roban pichones para venderlos como mascotas y talan los árboles grandes donde anidan."
    },
    "help": {
      "en": [
        "Never buy a wild parrot as a pet.",
        "Report anyone selling wild birds to SINAC.",
        "Support nest-protection and reforestation projects."
      ],
      "es": [
        "Nunca compres un loro silvestre como mascota.",
        "Denuncia ante el SINAC a quien venda aves silvestres.",
        "Apoya proyectos que protegen nidos y reforestan."
      ]
    },
    "funFact": {
      "en": "It moves up and down the mountains with the seasons, following fruit.",
      "es": "Sube y baja las montañas según la época, siguiendo las frutas."
    },
    "wiki": "Touit_costaricensis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/722302079/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/722302079/large.jpg",
      "author": "Roger A. Morales-Flores",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/722302079",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "bairds-trogon",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Trogon bairdii",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Baird's Trogon",
      "es": "Trogón de Baird"
    },
    "summary": {
      "en": "A trogon with a red belly, a blue head and a green back.",
      "es": "Un trogón con el pecho rojo, la cabeza azul y la espalda verde."
    },
    "where": {
      "en": "Southern Pacific lowland forests, like Osa and Carara.",
      "es": "Bosques bajos del Pacífico sur, como Osa y Carara."
    },
    "threats": {
      "en": "Its forests are being cut down and broken into small pieces.",
      "es": "Sus bosques se están talando y dividiendo en pedazos pequeños."
    },
    "help": {
      "en": [
        "Support biological corridors that connect forests.",
        "Choose shade-grown, bird-friendly coffee.",
        "Go birdwatching with local guides: it shows forests are worth more standing."
      ],
      "es": [
        "Apoya los corredores biológicos que conectan bosques.",
        "Escoge café de sombra, amigable con las aves.",
        "Sal a ver aves con guías locales: demuestra que el bosque en pie vale más."
      ]
    },
    "funFact": {
      "en": "Most of the world's Baird's trogons live in Costa Rica.",
      "es": "La mayoría de los trogones de Baird del mundo viven en Costa Rica."
    },
    "wiki": "Trogon_bairdii",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/357075190/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/357075190/large.jpeg",
      "author": "Alina Martin",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/357075190",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "resplendent-quetzal",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Pharomachrus mocinno",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Resplendent Quetzal",
      "es": "Quetzal"
    },
    "summary": {
      "en": "A shimmering green bird with a red belly. Males have tail streamers longer than their body.",
      "es": "Un ave verde brillante con el pecho rojo. Los machos tienen plumas en la cola más largas que su cuerpo."
    },
    "where": {
      "en": "Cloud forests like Monteverde and San Gerardo de Dota.",
      "es": "Bosques nubosos como Monteverde y San Gerardo de Dota."
    },
    "threats": {
      "en": "Cloud forest loss and climate change.",
      "es": "La pérdida del bosque nuboso y el cambio climático."
    },
    "help": {
      "en": [
        "Support biological corridors that connect forests.",
        "Choose shade-grown, bird-friendly coffee.",
        "Go birdwatching with local guides: it shows forests are worth more standing."
      ],
      "es": [
        "Apoya los corredores biológicos que conectan bosques.",
        "Escoge café de sombra, amigable con las aves.",
        "Sal a ver aves con guías locales: demuestra que el bosque en pie vale más."
      ]
    },
    "funFact": {
      "en": "Quetzals swallow wild avocados whole, then spit out the seed.",
      "es": "Los quetzales se tragan enteros los aguacatillos y luego escupen la semilla."
    },
    "wiki": "Pharomachrus_mocinno",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/111321224/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/111321224/large.jpg",
      "author": "Morten Ross",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/111321224",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "great-tinamou",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Tinamus major",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Great Tinamou",
      "es": "Gongolona"
    },
    "summary": {
      "en": "A round, chicken-like bird of the forest floor with a haunting whistle.",
      "es": "Un ave redonda parecida a una gallina, que vive en el suelo del bosque y tiene un silbido misterioso."
    },
    "where": {
      "en": "Lowland and foothill forests.",
      "es": "Bosques bajos y de las faldas de las montañas."
    },
    "threats": {
      "en": "Hunting and forest loss.",
      "es": "La cacería y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Drive slowly in forest areas.",
        "Never buy wild-animal meat.",
        "Keep dogs on a leash near forests."
      ],
      "es": [
        "Maneja despacio en zonas de bosque.",
        "Nunca compres carne de animales silvestres.",
        "Mantén a los perros con correa cerca del bosque."
      ]
    },
    "funFact": {
      "en": "The father sits on the shiny blue eggs and raises the chicks alone.",
      "es": "El papá empolla los brillantes huevos azules y cría solo a los pichones."
    },
    "wiki": "Tinamus_major",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/733008182/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/733008182/large.jpg",
      "author": "Tom Field",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/733008182",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "black-guan",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Chamaepetes unicolor",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Black Guan",
      "es": "Pava Negra"
    },
    "summary": {
      "en": "A glossy black bird with blue face skin and red eyes, found only in Costa Rica and western Panama.",
      "es": "Un ave negra brillante con la cara azul y los ojos rojos, que solo vive en Costa Rica y el oeste de Panamá."
    },
    "where": {
      "en": "Highland cloud forests.",
      "es": "Bosques nubosos de altura."
    },
    "threats": {
      "en": "Hunting and cloud forest loss.",
      "es": "La cacería y la pérdida del bosque nuboso."
    },
    "help": {
      "en": [
        "Drive slowly in forest areas.",
        "Never buy wild-animal meat.",
        "Keep dogs on a leash near forests."
      ],
      "es": [
        "Maneja despacio en zonas de bosque.",
        "Nunca compres carne de animales silvestres.",
        "Mantén a los perros con correa cerca del bosque."
      ]
    },
    "funFact": {
      "en": "Its wings make a crackling sound when it flies in courtship.",
      "es": "Sus alas hacen un ruido como de crujido cuando vuela para cortejar."
    },
    "wiki": "Chamaepetes_unicolor",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/463610478/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/463610478/large.jpeg",
      "author": "Rob Foster",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/463610478",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "golden-winged-warbler",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Vermivora chrysoptera",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Golden-winged Warbler",
      "es": "Reinita Alidorada"
    },
    "summary": {
      "en": "A small gray songbird with golden wing patches that comes here from North America every winter.",
      "es": "Un pajarito gris con manchas doradas en las alas que llega desde Norteamérica cada invierno."
    },
    "where": {
      "en": "Winters in mountain forests and forest edges.",
      "es": "Pasa el invierno en bosques de montaña y orillas de bosque."
    },
    "threats": {
      "en": "It loses forest both here and where it spends the summer, and bright city lights confuse it during migration.",
      "es": "Pierde bosque aquí y donde pasa el verano, y las luces de las ciudades lo confunden durante la migración."
    },
    "help": {
      "en": [
        "Choose shade-grown, bird-friendly coffee.",
        "Keep pet cats indoors.",
        "Turn off unneeded lights at night during migration season."
      ],
      "es": [
        "Escoge café de sombra, amigable con las aves.",
        "Mantén a los gatos dentro de la casa.",
        "Apaga las luces innecesarias de noche en temporada de migración."
      ]
    },
    "funFact": {
      "en": "It weighs about as much as two coins, yet flies thousands of kilometers.",
      "es": "Pesa más o menos lo mismo que dos monedas, pero vuela miles de kilómetros."
    },
    "wiki": "Vermivora_chrysoptera",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/179003779/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/179003779/large.jpg",
      "author": "Trevor Van Loon",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/179003779",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "cerulean-warbler",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Setophaga cerulea",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Cerulean Warbler",
      "es": "Reinita Cerúlea"
    },
    "summary": {
      "en": "A sky-blue songbird that migrates through Costa Rica.",
      "es": "Un pajarito azul cielo que pasa por Costa Rica en su migración."
    },
    "where": {
      "en": "Passes through forests on its way to South America.",
      "es": "Pasa por los bosques en camino a Suramérica."
    },
    "threats": {
      "en": "It loses forest both here and where it spends the summer, and bright city lights confuse it during migration.",
      "es": "Pierde bosque aquí y donde pasa el verano, y las luces de las ciudades lo confunden durante la migración."
    },
    "help": {
      "en": [
        "Choose shade-grown, bird-friendly coffee.",
        "Keep pet cats indoors.",
        "Turn off unneeded lights at night during migration season."
      ],
      "es": [
        "Escoge café de sombra, amigable con las aves.",
        "Mantén a los gatos dentro de la casa.",
        "Apaga las luces innecesarias de noche en temporada de migración."
      ]
    },
    "funFact": {
      "en": "It spends winter in the Andes and summer in North America.",
      "es": "Pasa el invierno en los Andes y el verano en Norteamérica."
    },
    "wiki": "Setophaga_cerulea",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/266107146/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/266107146/large.jpeg",
      "author": "er-birds",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/266107146",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "olive-sided-flycatcher",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Contopus cooperi",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Olive-sided Flycatcher",
      "es": "Pibí Boreal"
    },
    "summary": {
      "en": "A gray flycatcher that sits on tall dead branches to catch insects.",
      "es": "Un mosquero gris que se posa en ramas secas altas para atrapar insectos."
    },
    "where": {
      "en": "Winter visitor to mountain forest edges.",
      "es": "Visitante de invierno en las orillas de los bosques de montaña."
    },
    "threats": {
      "en": "It loses forest both here and where it spends the summer, and bright city lights confuse it during migration.",
      "es": "Pierde bosque aquí y donde pasa el verano, y las luces de las ciudades lo confunden durante la migración."
    },
    "help": {
      "en": [
        "Choose shade-grown, bird-friendly coffee.",
        "Keep pet cats indoors.",
        "Turn off unneeded lights at night during migration season."
      ],
      "es": [
        "Escoge café de sombra, amigable con las aves.",
        "Mantén a los gatos dentro de la casa.",
        "Apaga las luces innecesarias de noche en temporada de migración."
      ]
    },
    "funFact": {
      "en": "It hunts from the very top of dead trees, watching for flying insects.",
      "es": "Caza desde la punta de los árboles secos, vigilando insectos voladores."
    },
    "wiki": "Contopus_cooperi",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/25686805/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/25686805/large.jpg",
      "author": "Ken-ichi Ueda",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/25686805",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "wood-thrush",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Hylocichla mustelina",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Wood Thrush",
      "es": "Zorzal del Bosque"
    },
    "summary": {
      "en": "A brown thrush with a spotted chest and a flute-like song.",
      "es": "Un zorzal café con el pecho moteado y un canto como de flauta."
    },
    "where": {
      "en": "Winters in lowland forests.",
      "es": "Pasa el invierno en bosques bajos."
    },
    "threats": {
      "en": "It loses forest both here and where it spends the summer, and bright city lights confuse it during migration.",
      "es": "Pierde bosque aquí y donde pasa el verano, y las luces de las ciudades lo confunden durante la migración."
    },
    "help": {
      "en": [
        "Choose shade-grown, bird-friendly coffee.",
        "Keep pet cats indoors.",
        "Turn off unneeded lights at night during migration season."
      ],
      "es": [
        "Escoge café de sombra, amigable con las aves.",
        "Mantén a los gatos dentro de la casa.",
        "Apaga las luces innecesarias de noche en temporada de migración."
      ]
    },
    "funFact": {
      "en": "It can sing two notes at the same time!",
      "es": "¡Puede cantar dos notas al mismo tiempo!"
    },
    "wiki": "Hylocichla_mustelina",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/458679292/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/458679292/large.jpg",
      "author": "Dan Vickers",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/458679292",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "mealy-parrot",
    "group": "bird",
    "emoji": "🦜",
    "scientific": "Amazona farinosa",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Mealy Parrot",
      "es": "Loro Verde"
    },
    "summary": {
      "en": "One of the biggest parrots in Costa Rica, green with a dusty, 'floury' look.",
      "es": "Uno de los loros más grandes de Costa Rica, verde y como empolvado de harina."
    },
    "where": {
      "en": "Lowland forests, especially the Caribbean and Osa.",
      "es": "Bosques bajos, sobre todo en el Caribe y Osa."
    },
    "threats": {
      "en": "Chicks are stolen for the pet trade, and the big trees they nest in are cut down.",
      "es": "Roban pichones para venderlos como mascotas y talan los árboles grandes donde anidan."
    },
    "help": {
      "en": [
        "Never buy a wild parrot as a pet.",
        "Report anyone selling wild birds to SINAC.",
        "Support nest-protection and reforestation projects."
      ],
      "es": [
        "Nunca compres un loro silvestre como mascota.",
        "Denuncia ante el SINAC a quien venda aves silvestres.",
        "Apoya proyectos que protegen nidos y reforestan."
      ]
    },
    "funFact": {
      "en": "It's called 'mealy' because its feathers look dusted with flour.",
      "es": "En inglés le dicen 'harinoso' porque sus plumas parecen espolvoreadas con harina."
    },
    "wiki": "Amazona_farinosa",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/542518967/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/542518967/large.jpg",
      "author": "Irene",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/542518967",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "keel-billed-toucan",
    "group": "bird",
    "emoji": "🦜",
    "scientific": "Ramphastos sulfuratus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Keel-billed Toucan",
      "es": "Tucán Pico Iris"
    },
    "summary": {
      "en": "A black toucan with a giant rainbow-colored bill.",
      "es": "Un tucán negro con un pico gigante de colores de arcoíris."
    },
    "where": {
      "en": "Lowland forests, especially on the Caribbean side.",
      "es": "Bosques bajos, sobre todo en el Caribe."
    },
    "threats": {
      "en": "Its forests are being cut down and broken into small pieces.",
      "es": "Sus bosques se están talando y dividiendo en pedazos pequeños."
    },
    "help": {
      "en": [
        "Support biological corridors that connect forests.",
        "Choose shade-grown, bird-friendly coffee.",
        "Go birdwatching with local guides: it shows forests are worth more standing."
      ],
      "es": [
        "Apoya los corredores biológicos que conectan bosques.",
        "Escoge café de sombra, amigable con las aves.",
        "Sal a ver aves con guías locales: demuestra que el bosque en pie vale más."
      ]
    },
    "funFact": {
      "en": "Its huge bill is very light because it's hollow inside, like a honeycomb.",
      "es": "Su pico enorme es muy liviano porque por dentro es hueco, como un panal."
    },
    "wiki": "Ramphastos_sulfuratus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/445694103/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/445694103/large.jpg",
      "author": "John Matthew Erickson",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/445694103",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "fiery-billed-aracari",
    "group": "bird",
    "emoji": "🦜",
    "scientific": "Pteroglossus frantzii",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Fiery-billed Aracari",
      "es": "Cusingo"
    },
    "summary": {
      "en": "A small toucan with a fiery orange-red bill and a red-and-yellow belly.",
      "es": "Un tucán pequeño con el pico rojo anaranjado como fuego y el pecho rojo y amarillo."
    },
    "where": {
      "en": "Only the southern Pacific of Costa Rica and western Panama.",
      "es": "Solo en el Pacífico sur de Costa Rica y el oeste de Panamá."
    },
    "threats": {
      "en": "Its forests are being cut down and broken into small pieces.",
      "es": "Sus bosques se están talando y dividiendo en pedazos pequeños."
    },
    "help": {
      "en": [
        "Support biological corridors that connect forests.",
        "Choose shade-grown, bird-friendly coffee.",
        "Go birdwatching with local guides: it shows forests are worth more standing."
      ],
      "es": [
        "Apoya los corredores biológicos que conectan bosques.",
        "Escoge café de sombra, amigable con las aves.",
        "Sal a ver aves con guías locales: demuestra que el bosque en pie vale más."
      ]
    },
    "funFact": {
      "en": "Aracaris sleep together in tree holes, folding their tails over their backs.",
      "es": "Los cusingos duermen juntos en huecos de árboles, doblando la cola sobre la espalda."
    },
    "wiki": "Pteroglossus_frantzii",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/38678618/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/38678618/large.jpeg",
      "author": "datadan",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/38678618",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "clay-colored-thrush",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Turdus grayi",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Clay-colored Thrush",
      "es": "Yigüirro"
    },
    "summary": {
      "en": "A plain brown bird that is Costa Rica's national bird!",
      "es": "¡Un ave café sencilla que es el ave nacional de Costa Rica!"
    },
    "where": {
      "en": "Everywhere: gardens, parks, farms and cities.",
      "es": "En todas partes: jardines, parques, fincas y ciudades."
    },
    "threats": {
      "en": "It is not in danger today. Common animals still need healthy habitats to stay common!",
      "es": "Hoy no está en peligro. ¡Los animales comunes también necesitan hábitats sanos para seguir siéndolo!"
    },
    "help": {
      "en": [
        "Plant native trees and flowers.",
        "Keep pet cats indoors.",
        "Put stickers on big windows so birds don't crash into them."
      ],
      "es": [
        "Siembra árboles y flores nativas.",
        "Mantén a los gatos dentro de la casa.",
        "Pon calcomanías en las ventanas grandes para que las aves no choquen."
      ]
    },
    "funFact": {
      "en": "People say its singing announces the start of the rainy season.",
      "es": "Dicen que su canto anuncia el inicio de la época lluviosa."
    },
    "wiki": "Turdus_grayi",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/706975475/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/706975475/large.jpg",
      "author": "Amber M. King",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/706975475",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "turquoise-browed-motmot",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Eumomota superciliosa",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Turquoise-browed Motmot",
      "es": "Momoto Cejiceleste"
    },
    "summary": {
      "en": "A colorful bird with a turquoise eyebrow and a racket-shaped tail.",
      "es": "Un ave colorida con una ceja turquesa y la cola en forma de raqueta."
    },
    "where": {
      "en": "Dry forests and farms of Guanacaste.",
      "es": "Bosques secos y fincas de Guanacaste."
    },
    "threats": {
      "en": "It is not in danger today. Common animals still need healthy habitats to stay common!",
      "es": "Hoy no está en peligro. ¡Los animales comunes también necesitan hábitats sanos para seguir siéndolo!"
    },
    "help": {
      "en": [
        "Plant native trees and flowers.",
        "Keep pet cats indoors.",
        "Put stickers on big windows so birds don't crash into them."
      ],
      "es": [
        "Siembra árboles y flores nativas.",
        "Mantén a los gatos dentro de la casa.",
        "Pon calcomanías en las ventanas grandes para que las aves no choquen."
      ]
    },
    "funFact": {
      "en": "It wags its tail like a pendulum to tell predators 'I see you!'",
      "es": "Mueve la cola como un péndulo para decirle a los depredadores '¡te estoy viendo!'"
    },
    "wiki": "Eumomota_superciliosa",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/396204781/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/396204781/large.jpeg",
      "author": "Dean Hester",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/396204781",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "montezuma-oropendola",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Psarocolius montezuma",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Montezuma Oropendola",
      "es": "Oropéndola de Moctezuma"
    },
    "summary": {
      "en": "A chestnut bird with a yellow tail that weaves long hanging nests.",
      "es": "Un ave castaña de cola amarilla que teje nidos largos que cuelgan."
    },
    "where": {
      "en": "Caribbean lowlands.",
      "es": "Las tierras bajas del Caribe."
    },
    "threats": {
      "en": "Its forests are being cut down and broken into small pieces.",
      "es": "Sus bosques se están talando y dividiendo en pedazos pequeños."
    },
    "help": {
      "en": [
        "Support biological corridors that connect forests.",
        "Choose shade-grown, bird-friendly coffee.",
        "Go birdwatching with local guides: it shows forests are worth more standing."
      ],
      "es": [
        "Apoya los corredores biológicos que conectan bosques.",
        "Escoge café de sombra, amigable con las aves.",
        "Sal a ver aves con guías locales: demuestra que el bosque en pie vale más."
      ]
    },
    "funFact": {
      "en": "Males bow forward while making a gurgling song that sounds like water.",
      "es": "Los machos se inclinan hacia adelante con un canto que suena como agua."
    },
    "wiki": "Psarocolius_montezuma",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/33134122/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/33134122/large.jpg",
      "author": "Céline",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/33134122",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "king-vulture",
    "group": "bird",
    "emoji": "🦅",
    "scientific": "Sarcoramphus papa",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "King Vulture",
      "es": "Zopilote Rey"
    },
    "summary": {
      "en": "A white vulture with a colorful head of orange, purple and yellow.",
      "es": "Un zopilote blanco con la cabeza de colores: anaranjado, morado y amarillo."
    },
    "where": {
      "en": "Soaring high above big forests like Corcovado.",
      "es": "Planea alto sobre bosques grandes como Corcovado."
    },
    "threats": {
      "en": "Forest loss, and people who shoot or poison birds of prey.",
      "es": "La pérdida de bosque y las personas que disparan o envenenan a las aves rapaces."
    },
    "help": {
      "en": [
        "Never shoot or harm birds of prey: they keep nature in balance.",
        "Support big protected forests.",
        "Take injured raptors to a wildlife rescue center."
      ],
      "es": [
        "Nunca dispares ni hagas daño a las aves rapaces: mantienen el equilibrio de la naturaleza.",
        "Apoya los grandes bosques protegidos.",
        "Lleva a las rapaces heridas a un centro de rescate."
      ]
    },
    "funFact": {
      "en": "Vultures are nature's clean-up crew: by eating dead animals, they stop diseases from spreading.",
      "es": "Los zopilotes son el equipo de limpieza de la naturaleza: al comer animales muertos evitan que se propaguen enfermedades."
    },
    "wiki": "Sarcoramphus_papa",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/709412731/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/709412731/large.jpg",
      "author": "Amber M. King",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/709412731",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "jabiru",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Jabiru mycteria",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Jabiru",
      "es": "Galán sin Ventura"
    },
    "summary": {
      "en": "A giant stork with a black head and a red band on its neck.",
      "es": "Una cigüeña gigante con la cabeza negra y una banda roja en el cuello."
    },
    "where": {
      "en": "Wetlands like Palo Verde and Caño Negro.",
      "es": "Humedales como Palo Verde y Caño Negro."
    },
    "threats": {
      "en": "Wetlands are drained for farms, and rivers get polluted.",
      "es": "Se secan humedales para hacer fincas y los ríos se contaminan."
    },
    "help": {
      "en": [
        "Support wetlands like Palo Verde and Caño Negro.",
        "Keep your distance from nesting colonies.",
        "Use fewer pesticides near water."
      ],
      "es": [
        "Apoya humedales como Palo Verde y Caño Negro.",
        "Mantén distancia de las colonias de anidación.",
        "Usa menos plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "In Costa Rica it's called 'Galán sin ventura': the unlucky gentleman!",
      "es": "En Costa Rica le dicen 'Galán sin ventura': ¡el galán sin suerte!"
    },
    "wiki": "Jabiru_mycteria",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/508495078/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/508495078/large.jpg",
      "author": "Eyder Fonseca Sanchez",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/508495078",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "roseate-spoonbill",
    "group": "bird",
    "emoji": "🦩",
    "scientific": "Platalea ajaja",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Roseate Spoonbill",
      "es": "Espátula Rosada"
    },
    "summary": {
      "en": "A pink wading bird with a flat, spoon-shaped bill.",
      "es": "Un ave rosada de patas largas con el pico plano en forma de cuchara."
    },
    "where": {
      "en": "Mangroves and wetlands like Palo Verde and the Gulf of Nicoya.",
      "es": "Manglares y humedales como Palo Verde y el golfo de Nicoya."
    },
    "threats": {
      "en": "Wetlands are drained for farms, and rivers get polluted.",
      "es": "Se secan humedales para hacer fincas y los ríos se contaminan."
    },
    "help": {
      "en": [
        "Support wetlands like Palo Verde and Caño Negro.",
        "Keep your distance from nesting colonies.",
        "Use fewer pesticides near water."
      ],
      "es": [
        "Apoya humedales como Palo Verde y Caño Negro.",
        "Mantén distancia de las colonias de anidación.",
        "Usa menos plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "It swings its spoon-bill side to side in the water to catch food.",
      "es": "Mueve su pico de cuchara de lado a lado en el agua para atrapar comida."
    },
    "wiki": "Platalea_ajaja",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/565594128/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/565594128/large.jpg",
      "author": "Irene",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/565594128",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "bare-throated-tiger-heron",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Tigrisoma mexicanum",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Bare-throated Tiger-Heron",
      "es": "Garza Tigre"
    },
    "summary": {
      "en": "A heron with tiger-like stripes and a bare yellow throat.",
      "es": "Una garza con rayas como de tigre y la garganta amarilla sin plumas."
    },
    "where": {
      "en": "Rivers, mangroves and wetlands all over the country.",
      "es": "Ríos, manglares y humedales de todo el país."
    },
    "threats": {
      "en": "Wetlands are drained for farms, and rivers get polluted.",
      "es": "Se secan humedales para hacer fincas y los ríos se contaminan."
    },
    "help": {
      "en": [
        "Support wetlands like Palo Verde and Caño Negro.",
        "Keep your distance from nesting colonies.",
        "Use fewer pesticides near water."
      ],
      "es": [
        "Apoya humedales como Palo Verde y Caño Negro.",
        "Mantén distancia de las colonias de anidación.",
        "Usa menos plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "It can stand perfectly still for a long time, then strike like lightning.",
      "es": "Puede quedarse quieta mucho tiempo y luego atacar como un rayo."
    },
    "wiki": "Tigrisoma_mexicanum",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/256276616/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/256276616/large.jpg",
      "author": "Federico Figueroa Cabezas",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/256276616",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "snowcap",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Microchera albocoronata",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Snowcap",
      "es": "Colibrí Copete Nevado"
    },
    "summary": {
      "en": "A tiny purple hummingbird with a bright white cap.",
      "es": "Un colibrí diminuto y morado con una gorrita blanca brillante."
    },
    "where": {
      "en": "Caribbean foothills.",
      "es": "Las faldas de las montañas del Caribe."
    },
    "threats": {
      "en": "Loss of the forests and flowers it depends on.",
      "es": "La pérdida de los bosques y las flores de las que depende."
    },
    "help": {
      "en": [
        "Plant native flowers in your garden.",
        "Avoid pesticides.",
        "Support forest and mangrove protection."
      ],
      "es": [
        "Siembra flores nativas en tu jardín.",
        "Evita los plaguicidas.",
        "Apoya la protección de bosques y manglares."
      ]
    },
    "funFact": {
      "en": "It's one of the smallest birds in Costa Rica.",
      "es": "Es una de las aves más pequeñas de Costa Rica."
    },
    "wiki": "Microchera_albocoronata",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/331707422/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/331707422/large.jpeg",
      "author": "Millie Basden",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/331707422",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "volcano-hummingbird",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Selasphorus flammula",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Volcano Hummingbird",
      "es": "Colibrí Volcanero"
    },
    "summary": {
      "en": "A tiny hummingbird of the high mountains of Costa Rica and Panama.",
      "es": "Un colibrí diminuto de las montañas altas de Costa Rica y Panamá."
    },
    "where": {
      "en": "Volcano tops and highlands, like Irazú, Poás and Chirripó.",
      "es": "Cimas de volcanes y tierras altas, como el Irazú, el Poás y el Chirripó."
    },
    "threats": {
      "en": "Loss of the forests and flowers it depends on.",
      "es": "La pérdida de los bosques y las flores de las que depende."
    },
    "help": {
      "en": [
        "Plant native flowers in your garden.",
        "Avoid pesticides.",
        "Support forest and mangrove protection."
      ],
      "es": [
        "Siembra flores nativas en tu jardín.",
        "Evita los plaguicidas.",
        "Apoya la protección de bosques y manglares."
      ]
    },
    "funFact": {
      "en": "On cold nights it lowers its body temperature to save energy.",
      "es": "En las noches frías baja su temperatura para ahorrar energía."
    },
    "wiki": "Selasphorus_flammula",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/262150654/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/262150654/large.jpg",
      "author": "Carrie Seltzer",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/262150654",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "long-tailed-manakin",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Chiroxiphia linearis",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Long-tailed Manakin",
      "es": "Toledo"
    },
    "summary": {
      "en": "A black bird with a blue back, a red cap and two very long tail feathers.",
      "es": "Un ave negra con la espalda azul, una gorrita roja y dos plumas muy largas en la cola."
    },
    "where": {
      "en": "Forests of the Pacific side.",
      "es": "Bosques del lado del Pacífico."
    },
    "threats": {
      "en": "Its forests are being cut down and broken into small pieces.",
      "es": "Sus bosques se están talando y dividiendo en pedazos pequeños."
    },
    "help": {
      "en": [
        "Support biological corridors that connect forests.",
        "Choose shade-grown, bird-friendly coffee.",
        "Go birdwatching with local guides: it shows forests are worth more standing."
      ],
      "es": [
        "Apoya los corredores biológicos que conectan bosques.",
        "Escoge café de sombra, amigable con las aves.",
        "Sal a ver aves con guías locales: demuestra que el bosque en pie vale más."
      ]
    },
    "funFact": {
      "en": "Two males dance together, leapfrogging over each other to impress a female!",
      "es": "¡Dos machos bailan juntos, saltando uno sobre el otro para impresionar a una hembra!"
    },
    "wiki": "Chiroxiphia_linearis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/358587622/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/358587622/large.jpeg",
      "author": "Dan MacNeal",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/358587622",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "spectacled-owl",
    "group": "bird",
    "emoji": "🦉",
    "scientific": "Pulsatrix perspicillata",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Spectacled Owl",
      "es": "Búho de Anteojos"
    },
    "summary": {
      "en": "A large owl with white 'glasses' around its yellow eyes.",
      "es": "Un búho grande con 'anteojos' blancos alrededor de sus ojos amarillos."
    },
    "where": {
      "en": "Lowland forests all over the country.",
      "es": "Bosques bajos de todo el país."
    },
    "threats": {
      "en": "Its forests are being cut down and broken into small pieces.",
      "es": "Sus bosques se están talando y dividiendo en pedazos pequeños."
    },
    "help": {
      "en": [
        "Support biological corridors that connect forests.",
        "Choose shade-grown, bird-friendly coffee.",
        "Go birdwatching with local guides: it shows forests are worth more standing."
      ],
      "es": [
        "Apoya los corredores biológicos que conectan bosques.",
        "Escoge café de sombra, amigable con las aves.",
        "Sal a ver aves con guías locales: demuestra que el bosque en pie vale más."
      ]
    },
    "funFact": {
      "en": "Young spectacled owls are white with a dark face: the opposite of their parents!",
      "es": "Los pichones son blancos con la cara oscura: ¡al revés que sus papás!"
    },
    "wiki": "Pulsatrix_perspicillata",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/343620861/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/343620861/large.jpeg",
      "author": "Laurel Meredyk",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/343620861",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "magnificent-frigatebird",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Fregata magnificens",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Magnificent Frigatebird",
      "es": "Tijereta de Mar"
    },
    "summary": {
      "en": "A huge black seabird with long pointed wings. Males puff up a red throat pouch.",
      "es": "Un ave marina enorme y negra con alas largas y puntiagudas. Los machos inflan una bolsa roja en la garganta."
    },
    "where": {
      "en": "Both coasts, especially islands in the Gulf of Nicoya.",
      "es": "Ambas costas, sobre todo las islas del golfo de Nicoya."
    },
    "threats": {
      "en": "Plastic in the ocean, fishing lines and hooks, and predators brought to its nesting islands.",
      "es": "El plástico en el mar, las cuerdas y anzuelos de pesca, y los depredadores llevados a sus islas de anidación."
    },
    "help": {
      "en": [
        "Use less plastic.",
        "Never leave fishing line or hooks behind.",
        "Support marine protected areas."
      ],
      "es": [
        "Usa menos plástico.",
        "Nunca dejes cuerdas ni anzuelos de pesca tirados.",
        "Apoya las áreas marinas protegidas."
      ]
    },
    "funFact": {
      "en": "It can stay in the air for days without landing.",
      "es": "Puede pasar días en el aire sin posarse."
    },
    "wiki": "Fregata_magnificens",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/223153467/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/223153467/large.jpg",
      "author": "Irene",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/223153467",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "brown-pelican",
    "group": "bird",
    "emoji": "🐦",
    "scientific": "Pelecanus occidentalis",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Brown Pelican",
      "es": "Pelícano Pardo"
    },
    "summary": {
      "en": "A big brown seabird that dives headfirst into the sea to catch fish.",
      "es": "Un ave marina grande y café que se lanza de cabeza al mar para pescar."
    },
    "where": {
      "en": "Pacific beaches and islands.",
      "es": "Playas e islas del Pacífico."
    },
    "threats": {
      "en": "Plastic in the ocean, fishing lines and hooks, and predators brought to its nesting islands.",
      "es": "El plástico en el mar, las cuerdas y anzuelos de pesca, y los depredadores llevados a sus islas de anidación."
    },
    "help": {
      "en": [
        "Use less plastic.",
        "Never leave fishing line or hooks behind.",
        "Support marine protected areas."
      ],
      "es": [
        "Usa menos plástico.",
        "Nunca dejes cuerdas ni anzuelos de pesca tirados.",
        "Apoya las áreas marinas protegidas."
      ]
    },
    "funFact": {
      "en": "Its throat pouch can hold more water than its stomach can hold food.",
      "es": "Su bolsa en la garganta puede contener más agua que la comida que cabe en su estómago."
    },
    "wiki": "Pelecanus_occidentalis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/31986120/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/31986120/large.jpeg",
      "author": "Rob Foster",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/31986120",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "sungrebe",
    "group": "bird",
    "emoji": "🦆",
    "scientific": "Heliornis fulica",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Sungrebe",
      "es": "Pato Cantil"
    },
    "summary": {
      "en": "A shy water bird with a striped head and lobed toes.",
      "es": "Un ave acuática tímida con la cabeza rayada y dedos con lóbulos."
    },
    "where": {
      "en": "Quiet rivers and lagoons, like Tortuguero.",
      "es": "Ríos y lagunas tranquilos, como Tortuguero."
    },
    "threats": {
      "en": "Wetlands are drained for farms, and rivers get polluted.",
      "es": "Se secan humedales para hacer fincas y los ríos se contaminan."
    },
    "help": {
      "en": [
        "Support wetlands like Palo Verde and Caño Negro.",
        "Keep your distance from nesting colonies.",
        "Use fewer pesticides near water."
      ],
      "es": [
        "Apoya humedales como Palo Verde y Caño Negro.",
        "Mantén distancia de las colonias de anidación.",
        "Usa menos plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "Males carry their chicks in pockets under their wings, even while flying!",
      "es": "¡Los machos cargan a sus pichones en bolsitas debajo de las alas, incluso volando!"
    },
    "wiki": "Heliornis_fulica",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/363553991/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/363553991/large.jpeg",
      "author": "Forest Botial-Jarvis",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/363553991",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "green-sea-turtle",
    "group": "reptile",
    "emoji": "🐢",
    "scientific": "Chelonia mydas",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Green Sea Turtle",
      "es": "Tortuga Verde"
    },
    "summary": {
      "en": "A large sea turtle named for the green color of its fat, not its shell.",
      "es": "Una tortuga marina grande que debe su nombre al color verde de su grasa, no de su caparazón."
    },
    "where": {
      "en": "Tortuguero, one of the most important nesting beaches for green turtles in the world.",
      "es": "Tortuguero, una de las playas de anidación más importantes del mundo para la tortuga verde."
    },
    "threats": {
      "en": "Plastic, egg poaching, fishing nets and bright lights on nesting beaches.",
      "es": "El plástico, el saqueo de huevos, las redes de pesca y las luces fuertes en las playas de anidación."
    },
    "help": {
      "en": [
        "Never buy or eat turtle eggs.",
        "Keep lights off on nesting beaches at night.",
        "Watch nesting only with a certified guide.",
        "Use less plastic."
      ],
      "es": [
        "Nunca compres ni comas huevos de tortuga.",
        "Mantén las luces apagadas en las playas de anidación por la noche.",
        "Observa la anidación solo con un guía certificado.",
        "Usa menos plástico."
      ]
    },
    "funFact": {
      "en": "Adults eat mostly seagrass, keeping underwater meadows healthy.",
      "es": "Los adultos comen sobre todo pasto marino y mantienen sanas las praderas submarinas."
    },
    "wiki": "Chelonia_mydas",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/141568446/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/141568446/large.jpeg",
      "author": "Justin Philbois",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/141568446",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "olive-ridley",
    "group": "reptile",
    "emoji": "🐢",
    "scientific": "Lepidochelys olivacea",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Olive Ridley Sea Turtle",
      "es": "Tortuga Lora"
    },
    "summary": {
      "en": "A small sea turtle famous for nesting in huge groups called 'arribadas'.",
      "es": "Una tortuga marina pequeña, famosa por anidar en grupos enormes llamados 'arribadas'."
    },
    "where": {
      "en": "Ostional and Nancite beaches in Guanacaste.",
      "es": "Las playas Ostional y Nancite en Guanacaste."
    },
    "threats": {
      "en": "Plastic, egg poaching, fishing nets and bright lights on nesting beaches.",
      "es": "El plástico, el saqueo de huevos, las redes de pesca y las luces fuertes en las playas de anidación."
    },
    "help": {
      "en": [
        "Never buy or eat turtle eggs.",
        "Keep lights off on nesting beaches at night.",
        "Watch nesting only with a certified guide.",
        "Use less plastic."
      ],
      "es": [
        "Nunca compres ni comas huevos de tortuga.",
        "Mantén las luces apagadas en las playas de anidación por la noche.",
        "Observa la anidación solo con un guía certificado.",
        "Usa menos plástico."
      ]
    },
    "funFact": {
      "en": "During an arribada, thousands of turtles come ashore to nest at the same time!",
      "es": "¡Durante una arribada, miles de tortugas salen a anidar al mismo tiempo!"
    },
    "wiki": "Lepidochelys_olivacea",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/58933001/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/58933001/large.jpeg",
      "author": "Tomás Carranza Perales",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/58933001",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "loggerhead-turtle",
    "group": "reptile",
    "emoji": "🐢",
    "scientific": "Caretta caretta",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Loggerhead Sea Turtle",
      "es": "Tortuga Caguama"
    },
    "summary": {
      "en": "A sea turtle with a big head and strong jaws for crushing crabs and clams.",
      "es": "Una tortuga marina de cabeza grande y mandíbulas fuertes para triturar cangrejos y almejas."
    },
    "where": {
      "en": "Rarely seen in Costa Rica's Caribbean waters.",
      "es": "Se ve rara vez en las aguas del Caribe de Costa Rica."
    },
    "threats": {
      "en": "Plastic, egg poaching, fishing nets and bright lights on nesting beaches.",
      "es": "El plástico, el saqueo de huevos, las redes de pesca y las luces fuertes en las playas de anidación."
    },
    "help": {
      "en": [
        "Never buy or eat turtle eggs.",
        "Keep lights off on nesting beaches at night.",
        "Watch nesting only with a certified guide.",
        "Use less plastic."
      ],
      "es": [
        "Nunca compres ni comas huevos de tortuga.",
        "Mantén las luces apagadas en las playas de anidación por la noche.",
        "Observa la anidación solo con un guía certificado.",
        "Usa menos plástico."
      ]
    },
    "funFact": {
      "en": "Its jaws are strong enough to crack open conch shells.",
      "es": "Sus mandíbulas son tan fuertes que pueden romper caracoles marinos."
    },
    "wiki": "Caretta_caretta",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/183028089/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/183028089/large.jpeg",
      "author": "Jan Ebr &amp; Ivana Ebrová",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/183028089",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "american-crocodile",
    "group": "reptile",
    "emoji": "🐊",
    "scientific": "Crocodylus acutus",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "American Crocodile",
      "es": "Cocodrilo"
    },
    "summary": {
      "en": "A huge reptile that can grow more than 4 meters long.",
      "es": "Un reptil enorme que puede medir más de 4 metros."
    },
    "where": {
      "en": "Rivers and mangroves, famously under the Tárcoles River bridge.",
      "es": "Ríos y manglares; es famoso el puente del río Tárcoles."
    },
    "threats": {
      "en": "Polluted rivers, habitat loss and conflicts with people.",
      "es": "Los ríos contaminados, la pérdida de hábitat y los conflictos con las personas."
    },
    "help": {
      "en": [
        "Never feed crocodiles or caimans: it makes them lose their fear of people.",
        "Keep a safe distance from rivers where they live.",
        "Keep rivers clean."
      ],
      "es": [
        "Nunca alimentes cocodrilos ni caimanes: pierden el miedo a las personas.",
        "Mantén una distancia segura de los ríos donde viven.",
        "Mantén limpios los ríos."
      ]
    },
    "funFact": {
      "en": "Mother crocodiles gently carry their babies in their mouths to the water.",
      "es": "Las mamás cocodrilo llevan con cuidado a sus crías en la boca hasta el agua."
    },
    "wiki": "Crocodylus_acutus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/2415459/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/2415459/large.jpg",
      "author": "Annika Lindqvist",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/2415459",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "five-keeled-spiny-tailed-iguana",
    "group": "reptile",
    "emoji": "🦎",
    "scientific": "Ctenosaura quinquecarinata",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Five-keeled Spiny-tailed Iguana",
      "es": "Iguana de Cola Espinosa"
    },
    "summary": {
      "en": "A small iguana with a short, spiky, club-like tail.",
      "es": "Una iguana pequeña con una cola corta y espinosa, como un garrote."
    },
    "where": {
      "en": "Dry forests of Guanacaste.",
      "es": "Los bosques secos de Guanacaste."
    },
    "threats": {
      "en": "Hunting for meat and eggs, and loss of dry forest.",
      "es": "La cacería por su carne y sus huevos, y la pérdida del bosque seco."
    },
    "help": {
      "en": [
        "Never buy iguana meat or eggs.",
        "Leave wild iguanas in the wild, not as pets.",
        "Support dry forest protection in Guanacaste."
      ],
      "es": [
        "Nunca compres carne ni huevos de iguana.",
        "Deja a las iguanas en la naturaleza, no como mascotas.",
        "Apoya la protección del bosque seco de Guanacaste."
      ]
    },
    "funFact": {
      "en": "It hides in tree holes and blocks the door with its spiny tail.",
      "es": "Se esconde en huecos de árboles y tapa la entrada con su cola espinosa."
    },
    "wiki": "Ctenosaura_quinquecarinata",
    "photo": {
      "url": "https://images.collections.yale.edu/iiif/2/ypm:6e77f8a4-ef32-4518-9b59-3d134ed5dfae/full/!1920,1920/0/default.jpg",
      "large": "https://images.collections.yale.edu/iiif/2/ypm:6e77f8a4-ef32-4518-9b59-3d134ed5dfae/full/!1920,1920/0/default.jpg",
      "author": "Adam Z. Andis",
      "license": "CC0",
      "page": "https://www.gbif.org/occurrence/1039482104",
      "source": "GBIF",
      "cardOk": true
    }
  },
  {
    "id": "narrow-bridged-mud-turtle",
    "group": "reptile",
    "emoji": "🐢",
    "scientific": "Kinosternon angustipons",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Narrow-bridged Mud Turtle",
      "es": "Tortuga Candado de Puente Angosto"
    },
    "summary": {
      "en": "A small freshwater turtle of Caribbean wetlands.",
      "es": "Una tortuga pequeña de agua dulce de los humedales del Caribe."
    },
    "where": {
      "en": "Swamps and slow streams of the Caribbean lowlands.",
      "es": "Pantanos y quebradas lentas de las tierras bajas del Caribe."
    },
    "threats": {
      "en": "Wetland loss, and people taking them for pets or food.",
      "es": "La pérdida de humedales y las personas que se las llevan como mascotas o comida."
    },
    "help": {
      "en": [
        "Never take turtles from the wild.",
        "Never release pet turtles into rivers.",
        "Support wetland protection."
      ],
      "es": [
        "Nunca saques tortugas de la naturaleza.",
        "Nunca sueltes tortugas mascota en los ríos.",
        "Apoya la protección de los humedales."
      ]
    },
    "funFact": {
      "en": "Mud turtles can partly close their shell, like a little box.",
      "es": "Las tortugas candado pueden cerrar parte de su caparazón como una cajita."
    },
    "wiki": "Kinosternon_angustipons",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/546303817/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/546303817/large.jpg",
      "author": "Lasse W.",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/546303817",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "black-wood-turtle",
    "group": "reptile",
    "emoji": "🐢",
    "scientific": "Rhinoclemmys funerea",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Black River Turtle",
      "es": "Tortuga Negra de Río"
    },
    "summary": {
      "en": "A large black river turtle with yellow face markings.",
      "es": "Una tortuga de río grande y negra con marcas amarillas en la cara."
    },
    "where": {
      "en": "Caribbean rivers and swamps, like Tortuguero.",
      "es": "Ríos y pantanos del Caribe, como Tortuguero."
    },
    "threats": {
      "en": "Wetland loss, and people taking them for pets or food.",
      "es": "La pérdida de humedales y las personas que se las llevan como mascotas o comida."
    },
    "help": {
      "en": [
        "Never take turtles from the wild.",
        "Never release pet turtles into rivers.",
        "Support wetland protection."
      ],
      "es": [
        "Nunca saques tortugas de la naturaleza.",
        "Nunca sueltes tortugas mascota en los ríos.",
        "Apoya la protección de los humedales."
      ]
    },
    "funFact": {
      "en": "It suns itself on logs and dives quickly if something scares it.",
      "es": "Toma el sol sobre troncos y se lanza al agua si algo la asusta."
    },
    "wiki": "Rhinoclemmys_funerea",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/484016226/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/484016226/large.jpg",
      "author": "prodewald",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/484016226",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "brown-wood-turtle",
    "group": "reptile",
    "emoji": "🐢",
    "scientific": "Rhinoclemmys annulata",
    "status": "NT",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Brown Wood Turtle",
      "es": "Tortuga de Monte"
    },
    "summary": {
      "en": "A land turtle that lives on the rainforest floor.",
      "es": "Una tortuga terrestre que vive en el suelo del bosque lluvioso."
    },
    "where": {
      "en": "Caribbean rainforests.",
      "es": "Bosques lluviosos del Caribe."
    },
    "threats": {
      "en": "Wetland loss, and people taking them for pets or food.",
      "es": "La pérdida de humedales y las personas que se las llevan como mascotas o comida."
    },
    "help": {
      "en": [
        "Never take turtles from the wild.",
        "Never release pet turtles into rivers.",
        "Support wetland protection."
      ],
      "es": [
        "Nunca saques tortugas de la naturaleza.",
        "Nunca sueltes tortugas mascota en los ríos.",
        "Apoya la protección de los humedales."
      ]
    },
    "funFact": {
      "en": "Unlike most turtles, it lives on land and eats plants and fruit.",
      "es": "A diferencia de casi todas las tortugas, vive en tierra y come plantas y frutas."
    },
    "wiki": "Rhinoclemmys_annulata",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/662489500/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/662489500/large.jpg",
      "author": "Jeanne Robinson",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/662489500",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "black-headed-bushmaster",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Lachesis melanocephala",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Black-headed Bushmaster",
      "es": "Matabuey de Cabeza Negra"
    },
    "summary": {
      "en": "A rare, very large viper found only in southern Costa Rica and western Panama.",
      "es": "Una víbora rara y muy grande que solo vive en el sur de Costa Rica y el oeste de Panamá."
    },
    "where": {
      "en": "Rainforests of the Osa Peninsula and the southern Pacific.",
      "es": "Bosques lluviosos de la península de Osa y el Pacífico sur."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "Bushmasters are the longest vipers in the Americas.",
      "es": "Las matabueyes son las víboras más largas de América."
    },
    "wiki": "Lachesis_melanocephala",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/466562386/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/466562386/large.jpeg",
      "author": "Rob Foster",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/466562386",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "black-spiny-tailed-iguana",
    "group": "reptile",
    "emoji": "🦎",
    "scientific": "Ctenosaura similis",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Black Spiny-tailed Iguana",
      "es": "Garrobo"
    },
    "summary": {
      "en": "A fast iguana with rings of spines on its tail.",
      "es": "Una iguana rápida con anillos de espinas en la cola."
    },
    "where": {
      "en": "The dry Pacific coast, beaches and even towns.",
      "es": "La costa seca del Pacífico, las playas y hasta los pueblos."
    },
    "threats": {
      "en": "Hunting for meat and eggs, and loss of dry forest.",
      "es": "La cacería por su carne y sus huevos, y la pérdida del bosque seco."
    },
    "help": {
      "en": [
        "Never buy iguana meat or eggs.",
        "Leave wild iguanas in the wild, not as pets.",
        "Support dry forest protection in Guanacaste."
      ],
      "es": [
        "Nunca compres carne ni huevos de iguana.",
        "Deja a las iguanas en la naturaleza, no como mascotas.",
        "Apoya la protección del bosque seco de Guanacaste."
      ]
    },
    "funFact": {
      "en": "It's one of the fastest lizards on Earth, reaching about 35 km/h!",
      "es": "¡Es una de las lagartijas más rápidas del planeta: llega a unos 35 km/h!"
    },
    "wiki": "Ctenosaura_similis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/235666810/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/235666810/large.jpg",
      "author": "Sam Eberhard",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/235666810",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "green-iguana",
    "group": "reptile",
    "emoji": "🦎",
    "scientific": "Iguana iguana",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Green Iguana",
      "es": "Iguana Verde"
    },
    "summary": {
      "en": "A large green lizard that loves sunbathing in trees near rivers.",
      "es": "Una lagartija grande y verde a la que le encanta tomar el sol en árboles cerca de los ríos."
    },
    "where": {
      "en": "Rivers and coasts all over the country.",
      "es": "Ríos y costas de todo el país."
    },
    "threats": {
      "en": "Hunting for meat and eggs, and loss of dry forest.",
      "es": "La cacería por su carne y sus huevos, y la pérdida del bosque seco."
    },
    "help": {
      "en": [
        "Never buy iguana meat or eggs.",
        "Leave wild iguanas in the wild, not as pets.",
        "Support dry forest protection in Guanacaste."
      ],
      "es": [
        "Nunca compres carne ni huevos de iguana.",
        "Deja a las iguanas en la naturaleza, no como mascotas.",
        "Apoya la protección del bosque seco de Guanacaste."
      ]
    },
    "funFact": {
      "en": "If it falls from a high branch into a river, it just swims away!",
      "es": "¡Si se cae de una rama alta al río, simplemente se va nadando!"
    },
    "wiki": "Iguana_iguana",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/18307507/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/18307507/large.jpg",
      "author": "Andrew Meeds",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/18307507",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "spectacled-caiman",
    "group": "reptile",
    "emoji": "🐊",
    "scientific": "Caiman crocodilus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Spectacled Caiman",
      "es": "Caimán"
    },
    "summary": {
      "en": "A small relative of crocodiles with a bony ridge between its eyes, like glasses.",
      "es": "Un pariente pequeño del cocodrilo, con una cresta de hueso entre los ojos, como anteojos."
    },
    "where": {
      "en": "Wetlands and canals like Caño Negro and Tortuguero.",
      "es": "Humedales y canales como Caño Negro y Tortuguero."
    },
    "threats": {
      "en": "Polluted rivers, habitat loss and conflicts with people.",
      "es": "Los ríos contaminados, la pérdida de hábitat y los conflictos con las personas."
    },
    "help": {
      "en": [
        "Never feed crocodiles or caimans: it makes them lose their fear of people.",
        "Keep a safe distance from rivers where they live.",
        "Keep rivers clean."
      ],
      "es": [
        "Nunca alimentes cocodrilos ni caimanes: pierden el miedo a las personas.",
        "Mantén una distancia segura de los ríos donde viven.",
        "Mantén limpios los ríos."
      ]
    },
    "funFact": {
      "en": "Its 'spectacles' are a bony ridge between its eyes.",
      "es": "Sus 'anteojos' son una cresta de hueso entre los ojos."
    },
    "wiki": "Caiman_crocodilus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/215395564/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/215395564/large.jpg",
      "author": "Troy Murphy",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/215395564",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "eyelash-viper",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Bothriechis schlegelii",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Eyelash Viper",
      "es": "Bocaracá"
    },
    "summary": {
      "en": "A small tree viper with spiky scales over its eyes that look like eyelashes.",
      "es": "Una víbora pequeña de árbol con escamas puntiagudas sobre los ojos que parecen pestañas."
    },
    "where": {
      "en": "Rainforests on both sides of the mountains.",
      "es": "Bosques lluviosos de ambos lados de las montañas."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "Some are golden yellow, others green or even pink: all the same species!",
      "es": "Algunas son amarillo dorado, otras verdes o hasta rosadas: ¡todas de la misma especie!"
    },
    "wiki": "Bothriechis_schlegelii",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/84758579/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/84758579/large.jpeg",
      "author": "Daniel Mesa",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/84758579",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "fer-de-lance",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Bothrops asper",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Fer-de-lance",
      "es": "Terciopelo"
    },
    "summary": {
      "en": "A large, venomous viper with a diamond pattern, respected all over Costa Rica.",
      "es": "Una víbora grande y venenosa con dibujos de rombos, respetada en toda Costa Rica."
    },
    "where": {
      "en": "Lowland forests and farms all over the country.",
      "es": "Bosques bajos y fincas de todo el país."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "Costa Rica's Clodomiro Picado Institute makes antivenom that saves lives around the world.",
      "es": "El Instituto Clodomiro Picado de Costa Rica produce suero antiofídico que salva vidas en todo el mundo."
    },
    "wiki": "Bothrops_asper",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/358642740/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/358642740/large.jpeg",
      "author": "Buckelkopfcichlide",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/358642740",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "central-american-bushmaster",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Lachesis stenophrys",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Central American Bushmaster",
      "es": "Matabuey"
    },
    "summary": {
      "en": "A huge viper of the Caribbean rainforest.",
      "es": "Una víbora enorme del bosque lluvioso del Caribe."
    },
    "where": {
      "en": "Caribbean lowland rainforests.",
      "es": "Bosques lluviosos de las tierras bajas del Caribe."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "It's one of the few vipers in the Americas that lays eggs.",
      "es": "Es una de las pocas víboras de América que pone huevos."
    },
    "wiki": "Lachesis_stenophrys",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63671518/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/63671518/large.jpg",
      "author": "Eridan Xharahi",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/63671518",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "boa",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Boa constrictor",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Boa",
      "es": "Boa"
    },
    "summary": {
      "en": "A big, strong snake that squeezes its prey. It is not venomous.",
      "es": "Una serpiente grande y fuerte que aprieta a sus presas. No es venenosa."
    },
    "where": {
      "en": "Forests, farms and dry forests all over the country.",
      "es": "Bosques, fincas y bosques secos de todo el país."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "Boas give birth to live babies instead of laying eggs.",
      "es": "Las boas tienen crías vivas en vez de poner huevos."
    },
    "wiki": "Boa_constrictor",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/102416341/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/102416341/large.jpeg",
      "author": "Hugo Hulsberg",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/102416341",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "green-basilisk",
    "group": "reptile",
    "emoji": "🦎",
    "scientific": "Basiliscus plumifrons",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Green Basilisk",
      "es": "Basilisco Verde"
    },
    "summary": {
      "en": "A bright green lizard with crests on its head, back and tail.",
      "es": "Una lagartija verde brillante con crestas en la cabeza, la espalda y la cola."
    },
    "where": {
      "en": "Rivers and streams of the Caribbean side.",
      "es": "Ríos y quebradas del lado del Caribe."
    },
    "threats": {
      "en": "Forest loss and pet cats.",
      "es": "La pérdida de bosque y los gatos domésticos."
    },
    "help": {
      "en": [
        "Keep pet cats indoors.",
        "Leave lizards in the wild.",
        "Plant native plants in your garden."
      ],
      "es": [
        "Mantén a los gatos dentro de la casa.",
        "Deja a las lagartijas en la naturaleza.",
        "Siembra plantas nativas en tu jardín."
      ]
    },
    "funFact": {
      "en": "It can run across water on its back legs. That's why people call it the 'Jesus Christ lizard'!",
      "es": "Puede correr sobre el agua en sus patas traseras. ¡Por eso le dicen 'lagartija Jesucristo'!"
    },
    "wiki": "Basiliscus_plumifrons",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/443366216/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/443366216/large.jpg",
      "author": "John Matthew Erickson",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/443366216",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "common-basilisk",
    "group": "reptile",
    "emoji": "🦎",
    "scientific": "Basiliscus basiliscus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Common Basilisk",
      "es": "Basilisco Café"
    },
    "summary": {
      "en": "A brown basilisk of the Pacific side that also runs on water.",
      "es": "Un basilisco café del lado del Pacífico que también corre sobre el agua."
    },
    "where": {
      "en": "Pacific rivers and streams.",
      "es": "Ríos y quebradas del Pacífico."
    },
    "threats": {
      "en": "Forest loss and pet cats.",
      "es": "La pérdida de bosque y los gatos domésticos."
    },
    "help": {
      "en": [
        "Keep pet cats indoors.",
        "Leave lizards in the wild.",
        "Plant native plants in your garden."
      ],
      "es": [
        "Mantén a los gatos dentro de la casa.",
        "Deja a las lagartijas en la naturaleza.",
        "Siembra plantas nativas en tu jardín."
      ]
    },
    "funFact": {
      "en": "Young basilisks can run farther on water than adults because they're lighter.",
      "es": "Los basiliscos jóvenes corren más lejos sobre el agua que los adultos porque pesan menos."
    },
    "wiki": "Basiliscus_basiliscus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/411655257/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/411655257/large.jpg",
      "author": "cello caruso-turiello",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/411655257",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "striped-basilisk",
    "group": "reptile",
    "emoji": "🦎",
    "scientific": "Basiliscus vittatus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Striped Basilisk",
      "es": "Basilisco Rayado"
    },
    "summary": {
      "en": "A smaller basilisk with yellow stripes along its sides.",
      "es": "Un basilisco más pequeño con rayas amarillas a los lados."
    },
    "where": {
      "en": "Northern lowlands.",
      "es": "Las tierras bajas del norte."
    },
    "threats": {
      "en": "Forest loss and pet cats.",
      "es": "La pérdida de bosque y los gatos domésticos."
    },
    "help": {
      "en": [
        "Keep pet cats indoors.",
        "Leave lizards in the wild.",
        "Plant native plants in your garden."
      ],
      "es": [
        "Mantén a los gatos dentro de la casa.",
        "Deja a las lagartijas en la naturaleza.",
        "Siembra plantas nativas en tu jardín."
      ]
    },
    "funFact": {
      "en": "Basilisks have fringed toes that help them slap the water and stay on top.",
      "es": "Los basiliscos tienen flecos en los dedos que les ayudan a golpear el agua y no hundirse."
    },
    "wiki": "Basiliscus_vittatus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/176542731/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/176542731/large.jpg",
      "author": "tlaloc27",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/176542731",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "central-american-coral-snake",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Micrurus nigrocinctus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Central American Coral Snake",
      "es": "Coral"
    },
    "summary": {
      "en": "A snake with bright bands of red, black and yellow, and strong venom.",
      "es": "Una serpiente con bandas brillantes rojas, negras y amarillas, y un veneno fuerte."
    },
    "where": {
      "en": "Forests and gardens all over the country.",
      "es": "Bosques y jardines de todo el país."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "Its bright colors are a warning: 'Don't touch me!'",
      "es": "Sus colores brillantes son una advertencia: '¡No me toques!'"
    },
    "wiki": "Micrurus_nigrocinctus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/330408323/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/330408323/large.jpg",
      "author": "Richard Littauer",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/330408323",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "green-vine-snake",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Oxybelis fulgidus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Green Vine Snake",
      "es": "Bejuquilla Verde"
    },
    "summary": {
      "en": "A super-thin green snake that looks exactly like a vine.",
      "es": "Una serpiente verde delgadísima que parece un bejuco."
    },
    "where": {
      "en": "Trees and bushes, mostly on the Pacific side.",
      "es": "Árboles y arbustos, sobre todo en el Pacífico."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "It stays still in the branches, swaying like a vine in the wind.",
      "es": "Se queda quieta entre las ramas, meciéndose como un bejuco con el viento."
    },
    "wiki": "Oxybelis_fulgidus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/12593109/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/12593109/large.jpg",
      "author": "Dan Fitzgerald (Fitz)",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/12593109",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "brown-vine-snake",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Oxybelis aeneus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Brown Vine Snake",
      "es": "Bejuquilla Café"
    },
    "summary": {
      "en": "A long, thin brown snake that hides among branches.",
      "es": "Una serpiente larga, delgada y café que se esconde entre las ramas."
    },
    "where": {
      "en": "Dry forests and gardens.",
      "es": "Bosques secos y jardines."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "It's so thin it can be mistaken for a dry twig.",
      "es": "Es tan delgada que se puede confundir con una ramita seca."
    },
    "wiki": "Oxybelis_aeneus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/696442553/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/696442553/large.jpg",
      "author": "Inacio Oliveira",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/696442553",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "central-american-rattlesnake",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Crotalus simus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Central American Rattlesnake",
      "es": "Cascabel"
    },
    "summary": {
      "en": "A large rattlesnake of Costa Rica's dry northwest.",
      "es": "Una cascabel grande del noroeste seco de Costa Rica."
    },
    "where": {
      "en": "Dry forests of Guanacaste.",
      "es": "Los bosques secos de Guanacaste."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "Its rattle is made of the same material as your fingernails.",
      "es": "Su cascabel está hecho del mismo material que tus uñas."
    },
    "wiki": "Crotalus_simus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/243406906/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/243406906/large.jpg",
      "author": "Daniel Benák",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/243406906",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "yellow-bellied-sea-snake",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Hydrophis platurus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Yellow-bellied Sea Snake",
      "es": "Serpiente Marina"
    },
    "summary": {
      "en": "A black-and-yellow snake that spends its whole life in the open ocean.",
      "es": "Una serpiente negra y amarilla que pasa toda su vida en mar abierto."
    },
    "where": {
      "en": "The Pacific Ocean, especially the Gulf of Papagayo.",
      "es": "El océano Pacífico, sobre todo el golfo de Papagayo."
    },
    "threats": {
      "en": "Plastic and fishing nets in the ocean.",
      "es": "El plástico y las redes de pesca en el mar."
    },
    "help": {
      "en": [
        "Never touch one washed up on the beach: it's venomous.",
        "Use less plastic.",
        "Support marine protected areas."
      ],
      "es": [
        "Nunca toques una que aparezca en la playa: es venenosa.",
        "Usa menos plástico.",
        "Apoya las áreas marinas protegidas."
      ]
    },
    "funFact": {
      "en": "It can barely move on land; storms sometimes wash it onto beaches.",
      "es": "Casi no se puede mover en tierra; a veces las tormentas la arrastran a la playa."
    },
    "wiki": "Hydrophis_platurus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/456937669/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/456937669/large.jpeg",
      "author": "Camille Boucher",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/456937669",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "helmeted-iguana",
    "group": "reptile",
    "emoji": "🦎",
    "scientific": "Corytophanes cristatus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Helmeted Iguana",
      "es": "Iguana de Casco"
    },
    "summary": {
      "en": "A forest lizard with a big crest on its head, like a helmet.",
      "es": "Una lagartija de bosque con una cresta grande en la cabeza, como un casco."
    },
    "where": {
      "en": "Rainforests on both sides of the mountains.",
      "es": "Bosques lluviosos de ambos lados de las montañas."
    },
    "threats": {
      "en": "Forest loss and pet cats.",
      "es": "La pérdida de bosque y los gatos domésticos."
    },
    "help": {
      "en": [
        "Keep pet cats indoors.",
        "Leave lizards in the wild.",
        "Plant native plants in your garden."
      ],
      "es": [
        "Mantén a los gatos dentro de la casa.",
        "Deja a las lagartijas en la naturaleza.",
        "Siembra plantas nativas en tu jardín."
      ]
    },
    "funFact": {
      "en": "It can sit still for hours, waiting for an insect to walk by.",
      "es": "Puede quedarse quieta por horas esperando que pase un insecto."
    },
    "wiki": "Corytophanes_cristatus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/411129137/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/411129137/large.jpg",
      "author": "cello caruso-turiello",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/411129137",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "green-spiny-lizard",
    "group": "reptile",
    "emoji": "🦎",
    "scientific": "Sceloporus malachiticus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Green Spiny Lizard",
      "es": "Lagartija Espinosa Verde"
    },
    "summary": {
      "en": "A spiny lizard that shines emerald green and blue in the sun.",
      "es": "Una lagartija espinosa que brilla verde esmeralda y azul al sol."
    },
    "where": {
      "en": "Mountains and highlands, even in cities like San José.",
      "es": "Montañas y tierras altas, incluso en ciudades como San José."
    },
    "threats": {
      "en": "Forest loss and pet cats.",
      "es": "La pérdida de bosque y los gatos domésticos."
    },
    "help": {
      "en": [
        "Keep pet cats indoors.",
        "Leave lizards in the wild.",
        "Plant native plants in your garden."
      ],
      "es": [
        "Mantén a los gatos dentro de la casa.",
        "Deja a las lagartijas en la naturaleza.",
        "Siembra plantas nativas en tu jardín."
      ]
    },
    "funFact": {
      "en": "It gives birth to live babies, which helps in the cold mountains.",
      "es": "Tiene crías vivas, algo que le ayuda en las montañas frías."
    },
    "wiki": "Sceloporus_malachiticus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/21050290/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/21050290/large.jpg",
      "author": "Laura Gaudette",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/21050290",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "turnip-tailed-gecko",
    "group": "reptile",
    "emoji": "🦎",
    "scientific": "Thecadactylus rapicauda",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Turnip-tailed Gecko",
      "es": "Gecko Cola de Nabo"
    },
    "summary": {
      "en": "A large gecko with a fat tail and sticky toe pads.",
      "es": "Un gecko grande con la cola gorda y dedos pegajosos."
    },
    "where": {
      "en": "Forests and old buildings.",
      "es": "Bosques y edificios viejos."
    },
    "threats": {
      "en": "Forest loss and pet cats.",
      "es": "La pérdida de bosque y los gatos domésticos."
    },
    "help": {
      "en": [
        "Keep pet cats indoors.",
        "Leave lizards in the wild.",
        "Plant native plants in your garden."
      ],
      "es": [
        "Mantén a los gatos dentro de la casa.",
        "Deja a las lagartijas en la naturaleza.",
        "Siembra plantas nativas en tu jardín."
      ]
    },
    "funFact": {
      "en": "It stores fat in its thick tail, like a backpack full of energy.",
      "es": "Guarda grasa en su cola gruesa, como una mochila llena de energía."
    },
    "wiki": "Thecadactylus_rapicauda",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/444397215/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/444397215/large.jpeg",
      "author": "John Matthew Erickson",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/444397215",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "yellow-headed-gecko",
    "group": "reptile",
    "emoji": "🦎",
    "scientific": "Gonatodes albogularis",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Yellow-headed Gecko",
      "es": "Gecko Cabeza Amarilla"
    },
    "summary": {
      "en": "A tiny gecko. Males have a bright yellow-orange head.",
      "es": "Un gecko diminuto. Los machos tienen la cabeza amarillo anaranjado brillante."
    },
    "where": {
      "en": "Trees, fences and walls in the lowlands.",
      "es": "Árboles, cercas y paredes de las tierras bajas."
    },
    "threats": {
      "en": "Forest loss and pet cats.",
      "es": "La pérdida de bosque y los gatos domésticos."
    },
    "help": {
      "en": [
        "Keep pet cats indoors.",
        "Leave lizards in the wild.",
        "Plant native plants in your garden."
      ],
      "es": [
        "Mantén a los gatos dentro de la casa.",
        "Deja a las lagartijas en la naturaleza.",
        "Siembra plantas nativas en tu jardín."
      ]
    },
    "funFact": {
      "en": "Unlike most geckos, it's active during the day.",
      "es": "A diferencia de casi todos los geckos, es activo de día."
    },
    "wiki": "Gonatodes_albogularis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/600105656/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/600105656/large.jpg",
      "author": "Blake Ross",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/600105656",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "hognosed-pitviper",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Porthidium nasutum",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Rainforest Hognosed Pitviper",
      "es": "Tamagá"
    },
    "summary": {
      "en": "A small viper with an upturned nose.",
      "es": "Una víbora pequeña con la nariz respingada."
    },
    "where": {
      "en": "Leaf litter of Caribbean and southern rainforests.",
      "es": "La hojarasca de los bosques lluviosos del Caribe y del sur."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "It hides on the forest floor, camouflaged as a dead leaf.",
      "es": "Se esconde en el suelo del bosque disfrazada de hoja seca."
    },
    "wiki": "Porthidium_nasutum",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/114248828/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/114248828/large.jpeg",
      "author": "Dan Riley",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/114248828",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "side-striped-palm-pitviper",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Bothriechis lateralis",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Side-striped Palm-Pitviper",
      "es": "Lora"
    },
    "summary": {
      "en": "A green tree viper with yellow stripes along its sides.",
      "es": "Una víbora verde de árbol con rayas amarillas a los lados."
    },
    "where": {
      "en": "Cloud forests in the mountains, like Monteverde.",
      "es": "Bosques nubosos de las montañas, como Monteverde."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "Its tail can grab branches, like a monkey's.",
      "es": "Su cola puede agarrarse de las ramas, como la de un mono."
    },
    "wiki": "Bothriechis_lateralis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/601339080/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/601339080/large.jpg",
      "author": "Blake Ross",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/601339080",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "black-speckled-palm-pitviper",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Bothriechis nigroviridis",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Black-speckled Palm-Pitviper",
      "es": "Lora de Altura"
    },
    "summary": {
      "en": "A green viper with black speckles from high mountain forests.",
      "es": "Una víbora verde con pintitas negras de los bosques de montaña alta."
    },
    "where": {
      "en": "Talamanca and Central mountains.",
      "es": "Las cordilleras de Talamanca y Central."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "It lives only in the mountains of Costa Rica and western Panama.",
      "es": "Solo vive en las montañas de Costa Rica y el oeste de Panamá."
    },
    "wiki": "Bothriechis_nigroviridis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/440427237/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/440427237/large.jpeg",
      "author": "Michelle Monge-Velazquez",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/440427237",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "parrot-snake",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Leptophis ahaetulla",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Parrot Snake",
      "es": "Lora Verde"
    },
    "summary": {
      "en": "A slim, bright green snake that opens its mouth wide when it feels threatened.",
      "es": "Una serpiente delgada y verde brillante que abre mucho la boca cuando se siente amenazada."
    },
    "where": {
      "en": "Lowland forests.",
      "es": "Bosques bajos."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "Its parrot-green color gave it its name.",
      "es": "Su color verde loro le dio su nombre."
    },
    "wiki": "Leptophis_ahaetulla",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/177235751/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/177235751/large.jpeg",
      "author": "Alessandher Piva",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/177235751",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "mussurana",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Clelia clelia",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Mussurana",
      "es": "Zopilota"
    },
    "summary": {
      "en": "A big black snake that eats other snakes, even venomous ones!",
      "es": "¡Una serpiente grande y negra que come otras serpientes, incluso venenosas!"
    },
    "where": {
      "en": "Forests and farms.",
      "es": "Bosques y fincas."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "It's resistant to the venom of many vipers.",
      "es": "Resiste el veneno de muchas víboras."
    },
    "wiki": "Clelia_clelia",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/679182566/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/679182566/large.jpg",
      "author": "Vargas Alisson",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/679182566",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "tiger-rat-snake",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Spilotes pullatus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Tiger Rat Snake",
      "es": "Mica"
    },
    "summary": {
      "en": "A large, fast yellow-and-black snake.",
      "es": "Una serpiente grande y rápida, amarilla y negra."
    },
    "where": {
      "en": "Forests and farms of the lowlands.",
      "es": "Bosques y fincas de las tierras bajas."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "When annoyed, it puffs up its throat to look bigger.",
      "es": "Cuando se molesta, infla la garganta para verse más grande."
    },
    "wiki": "Spilotes_pullatus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/618989301/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/618989301/large.jpg",
      "author": "Julia Pupko",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/618989301",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "blunt-headed-tree-snake",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Imantodes cenchoa",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Blunt-headed Tree Snake",
      "es": "Bejuquillo"
    },
    "summary": {
      "en": "A super-thin tree snake with a big head and huge eyes.",
      "es": "Una serpiente de árbol delgadísima con la cabeza grande y ojos enormes."
    },
    "where": {
      "en": "Rainforests all over the country.",
      "es": "Bosques lluviosos de todo el país."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "It's so light it can stretch across gaps between branches.",
      "es": "Es tan liviana que puede estirarse de una rama a otra."
    },
    "wiki": "Imantodes_cenchoa",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/64886030/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/64886030/large.jpg",
      "author": "Seig",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/64886030",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "godmans-pitviper",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Cerrophidion godmani",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Godman's Montane Pitviper",
      "es": "Toboba de Altura"
    },
    "summary": {
      "en": "A small, stocky viper of the high mountains.",
      "es": "Una víbora pequeña y gruesa de las montañas altas."
    },
    "where": {
      "en": "Cold highlands like Cerro de la Muerte and Irazú.",
      "es": "Tierras altas y frías como el Cerro de la Muerte y el Irazú."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "It lives higher in the mountains than almost any other snake in Costa Rica.",
      "es": "Vive más alto en las montañas que casi cualquier otra serpiente de Costa Rica."
    },
    "wiki": "Cerrophidion_godmani",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/14889069/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/14889069/large.jpg",
      "author": "Daniel Pineda Vera",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/14889069",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "jumping-pitviper",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Metlapilcoatlus mexicanus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Jumping Pitviper",
      "es": "Mano de Piedra"
    },
    "summary": {
      "en": "A thick, short viper with a stone-like pattern.",
      "es": "Una víbora gruesa y corta con un dibujo como de piedra."
    },
    "where": {
      "en": "Mid-elevation forests.",
      "es": "Bosques de altura media."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "Despite its name, it can't really jump, but it strikes fast.",
      "es": "Aunque se llame 'saltadora' en inglés, no salta de verdad, pero ataca rápido."
    },
    "wiki": "Metlapilcoatlus_mexicanus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/150546611/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/150546611/large.jpg",
      "author": "Court Harding",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/150546611",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "giant-green-anole",
    "group": "reptile",
    "emoji": "🦎",
    "scientific": "Anolis biporcatus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Giant Green Anole",
      "es": "Anolis Verde Gigante"
    },
    "summary": {
      "en": "A big green anole that lives in the treetops.",
      "es": "Un anolis verde y grande que vive en las copas de los árboles."
    },
    "where": {
      "en": "Lowland rainforests.",
      "es": "Bosques lluviosos bajos."
    },
    "threats": {
      "en": "Forest loss and pet cats.",
      "es": "La pérdida de bosque y los gatos domésticos."
    },
    "help": {
      "en": [
        "Keep pet cats indoors.",
        "Leave lizards in the wild.",
        "Plant native plants in your garden."
      ],
      "es": [
        "Mantén a los gatos dentro de la casa.",
        "Deja a las lagartijas en la naturaleza.",
        "Siembra plantas nativas en tu jardín."
      ]
    },
    "funFact": {
      "en": "It can change from green to brown, like a chameleon.",
      "es": "Puede cambiar de verde a café, como un camaleón."
    },
    "wiki": "Anolis_biporcatus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/170604091/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/170604091/large.jpg",
      "author": "Tom Kennedy",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/170604091",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "water-anole",
    "group": "reptile",
    "emoji": "🦎",
    "scientific": "Anolis aquaticus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Water Anole",
      "es": "Anolis de Agua"
    },
    "summary": {
      "en": "A small brown anole that lives along rocky streams.",
      "es": "Un anolis pequeño y café que vive en quebradas con piedras."
    },
    "where": {
      "en": "Streams of the southern Pacific of Costa Rica and western Panama.",
      "es": "Quebradas del Pacífico sur de Costa Rica y el oeste de Panamá."
    },
    "threats": {
      "en": "Forest loss and pet cats.",
      "es": "La pérdida de bosque y los gatos domésticos."
    },
    "help": {
      "en": [
        "Keep pet cats indoors.",
        "Leave lizards in the wild.",
        "Plant native plants in your garden."
      ],
      "es": [
        "Mantén a los gatos dentro de la casa.",
        "Deja a las lagartijas en la naturaleza.",
        "Siembra plantas nativas en tu jardín."
      ]
    },
    "funFact": {
      "en": "It can stay underwater for over 15 minutes by breathing from an air bubble on its head!",
      "es": "¡Puede quedarse bajo el agua más de 15 minutos respirando de una burbuja de aire en su cabeza!"
    },
    "wiki": "Anolis_aquaticus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13905887/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/13905887/large.jpeg",
      "author": "Reuven Martin",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/13905887",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "ground-anole",
    "group": "reptile",
    "emoji": "🦎",
    "scientific": "Anolis humilis",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Ground Anole",
      "es": "Anolis de Suelo"
    },
    "summary": {
      "en": "A tiny brown anole that hops through leaf litter.",
      "es": "Un anolis diminuto y café que salta entre la hojarasca."
    },
    "where": {
      "en": "Rainforest floors.",
      "es": "El suelo de los bosques lluviosos."
    },
    "threats": {
      "en": "Forest loss and pet cats.",
      "es": "La pérdida de bosque y los gatos domésticos."
    },
    "help": {
      "en": [
        "Keep pet cats indoors.",
        "Leave lizards in the wild.",
        "Plant native plants in your garden."
      ],
      "es": [
        "Mantén a los gatos dentro de la casa.",
        "Deja a las lagartijas en la naturaleza.",
        "Siembra plantas nativas en tu jardín."
      ]
    },
    "funFact": {
      "en": "Males flash a red-orange throat flap to 'talk' to other anoles.",
      "es": "Los machos muestran una papada rojiza para 'hablar' con otros anolis."
    },
    "wiki": "Anolis_humilis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/390362561/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/390362561/large.jpeg",
      "author": "Dean Hester",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/390362561",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "four-lined-whiptail",
    "group": "reptile",
    "emoji": "🦎",
    "scientific": "Holcosus quadrilineatus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Four-lined Whiptail",
      "es": "Lagartija Corredora"
    },
    "summary": {
      "en": "A fast, striped lizard that's always searching the ground for food.",
      "es": "Una lagartija rayada y rápida que siempre busca comida en el suelo."
    },
    "where": {
      "en": "Beaches and forests of the Caribbean.",
      "es": "Playas y bosques del Caribe."
    },
    "threats": {
      "en": "Forest loss and pet cats.",
      "es": "La pérdida de bosque y los gatos domésticos."
    },
    "help": {
      "en": [
        "Keep pet cats indoors.",
        "Leave lizards in the wild.",
        "Plant native plants in your garden."
      ],
      "es": [
        "Mantén a los gatos dentro de la casa.",
        "Deja a las lagartijas en la naturaleza.",
        "Siembra plantas nativas en tu jardín."
      ]
    },
    "funFact": {
      "en": "Whiptails are always on the move, flicking their tongues to find food.",
      "es": "Siempre están en movimiento, sacando la lengua para encontrar comida."
    },
    "wiki": "Holcosus_quadrilineatus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/349592670/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/349592670/large.jpg",
      "author": "Zygy",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/349592670",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "central-american-whiptail",
    "group": "reptile",
    "emoji": "🦎",
    "scientific": "Holcosus festivus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Central American Whiptail",
      "es": "Lagartija Rayada"
    },
    "summary": {
      "en": "A striped whiptail. Young ones have bright blue tails.",
      "es": "Una lagartija rayada. Las jóvenes tienen la cola azul brillante."
    },
    "where": {
      "en": "Caribbean and southern rainforests.",
      "es": "Bosques lluviosos del Caribe y del sur."
    },
    "threats": {
      "en": "Forest loss and pet cats.",
      "es": "La pérdida de bosque y los gatos domésticos."
    },
    "help": {
      "en": [
        "Keep pet cats indoors.",
        "Leave lizards in the wild.",
        "Plant native plants in your garden."
      ],
      "es": [
        "Mantén a los gatos dentro de la casa.",
        "Deja a las lagartijas en la naturaleza.",
        "Siembra plantas nativas en tu jardín."
      ]
    },
    "funFact": {
      "en": "Babies' blue tails distract predators away from their bodies.",
      "es": "La cola azul de las crías distrae a los depredadores lejos de su cuerpo."
    },
    "wiki": "Holcosus_festivus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/190312322/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/190312322/large.jpeg",
      "author": "anasacuta",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/190312322",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "white-lipped-mud-turtle",
    "group": "reptile",
    "emoji": "🐢",
    "scientific": "Kinosternon leucostomum",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "White-lipped Mud Turtle",
      "es": "Candado"
    },
    "summary": {
      "en": "A small turtle of muddy ponds and streams.",
      "es": "Una tortuga pequeña de charcas y quebradas lodosas."
    },
    "where": {
      "en": "Lowlands all over the country.",
      "es": "Tierras bajas de todo el país."
    },
    "threats": {
      "en": "Wetland loss, and people taking them for pets or food.",
      "es": "La pérdida de humedales y las personas que se las llevan como mascotas o comida."
    },
    "help": {
      "en": [
        "Never take turtles from the wild.",
        "Never release pet turtles into rivers.",
        "Support wetland protection."
      ],
      "es": [
        "Nunca saques tortugas de la naturaleza.",
        "Nunca sueltes tortugas mascota en los ríos.",
        "Apoya la protección de los humedales."
      ]
    },
    "funFact": {
      "en": "It can close its shell with hinged flaps, like doors.",
      "es": "Puede cerrar su caparazón con unas tapitas, como puertas."
    },
    "wiki": "Kinosternon_leucostomum",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/401931803/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/401931803/large.jpg",
      "author": "Nick Tobler (Cowturtle)",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/401931803",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "scorpion-mud-turtle",
    "group": "reptile",
    "emoji": "🐢",
    "scientific": "Kinosternon scorpioides",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Scorpion Mud Turtle",
      "es": "Candado Escorpión"
    },
    "summary": {
      "en": "A mud turtle with a pointy tip on its tail, like a scorpion's.",
      "es": "Una tortuga candado con una punta en la cola, como la de un escorpión."
    },
    "where": {
      "en": "Ponds and wetlands of the lowlands.",
      "es": "Charcas y humedales de las tierras bajas."
    },
    "threats": {
      "en": "Wetland loss, and people taking them for pets or food.",
      "es": "La pérdida de humedales y las personas que se las llevan como mascotas o comida."
    },
    "help": {
      "en": [
        "Never take turtles from the wild.",
        "Never release pet turtles into rivers.",
        "Support wetland protection."
      ],
      "es": [
        "Nunca saques tortugas de la naturaleza.",
        "Nunca sueltes tortugas mascota en los ríos.",
        "Apoya la protección de los humedales."
      ]
    },
    "funFact": {
      "en": "Its name comes from the hard spike at the end of its tail.",
      "es": "Su nombre viene de la espina dura al final de su cola."
    },
    "wiki": "Kinosternon_scorpioides",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/233727661/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/233727661/large.jpeg",
      "author": "Carlos Ceballos",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/233727661",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "painted-wood-turtle",
    "group": "reptile",
    "emoji": "🐢",
    "scientific": "Rhinoclemmys pulcherrima",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Painted Wood Turtle",
      "es": "Tortuga Pintada"
    },
    "summary": {
      "en": "A land turtle with beautiful red and yellow lines on its head and shell.",
      "es": "Una tortuga terrestre con hermosas líneas rojas y amarillas en la cabeza y el caparazón."
    },
    "where": {
      "en": "Dry forests of Guanacaste.",
      "es": "Los bosques secos de Guanacaste."
    },
    "threats": {
      "en": "Wetland loss, and people taking them for pets or food.",
      "es": "La pérdida de humedales y las personas que se las llevan como mascotas o comida."
    },
    "help": {
      "en": [
        "Never take turtles from the wild.",
        "Never release pet turtles into rivers.",
        "Support wetland protection."
      ],
      "es": [
        "Nunca saques tortugas de la naturaleza.",
        "Nunca sueltes tortugas mascota en los ríos.",
        "Apoya la protección de los humedales."
      ]
    },
    "funFact": {
      "en": "It's one of the most colorful turtles in Central America.",
      "es": "Es una de las tortugas más coloridas de Centroamérica."
    },
    "wiki": "Rhinoclemmys_pulcherrima",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/609030695/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/609030695/large.jpg",
      "author": "Adrien Jailloux",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/609030695",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "cloudy-snail-eater",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Sibon nebulatus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Cloudy Snail-eater",
      "es": "Caracolera"
    },
    "summary": {
      "en": "A slender snake that specializes in eating snails and slugs.",
      "es": "Una serpiente delgada experta en comer caracoles y babosas."
    },
    "where": {
      "en": "Rainforests all over the country.",
      "es": "Bosques lluviosos de todo el país."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "It pulls snails out of their shells with its special jaw.",
      "es": "Saca a los caracoles de su concha con su mandíbula especial."
    },
    "wiki": "Sibon_nebulatus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/13510409/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/13510409/large.jpeg",
      "author": "Dan Riley",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/13510409",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "cat-eyed-snake",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Leptodeira septentrionalis",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Cat-eyed Snake",
      "es": "Ojo de Gato"
    },
    "summary": {
      "en": "A night-time snake with vertical pupils, like a cat's.",
      "es": "Una serpiente nocturna con pupilas verticales, como las de un gato."
    },
    "where": {
      "en": "Forests and wetlands.",
      "es": "Bosques y humedales."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "It hunts frog eggs at night, especially red-eyed tree frog eggs!",
      "es": "¡Caza huevos de rana de noche, sobre todo de la rana calzonuda!"
    },
    "wiki": "Leptodeira_septentrionalis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/283484229/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/283484229/large.jpeg",
      "author": "Sebastián de Jesús Herrera Buenfil",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/283484229",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "indigo-snake",
    "group": "reptile",
    "emoji": "🐍",
    "scientific": "Drymarchon melanurus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Central American Indigo Snake",
      "es": "Zopilota Negra"
    },
    "summary": {
      "en": "A big, glossy dark snake with black lines under its eyes.",
      "es": "Una serpiente grande, oscura y brillante con líneas negras debajo de los ojos."
    },
    "where": {
      "en": "Dry and moist forests.",
      "es": "Bosques secos y húmedos."
    },
    "threats": {
      "en": "Many people kill snakes out of fear. Roads and forest loss also hurt them.",
      "es": "Mucha gente mata serpientes por miedo. Las carreteras y la pérdida de bosque también las afectan."
    },
    "help": {
      "en": [
        "Never kill a snake: back away slowly and let it go.",
        "Wear boots and use a flashlight at night in the forest.",
        "Call experts to move snakes found near homes."
      ],
      "es": [
        "Nunca mates una serpiente: aléjate despacio y déjala ir.",
        "Usa botas y linterna de noche en el bosque.",
        "Llama a expertos para reubicar serpientes cerca de las casas."
      ]
    },
    "funFact": {
      "en": "It's fast and active during the day, hunting by sight.",
      "es": "Es rápida y activa de día, y caza usando la vista."
    },
    "wiki": "Drymarchon_melanurus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/278813111/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/278813111/large.jpg",
      "author": "John Rosford",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/278813111",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "variable-harlequin-toad",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Atelopus varius",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Variable Harlequin Toad",
      "es": "Sapo Arlequín"
    },
    "summary": {
      "en": "A brightly patterned toad. Thought to be gone, it was found again in Costa Rica in 2003.",
      "es": "Un sapo de colores brillantes. Se creía desaparecido, pero se volvió a encontrar en Costa Rica en 2003."
    },
    "where": {
      "en": "A few streams on the Pacific slope.",
      "es": "Algunas quebradas de la vertiente del Pacífico."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "No two harlequin toads have exactly the same color pattern.",
      "es": "No hay dos sapos arlequín con el mismo dibujo de colores."
    },
    "wiki": "Atelopus_varius",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/315785908/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/315785908/large.jpg",
      "author": "David A. Rodríguez Arias",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/315785908",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "chiriqui-harlequin-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Atelopus chiriquiensis",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Chiriquí Harlequin Frog",
      "es": "Sapo Arlequín de Chiriquí"
    },
    "summary": {
      "en": "A small harlequin frog of the Talamanca mountains, not seen in decades.",
      "es": "Un sapito arlequín de la cordillera de Talamanca que no se ha visto en décadas."
    },
    "where": {
      "en": "High streams of the Talamanca range.",
      "es": "Quebradas altas de la cordillera de Talamanca."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Scientists keep searching, because other 'lost' frogs have been found again!",
      "es": "Los científicos siguen buscando, ¡porque otras ranas 'perdidas' se han vuelto a encontrar!"
    },
    "wiki": "Atelopus_chiriquiensis",
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Atelopus_chiriquiensis%2C_once_a_common_harlequin_frog_and_subject_of_numerous_ecological_studies_at_Fortuna%2C_last_seen_in_1996._Likely_extinct_due_to_chytridiomycosis._(5414886416).jpg?width=500",
      "large": "https://commons.wikimedia.org/wiki/Special:FilePath/Atelopus_chiriquiensis%2C_once_a_common_harlequin_frog_and_subject_of_numerous_ecological_studies_at_Fortuna%2C_last_seen_in_1996._Likely_extinct_due_to_chytridiomycosis._(5414886416).jpg?width=1024",
      "author": "Brian Gratwicke from DC, USA",
      "license": "CC BY",
      "page": "https://commons.wikimedia.org/wiki/File:Atelopus_chiriquiensis,_once_a_common_harlequin_frog_and_subject_of_numerous_ecological_studies_at_Fortuna,_last_seen_in_1996._Likely_extinct_due_to_chytridiomycosis._(5414886416).jpg",
      "source": "Wikimedia Commons",
      "cardOk": true
    }
  },
  {
    "id": "pass-stubfoot-toad",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Atelopus senex",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Pass Stubfoot Toad",
      "es": "Sapito de Paso"
    },
    "summary": {
      "en": "A small dark toad from Costa Rica's central mountains, not seen for many years.",
      "es": "Un sapito oscuro de las montañas centrales de Costa Rica que no se ha visto en muchos años."
    },
    "where": {
      "en": "Cloud forests of the Central Volcanic range.",
      "es": "Bosques nubosos de la cordillera Volcánica Central."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Its scientific name 'senex' means 'old man' in Latin.",
      "es": "Su nombre científico 'senex' significa 'anciano' en latín."
    },
    "wiki": "Atelopus_senex",
    "photo": null
  },
  {
    "id": "pico-blanco-toad",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Incilius fastidiosus",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Pico Blanco Toad",
      "es": "Sapo de Pico Blanco"
    },
    "summary": {
      "en": "A toad of the Talamanca highlands, named after Pico Blanco mountain.",
      "es": "Un sapo de las tierras altas de Talamanca, nombrado por el cerro Pico Blanco."
    },
    "where": {
      "en": "High forests of the Talamanca range.",
      "es": "Bosques altos de la cordillera de Talamanca."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Toads like this one help control insects in the forest.",
      "es": "Sapos como este ayudan a controlar los insectos del bosque."
    },
    "wiki": "Incilius_fastidiosus",
    "photo": null
  },
  {
    "id": "holdridges-toad",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Incilius holdridgei",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Holdridge's Toad",
      "es": "Sapo de Holdridge"
    },
    "summary": {
      "en": "A small toad found only on Barva Volcano. It was declared extinct, then found again!",
      "es": "Un sapito que solo vive en el volcán Barva. ¡Lo declararon extinto y luego lo volvieron a encontrar!"
    },
    "where": {
      "en": "Barva Volcano, in Braulio Carrillo National Park.",
      "es": "El volcán Barva, en el Parque Nacional Braulio Carrillo."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "It's a symbol of hope: lost species can come back.",
      "es": "Es un símbolo de esperanza: las especies perdidas pueden regresar."
    },
    "wiki": "Incilius_holdridgei",
    "photo": null
  },
  {
    "id": "chompipe-toad",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Incilius chompipe",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Chompipe Toad",
      "es": "Sapo Chompipe"
    },
    "summary": {
      "en": "A small toad of the Central Volcanic mountains.",
      "es": "Un sapito de la cordillera Volcánica Central."
    },
    "where": {
      "en": "Cloud forests of Heredia and Alajuela.",
      "es": "Bosques nubosos de Heredia y Alajuela."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "It lives in cool, misty highland forests.",
      "es": "Vive en bosques altos, frescos y neblinosos."
    },
    "wiki": "Incilius_chompipe",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/172080767/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/172080767/large.jpg",
      "author": "Tom Kennedy",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/172080767",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "escoces-robber-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Craugastor escoces",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Escoces Robber Frog",
      "es": "Rana de Escoces"
    },
    "summary": {
      "en": "A frog once thought extinct in Costa Rica that was found again in 2016.",
      "es": "Una rana que se creía extinta en Costa Rica y que se volvió a encontrar en 2016."
    },
    "where": {
      "en": "Mountain forests north of the Central Valley.",
      "es": "Bosques de montaña al norte del Valle Central."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "It's a 'Lazarus species': one that came back after being thought extinct.",
      "es": "Es una 'especie Lázaro': una que regresó después de creerse extinta."
    },
    "wiki": "Craugastor_escoces",
    "photo": null
  },
  {
    "id": "fleischmanns-robber-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Craugastor fleischmanni",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Fleischmann's Robber Frog",
      "es": "Rana de Fleischmann"
    },
    "summary": {
      "en": "A frog found only in the mountains of northern San José.",
      "es": "Una rana que solo vive en las montañas del norte de San José."
    },
    "where": {
      "en": "Northern San José and Heredia.",
      "es": "El norte de San José y Heredia."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Scientists are urgently searching to confirm it still lives there.",
      "es": "Los científicos buscan con urgencia para confirmar que todavía vive ahí."
    },
    "wiki": "Craugastor_fleischmanni",
    "photo": null
  },
  {
    "id": "stream-robber-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Craugastor ranoides",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Stream Robber Frog",
      "es": "Rana de Quebrada"
    },
    "summary": {
      "en": "A stream frog that still survives in Costa Rica's tropical dry forest.",
      "es": "Una rana de quebrada que todavía sobrevive en el bosque seco de Costa Rica."
    },
    "where": {
      "en": "Streams in Guanacaste's dry forest.",
      "es": "Quebradas del bosque seco de Guanacaste."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Most of its populations vanished, but some hang on in Guanacaste.",
      "es": "Casi todas sus poblaciones desaparecieron, pero algunas resisten en Guanacaste."
    },
    "wiki": "Craugastor_ranoides",
    "photo": {
      "url": "https://data.nhm.ac.uk/media/0c4af44e-7c6a-4760-9071-2e39f634795d",
      "large": "https://data.nhm.ac.uk/media/0c4af44e-7c6a-4760-9071-2e39f634795d",
      "author": "The Trustees of the Natural History Museum, London",
      "license": "CC BY",
      "page": "https://www.gbif.org/occurrence/1057236135",
      "source": "GBIF",
      "cardOk": true
    }
  },
  {
    "id": "south-pacific-streamfrog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Craugastor taurus",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "South Pacific Streamfrog",
      "es": "Rana Toro de Quebrada"
    },
    "summary": {
      "en": "A big stream frog of the southern Pacific.",
      "es": "Una rana grande de quebrada del Pacífico sur."
    },
    "where": {
      "en": "Streams of the Osa Peninsula and Golfo Dulce.",
      "es": "Quebradas de la península de Osa y el golfo Dulce."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Its Latin name 'taurus' means bull.",
      "es": "Su nombre en latín 'taurus' significa toro."
    },
    "wiki": "Craugastor_taurus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/60257417/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/60257417/large.jpg",
      "author": "Dan MacNeal",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/60257417",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "angel-robber-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Craugastor angelicus",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Angel Robber Frog",
      "es": "Rana Ángel"
    },
    "summary": {
      "en": "A mountain stream frog that has become very rare.",
      "es": "Una rana de quebradas de montaña que se ha vuelto muy rara."
    },
    "where": {
      "en": "Mountain forests of Costa Rica.",
      "es": "Bosques de montaña de Costa Rica."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Its scientific name means 'angelic' in Latin.",
      "es": "Su nombre científico significa 'angelical' en latín."
    },
    "wiki": "Craugastor_angelicus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/172085187/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/172085187/large.jpg",
      "author": "Tom Kennedy",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/172085187",
      "source": "iNaturalist",
      "cardOk": true
    }
  },
  {
    "id": "andi-robber-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Craugastor andi",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Andi's Robber Frog",
      "es": "Rana de Andi"
    },
    "summary": {
      "en": "A rare mountain frog of Costa Rica and Panama.",
      "es": "Una rana rara de montaña de Costa Rica y Panamá."
    },
    "where": {
      "en": "Cloud forests of the Talamanca range.",
      "es": "Bosques nubosos de Talamanca."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Robber frogs skip the tadpole stage: babies hatch as tiny froglets!",
      "es": "Las ranas de este grupo no tienen renacuajos: ¡las crías nacen como ranitas!"
    },
    "wiki": "Craugastor_andi",
    "photo": {
      "url": "https://data.nhm.ac.uk/media/e0f1ae09-5ec3-4737-9157-f114fc4d2239",
      "large": "https://data.nhm.ac.uk/media/e0f1ae09-5ec3-4737-9157-f114fc4d2239",
      "author": "The Trustees of the Natural History Museum, London",
      "license": "CC BY",
      "page": "https://www.gbif.org/occurrence/1057547244",
      "source": "GBIF",
      "cardOk": true
    }
  },
  {
    "id": "catalina-robber-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Craugastor catalinae",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Catalina's Robber Frog",
      "es": "Rana de Catalina"
    },
    "summary": {
      "en": "A stream frog of the southern mountains.",
      "es": "Una rana de quebrada de las montañas del sur."
    },
    "where": {
      "en": "Talamanca streams.",
      "es": "Quebradas de Talamanca."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "It lives along fast, rocky mountain streams.",
      "es": "Vive en quebradas de montaña rápidas y con piedras."
    },
    "wiki": "Craugastor_catalinae",
    "photo": null
  },
  {
    "id": "broad-headed-rainfrog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Craugastor gulosus",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Broad-headed Rainfrog",
      "es": "Rana Cabezona"
    },
    "summary": {
      "en": "A big-headed frog of the Caribbean foothills.",
      "es": "Una rana de cabeza grande de las faldas de las montañas del Caribe."
    },
    "where": {
      "en": "Caribbean foothills.",
      "es": "Faldas de las montañas del Caribe."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Its big head and mouth let it eat large insects.",
      "es": "Su cabeza y boca grandes le permiten comer insectos grandes."
    },
    "wiki": "Craugastor_gulosus",
    "photo": null
  },
  {
    "id": "chunky-robber-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Craugastor obesus",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Chunky Robber Frog",
      "es": "Rana Gordita"
    },
    "summary": {
      "en": "A plump frog of the Talamanca mountains.",
      "es": "Una rana gordita de la cordillera de Talamanca."
    },
    "where": {
      "en": "Talamanca mountain streams.",
      "es": "Quebradas de la cordillera de Talamanca."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Like its cousins, it lays its eggs on land, not in water.",
      "es": "Como sus primas, pone sus huevos en tierra, no en el agua."
    },
    "wiki": "Craugastor_obesus",
    "photo": null
  },
  {
    "id": "mountain-stream-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Craugastor rhyacobatrachus",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Mountain Stream Frog",
      "es": "Rana de Arroyo"
    },
    "summary": {
      "en": "A frog that lives along streams in southern Costa Rica.",
      "es": "Una rana que vive a la orilla de quebradas en el sur de Costa Rica."
    },
    "where": {
      "en": "Southern mountain streams.",
      "es": "Quebradas de montaña del sur."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "'Rhyacobatrachus' means 'stream frog' in Greek.",
      "es": "'Rhyacobatrachus' significa 'rana de arroyo' en griego."
    },
    "wiki": "Craugastor_rhyacobatrachus",
    "photo": null
  },
  {
    "id": "similar-robber-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Craugastor persimilis",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Similar Robber Frog",
      "es": "Rana Similar"
    },
    "summary": {
      "en": "A small frog of the Caribbean lowland rainforest.",
      "es": "Una ranita del bosque lluvioso de las tierras bajas del Caribe."
    },
    "where": {
      "en": "Caribbean lowlands.",
      "es": "Tierras bajas del Caribe."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Its name means 'very similar' because it looks a lot like its cousins.",
      "es": "Su nombre significa 'muy parecida' porque se parece mucho a sus primas."
    },
    "wiki": "Craugastor_persimilis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/151499297/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/151499297/large.jpeg",
      "author": "Edward Bell",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/151499297",
      "source": "iNaturalist",
      "cardOk": true
    }
  },
  {
    "id": "granular-poison-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Oophaga granulifera",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Granular Poison Frog",
      "es": "Rana Venenosa Granulosa"
    },
    "summary": {
      "en": "A tiny red-and-green poison frog with bumpy skin.",
      "es": "Una ranita venenosa roja y verde con la piel llena de granitos."
    },
    "where": {
      "en": "Only the southern Pacific: Osa and Golfo Dulce.",
      "es": "Solo en el Pacífico sur: Osa y el golfo Dulce."
    },
    "threats": {
      "en": "Forest loss and illegal collection for the pet trade.",
      "es": "La pérdida de bosque y la captura ilegal para venderlas como mascotas."
    },
    "help": {
      "en": [
        "Never buy wild-caught frogs as pets.",
        "Look, don't touch: their skin can be toxic.",
        "Support lowland rainforest protection."
      ],
      "es": [
        "Nunca compres ranas silvestres como mascotas.",
        "Mira, pero no toques: su piel puede ser tóxica.",
        "Apoya la protección del bosque lluvioso de tierras bajas."
      ]
    },
    "funFact": {
      "en": "Mothers carry each tadpole to its own little pool and feed it eggs.",
      "es": "Las mamás llevan cada renacuajo a su propia pocita y lo alimentan con huevos."
    },
    "wiki": "Oophaga_granulifera",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/399305342/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/399305342/large.jpg",
      "author": "Nick Tobler (Cowturtle)",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/399305342",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "golfodulcean-poison-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Phyllobates vittatus",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Golfodulcean Poison Frog",
      "es": "Rana Venenosa del Golfo Dulce"
    },
    "summary": {
      "en": "A black poison frog with bright orange stripes.",
      "es": "Una rana venenosa negra con rayas anaranjadas brillantes."
    },
    "where": {
      "en": "Only around Golfo Dulce.",
      "es": "Solo alrededor del golfo Dulce."
    },
    "threats": {
      "en": "Forest loss and illegal collection for the pet trade.",
      "es": "La pérdida de bosque y la captura ilegal para venderlas como mascotas."
    },
    "help": {
      "en": [
        "Never buy wild-caught frogs as pets.",
        "Look, don't touch: their skin can be toxic.",
        "Support lowland rainforest protection."
      ],
      "es": [
        "Nunca compres ranas silvestres como mascotas.",
        "Mira, pero no toques: su piel puede ser tóxica.",
        "Apoya la protección del bosque lluvioso de tierras bajas."
      ]
    },
    "funFact": {
      "en": "Its cousins in Colombia are among the most poisonous animals on Earth.",
      "es": "Sus primas de Colombia están entre los animales más venenosos del planeta."
    },
    "wiki": "Phyllobates_vittatus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/38099685/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/38099685/large.jpg",
      "author": "Jonathan Eisen",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/38099685",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "horned-marsupial-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Gastrotheca cornuta",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Horned Marsupial Frog",
      "es": "Rana Marsupial Cornuda"
    },
    "summary": {
      "en": "A frog with little 'horns' over its eyes that carries its eggs in a pouch on its back!",
      "es": "¡Una rana con 'cuernitos' sobre los ojos que carga sus huevos en una bolsa en la espalda!"
    },
    "where": {
      "en": "Caribbean rainforests.",
      "es": "Bosques lluviosos del Caribe."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Its eggs are some of the biggest of any frog in the world.",
      "es": "Sus huevos están entre los más grandes de cualquier rana del mundo."
    },
    "wiki": "Gastrotheca_cornuta",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/477388055/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/477388055/large.jpeg",
      "author": "Makario González-Pinzón",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/477388055",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "golden-eyed-tree-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Agalychnis annae",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Golden-eyed Tree Frog",
      "es": "Rana de Ojos Dorados"
    },
    "summary": {
      "en": "A green tree frog with golden-orange eyes and blue sides.",
      "es": "Una rana verde de árbol con ojos dorados y costados azules."
    },
    "where": {
      "en": "The Central Valley, even in some gardens of San José and Heredia!",
      "es": "¡El Valle Central, incluso en algunos jardines de San José y Heredia!"
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "It survives in some city gardens and coffee farms.",
      "es": "Sobrevive en algunos jardines de la ciudad y en cafetales."
    },
    "wiki": "Agalychnis_annae",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/181812626/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/181812626/large.jpg",
      "author": "Randall Jiménez",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/181812626",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "lemur-leaf-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Agalychnis lemur",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Lemur Leaf Frog",
      "es": "Rana Lémur"
    },
    "summary": {
      "en": "A slim green leaf frog with big eyes that climbs slowly, like a lemur.",
      "es": "Una rana verde y delgada con ojos grandes que trepa despacio, como un lémur."
    },
    "where": {
      "en": "Caribbean foothills, where new populations were found recently.",
      "es": "Las faldas de las montañas del Caribe, donde hace poco se encontraron nuevas poblaciones."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "It changes from green by day to brown at night.",
      "es": "Cambia de verde de día a café de noche."
    },
    "wiki": "Agalychnis_lemur",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/22863405/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/22863405/large.jpg",
      "author": "John G. Phillips",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/22863405",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "costa-rica-brook-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Duellmanohyla uranochroa",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Costa Rica Brook Frog",
      "es": "Rana de Arroyo Tica"
    },
    "summary": {
      "en": "A green stream frog with red eyes and a white stripe on its lip.",
      "es": "Una rana verde de quebrada con ojos rojos y una raya blanca en el labio."
    },
    "where": {
      "en": "Mountain forests of Costa Rica.",
      "es": "Bosques de montaña de Costa Rica."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Its tadpoles have special mouths for clinging to rocks in fast water.",
      "es": "Sus renacuajos tienen bocas especiales para pegarse a las piedras en el agua rápida."
    },
    "wiki": "Duellmanohyla_uranochroa",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/331464192/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/331464192/large.jpg",
      "author": "Makario González-Pinzón",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/331464192",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "lowland-brook-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Duellmanohyla lythrodes",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Lowland Brook Frog",
      "es": "Rana de Arroyo de Bajura"
    },
    "summary": {
      "en": "A small stream frog with red eyes.",
      "es": "Una ranita de quebrada con ojos rojos."
    },
    "where": {
      "en": "Streams of the Caribbean foothills.",
      "es": "Quebradas de las faldas del Caribe."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "It calls from leaves hanging over fast-flowing streams.",
      "es": "Canta desde hojas que cuelgan sobre quebradas rápidas."
    },
    "wiki": "Duellmanohyla_lythrodes",
    "photo": null
  },
  {
    "id": "fringe-limbed-treefrog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Ecnomiohyla fimbrimembra",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Fringe-limbed Treefrog",
      "es": "Rana de Flecos"
    },
    "summary": {
      "en": "A big tree frog with fringed skin on its arms and legs.",
      "es": "Una rana de árbol grande con flecos de piel en brazos y patas."
    },
    "where": {
      "en": "The treetops of Talamanca forests.",
      "es": "Las copas de los bosques de Talamanca."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Its big webbed hands and feet may help it glide between trees.",
      "es": "Sus manos y patas con membranas le pueden ayudar a planear entre los árboles."
    },
    "wiki": "Ecnomiohyla_fimbrimembra",
    "photo": null
  },
  {
    "id": "copes-brown-treefrog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Ecnomiohyla miliaria",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Cope's Brown Treefrog",
      "es": "Rana Arbórea de Cope"
    },
    "summary": {
      "en": "One of the biggest tree frogs in Central America, with large webbed feet.",
      "es": "Una de las ranas de árbol más grandes de Centroamérica, con patas grandes y palmeadas."
    },
    "where": {
      "en": "The Caribbean rainforest canopy.",
      "es": "Las copas del bosque lluvioso del Caribe."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "It can parachute from high branches using its huge webbed feet.",
      "es": "Puede lanzarse en 'paracaídas' desde ramas altas usando sus enormes patas palmeadas."
    },
    "wiki": "Ecnomiohyla_miliaria",
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Ecnomiohyla_miliaria_at_EVACC.jpg?width=500",
      "large": "https://commons.wikimedia.org/wiki/Special:FilePath/Ecnomiohyla_miliaria_at_EVACC.jpg?width=1024",
      "author": "Brian Gratwicke",
      "license": "CC BY",
      "page": "https://commons.wikimedia.org/wiki/File:Ecnomiohyla_miliaria_at_EVACC.jpg",
      "source": "Wikimedia Commons",
      "cardOk": true
    }
  },
  {
    "id": "torrent-treefrog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Hyloscirtus colymba",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Torrent Treefrog",
      "es": "Rana de Torrente"
    },
    "summary": {
      "en": "A small frog of mountain torrents in Costa Rica and Panama.",
      "es": "Una ranita de los torrentes de montaña de Costa Rica y Panamá."
    },
    "where": {
      "en": "Fast mountain streams.",
      "es": "Quebradas rápidas de montaña."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "'Colymba' comes from a Greek word for diver.",
      "es": "'Colymba' viene de una palabra griega que significa buceador."
    },
    "wiki": "Hyloscirtus_colymba",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/67336/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/67336/large.jpg",
      "author": "Brian Gratwicke",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/67336",
      "source": "iNaturalist",
      "cardOk": true
    }
  },
  {
    "id": "tica-treefrog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Isthmohyla tica",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Tica Treefrog",
      "es": "Rana Tica"
    },
    "summary": {
      "en": "A small spotted stream frog named for Costa Rica!",
      "es": "¡Una ranita moteada de quebrada que lleva el nombre de Costa Rica!"
    },
    "where": {
      "en": "Mountain forests of Costa Rica.",
      "es": "Bosques de montaña de Costa Rica."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Its name honors Costa Ricans, who call themselves 'ticos'.",
      "es": "Su nombre honra a los costarricenses, que se llaman 'ticos'."
    },
    "wiki": "Isthmohyla_tica",
    "photo": null
  },
  {
    "id": "rivulet-treefrog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Isthmohyla rivularis",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Rivulet Treefrog",
      "es": "Rana de Riachuelo"
    },
    "summary": {
      "en": "A small cloud forest frog thought extinct, then found again near Monteverde.",
      "es": "Una ranita del bosque nuboso que se creía extinta y se volvió a encontrar cerca de Monteverde."
    },
    "where": {
      "en": "Cloud forests like Monteverde.",
      "es": "Bosques nubosos como Monteverde."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Finding it again gave scientists new hope for Monteverde's frogs.",
      "es": "Encontrarla otra vez les dio nueva esperanza a los científicos por las ranas de Monteverde."
    },
    "wiki": "Isthmohyla_rivularis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/315787193/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/315787193/large.jpg",
      "author": "David A. Rodríguez Arias",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/315787193",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "calypso-treefrog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Isthmohyla calypsa",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Calypso Treefrog",
      "es": "Rana Calipso"
    },
    "summary": {
      "en": "A mossy-green frog of Talamanca cloud forests.",
      "es": "Una rana verde musgo de los bosques nubosos de Talamanca."
    },
    "where": {
      "en": "Talamanca cloud forests.",
      "es": "Bosques nubosos de Talamanca."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Its spotted skin blends in with moss and lichens.",
      "es": "Su piel moteada se confunde con el musgo y los líquenes."
    },
    "wiki": "Isthmohyla_calypsa",
    "photo": null
  },
  {
    "id": "narrow-lined-treefrog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Isthmohyla angustilineata",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Narrow-lined Treefrog",
      "es": "Rana de Línea Angosta"
    },
    "summary": {
      "en": "A small treefrog with a thin white line along its side.",
      "es": "Una ranita de árbol con una línea blanca delgada a lo largo del costado."
    },
    "where": {
      "en": "Mountain forests of Costa Rica.",
      "es": "Bosques de montaña de Costa Rica."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Its name means 'narrow line' in Latin.",
      "es": "Su nombre significa 'línea angosta' en latín."
    },
    "wiki": "Isthmohyla_angustilineata",
    "photo": null
  },
  {
    "id": "isla-bonita-treefrog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Isthmohyla debilis",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Isla Bonita Treefrog",
      "es": "Rana de Isla Bonita"
    },
    "summary": {
      "en": "A small frog of Caribbean mountain streams.",
      "es": "Una ranita de las quebradas de montaña del Caribe."
    },
    "where": {
      "en": "Caribbean mountain streams.",
      "es": "Quebradas de montaña del Caribe."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "It's so rare that scientists know very little about it.",
      "es": "Es tan rara que los científicos saben muy poco de ella."
    },
    "wiki": "Isthmohyla_debilis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/308965820/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/308965820/large.jpg",
      "author": "Roger A. Morales-Flores",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/308965820",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "painted-foot-treefrog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Isthmohyla pictipes",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Painted-foot Treefrog",
      "es": "Rana de Patas Pintadas"
    },
    "summary": {
      "en": "A highland frog with colorful markings on its legs.",
      "es": "Una rana de altura con marcas de colores en las patas."
    },
    "where": {
      "en": "Highland streams.",
      "es": "Quebradas de altura."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "'Pictipes' means 'painted feet' in Latin.",
      "es": "'Pictipes' significa 'patas pintadas' en latín."
    },
    "wiki": "Isthmohyla_pictipes",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/351398145/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/351398145/large.jpg",
      "author": "Wouter Beukema",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/351398145",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "leglers-stream-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Ptychohyla legleri",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Legler's Stream Frog",
      "es": "Rana de Legler"
    },
    "summary": {
      "en": "A stream frog of southern Costa Rica and Panama.",
      "es": "Una rana de quebrada del sur de Costa Rica y Panamá."
    },
    "where": {
      "en": "Southern mountain streams.",
      "es": "Quebradas de montaña del sur."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "It hides among wet rocks and plants by the water.",
      "es": "Se esconde entre piedras y plantas mojadas a la orilla del agua."
    },
    "wiki": "Ptychohyla_legleri",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/436431871/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/436431871/large.jpeg",
      "author": "Anthony Mora Aguilar",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/436431871",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "green-eyed-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Lithobates vibicarius",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Green-eyed Frog",
      "es": "Rana de Ojos Verdes"
    },
    "summary": {
      "en": "A highland frog with striking green eyes, once common in cloud forests.",
      "es": "Una rana de altura con ojos verdes impresionantes, antes común en los bosques nubosos."
    },
    "where": {
      "en": "Cloud forests and high pastures, like Poás and Monteverde.",
      "es": "Bosques nubosos y potreros altos, como el Poás y Monteverde."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "After disappearing for years, it was found again in a few places.",
      "es": "Después de desaparecer por años, se volvió a encontrar en algunos lugares."
    },
    "wiki": "Lithobates_vibicarius",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/183092/medium.JPG",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/183092/large.JPG",
      "author": "David A. Rodríguez Arias",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/183092",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "talamanca-salamander",
    "group": "amphibian",
    "emoji": "🦎",
    "scientific": "Bolitoglossa pesrubra",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Talamanca Salamander",
      "es": "Salamandra de Talamanca"
    },
    "summary": {
      "en": "A salamander of the high páramo with reddish feet.",
      "es": "Una salamandra del páramo alto con patas rojizas."
    },
    "where": {
      "en": "Cerro de la Muerte and the Talamanca highlands.",
      "es": "El Cerro de la Muerte y las tierras altas de Talamanca."
    },
    "threats": {
      "en": "Forest loss in its tiny mountain home, climate change and the chytrid fungus.",
      "es": "La pérdida de bosque en su pequeño hogar de montaña, el cambio climático y el hongo quitridio."
    },
    "help": {
      "en": [
        "Stay on trails so you don't crush the moss and leaf litter where they live.",
        "Never move salamanders or frogs.",
        "Support protection of mountain forests."
      ],
      "es": [
        "Quédate en los senderos para no aplastar el musgo y la hojarasca donde viven.",
        "Nunca cambies de lugar salamandras ni ranas.",
        "Apoya la protección de los bosques de montaña."
      ]
    },
    "funFact": {
      "en": "'Pesrubra' means 'red foot' in Latin.",
      "es": "'Pesrubra' significa 'pie rojo' en latín."
    },
    "wiki": "Bolitoglossa_pesrubra",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/351398024/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/351398024/large.jpg",
      "author": "Wouter Beukema",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/351398024",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "la-palma-salamander",
    "group": "amphibian",
    "emoji": "🦎",
    "scientific": "Bolitoglossa subpalmata",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "La Palma Salamander",
      "es": "Salamandra de La Palma"
    },
    "summary": {
      "en": "A dark salamander of the Central Volcanic mountains.",
      "es": "Una salamandra oscura de la cordillera Volcánica Central."
    },
    "where": {
      "en": "Volcano forests of the Central Valley.",
      "es": "Bosques de los volcanes del Valle Central."
    },
    "threats": {
      "en": "Forest loss in its tiny mountain home, climate change and the chytrid fungus.",
      "es": "La pérdida de bosque en su pequeño hogar de montaña, el cambio climático y el hongo quitridio."
    },
    "help": {
      "en": [
        "Stay on trails so you don't crush the moss and leaf litter where they live.",
        "Never move salamanders or frogs.",
        "Support protection of mountain forests."
      ],
      "es": [
        "Quédate en los senderos para no aplastar el musgo y la hojarasca donde viven.",
        "Nunca cambies de lugar salamandras ni ranas.",
        "Apoya la protección de los bosques de montaña."
      ]
    },
    "funFact": {
      "en": "These salamanders have no lungs: they breathe through their skin!",
      "es": "¡Estas salamandras no tienen pulmones: respiran por la piel!"
    },
    "wiki": "Bolitoglossa_subpalmata",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/351386549/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/351386549/large.jpg",
      "author": "Wouter Beukema",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/351386549",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "tica-salamander",
    "group": "amphibian",
    "emoji": "🦎",
    "scientific": "Bolitoglossa tica",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Tica Salamander",
      "es": "Salamandra Tica"
    },
    "summary": {
      "en": "A salamander found only in the mountains of Costa Rica.",
      "es": "Una salamandra que solo vive en las montañas de Costa Rica."
    },
    "where": {
      "en": "Mountain forests of Costa Rica.",
      "es": "Bosques de montaña de Costa Rica."
    },
    "threats": {
      "en": "Forest loss in its tiny mountain home, climate change and the chytrid fungus.",
      "es": "La pérdida de bosque en su pequeño hogar de montaña, el cambio climático y el hongo quitridio."
    },
    "help": {
      "en": [
        "Stay on trails so you don't crush the moss and leaf litter where they live.",
        "Never move salamanders or frogs.",
        "Support protection of mountain forests."
      ],
      "es": [
        "Quédate en los senderos para no aplastar el musgo y la hojarasca donde viven.",
        "Nunca cambies de lugar salamandras ni ranas.",
        "Apoya la protección de los bosques de montaña."
      ]
    },
    "funFact": {
      "en": "Its tongue shoots out super fast to catch insects.",
      "es": "Su lengua sale disparada rapidísimo para atrapar insectos."
    },
    "wiki": "Bolitoglossa_tica",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/351398019/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/351398019/large.jpg",
      "author": "Wouter Beukema",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/351398019",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "compact-salamander",
    "group": "amphibian",
    "emoji": "🦎",
    "scientific": "Bolitoglossa compacta",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Compact Salamander",
      "es": "Salamandra Compacta"
    },
    "summary": {
      "en": "A stout salamander of the Talamanca highlands.",
      "es": "Una salamandra robusta de las tierras altas de Talamanca."
    },
    "where": {
      "en": "Talamanca highlands.",
      "es": "Tierras altas de Talamanca."
    },
    "threats": {
      "en": "Forest loss in its tiny mountain home, climate change and the chytrid fungus.",
      "es": "La pérdida de bosque en su pequeño hogar de montaña, el cambio climático y el hongo quitridio."
    },
    "help": {
      "en": [
        "Stay on trails so you don't crush the moss and leaf litter where they live.",
        "Never move salamanders or frogs.",
        "Support protection of mountain forests."
      ],
      "es": [
        "Quédate en los senderos para no aplastar el musgo y la hojarasca donde viven.",
        "Nunca cambies de lugar salamandras ni ranas.",
        "Apoya la protección de los bosques de montaña."
      ]
    },
    "funFact": {
      "en": "It has webbed hands to help it climb.",
      "es": "Tiene manos palmeadas que le ayudan a trepar."
    },
    "wiki": "Bolitoglossa_compacta",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/351398095/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/351398095/large.jpg",
      "author": "Wouter Beukema",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/351398095",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "marbled-salamander",
    "group": "amphibian",
    "emoji": "🦎",
    "scientific": "Bolitoglossa marmorea",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Marbled Salamander",
      "es": "Salamandra Marmórea"
    },
    "summary": {
      "en": "A marble-patterned salamander of the high Talamanca.",
      "es": "Una salamandra con dibujos como de mármol de la alta Talamanca."
    },
    "where": {
      "en": "High Talamanca mountains.",
      "es": "Montañas altas de Talamanca."
    },
    "threats": {
      "en": "Forest loss in its tiny mountain home, climate change and the chytrid fungus.",
      "es": "La pérdida de bosque en su pequeño hogar de montaña, el cambio climático y el hongo quitridio."
    },
    "help": {
      "en": [
        "Stay on trails so you don't crush the moss and leaf litter where they live.",
        "Never move salamanders or frogs.",
        "Support protection of mountain forests."
      ],
      "es": [
        "Quédate en los senderos para no aplastar el musgo y la hojarasca donde viven.",
        "Nunca cambies de lugar salamandras ni ranas.",
        "Apoya la protección de los bosques de montaña."
      ]
    },
    "funFact": {
      "en": "Its marbled skin hides it on mossy rocks.",
      "es": "Su piel marmoleada la esconde sobre piedras con musgo."
    },
    "wiki": "Bolitoglossa_marmorea",
    "photo": null
  },
  {
    "id": "blackish-salamander",
    "group": "amphibian",
    "emoji": "🦎",
    "scientific": "Bolitoglossa nigrescens",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Blackish Salamander",
      "es": "Salamandra Negruzca"
    },
    "summary": {
      "en": "A dark salamander of the high mountains.",
      "es": "Una salamandra oscura de las montañas altas."
    },
    "where": {
      "en": "High mountain forests.",
      "es": "Bosques de montaña alta."
    },
    "threats": {
      "en": "Forest loss in its tiny mountain home, climate change and the chytrid fungus.",
      "es": "La pérdida de bosque en su pequeño hogar de montaña, el cambio climático y el hongo quitridio."
    },
    "help": {
      "en": [
        "Stay on trails so you don't crush the moss and leaf litter where they live.",
        "Never move salamanders or frogs.",
        "Support protection of mountain forests."
      ],
      "es": [
        "Quédate en los senderos para no aplastar el musgo y la hojarasca donde viven.",
        "Nunca cambies de lugar salamandras ni ranas.",
        "Apoya la protección de los bosques de montaña."
      ]
    },
    "funFact": {
      "en": "It hides under logs and moss during the day.",
      "es": "Se esconde bajo troncos y musgo durante el día."
    },
    "wiki": "Bolitoglossa_nigrescens",
    "photo": null
  },
  {
    "id": "shadow-salamander",
    "group": "amphibian",
    "emoji": "🦎",
    "scientific": "Bolitoglossa sombra",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Shadow Salamander",
      "es": "Salamandra Sombra"
    },
    "summary": {
      "en": "A dark salamander of southern mountain forests.",
      "es": "Una salamandra oscura de los bosques de montaña del sur."
    },
    "where": {
      "en": "Southern mountain forests.",
      "es": "Bosques de montaña del sur."
    },
    "threats": {
      "en": "Forest loss in its tiny mountain home, climate change and the chytrid fungus.",
      "es": "La pérdida de bosque en su pequeño hogar de montaña, el cambio climático y el hongo quitridio."
    },
    "help": {
      "en": [
        "Stay on trails so you don't crush the moss and leaf litter where they live.",
        "Never move salamanders or frogs.",
        "Support protection of mountain forests."
      ],
      "es": [
        "Quédate en los senderos para no aplastar el musgo y la hojarasca donde viven.",
        "Nunca cambies de lugar salamandras ni ranas.",
        "Apoya la protección de los bosques de montaña."
      ]
    },
    "funFact": {
      "en": "'Sombra' means shadow in Spanish!",
      "es": "¡Su nombre es 'sombra' en español!"
    },
    "wiki": "Bolitoglossa_sombra",
    "photo": null
  },
  {
    "id": "giant-moss-salamander",
    "group": "amphibian",
    "emoji": "🦎",
    "scientific": "Nototriton major",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Giant Moss Salamander",
      "es": "Salamandra de Musgo Mayor"
    },
    "summary": {
      "en": "A tiny salamander that lives in moss. 'Giant' only compared to its even tinier cousins!",
      "es": "Una salamandra diminuta que vive en el musgo. ¡'Mayor' solo comparada con sus primas aún más pequeñas!"
    },
    "where": {
      "en": "Mountain forests of Costa Rica.",
      "es": "Bosques de montaña de Costa Rica."
    },
    "threats": {
      "en": "Forest loss in its tiny mountain home, climate change and the chytrid fungus.",
      "es": "La pérdida de bosque en su pequeño hogar de montaña, el cambio climático y el hongo quitridio."
    },
    "help": {
      "en": [
        "Stay on trails so you don't crush the moss and leaf litter where they live.",
        "Never move salamanders or frogs.",
        "Support protection of mountain forests."
      ],
      "es": [
        "Quédate en los senderos para no aplastar el musgo y la hojarasca donde viven.",
        "Nunca cambies de lugar salamandras ni ranas.",
        "Apoya la protección de los bosques de montaña."
      ]
    },
    "funFact": {
      "en": "Moss salamanders are so small they could sit on your fingernail.",
      "es": "Las salamandras de musgo son tan pequeñas que cabrían sobre tu uña."
    },
    "wiki": "Nototriton_major",
    "photo": {
      "url": "https://collections.nmnh.si.edu/media/?i=7006110&h=2000",
      "large": "https://collections.nmnh.si.edu/media/?i=7006110&h=2000",
      "author": "Welch, Jenna L.",
      "license": "CC0",
      "page": "https://www.gbif.org/occurrence/1319260168",
      "source": "GBIF",
      "cardOk": true
    }
  },
  {
    "id": "tapanti-moss-salamander",
    "group": "amphibian",
    "emoji": "🦎",
    "scientific": "Nototriton tapanti",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Tapantí Moss Salamander",
      "es": "Salamandra de Tapantí"
    },
    "summary": {
      "en": "A tiny moss salamander of the Tapantí mountains.",
      "es": "Una salamandra diminuta de musgo de las montañas de Tapantí."
    },
    "where": {
      "en": "Tapantí National Park.",
      "es": "El Parque Nacional Tapantí."
    },
    "threats": {
      "en": "Forest loss in its tiny mountain home, climate change and the chytrid fungus.",
      "es": "La pérdida de bosque en su pequeño hogar de montaña, el cambio climático y el hongo quitridio."
    },
    "help": {
      "en": [
        "Stay on trails so you don't crush the moss and leaf litter where they live.",
        "Never move salamanders or frogs.",
        "Support protection of mountain forests."
      ],
      "es": [
        "Quédate en los senderos para no aplastar el musgo y la hojarasca donde viven.",
        "Nunca cambies de lugar salamandras ni ranas.",
        "Apoya la protección de los bosques de montaña."
      ]
    },
    "funFact": {
      "en": "It's named after Tapantí, where it was discovered.",
      "es": "Lleva el nombre de Tapantí, donde fue descubierta."
    },
    "wiki": "Nototriton_tapanti",
    "photo": null
  },
  {
    "id": "guanacaste-moss-salamander",
    "group": "amphibian",
    "emoji": "🦎",
    "scientific": "Nototriton guanacaste",
    "status": "VU",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Guanacaste Moss Salamander",
      "es": "Salamandra de Guanacaste"
    },
    "summary": {
      "en": "A tiny salamander of the misty cloud forests on Guanacaste's volcanoes.",
      "es": "Una salamandra diminuta de los bosques nubosos de los volcanes de Guanacaste."
    },
    "where": {
      "en": "Cloud forests on the volcanoes of Guanacaste.",
      "es": "Bosques nubosos de los volcanes de Guanacaste."
    },
    "threats": {
      "en": "Forest loss in its tiny mountain home, climate change and the chytrid fungus.",
      "es": "La pérdida de bosque en su pequeño hogar de montaña, el cambio climático y el hongo quitridio."
    },
    "help": {
      "en": [
        "Stay on trails so you don't crush the moss and leaf litter where they live.",
        "Never move salamanders or frogs.",
        "Support protection of mountain forests."
      ],
      "es": [
        "Quédate en los senderos para no aplastar el musgo y la hojarasca donde viven.",
        "Nunca cambies de lugar salamandras ni ranas.",
        "Apoya la protección de los bosques de montaña."
      ]
    },
    "funFact": {
      "en": "It lives in the misty forests on the tops of volcanoes.",
      "es": "Vive en los bosques neblinosos en la cima de los volcanes."
    },
    "wiki": "Nototriton_guanacaste",
    "photo": null
  },
  {
    "id": "el-empalme-worm-salamander",
    "group": "amphibian",
    "emoji": "🦎",
    "scientific": "Oedipina paucidentata",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "El Empalme Worm Salamander",
      "es": "Salamandra Gusano de El Empalme"
    },
    "summary": {
      "en": "A long, thin salamander that looks like a worm, known from very few specimens.",
      "es": "Una salamandra larga y delgada que parece un gusano, conocida por muy pocos ejemplares."
    },
    "where": {
      "en": "Mountains near El Empalme, on the road to Cerro de la Muerte.",
      "es": "Montañas cerca de El Empalme, camino al Cerro de la Muerte."
    },
    "threats": {
      "en": "Forest loss in its tiny mountain home, climate change and the chytrid fungus.",
      "es": "La pérdida de bosque en su pequeño hogar de montaña, el cambio climático y el hongo quitridio."
    },
    "help": {
      "en": [
        "Stay on trails so you don't crush the moss and leaf litter where they live.",
        "Never move salamanders or frogs.",
        "Support protection of mountain forests."
      ],
      "es": [
        "Quédate en los senderos para no aplastar el musgo y la hojarasca donde viven.",
        "Nunca cambies de lugar salamandras ni ranas.",
        "Apoya la protección de los bosques de montaña."
      ]
    },
    "funFact": {
      "en": "Worm salamanders have tiny legs and burrow in the soil.",
      "es": "Las salamandras gusano tienen patitas diminutas y escarban en la tierra."
    },
    "wiki": "Oedipina_paucidentata",
    "photo": null
  },
  {
    "id": "glass-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Hyalinobatrachium fleischmanni",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Northern Glass Frog",
      "es": "Rana de Vidrio"
    },
    "summary": {
      "en": "A little green frog with see-through skin on its belly: you can see its heart!",
      "es": "Una ranita verde con la piel de la panza transparente: ¡se le ve el corazón!"
    },
    "where": {
      "en": "Streams in forests all over the country.",
      "es": "Quebradas de bosques de todo el país."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "Glass frog dads guard the eggs on leaves over streams.",
      "es": "Los papás rana de vidrio cuidan los huevos sobre hojas encima de las quebradas."
    },
    "wiki": "Hyalinobatrachium_fleischmanni",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/426821099/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/426821099/large.jpeg",
      "author": "Michelle Monge-Velazquez",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/426821099",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "red-eyed-tree-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Agalychnis callidryas",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Red-eyed Tree Frog",
      "es": "Rana Calzonuda"
    },
    "summary": {
      "en": "A bright green frog with huge red eyes, blue-and-yellow sides and orange feet.",
      "es": "Una rana verde brillante con enormes ojos rojos, costados azules y amarillos, y patas anaranjadas."
    },
    "where": {
      "en": "Lowland rainforests on both coasts.",
      "es": "Bosques lluviosos bajos de ambas costas."
    },
    "threats": {
      "en": "A fungus disease called chytrid, climate change and forest loss.",
      "es": "Una enfermedad por hongos llamada quitridio, el cambio climático y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Clean your boots between hikes in different forests.",
        "Never take frogs home or move them to other places.",
        "Support cloud forest and rainforest reserves."
      ],
      "es": [
        "Limpia tus botas entre caminatas en bosques diferentes.",
        "Nunca te lleves ranas ni las cambies de lugar.",
        "Apoya las reservas de bosque nuboso y lluvioso."
      ]
    },
    "funFact": {
      "en": "It flashes its red eyes to startle predators.",
      "es": "Abre de golpe sus ojos rojos para asustar a los depredadores."
    },
    "wiki": "Agalychnis_callidryas",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/289704683/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/289704683/large.jpg",
      "author": "Luke Padon",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/289704683",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "strawberry-poison-frog",
    "group": "amphibian",
    "emoji": "🐸",
    "scientific": "Oophaga pumilio",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Strawberry Poison Frog",
      "es": "Rana Blue Jeans"
    },
    "summary": {
      "en": "A tiny red frog with blue legs, like it's wearing blue jeans!",
      "es": "¡Una ranita roja con patas azules, como si usara blue jeans!"
    },
    "where": {
      "en": "Caribbean lowlands.",
      "es": "Las tierras bajas del Caribe."
    },
    "threats": {
      "en": "Forest loss and illegal collection for the pet trade.",
      "es": "La pérdida de bosque y la captura ilegal para venderlas como mascotas."
    },
    "help": {
      "en": [
        "Never buy wild-caught frogs as pets.",
        "Look, don't touch: their skin can be toxic.",
        "Support lowland rainforest protection."
      ],
      "es": [
        "Nunca compres ranas silvestres como mascotas.",
        "Mira, pero no toques: su piel puede ser tóxica.",
        "Apoya la protección del bosque lluvioso de tierras bajas."
      ]
    },
    "funFact": {
      "en": "Its poison comes from the ants and mites it eats.",
      "es": "Su veneno viene de las hormigas y ácaros que come."
    },
    "wiki": "Oophaga_pumilio",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/63656416/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/63656416/large.jpg",
      "author": "Kai Squires",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/63656416",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "reventazon-shadowdamsel",
    "group": "insect",
    "emoji": "🧚",
    "scientific": "Palaemnema reventazoni",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Reventazón Shadowdamsel",
      "es": "Caballito del Diablo del Reventazón"
    },
    "summary": {
      "en": "A slender damselfly found only in Costa Rica.",
      "es": "Un caballito del diablo delgado que solo existe en Costa Rica."
    },
    "where": {
      "en": "Forest streams near the Reventazón River.",
      "es": "Quebradas de bosque cerca del río Reventazón."
    },
    "threats": {
      "en": "Polluted or dammed streams and cutting the forest along rivers.",
      "es": "Las quebradas contaminadas o represadas y la tala del bosque a la orilla de los ríos."
    },
    "help": {
      "en": [
        "Keep streams and rivers clean.",
        "Protect the forest along riverbanks.",
        "Don't use pesticides near water."
      ],
      "es": [
        "Mantén limpias las quebradas y los ríos.",
        "Protege el bosque a la orilla de los ríos.",
        "No uses plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "Shadowdamsels perch quietly on twigs in the shady forest near streams.",
      "es": "Se posan quietos en ramitas, en la sombra del bosque cerca de las quebradas."
    },
    "wiki": "Palaemnema_reventazoni",
    "photo": {
      "url": "https://collections.nmnh.si.edu/media/?i=16417997&h=2000",
      "large": "https://collections.nmnh.si.edu/media/?i=16417997&h=2000",
      "author": "Picturae",
      "license": "CC0",
      "page": "https://www.gbif.org/occurrence/1319414033",
      "source": "GBIF",
      "cardOk": true
    }
  },
  {
    "id": "chiriquita-shadowdamsel",
    "group": "insect",
    "emoji": "🧚",
    "scientific": "Palaemnema chiriquita",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Chiriquita Shadowdamsel",
      "es": "Caballito del Diablo Chiriquita"
    },
    "summary": {
      "en": "A delicate damselfly found only in Costa Rica.",
      "es": "Un caballito del diablo delicado que solo existe en Costa Rica."
    },
    "where": {
      "en": "Lowland forest streams.",
      "es": "Quebradas de bosques bajos."
    },
    "threats": {
      "en": "Polluted or dammed streams and cutting the forest along rivers.",
      "es": "Las quebradas contaminadas o represadas y la tala del bosque a la orilla de los ríos."
    },
    "help": {
      "en": [
        "Keep streams and rivers clean.",
        "Protect the forest along riverbanks.",
        "Don't use pesticides near water."
      ],
      "es": [
        "Mantén limpias las quebradas y los ríos.",
        "Protege el bosque a la orilla de los ríos.",
        "No uses plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "Males curl their long bodies like a snake when someone holds them.",
      "es": "Los machos enroscan su cuerpo largo como una serpiente cuando alguien los sostiene."
    },
    "wiki": "Palaemnema_chiriquita",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/65431540/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/65431540/large.jpg",
      "author": "Dennis Paulson",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/65431540",
      "source": "iNaturalist",
      "cardOk": true
    }
  },
  {
    "id": "black-backed-shadowdamsel",
    "group": "insect",
    "emoji": "🧚",
    "scientific": "Palaemnema melanota",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Black-backed Shadowdamsel",
      "es": "Caballito del Diablo de Lomo Negro"
    },
    "summary": {
      "en": "A dark-backed damselfly of shady forest streams.",
      "es": "Un caballito del diablo de lomo oscuro de las quebradas sombreadas."
    },
    "where": {
      "en": "Shady forest streams.",
      "es": "Quebradas sombreadas del bosque."
    },
    "threats": {
      "en": "Polluted or dammed streams and cutting the forest along rivers.",
      "es": "Las quebradas contaminadas o represadas y la tala del bosque a la orilla de los ríos."
    },
    "help": {
      "en": [
        "Keep streams and rivers clean.",
        "Protect the forest along riverbanks.",
        "Don't use pesticides near water."
      ],
      "es": [
        "Mantén limpias las quebradas y los ríos.",
        "Protege el bosque a la orilla de los ríos.",
        "No uses plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "Damselflies fold their wings when resting; dragonflies keep them open.",
      "es": "Los caballitos del diablo doblan las alas al descansar; las libélulas las dejan abiertas."
    },
    "wiki": "Palaemnema_melanota",
    "photo": {
      "url": "https://sfg.taxonworks.org/s/lact62",
      "large": "https://sfg.taxonworks.org/s/lact62",
      "author": "GBIF",
      "license": "CC BY",
      "page": "https://www.gbif.org/occurrence/5937809194",
      "source": "GBIF",
      "cardOk": true
    }
  },
  {
    "id": "cacao-shadowdamsel",
    "group": "insect",
    "emoji": "🧚",
    "scientific": "Palaemnema baltodanoi",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Cacao Shadowdamsel",
      "es": "Caballito del Diablo de Cacao"
    },
    "summary": {
      "en": "A rare damselfly of northern Costa Rica's forest streams.",
      "es": "Un caballito del diablo raro de las quebradas del norte de Costa Rica."
    },
    "where": {
      "en": "Forest streams in northern Costa Rica.",
      "es": "Quebradas de bosque del norte de Costa Rica."
    },
    "threats": {
      "en": "Polluted or dammed streams and cutting the forest along rivers.",
      "es": "Las quebradas contaminadas o represadas y la tala del bosque a la orilla de los ríos."
    },
    "help": {
      "en": [
        "Keep streams and rivers clean.",
        "Protect the forest along riverbanks.",
        "Don't use pesticides near water."
      ],
      "es": [
        "Mantén limpias las quebradas y los ríos.",
        "Protege el bosque a la orilla de los ríos.",
        "No uses plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "Damselfly babies (nymphs) live underwater for months before they can fly.",
      "es": "Las crías (ninfas) viven bajo el agua por meses antes de poder volar."
    },
    "wiki": "Palaemnema_baltodanoi",
    "photo": {
      "url": "https://data.nhm.ac.uk/media/0c7c2472-e4bc-45e5-a40c-72cd69b3f6c3",
      "large": "https://data.nhm.ac.uk/media/0c7c2472-e4bc-45e5-a40c-72cd69b3f6c3",
      "author": "The Trustees of the Natural History Museum, London",
      "license": "CC BY",
      "page": "https://www.gbif.org/occurrence/2350456509",
      "source": "GBIF",
      "cardOk": true
    }
  },
  {
    "id": "limon-knobtail",
    "group": "insect",
    "emoji": "🐉",
    "scientific": "Epigomphus houghtoni",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Limón Knobtail",
      "es": "Libélula de Limón"
    },
    "summary": {
      "en": "A dragonfly known from just one specimen ever collected, in Limón.",
      "es": "Una libélula conocida por un solo ejemplar, recolectado en Limón."
    },
    "where": {
      "en": "Near Siquirres, in Limón Province.",
      "es": "Cerca de Siquirres, en la provincia de Limón."
    },
    "threats": {
      "en": "Polluted or dammed streams and cutting the forest along rivers.",
      "es": "Las quebradas contaminadas o represadas y la tala del bosque a la orilla de los ríos."
    },
    "help": {
      "en": [
        "Keep streams and rivers clean.",
        "Protect the forest along riverbanks.",
        "Don't use pesticides near water."
      ],
      "es": [
        "Mantén limpias las quebradas y los ríos.",
        "Protege el bosque a la orilla de los ríos.",
        "No uses plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "Scientists hope to find it again in the forests around Siquirres.",
      "es": "Los científicos esperan volver a encontrarla en los bosques de Siquirres."
    },
    "wiki": "Epigomphus_houghtoni",
    "photo": {
      "url": "https://data.nhm.ac.uk/media/bd478703-00de-4ca6-828c-7da5fd1579be",
      "large": "https://data.nhm.ac.uk/media/bd478703-00de-4ca6-828c-7da5fd1579be",
      "author": "The Trustees of the Natural History Museum, London",
      "license": "CC BY",
      "page": "https://www.gbif.org/occurrence/2350455736",
      "source": "GBIF",
      "cardOk": true
    }
  },
  {
    "id": "horned-knobtail",
    "group": "insect",
    "emoji": "🐉",
    "scientific": "Epigomphus corniculatus",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Horned Knobtail",
      "es": "Libélula Cornuda"
    },
    "summary": {
      "en": "A dragonfly whose females have a pair of tiny 'horns' on their heads.",
      "es": "Una libélula cuyas hembras tienen dos 'cuernitos' en la cabeza."
    },
    "where": {
      "en": "Rainforest streams in Limón.",
      "es": "Quebradas del bosque lluvioso en Limón."
    },
    "threats": {
      "en": "Polluted or dammed streams and cutting the forest along rivers.",
      "es": "Las quebradas contaminadas o represadas y la tala del bosque a la orilla de los ríos."
    },
    "help": {
      "en": [
        "Keep streams and rivers clean.",
        "Protect the forest along riverbanks.",
        "Don't use pesticides near water."
      ],
      "es": [
        "Mantén limpias las quebradas y los ríos.",
        "Protege el bosque a la orilla de los ríos.",
        "No uses plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "Only Costa Rica's knobtails have females with these little horns.",
      "es": "Solo las hembras de estas libélulas de Costa Rica tienen esos cuernitos."
    },
    "wiki": "Epigomphus_corniculatus",
    "photo": null
  },
  {
    "id": "volcano-knobtail",
    "group": "insect",
    "emoji": "🐉",
    "scientific": "Epigomphus echeverrii",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Volcano Knobtail",
      "es": "Libélula del Volcán"
    },
    "summary": {
      "en": "A dragonfly of lowland rainforest streams.",
      "es": "Una libélula de las quebradas del bosque lluvioso bajo."
    },
    "where": {
      "en": "Streams in Guanacaste and San José.",
      "es": "Quebradas de Guanacaste y San José."
    },
    "threats": {
      "en": "Polluted or dammed streams and cutting the forest along rivers.",
      "es": "Las quebradas contaminadas o represadas y la tala del bosque a la orilla de los ríos."
    },
    "help": {
      "en": [
        "Keep streams and rivers clean.",
        "Protect the forest along riverbanks.",
        "Don't use pesticides near water."
      ],
      "es": [
        "Mantén limpias las quebradas y los ríos.",
        "Protege el bosque a la orilla de los ríos.",
        "No uses plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "It's named after a rancher who donated his land to Guanacaste National Park.",
      "es": "Lleva el nombre de un ganadero que donó su tierra al Parque Nacional Guanacaste."
    },
    "wiki": "Epigomphus_echeverrii",
    "photo": {
      "url": "https://collections.nmnh.si.edu/media/?i=16314958&h=2000",
      "large": "https://collections.nmnh.si.edu/media/?i=16314958&h=2000",
      "author": "Picturae",
      "license": "CC0",
      "page": "https://www.gbif.org/occurrence/1321324235",
      "source": "GBIF",
      "cardOk": true
    }
  },
  {
    "id": "cartago-knobtail",
    "group": "insect",
    "emoji": "🐉",
    "scientific": "Epigomphus verticicornis",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Cartago Knobtail",
      "es": "Libélula de Cartago"
    },
    "summary": {
      "en": "A dragonfly found only in Costa Rica.",
      "es": "Una libélula que solo existe en Costa Rica."
    },
    "where": {
      "en": "Forest streams.",
      "es": "Quebradas de bosque."
    },
    "threats": {
      "en": "Polluted or dammed streams and cutting the forest along rivers.",
      "es": "Las quebradas contaminadas o represadas y la tala del bosque a la orilla de los ríos."
    },
    "help": {
      "en": [
        "Keep streams and rivers clean.",
        "Protect the forest along riverbanks.",
        "Don't use pesticides near water."
      ],
      "es": [
        "Mantén limpias las quebradas y los ríos.",
        "Protege el bosque a la orilla de los ríos.",
        "No uses plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "Dragonflies can see in almost every direction at once.",
      "es": "Las libélulas pueden ver casi en todas las direcciones al mismo tiempo."
    },
    "wiki": "Epigomphus_verticicornis",
    "photo": {
      "url": "https://collections.nmnh.si.edu/media/?i=16386312&h=2000",
      "large": "https://collections.nmnh.si.edu/media/?i=16386312&h=2000",
      "author": "Picturae",
      "license": "CC0",
      "page": "https://www.gbif.org/occurrence/1319059739",
      "source": "GBIF",
      "cardOk": true
    }
  },
  {
    "id": "tico-knobtail",
    "group": "insect",
    "emoji": "🐉",
    "scientific": "Epigomphus subsimilis",
    "status": "EN",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Tico Knobtail",
      "es": "Libélula Tica"
    },
    "summary": {
      "en": "A rare dragonfly found only in Costa Rica.",
      "es": "Una libélula rara que solo existe en Costa Rica."
    },
    "where": {
      "en": "Forest streams.",
      "es": "Quebradas de bosque."
    },
    "threats": {
      "en": "Polluted or dammed streams and cutting the forest along rivers.",
      "es": "Las quebradas contaminadas o represadas y la tala del bosque a la orilla de los ríos."
    },
    "help": {
      "en": [
        "Keep streams and rivers clean.",
        "Protect the forest along riverbanks.",
        "Don't use pesticides near water."
      ],
      "es": [
        "Mantén limpias las quebradas y los ríos.",
        "Protege el bosque a la orilla de los ríos.",
        "No uses plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "Dragonflies are ancient: their relatives flew long before the dinosaurs!",
      "es": "¡Las libélulas son antiguas: sus parientes volaban mucho antes que los dinosaurios!"
    },
    "wiki": "Epigomphus_subsimilis",
    "photo": null
  },
  {
    "id": "wagners-knobtail",
    "group": "insect",
    "emoji": "🐉",
    "scientific": "Epigomphus wagneri",
    "status": "CR",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Wagner's Knobtail",
      "es": "Libélula de Wagner"
    },
    "summary": {
      "en": "A dragonfly last seen in 2010. It may already be extinct.",
      "es": "Una libélula vista por última vez en 2010. Puede que ya esté extinta."
    },
    "where": {
      "en": "Forest streams of Costa Rica.",
      "es": "Quebradas de bosque de Costa Rica."
    },
    "threats": {
      "en": "Polluted or dammed streams and cutting the forest along rivers.",
      "es": "Las quebradas contaminadas o represadas y la tala del bosque a la orilla de los ríos."
    },
    "help": {
      "en": [
        "Keep streams and rivers clean.",
        "Protect the forest along riverbanks.",
        "Don't use pesticides near water."
      ],
      "es": [
        "Mantén limpias las quebradas y los ríos.",
        "Protege el bosque a la orilla de los ríos.",
        "No uses plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "Scientists only gave it a name in 2017, years after it was last seen.",
      "es": "Los científicos le pusieron nombre en 2017, años después de verla por última vez."
    },
    "wiki": "Epigomphus_wagneri",
    "photo": null
  },
  {
    "id": "helicopter-damselfly",
    "group": "insect",
    "emoji": "🧚",
    "scientific": "Megaloprepus caerulatus",
    "status": "LC",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Giant Helicopter Damselfly",
      "es": "Caballito del Diablo Gigante"
    },
    "summary": {
      "en": "One of the biggest damselflies in the world, with blue-and-white wing tips.",
      "es": "Uno de los caballitos del diablo más grandes del mundo, con puntas de alas azules y blancas."
    },
    "where": {
      "en": "Rainforests like Corcovado and La Selva.",
      "es": "Bosques lluviosos como Corcovado y La Selva."
    },
    "threats": {
      "en": "Polluted or dammed streams and cutting the forest along rivers.",
      "es": "Las quebradas contaminadas o represadas y la tala del bosque a la orilla de los ríos."
    },
    "help": {
      "en": [
        "Keep streams and rivers clean.",
        "Protect the forest along riverbanks.",
        "Don't use pesticides near water."
      ],
      "es": [
        "Mantén limpias las quebradas y los ríos.",
        "Protege el bosque a la orilla de los ríos.",
        "No uses plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "Its slow, spinning wingbeats make it look like a tiny helicopter.",
      "es": "Su aleteo lento y giratorio lo hace parecer un helicóptero diminuto."
    },
    "wiki": "Megaloprepus_caerulatus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/394439028/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/394439028/large.jpeg",
      "author": "Cricket Raspet",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/394439028",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "blue-morpho",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Morpho helenor",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Blue Morpho",
      "es": "Morfo Azul"
    },
    "summary": {
      "en": "A big butterfly with shining electric-blue wings.",
      "es": "Una mariposa grande con alas azul eléctrico brillante."
    },
    "where": {
      "en": "Forests all over the country.",
      "es": "Bosques de todo el país."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "Its wings have no blue color in them: tiny scales bounce light to make the blue!",
      "es": "Sus alas no tienen color azul: ¡escamas diminutas reflejan la luz y crean el azul!"
    },
    "wiki": "Morpho_helenor",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/489504411/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/489504411/large.jpg",
      "author": "Irene",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/489504411",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "glasswing",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Greta oto",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Glasswing Butterfly",
      "es": "Mariposa de Alas de Cristal"
    },
    "summary": {
      "en": "A butterfly with see-through wings, like glass.",
      "es": "Una mariposa con alas transparentes, como de vidrio."
    },
    "where": {
      "en": "Mountain and middle-elevation forests.",
      "es": "Bosques de montaña y de altura media."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "Predators look right through its clear wings!",
      "es": "¡Los depredadores ven a través de sus alas transparentes!"
    },
    "wiki": "Greta_oto",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/26210878/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/26210878/large.jpeg",
      "author": "Roger Rittmaster",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/26210878",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "owl-butterfly",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Caligo atreus",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Owl Butterfly",
      "es": "Mariposa Búho"
    },
    "summary": {
      "en": "A huge butterfly with big eyespots that look like an owl's eyes.",
      "es": "Una mariposa enorme con grandes 'ojos' que parecen los de un búho."
    },
    "where": {
      "en": "Rainforests and banana farms.",
      "es": "Bosques lluviosos y bananales."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "It flies mostly at dawn and dusk.",
      "es": "Vuela sobre todo al amanecer y al atardecer."
    },
    "wiki": "Caligo_atreus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/363916058/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/363916058/large.jpeg",
      "author": "Viktor",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/363916058",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "eighty-eight-butterfly",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Diaethria astala",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Eighty-eight Butterfly",
      "es": "Mariposa 88"
    },
    "summary": {
      "en": "A small butterfly with the number '88' on its wings!",
      "es": "¡Una mariposa pequeña con el número '88' en las alas!"
    },
    "where": {
      "en": "Forests and gardens.",
      "es": "Bosques y jardines."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "Look closely: the pattern under its wings looks like '88'.",
      "es": "Mira de cerca: el dibujo debajo de sus alas parece un '88'."
    },
    "wiki": "Diaethria_astala",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/524311010/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/524311010/large.jpg",
      "author": "Andrey Loria",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/524311010",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "postman-butterfly",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Heliconius erato",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Postman Butterfly",
      "es": "Mariposa Cartero"
    },
    "summary": {
      "en": "A black butterfly with bright red bands.",
      "es": "Una mariposa negra con bandas rojas brillantes."
    },
    "where": {
      "en": "Forests and gardens of the lowlands.",
      "es": "Bosques y jardines de las tierras bajas."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "It eats pollen as well as nectar, which helps it live for months.",
      "es": "Come polen además de néctar, y eso le ayuda a vivir por meses."
    },
    "wiki": "Heliconius_erato",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/596633122/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/596633122/large.jpg",
      "author": "Aubin NORMAND",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/596633122",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "zebra-longwing",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Heliconius charithonia",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Zebra Longwing",
      "es": "Mariposa Cebra"
    },
    "summary": {
      "en": "A long-winged butterfly striped black and yellow, like a zebra.",
      "es": "Una mariposa de alas largas con rayas negras y amarillas, como una cebra."
    },
    "where": {
      "en": "Forest edges and gardens.",
      "es": "Orillas de bosque y jardines."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "At night, groups sleep together on the same branch.",
      "es": "De noche, duermen en grupo en la misma rama."
    },
    "wiki": "Heliconius_charithonia",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/567937199/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/567937199/large.jpg",
      "author": "Pat Hall",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/567937199",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "sara-longwing",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Heliconius sara",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Sara Longwing",
      "es": "Mariposa Sara"
    },
    "summary": {
      "en": "A black butterfly with shiny blue and white bands.",
      "es": "Una mariposa negra con bandas azules brillantes y blancas."
    },
    "where": {
      "en": "Lowland forests.",
      "es": "Bosques bajos."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "Females lay their eggs in groups on passion-vine leaves.",
      "es": "Las hembras ponen sus huevos en grupo sobre hojas de granadilla."
    },
    "wiki": "Heliconius_sara",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/709392948/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/709392948/large.jpg",
      "author": "Amber M. King",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/709392948",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "tiger-longwing",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Heliconius hecale",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Tiger Longwing",
      "es": "Mariposa Tigre"
    },
    "summary": {
      "en": "An orange, black and yellow butterfly.",
      "es": "Una mariposa anaranjada, negra y amarilla."
    },
    "where": {
      "en": "Forests and gardens.",
      "es": "Bosques y jardines."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "Its bright colors warn birds that it tastes bad.",
      "es": "Sus colores brillantes avisan a las aves que sabe feo."
    },
    "wiki": "Heliconius_hecale",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/39188082/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/39188082/large.jpeg",
      "author": "amantedarmanin",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/39188082",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "doris-longwing",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Heliconius doris",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Doris Longwing",
      "es": "Mariposa Doris"
    },
    "summary": {
      "en": "A butterfly that can have red, blue or green markings.",
      "es": "Una mariposa que puede tener marcas rojas, azules o verdes."
    },
    "where": {
      "en": "Lowland forests.",
      "es": "Bosques bajos."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "The same species comes in different colors!",
      "es": "¡La misma especie viene en colores diferentes!"
    },
    "wiki": "Heliconius_doris",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/179198741/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/179198741/large.jpg",
      "author": "Laurel Meredyk",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/179198741",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "julia-butterfly",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Dryas iulia",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Julia Butterfly",
      "es": "Mariposa Julia"
    },
    "summary": {
      "en": "A bright orange butterfly, common in gardens.",
      "es": "Una mariposa anaranjada brillante, común en los jardines."
    },
    "where": {
      "en": "Gardens and forest edges all over the country.",
      "es": "Jardines y orillas de bosque de todo el país."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "Sometimes it drinks the tears of turtles and caimans to get salt!",
      "es": "¡A veces toma las lágrimas de tortugas y caimanes para conseguir sal!"
    },
    "wiki": "Dryas_iulia",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/411655169/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/411655169/large.jpg",
      "author": "cello caruso-turiello",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/411655169",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "malachite-butterfly",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Siproeta stelenes",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Malachite Butterfly",
      "es": "Mariposa Malaquita"
    },
    "summary": {
      "en": "A butterfly with green see-through panels on black wings.",
      "es": "Una mariposa con ventanitas verdes transparentes en alas negras."
    },
    "where": {
      "en": "Forest edges and gardens.",
      "es": "Orillas de bosque y jardines."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "It's named after malachite, a green stone.",
      "es": "Su nombre viene de la malaquita, una piedra verde."
    },
    "wiki": "Siproeta_stelenes",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8538352/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/8538352/large.jpeg",
      "author": "Toby",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/8538352",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "rusty-tipped-page",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Siproeta epaphus",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Rusty-tipped Page",
      "es": "Mariposa Paje"
    },
    "summary": {
      "en": "A dark butterfly with a white band and rusty-orange wing tips.",
      "es": "Una mariposa oscura con una banda blanca y puntas de alas color óxido."
    },
    "where": {
      "en": "Mountain forests and gardens.",
      "es": "Bosques de montaña y jardines."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "It loves cool mountain forests and gardens.",
      "es": "Le encantan los bosques y jardines frescos de montaña."
    },
    "wiki": "Siproeta_epaphus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/263489784/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/263489784/large.jpg",
      "author": "Carrie Seltzer",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/263489784",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "banded-peacock",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Anartia fatima",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Banded Peacock",
      "es": "Mariposa Pavo Real"
    },
    "summary": {
      "en": "A brown butterfly with a cream band, very common in fields.",
      "es": "Una mariposa café con una banda color crema, muy común en los potreros."
    },
    "where": {
      "en": "Fields, gardens and roadsides.",
      "es": "Potreros, jardines y orillas de caminos."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "It's one of the most common butterflies in Costa Rica.",
      "es": "Es una de las mariposas más comunes de Costa Rica."
    },
    "wiki": "Anartia_fatima",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/464909514/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/464909514/large.jpg",
      "author": "Annette Herz",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/464909514",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "thoas-swallowtail",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Papilio thoas",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Thoas Swallowtail",
      "es": "Mariposa Cola de Golondrina"
    },
    "summary": {
      "en": "A large yellow-and-black butterfly with 'tails' on its wings.",
      "es": "Una mariposa grande, amarilla y negra, con 'colitas' en las alas."
    },
    "where": {
      "en": "Forests and citrus farms.",
      "es": "Bosques y fincas de cítricos."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "Its caterpillar looks like bird poop so nothing wants to eat it!",
      "es": "¡Su oruga parece popó de pájaro para que nadie se la quiera comer!"
    },
    "wiki": "Papilio_thoas",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/405293144/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/405293144/large.jpeg",
      "author": "Alison Westwood",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/405293144",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "cattleheart",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Parides iphidamas",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Iphidamas Cattleheart",
      "es": "Mariposa Corazón de Ganado"
    },
    "summary": {
      "en": "A black butterfly with pink-red spots.",
      "es": "Una mariposa negra con manchas rosadas y rojas."
    },
    "where": {
      "en": "Lowland forests.",
      "es": "Bosques bajos."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "Its caterpillars eat toxic plants, so the butterfly is toxic too.",
      "es": "Sus orugas comen plantas tóxicas, así que la mariposa también es tóxica."
    },
    "wiki": "Parides_iphidamas",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/225902363/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/225902363/large.jpg",
      "author": "Irene",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/225902363",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "cloudless-sulphur",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Phoebis sennae",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Cloudless Sulphur",
      "es": "Mariposa Azufre"
    },
    "summary": {
      "en": "A bright lemon-yellow butterfly.",
      "es": "Una mariposa amarillo limón brillante."
    },
    "where": {
      "en": "Open areas, gardens and roadsides.",
      "es": "Zonas abiertas, jardines y orillas de caminos."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "Sometimes large numbers migrate together across the country.",
      "es": "A veces muchísimas migran juntas por el país."
    },
    "wiki": "Phoebis_sennae",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/203295659/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/203295659/large.jpg",
      "author": "Luke Padon",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/203295659",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "blue-frosted-banner",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Catonephele numilia",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Blue-frosted Banner",
      "es": "Mariposa Estandarte"
    },
    "summary": {
      "en": "Males are black with bright orange spots; females look totally different.",
      "es": "Los machos son negros con manchas anaranjadas; las hembras se ven totalmente diferentes."
    },
    "where": {
      "en": "Lowland forests.",
      "es": "Bosques bajos."
    },
    "threats": {
      "en": "Pesticides and loss of the plants its caterpillars eat.",
      "es": "Los plaguicidas y la pérdida de las plantas que comen sus orugas."
    },
    "help": {
      "en": [
        "Plant native flowers and host plants for caterpillars.",
        "Avoid pesticides in gardens.",
        "Never buy framed butterflies caught in the wild."
      ],
      "es": [
        "Siembra flores nativas y plantas para orugas.",
        "Evita los plaguicidas en los jardines.",
        "Nunca compres mariposas enmarcadas capturadas en la naturaleza."
      ]
    },
    "funFact": {
      "en": "Males and females look so different that people once thought they were two species.",
      "es": "Machos y hembras son tan distintos que antes se creía que eran dos especies."
    },
    "wiki": "Catonephele_numilia",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/587091669/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/587091669/large.jpg",
      "author": "Benjamin ZELVELDER",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/587091669",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "green-banded-urania",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Urania fulgens",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Green-banded Urania",
      "es": "Polilla Urania"
    },
    "summary": {
      "en": "A day-flying moth with shimmering green bands, often mistaken for a butterfly.",
      "es": "Una polilla que vuela de día, con bandas verdes brillantes; muchos la confunden con una mariposa."
    },
    "where": {
      "en": "Lowland forests.",
      "es": "Bosques bajos."
    },
    "threats": {
      "en": "Bright lights at night, pesticides and forest loss.",
      "es": "Las luces fuertes de noche, los plaguicidas y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Turn off outdoor lights you don't need.",
        "Avoid pesticides.",
        "Plant native trees."
      ],
      "es": [
        "Apaga las luces de afuera que no necesites.",
        "Evita los plaguicidas.",
        "Siembra árboles nativos."
      ]
    },
    "funFact": {
      "en": "Sometimes millions migrate together across Central America.",
      "es": "A veces millones migran juntas por Centroamérica."
    },
    "wiki": "Urania_fulgens",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/110801057/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/110801057/large.jpg",
      "author": "lallen",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/110801057",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "black-witch-moth",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Ascalapha odorata",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Black Witch Moth",
      "es": "Mariposa Bruja"
    },
    "summary": {
      "en": "One of the biggest moths in the Americas, dark brown with zigzag patterns.",
      "es": "Una de las polillas más grandes de América, café oscuro con dibujos en zigzag."
    },
    "where": {
      "en": "All over the country.",
      "es": "En todo el país."
    },
    "threats": {
      "en": "Bright lights at night, pesticides and forest loss.",
      "es": "Las luces fuertes de noche, los plaguicidas y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Turn off outdoor lights you don't need.",
        "Avoid pesticides.",
        "Plant native trees."
      ],
      "es": [
        "Apaga las luces de afuera que no necesites.",
        "Evita los plaguicidas.",
        "Siembra árboles nativos."
      ]
    },
    "funFact": {
      "en": "Its wings can be about 15 cm across.",
      "es": "Sus alas pueden medir unos 15 cm de punta a punta."
    },
    "wiki": "Ascalapha_odorata",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/40044342/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/40044342/large.jpg",
      "author": "Andrew Meeds",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/40044342",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "rothschildia-silk-moth",
    "group": "insect",
    "emoji": "🦋",
    "scientific": "Rothschildia lebeau",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Rothschildia Silk Moth",
      "es": "Polilla de Seda"
    },
    "summary": {
      "en": "A big silk moth with see-through 'windows' on its wings.",
      "es": "Una polilla de seda grande con 'ventanitas' transparentes en las alas."
    },
    "where": {
      "en": "Dry and moist forests.",
      "es": "Bosques secos y húmedos."
    },
    "threats": {
      "en": "Bright lights at night, pesticides and forest loss.",
      "es": "Las luces fuertes de noche, los plaguicidas y la pérdida de bosque."
    },
    "help": {
      "en": [
        "Turn off outdoor lights you don't need.",
        "Avoid pesticides.",
        "Plant native trees."
      ],
      "es": [
        "Apaga las luces de afuera que no necesites.",
        "Evita los plaguicidas.",
        "Siembra árboles nativos."
      ]
    },
    "funFact": {
      "en": "Adults don't eat at all: they live only a few days.",
      "es": "Los adultos no comen nada: solo viven unos pocos días."
    },
    "wiki": "Rothschildia_lebeau",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/58232421/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/58232421/large.jpg",
      "author": "Arthur de Jesús Chavarría Pérez",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/58232421",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "leafcutter-ant",
    "group": "insect",
    "emoji": "🐜",
    "scientific": "Atta cephalotes",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Leafcutter Ant",
      "es": "Zompopa"
    },
    "summary": {
      "en": "Ants that carry pieces of leaves in long lines across the forest.",
      "es": "Hormigas que cargan pedazos de hojas en largas filas por el bosque."
    },
    "where": {
      "en": "Forests, farms and gardens.",
      "es": "Bosques, fincas y jardines."
    },
    "threats": {
      "en": "Forest loss.",
      "es": "La pérdida de bosque."
    },
    "help": {
      "en": [
        "Watch them from a distance: let them work!",
        "Support forest protection.",
        "Learn how insects keep forests healthy."
      ],
      "es": [
        "Obsérvalas a distancia: ¡déjalas trabajar!",
        "Apoya la protección de los bosques.",
        "Aprende cómo los insectos mantienen sanos los bosques."
      ]
    },
    "funFact": {
      "en": "They don't eat the leaves: they use them to grow a fungus garden for food!",
      "es": "No se comen las hojas: ¡las usan para cultivar un hongo que les sirve de comida!"
    },
    "wiki": "Atta_cephalotes",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/457361557/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/457361557/large.jpg",
      "author": "portioid",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/457361557",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "bullet-ant",
    "group": "insect",
    "emoji": "🐜",
    "scientific": "Paraponera clavata",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Bullet Ant",
      "es": "Bala"
    },
    "summary": {
      "en": "A giant black ant with one of the most painful stings of any insect.",
      "es": "Una hormiga negra gigante con uno de los piquetes más dolorosos de los insectos."
    },
    "where": {
      "en": "Lowland rainforests.",
      "es": "Bosques lluviosos bajos."
    },
    "threats": {
      "en": "Forest loss.",
      "es": "La pérdida de bosque."
    },
    "help": {
      "en": [
        "Watch them from a distance: let them work!",
        "Support forest protection.",
        "Learn how insects keep forests healthy."
      ],
      "es": [
        "Obsérvalas a distancia: ¡déjalas trabajar!",
        "Apoya la protección de los bosques.",
        "Aprende cómo los insectos mantienen sanos los bosques."
      ]
    },
    "funFact": {
      "en": "Its sting is said to feel like being hit by a bullet!",
      "es": "¡Dicen que su piquete se siente como un balazo!"
    },
    "wiki": "Paraponera_clavata",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/269410794/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/269410794/large.jpeg",
      "author": "Christina S. Baer",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/269410794",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "army-ant",
    "group": "insect",
    "emoji": "🐜",
    "scientific": "Eciton burchellii",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Army Ant",
      "es": "Hormiga Arriera"
    },
    "summary": {
      "en": "Ants that march in huge swarms, hunting insects across the forest floor.",
      "es": "Hormigas que marchan en enjambres enormes, cazando insectos en el suelo del bosque."
    },
    "where": {
      "en": "Lowland forests.",
      "es": "Bosques bajos."
    },
    "threats": {
      "en": "Forest loss.",
      "es": "La pérdida de bosque."
    },
    "help": {
      "en": [
        "Watch them from a distance: let them work!",
        "Support forest protection.",
        "Learn how insects keep forests healthy."
      ],
      "es": [
        "Obsérvalas a distancia: ¡déjalas trabajar!",
        "Apoya la protección de los bosques.",
        "Aprende cómo los insectos mantienen sanos los bosques."
      ]
    },
    "funFact": {
      "en": "They build living nests out of their own bodies!",
      "es": "¡Construyen nidos vivos con sus propios cuerpos!"
    },
    "wiki": "Eciton_burchellii",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/289703356/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/289703356/large.jpg",
      "author": "Luke Padon",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/289703356",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "acacia-ant",
    "group": "insect",
    "emoji": "🐜",
    "scientific": "Pseudomyrmex spinicola",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Acacia Ant",
      "es": "Hormiga del Cornizuelo"
    },
    "summary": {
      "en": "Ants that live inside the hollow thorns of acacia trees and protect them.",
      "es": "Hormigas que viven dentro de las espinas huecas del cornizuelo y lo protegen."
    },
    "where": {
      "en": "Dry forests of Guanacaste.",
      "es": "Bosques secos de Guanacaste."
    },
    "threats": {
      "en": "Forest loss.",
      "es": "La pérdida de bosque."
    },
    "help": {
      "en": [
        "Watch them from a distance: let them work!",
        "Support forest protection.",
        "Learn how insects keep forests healthy."
      ],
      "es": [
        "Obsérvalas a distancia: ¡déjalas trabajar!",
        "Apoya la protección de los bosques.",
        "Aprende cómo los insectos mantienen sanos los bosques."
      ]
    },
    "funFact": {
      "en": "The tree gives them a home and food; the ants fight off animals that eat its leaves.",
      "es": "El árbol les da casa y comida; las hormigas atacan a los animales que se comen sus hojas."
    },
    "wiki": "Pseudomyrmex_spinicola",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/8538421/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/8538421/large.jpeg",
      "author": "Toby",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/8538421",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "mariola-bee",
    "group": "insect",
    "emoji": "🐝",
    "scientific": "Tetragonisca angustula",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Mariola Stingless Bee",
      "es": "Abeja Mariola"
    },
    "summary": {
      "en": "A tiny stingless bee that makes delicious, prized honey.",
      "es": "Una abejita sin aguijón que hace una miel deliciosa y muy apreciada."
    },
    "where": {
      "en": "Forests, farms and even city walls.",
      "es": "Bosques, fincas y hasta paredes en la ciudad."
    },
    "threats": {
      "en": "Pesticides and loss of forest and flowers.",
      "es": "Los plaguicidas y la pérdida de bosques y flores."
    },
    "help": {
      "en": [
        "Never spray poison on bee nests: call a beekeeper.",
        "Plant flowers for bees.",
        "Support stingless-bee keepers (meliponicultura)."
      ],
      "es": [
        "Nunca fumigues nidos de abejas: llama a un apicultor.",
        "Siembra flores para las abejas.",
        "Apoya a quienes crían abejas sin aguijón (meliponicultura)."
      ]
    },
    "funFact": {
      "en": "Guard bees stand at the nest's little wax tube entrance, like doormen.",
      "es": "Abejas guardianas vigilan la entrada de cera del nido, como porteras."
    },
    "wiki": "Tetragonisca_angustula",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/155349314/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/155349314/large.jpg",
      "author": "Federico Figueroa Cabezas",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/155349314",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "orchid-bee",
    "group": "insect",
    "emoji": "🐝",
    "scientific": "Eulaema meriana",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Orchid Bee",
      "es": "Abeja de las Orquídeas"
    },
    "summary": {
      "en": "A big, fuzzy bee that helps pollinate orchids.",
      "es": "Una abeja grande y peluda que ayuda a polinizar orquídeas."
    },
    "where": {
      "en": "Lowland forests.",
      "es": "Bosques bajos."
    },
    "threats": {
      "en": "Pesticides and loss of forest and flowers.",
      "es": "Los plaguicidas y la pérdida de bosques y flores."
    },
    "help": {
      "en": [
        "Never spray poison on bee nests: call a beekeeper.",
        "Plant flowers for bees.",
        "Support stingless-bee keepers (meliponicultura)."
      ],
      "es": [
        "Nunca fumigues nidos de abejas: llama a un apicultor.",
        "Siembra flores para las abejas.",
        "Apoya a quienes crían abejas sin aguijón (meliponicultura)."
      ]
    },
    "funFact": {
      "en": "Males collect perfumes from orchids to attract females!",
      "es": "¡Los machos recogen perfumes de las orquídeas para atraer a las hembras!"
    },
    "wiki": "Eulaema_meriana",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/634807959/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/634807959/large.jpg",
      "author": "Buckelkopfcichlide",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/634807959",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "hercules-beetle",
    "group": "insect",
    "emoji": "🪲",
    "scientific": "Dynastes hercules",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Hercules Beetle",
      "es": "Escarabajo Hércules"
    },
    "summary": {
      "en": "One of the longest beetles in the world, with a giant horn.",
      "es": "Uno de los escarabajos más largos del mundo, con un cuerno gigante."
    },
    "where": {
      "en": "Mountain and lowland forests.",
      "es": "Bosques de montaña y bajura."
    },
    "threats": {
      "en": "Forest loss, and people who catch them to sell.",
      "es": "La pérdida de bosque y las personas que los capturan para venderlos."
    },
    "help": {
      "en": [
        "Never buy dried beetles or insect souvenirs.",
        "Leave fallen logs in the forest: they are beetle nurseries.",
        "Turn off outdoor lights at night."
      ],
      "es": [
        "Nunca compres escarabajos secos ni recuerdos hechos con insectos.",
        "Deja los troncos caídos en el bosque: son guarderías de escarabajos.",
        "Apaga las luces de afuera por la noche."
      ]
    },
    "funFact": {
      "en": "It's one of the strongest animals for its size.",
      "es": "Es uno de los animales más fuertes para su tamaño."
    },
    "wiki": "Dynastes_hercules",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/683717360/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/683717360/large.jpg",
      "author": "Joey Santore",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/683717360",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "elephant-beetle",
    "group": "insect",
    "emoji": "🪲",
    "scientific": "Megasoma elephas",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Elephant Beetle",
      "es": "Escarabajo Elefante"
    },
    "summary": {
      "en": "A huge, fuzzy beetle with a horn like an elephant's trunk.",
      "es": "Un escarabajo enorme y peludito con un cuerno como trompa de elefante."
    },
    "where": {
      "en": "Lowland forests.",
      "es": "Bosques bajos."
    },
    "threats": {
      "en": "Forest loss, and people who catch them to sell.",
      "es": "La pérdida de bosque y las personas que los capturan para venderlos."
    },
    "help": {
      "en": [
        "Never buy dried beetles or insect souvenirs.",
        "Leave fallen logs in the forest: they are beetle nurseries.",
        "Turn off outdoor lights at night."
      ],
      "es": [
        "Nunca compres escarabajos secos ni recuerdos hechos con insectos.",
        "Deja los troncos caídos en el bosque: son guarderías de escarabajos.",
        "Apaga las luces de afuera por la noche."
      ]
    },
    "funFact": {
      "en": "Males use their horns to wrestle other males.",
      "es": "Los machos usan sus cuernos para luchar con otros machos."
    },
    "wiki": "Megasoma_elephas",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/253802381/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/253802381/large.jpg",
      "author": "Rob Foster",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/253802381",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "golden-scarab",
    "group": "insect",
    "emoji": "🪲",
    "scientific": "Chrysina resplendens",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Golden Jewel Scarab",
      "es": "Escarabajo Dorado"
    },
    "summary": {
      "en": "A beetle that shines like real gold!",
      "es": "¡Un escarabajo que brilla como oro de verdad!"
    },
    "where": {
      "en": "Cloud forests.",
      "es": "Bosques nubosos."
    },
    "threats": {
      "en": "Forest loss, and people who catch them to sell.",
      "es": "La pérdida de bosque y las personas que los capturan para venderlos."
    },
    "help": {
      "en": [
        "Never buy dried beetles or insect souvenirs.",
        "Leave fallen logs in the forest: they are beetle nurseries.",
        "Turn off outdoor lights at night."
      ],
      "es": [
        "Nunca compres escarabajos secos ni recuerdos hechos con insectos.",
        "Deja los troncos caídos en el bosque: son guarderías de escarabajos.",
        "Apaga las luces de afuera por la noche."
      ]
    },
    "funFact": {
      "en": "Its shell reflects light like a mirror, which may confuse predators.",
      "es": "Su caparazón refleja la luz como un espejo, y eso puede confundir a los depredadores."
    },
    "wiki": "Chrysina_resplendens",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/662809628/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/662809628/large.jpg",
      "author": "Pat Hall",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/662809628",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "harlequin-beetle",
    "group": "insect",
    "emoji": "🪲",
    "scientific": "Acrocinus longimanus",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Harlequin Beetle",
      "es": "Arlequín"
    },
    "summary": {
      "en": "A colorful beetle with super long front legs.",
      "es": "Un escarabajo colorido con patas delanteras larguísimas."
    },
    "where": {
      "en": "Lowland forests.",
      "es": "Bosques bajos."
    },
    "threats": {
      "en": "Forest loss, and people who catch them to sell.",
      "es": "La pérdida de bosque y las personas que los capturan para venderlos."
    },
    "help": {
      "en": [
        "Never buy dried beetles or insect souvenirs.",
        "Leave fallen logs in the forest: they are beetle nurseries.",
        "Turn off outdoor lights at night."
      ],
      "es": [
        "Nunca compres escarabajos secos ni recuerdos hechos con insectos.",
        "Deja los troncos caídos en el bosque: son guarderías de escarabajos.",
        "Apaga las luces de afuera por la noche."
      ]
    },
    "funFact": {
      "en": "Tiny pseudoscorpions ride on its back to travel between trees!",
      "es": "¡Pseudoescorpiones diminutos viajan en su espalda de árbol en árbol!"
    },
    "wiki": "Acrocinus_longimanus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/510251071/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/510251071/large.jpg",
      "author": "Benjamin ZELVELDER",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/510251071",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "peanut-head-bug",
    "group": "insect",
    "emoji": "🐞",
    "scientific": "Fulgora laternaria",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Peanut-head Bug",
      "es": "Machaca"
    },
    "summary": {
      "en": "A bug with a head shaped like a peanut and big eyespots on its wings.",
      "es": "Un insecto con la cabeza en forma de maní y grandes 'ojos' en las alas."
    },
    "where": {
      "en": "Lowland forests.",
      "es": "Bosques bajos."
    },
    "threats": {
      "en": "Pesticides and habitat loss.",
      "es": "Los plaguicidas y la pérdida de hábitat."
    },
    "help": {
      "en": [
        "Avoid pesticides.",
        "Leave wild insects in the wild.",
        "Plant native plants."
      ],
      "es": [
        "Evita los plaguicidas.",
        "Deja a los insectos silvestres en la naturaleza.",
        "Siembra plantas nativas."
      ]
    },
    "funFact": {
      "en": "Some people believe its bite is deadly, but it's actually harmless!",
      "es": "Hay quien cree que su picadura es mortal, ¡pero en realidad es inofensiva!"
    },
    "wiki": "Fulgora_laternaria",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/29856922/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/29856922/large.jpg",
      "author": "J Straka",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/29856922",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "thorn-bug",
    "group": "insect",
    "emoji": "🐞",
    "scientific": "Umbonia crassicornis",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Thorn Bug",
      "es": "Insecto Espina"
    },
    "summary": {
      "en": "A small bug shaped exactly like a thorn on a branch.",
      "es": "Un insecto pequeño con forma de espina en una rama."
    },
    "where": {
      "en": "Trees and bushes.",
      "es": "Árboles y arbustos."
    },
    "threats": {
      "en": "Pesticides and habitat loss.",
      "es": "Los plaguicidas y la pérdida de hábitat."
    },
    "help": {
      "en": [
        "Avoid pesticides.",
        "Leave wild insects in the wild.",
        "Plant native plants."
      ],
      "es": [
        "Evita los plaguicidas.",
        "Deja a los insectos silvestres en la naturaleza.",
        "Siembra plantas nativas."
      ]
    },
    "funFact": {
      "en": "Mothers guard their eggs and babies.",
      "es": "Las mamás cuidan sus huevos y sus crías."
    },
    "wiki": "Umbonia_crassicornis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/536227994/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/536227994/large.jpg",
      "author": "Anthony Mora Aguilar",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/536227994",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "emerald-cicada",
    "group": "insect",
    "emoji": "🐞",
    "scientific": "Zammara smaragdina",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Emerald Cicada",
      "es": "Chicharra Esmeralda"
    },
    "summary": {
      "en": "A bright green cicada with a loud song.",
      "es": "Una chicharra verde brillante con un canto fuerte."
    },
    "where": {
      "en": "Forests.",
      "es": "Bosques."
    },
    "threats": {
      "en": "Pesticides and habitat loss.",
      "es": "Los plaguicidas y la pérdida de hábitat."
    },
    "help": {
      "en": [
        "Avoid pesticides.",
        "Leave wild insects in the wild.",
        "Plant native plants."
      ],
      "es": [
        "Evita los plaguicidas.",
        "Deja a los insectos silvestres en la naturaleza.",
        "Siembra plantas nativas."
      ]
    },
    "funFact": {
      "en": "Cicadas live underground as babies for a long time before coming out to sing.",
      "es": "Las chicharras pasan mucho tiempo bajo tierra de pequeñas antes de salir a cantar."
    },
    "wiki": "Zammara_smaragdina",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/269409865/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/269409865/large.jpeg",
      "author": "Christina S. Baer",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/269409865",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "glowing-click-beetle",
    "group": "insect",
    "emoji": "🪲",
    "scientific": "Pyrophorus noctilucus",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Glowing Click Beetle",
      "es": "Cucuyo"
    },
    "summary": {
      "en": "A beetle with two glowing green lights on its back.",
      "es": "Un escarabajo con dos lucecitas verdes en la espalda."
    },
    "where": {
      "en": "Forests and fields at night.",
      "es": "Bosques y potreros de noche."
    },
    "threats": {
      "en": "Forest loss, and people who catch them to sell.",
      "es": "La pérdida de bosque y las personas que los capturan para venderlos."
    },
    "help": {
      "en": [
        "Never buy dried beetles or insect souvenirs.",
        "Leave fallen logs in the forest: they are beetle nurseries.",
        "Turn off outdoor lights at night."
      ],
      "es": [
        "Nunca compres escarabajos secos ni recuerdos hechos con insectos.",
        "Deja los troncos caídos en el bosque: son guarderías de escarabajos.",
        "Apaga las luces de afuera por la noche."
      ]
    },
    "funFact": {
      "en": "If it lands on its back, it flips into the air with a loud 'click'.",
      "es": "Si cae de espaldas, salta al aire con un fuerte 'clic'."
    },
    "wiki": "Pyrophorus_noctilucus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/266614878/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/266614878/large.jpg",
      "author": "Martin Genner",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/266614878",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "nasute-termite",
    "group": "insect",
    "emoji": "🐜",
    "scientific": "Nasutitermes corniger",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Nasute Termite",
      "es": "Comején"
    },
    "summary": {
      "en": "Termites that build big, dark nests on tree trunks.",
      "es": "Comejenes que construyen nidos grandes y oscuros en los troncos."
    },
    "where": {
      "en": "Forests and farms.",
      "es": "Bosques y fincas."
    },
    "threats": {
      "en": "Forest loss.",
      "es": "La pérdida de bosque."
    },
    "help": {
      "en": [
        "Watch them from a distance: let them work!",
        "Support forest protection.",
        "Learn how insects keep forests healthy."
      ],
      "es": [
        "Obsérvalas a distancia: ¡déjalas trabajar!",
        "Apoya la protección de los bosques.",
        "Aprende cómo los insectos mantienen sanos los bosques."
      ]
    },
    "funFact": {
      "en": "Soldiers spray sticky glue from a nozzle on their heads!",
      "es": "¡Los soldados disparan un pegamento desde una boquilla en la cabeza!"
    },
    "wiki": "Nasutitermes_corniger",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/621199944/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/621199944/large.jpg",
      "author": "John Brew",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/621199944",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "leaf-mantis",
    "group": "insect",
    "emoji": "🦗",
    "scientific": "Choeradodis rhombicollis",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Leaf Mantis",
      "es": "Mantis Hoja"
    },
    "summary": {
      "en": "A praying mantis with a wide, leaf-shaped shield over its body.",
      "es": "Una mantis con un escudo ancho en forma de hoja sobre su cuerpo."
    },
    "where": {
      "en": "Rainforests.",
      "es": "Bosques lluviosos."
    },
    "threats": {
      "en": "Pesticides and habitat loss.",
      "es": "Los plaguicidas y la pérdida de hábitat."
    },
    "help": {
      "en": [
        "Avoid pesticides.",
        "Leave wild insects in the wild.",
        "Plant native plants."
      ],
      "es": [
        "Evita los plaguicidas.",
        "Deja a los insectos silvestres en la naturaleza.",
        "Siembra plantas nativas."
      ]
    },
    "funFact": {
      "en": "It looks so much like a leaf that insects walk right up to it.",
      "es": "Se parece tanto a una hoja que los insectos caminan directo hacia ella."
    },
    "wiki": "Choeradodis_rhombicollis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/190665221/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/190665221/large.jpeg",
      "author": "Daniel Linzbauer",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/190665221",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "giant-cockroach",
    "group": "insect",
    "emoji": "🪳",
    "scientific": "Blaberus giganteus",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Giant Cockroach",
      "es": "Cucaracha Gigante"
    },
    "summary": {
      "en": "One of the biggest cockroaches in the world, living in caves and hollow trees.",
      "es": "Una de las cucarachas más grandes del mundo; vive en cuevas y árboles huecos."
    },
    "where": {
      "en": "Caves and hollow trees in the forest.",
      "es": "Cuevas y árboles huecos del bosque."
    },
    "threats": {
      "en": "Pesticides and habitat loss.",
      "es": "Los plaguicidas y la pérdida de hábitat."
    },
    "help": {
      "en": [
        "Avoid pesticides.",
        "Leave wild insects in the wild.",
        "Plant native plants."
      ],
      "es": [
        "Evita los plaguicidas.",
        "Deja a los insectos silvestres en la naturaleza.",
        "Siembra plantas nativas."
      ]
    },
    "funFact": {
      "en": "Wild cockroaches like this one recycle dead leaves and wood.",
      "es": "Las cucarachas silvestres como esta reciclan hojas y madera muertas."
    },
    "wiki": "Blaberus_giganteus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/459917548/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/459917548/large.jpeg",
      "author": "Andreas Manz",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/459917548",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "giant-grasshopper",
    "group": "insect",
    "emoji": "🦗",
    "scientific": "Tropidacris cristata",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": false,
    "name": {
      "en": "Giant Grasshopper",
      "es": "Saltamontes Gigante"
    },
    "summary": {
      "en": "One of the biggest grasshoppers in the world, with colorful wings.",
      "es": "Uno de los saltamontes más grandes del mundo, con alas de colores."
    },
    "where": {
      "en": "Lowland forests.",
      "es": "Bosques bajos."
    },
    "threats": {
      "en": "Pesticides and habitat loss.",
      "es": "Los plaguicidas y la pérdida de hábitat."
    },
    "help": {
      "en": [
        "Avoid pesticides.",
        "Leave wild insects in the wild.",
        "Plant native plants."
      ],
      "es": [
        "Evita los plaguicidas.",
        "Deja a los insectos silvestres en la naturaleza.",
        "Siembra plantas nativas."
      ]
    },
    "funFact": {
      "en": "Its colorful wings flash when it flies, to surprise predators.",
      "es": "Sus alas de colores destellan al volar para sorprender a los depredadores."
    },
    "wiki": "Tropidacris_cristata",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/376492281/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/376492281/large.jpg",
      "author": "Arden Hoover",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/376492281",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "dobsonfly",
    "group": "insect",
    "emoji": "🦟",
    "scientific": "Corydalus luteus",
    "status": "NE",
    "checked": "2026-11-21",
    "needsCheck": true,
    "name": {
      "en": "Dobsonfly",
      "es": "Mosca Dobson"
    },
    "summary": {
      "en": "A big insect; males have huge curved jaws.",
      "es": "Un insecto grande; los machos tienen mandíbulas enormes y curvas."
    },
    "where": {
      "en": "Near clean streams.",
      "es": "Cerca de quebradas limpias."
    },
    "threats": {
      "en": "Polluted or dammed streams and cutting the forest along rivers.",
      "es": "Las quebradas contaminadas o represadas y la tala del bosque a la orilla de los ríos."
    },
    "help": {
      "en": [
        "Keep streams and rivers clean.",
        "Protect the forest along riverbanks.",
        "Don't use pesticides near water."
      ],
      "es": [
        "Mantén limpias las quebradas y los ríos.",
        "Protege el bosque a la orilla de los ríos.",
        "No uses plaguicidas cerca del agua."
      ]
    },
    "funFact": {
      "en": "Its babies live in clean streams, so finding them means the water is healthy!",
      "es": "Sus crías viven en quebradas limpias: ¡encontrarlas significa que el agua está sana!"
    },
    "wiki": "Corydalus_luteus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/270209084/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/270209084/large.jpeg",
      "author": "Christina S. Baer",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/270209084",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "scalloped-hammerhead",
    "group": "sea",
    "emoji": "🦈",
    "scientific": "Sphyrna lewini",
    "status": "CR",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Scalloped Hammerhead Shark",
      "es": "Tiburón Martillo Común"
    },
    "summary": {
      "en": "A shark with a wide, hammer-shaped head. Around Cocos Island, hundreds of them swim together in huge schools.",
      "es": "Un tiburón con la cabeza ancha en forma de martillo. Alrededor de la Isla del Coco, cientos de ellos nadan juntos en enormes cardúmenes."
    },
    "where": {
      "en": "Cocos Island and the open Pacific. Young sharks grow up in calm bays like Golfo Dulce.",
      "es": "La Isla del Coco y el océano Pacífico abierto. Las crías crecen en bahías tranquilas como el Golfo Dulce."
    },
    "threats": {
      "en": "Fishing for their fins and getting caught by accident in fishing lines and nets.",
      "es": "La pesca para quitarles las aletas y quedar atrapados por accidente en líneas y redes de pesca."
    },
    "help": {
      "en": [
        "Never buy shark fin soup or shark products.",
        "Choose seafood from responsible fisheries.",
        "Support marine protected areas like Cocos Island."
      ],
      "es": [
        "Nunca compres sopa de aleta de tiburón ni productos de tiburón.",
        "Escoge mariscos de pesca responsable.",
        "Apoya las áreas marinas protegidas como la Isla del Coco."
      ]
    },
    "funFact": {
      "en": "Its wide head works like a metal detector: it senses the tiny electric signals of animals hiding in the sand.",
      "es": "Su cabeza ancha funciona como un detector de metales: siente las pequeñas señales eléctricas de los animales escondidos en la arena."
    },
    "wiki": "Scalloped_hammerhead",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/426052125/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/426052125/large.jpeg",
      "author": "mikazilla",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/426052125",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "great-hammerhead",
    "group": "sea",
    "emoji": "🦈",
    "scientific": "Sphyrna mokarran",
    "status": "CR",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Great Hammerhead Shark",
      "es": "Gran Tiburón Martillo"
    },
    "summary": {
      "en": "The biggest of all hammerhead sharks. It can grow up to about 6 m long and has a tall, curved back fin.",
      "es": "El más grande de todos los tiburones martillo. Puede medir hasta unos 6 m de largo y tiene una aleta dorsal alta y curva."
    },
    "where": {
      "en": "Warm coasts and open sea on both the Caribbean and Pacific sides of Costa Rica, but it is rare.",
      "es": "Costas cálidas y mar abierto, tanto en el Caribe como en el Pacífico de Costa Rica, pero es raro."
    },
    "threats": {
      "en": "Fishing for its fins, and being caught by accident. It gets stressed easily and often dies even if it is released.",
      "es": "La pesca para quitarle las aletas y quedar atrapado por accidente. Se estresa fácilmente y muchas veces muere aunque lo liberen."
    },
    "help": {
      "en": [
        "Never buy shark fin soup or shark products.",
        "Choose seafood from responsible fisheries.",
        "Support marine protected areas like Cocos Island."
      ],
      "es": [
        "Nunca compres sopa de aleta de tiburón ni productos de tiburón.",
        "Escoge mariscos de pesca responsable.",
        "Apoya las áreas marinas protegidas como la Isla del Coco."
      ]
    },
    "funFact": {
      "en": "Its favorite food is stingrays. It uses its hammer-shaped head to pin them down on the sea floor!",
      "es": "Su comida favorita son las rayas. ¡Usa su cabeza de martillo para sujetarlas contra el fondo del mar!"
    },
    "wiki": "Great_hammerhead",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/353767237/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/353767237/large.jpg",
      "author": "Robin White",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/353767237",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "oceanic-whitetip",
    "group": "sea",
    "emoji": "🦈",
    "scientific": "Carcharhinus longimanus",
    "status": "CR",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Oceanic Whitetip Shark",
      "es": "Tiburón Punta Blanca Oceánico"
    },
    "summary": {
      "en": "A shark of the deep blue open ocean, with very long, rounded fins that have white tips.",
      "es": "Un tiburón del océano abierto y profundo, con aletas muy largas y redondeadas que tienen las puntas blancas."
    },
    "where": {
      "en": "Far from shore, in the open Pacific and Caribbean waters around Costa Rica.",
      "es": "Lejos de la costa, en mar abierto del Pacífico y el Caribe alrededor de Costa Rica."
    },
    "threats": {
      "en": "Its big fins are wanted for shark fin soup, and many are caught by tuna fishing boats. It has disappeared from much of the ocean.",
      "es": "Sus aletas grandes son muy buscadas para la sopa de aleta de tiburón, y muchos caen en barcos que pescan atún. Ha desaparecido de gran parte del océano."
    },
    "help": {
      "en": [
        "Never buy shark fin soup or shark products.",
        "Choose seafood from responsible fisheries.",
        "Support marine protected areas like Cocos Island."
      ],
      "es": [
        "Nunca compres sopa de aleta de tiburón ni productos de tiburón.",
        "Escoge mariscos de pesca responsable.",
        "Apoya las áreas marinas protegidas como la Isla del Coco."
      ]
    },
    "funFact": {
      "en": "It often swims along with pilot whales, maybe because the whales help it find squid to eat.",
      "es": "A menudo nada junto a ballenas piloto, tal vez porque las ballenas le ayudan a encontrar calamares para comer."
    },
    "wiki": "Oceanic_whitetip_shark",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/334402814/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/334402814/large.jpg",
      "author": "Daniel Benák",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/334402814",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "whale-shark",
    "group": "sea",
    "emoji": "🦈",
    "scientific": "Rhincodon typus",
    "status": "EN",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Whale Shark",
      "es": "Tiburón Ballena"
    },
    "summary": {
      "en": "The biggest fish in the world. It can be longer than a school bus, but it eats tiny plankton and is gentle with divers.",
      "es": "El pez más grande del mundo. Puede ser más largo que un bus escolar, pero come plancton diminuto y es tranquilo con los buzos."
    },
    "where": {
      "en": "Open Pacific waters, Cocos Island, Caño Island and the Gulf of Papagayo.",
      "es": "Aguas abiertas del Pacífico, la Isla del Coco, la Isla del Caño y el Golfo de Papagayo."
    },
    "threats": {
      "en": "Being hit by boats, caught in fishing nets, and hunted in some countries.",
      "es": "Los choques con barcos, quedar atrapado en redes de pesca y la cacería en algunos países."
    },
    "help": {
      "en": [
        "Never touch or ride a whale shark when you swim near one.",
        "Ask boat captains to go slowly where whale sharks live.",
        "Choose seafood from responsible fisheries."
      ],
      "es": [
        "Nunca toques ni te montes en un tiburón ballena si nadas cerca de uno.",
        "Pide a los capitanes que vayan despacio donde viven tiburones ballena.",
        "Escoge mariscos de pesca responsable."
      ]
    },
    "funFact": {
      "en": "Every whale shark has its own pattern of white spots, like a fingerprint. Scientists use photos of the spots to tell them apart!",
      "es": "Cada tiburón ballena tiene su propio dibujo de manchas blancas, como una huella digital. ¡Los científicos usan fotos de las manchas para reconocerlos!"
    },
    "wiki": "Whale_shark",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/90242284/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/90242284/large.jpg",
      "author": "Shaunak Modi",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/90242284",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "pelagic-thresher",
    "group": "sea",
    "emoji": "🦈",
    "scientific": "Alopias pelagicus",
    "status": "EN",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Pelagic Thresher Shark",
      "es": "Tiburón Zorro Pelágico"
    },
    "summary": {
      "en": "A shark whose tail fin is almost as long as the rest of its body. It uses it like a whip to stun small fish.",
      "es": "Un tiburón con la aleta de la cola casi tan larga como el resto de su cuerpo. La usa como un látigo para aturdir peces pequeños."
    },
    "where": {
      "en": "The open Pacific Ocean and the waters around Cocos Island.",
      "es": "El océano Pacífico abierto y las aguas alrededor de la Isla del Coco."
    },
    "threats": {
      "en": "Too much fishing. It has very few babies, so its numbers recover very slowly.",
      "es": "La pesca excesiva. Tiene muy pocas crías, así que su población se recupera muy despacio."
    },
    "help": {
      "en": [
        "Never buy shark fin soup or shark products.",
        "Choose seafood from responsible fisheries.",
        "Support marine protected areas like Cocos Island."
      ],
      "es": [
        "Nunca compres sopa de aleta de tiburón ni productos de tiburón.",
        "Escoge mariscos de pesca responsable.",
        "Apoya las áreas marinas protegidas como la Isla del Coco."
      ]
    },
    "funFact": {
      "en": "It slaps its tail so fast that it can stun several fish at once, then it turns around and eats them.",
      "es": "Golpea con la cola tan rápido que puede aturdir varios peces a la vez, y luego se da la vuelta para comérselos."
    },
    "wiki": "Pelagic_thresher",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/18597692/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/18597692/large.jpeg",
      "author": "cstobie",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/18597692",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "pacific-nurse-shark",
    "group": "sea",
    "emoji": "🦈",
    "scientific": "Ginglymostoma unami",
    "status": "EN",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Pacific Nurse Shark",
      "es": "Tiburón Gata del Pacífico"
    },
    "summary": {
      "en": "A slow, calm shark that rests on the sandy sea floor during the day and hunts at night. Scientists only named it as a new species in 2015.",
      "es": "Un tiburón lento y tranquilo que descansa en el fondo arenoso durante el día y caza de noche. Los científicos lo nombraron como especie nueva apenas en 2015."
    },
    "where": {
      "en": "Rocky reefs and sandy bays of the Pacific coast, like the dive sites near Playa del Coco in Guanacaste.",
      "es": "Arrecifes rocosos y bahías arenosas de la costa del Pacífico, como los sitios de buceo cerca de Playa del Coco en Guanacaste."
    },
    "threats": {
      "en": "Fishing nets and lines near the coast. It has disappeared from many places where it used to be common.",
      "es": "Las redes y líneas de pesca cerca de la costa. Ha desaparecido de muchos lugares donde antes era común."
    },
    "help": {
      "en": [
        "Never buy shark fin soup or shark products.",
        "Choose seafood from responsible fisheries.",
        "Support marine protected areas like Cocos Island."
      ],
      "es": [
        "Nunca compres sopa de aleta de tiburón ni productos de tiburón.",
        "Escoge mariscos de pesca responsable.",
        "Apoya las áreas marinas protegidas como la Isla del Coco."
      ]
    },
    "funFact": {
      "en": "The marine parks of Costa Rica and Panama may be one of the last safe places for this shark.",
      "es": "Los parques marinos de Costa Rica y Panamá podrían ser uno de los últimos lugares seguros para este tiburón."
    },
    "wiki": "Pacific_nurse_shark",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/595155982/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/595155982/large.jpg",
      "author": "Toby Rowland",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/595155982",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "bull-shark",
    "group": "sea",
    "emoji": "🦈",
    "scientific": "Carcharhinus leucas",
    "status": "VU",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Bull Shark",
      "es": "Tiburón Toro"
    },
    "summary": {
      "en": "A strong, heavy shark that can live in both salt water and fresh water. It can even swim far up rivers!",
      "es": "Un tiburón fuerte y robusto que puede vivir en agua salada y en agua dulce. ¡Hasta puede nadar río arriba!"
    },
    "where": {
      "en": "Both coasts. The Bat Islands in Guanacaste are famous for big bull sharks, and some swim up the San Juan River.",
      "es": "Ambas costas. Las Islas Murciélago en Guanacaste son famosas por sus grandes tiburones toro, y algunos suben por el río San Juan."
    },
    "threats": {
      "en": "Fishing, and the loss of river mouths and mangroves where young sharks grow up.",
      "es": "La pesca y la pérdida de las desembocaduras de los ríos y los manglares donde crecen las crías."
    },
    "help": {
      "en": [
        "Never buy shark fin soup or shark products.",
        "Choose seafood from responsible fisheries.",
        "Support marine protected areas like Cocos Island."
      ],
      "es": [
        "Nunca compres sopa de aleta de tiburón ni productos de tiburón.",
        "Escoge mariscos de pesca responsable.",
        "Apoya las áreas marinas protegidas como la Isla del Coco."
      ]
    },
    "funFact": {
      "en": "Its body can control how much salt it keeps inside, which lets it travel from the sea into lakes and rivers.",
      "es": "Su cuerpo puede controlar cuánta sal guarda adentro, y eso le permite viajar del mar a lagos y ríos."
    },
    "wiki": "Bull_shark",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/243409228/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/243409228/large.jpg",
      "author": "Daniel Benák",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/243409228",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "silky-shark",
    "group": "sea",
    "emoji": "🦈",
    "scientific": "Carcharhinus falciformis",
    "status": "VU",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Silky Shark",
      "es": "Tiburón Sedoso"
    },
    "summary": {
      "en": "A sleek open-ocean shark named for its skin, which feels smooth like silk.",
      "es": "Un tiburón esbelto de mar abierto, llamado así por su piel, que se siente suave como la seda."
    },
    "where": {
      "en": "The open Pacific, especially around Cocos Island and floating objects far from shore.",
      "es": "El Pacífico abierto, sobre todo alrededor de la Isla del Coco y de objetos que flotan lejos de la costa."
    },
    "threats": {
      "en": "Many are caught by accident by boats fishing for tuna, and others are caught for their fins.",
      "es": "Muchos caen por accidente en barcos que pescan atún, y otros son pescados por sus aletas."
    },
    "help": {
      "en": [
        "Never buy shark fin soup or shark products.",
        "Choose seafood from responsible fisheries.",
        "Support marine protected areas like Cocos Island."
      ],
      "es": [
        "Nunca compres sopa de aleta de tiburón ni productos de tiburón.",
        "Escoge mariscos de pesca responsable.",
        "Apoya las áreas marinas protegidas como la Isla del Coco."
      ]
    },
    "funFact": {
      "en": "Shark skin is covered with tiny tooth-like scales. The silky shark's are so small that its skin feels smooth.",
      "es": "La piel de los tiburones está cubierta de escamas diminutas parecidas a dientes. Las del tiburón sedoso son tan pequeñas que su piel se siente lisa."
    },
    "wiki": "Silky_shark",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/170832075/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/170832075/large.jpeg",
      "author": "José Francisco Colorado-Dapa",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/170832075",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "whitetip-reef-shark",
    "group": "sea",
    "emoji": "🦈",
    "scientific": "Triaenodon obesus",
    "status": "VU",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Whitetip Reef Shark",
      "es": "Tiburón Punta Blanca de Arrecife"
    },
    "summary": {
      "en": "A slim reef shark with white tips on its fins. During the day it often rests in caves, and at night it hunts in groups.",
      "es": "Un tiburón de arrecife delgado con las puntas de las aletas blancas. De día suele descansar en cuevas y de noche caza en grupo."
    },
    "where": {
      "en": "Rocky reefs at Cocos Island and Caño Island.",
      "es": "Arrecifes rocosos de la Isla del Coco y la Isla del Caño."
    },
    "threats": {
      "en": "Fishing on reefs. It stays close to home, so a reef can lose all its sharks if fishing isn't controlled.",
      "es": "La pesca en los arrecifes. Se queda cerca de su casa, así que un arrecife puede perder todos sus tiburones si la pesca no se controla."
    },
    "help": {
      "en": [
        "Never buy shark fin soup or shark products.",
        "Choose seafood from responsible fisheries.",
        "Support marine protected areas like Cocos Island."
      ],
      "es": [
        "Nunca compres sopa de aleta de tiburón ni productos de tiburón.",
        "Escoge mariscos de pesca responsable.",
        "Apoya las áreas marinas protegidas como la Isla del Coco."
      ]
    },
    "funFact": {
      "en": "Unlike many sharks, it can lie still on the bottom and pump water over its gills to breathe.",
      "es": "A diferencia de muchos tiburones, puede quedarse quieto en el fondo y bombear agua por sus branquias para respirar."
    },
    "wiki": "Whitetip_reef_shark",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/311107122/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/311107122/large.jpeg",
      "author": "Ben Jobson",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/311107122",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "tiger-shark",
    "group": "sea",
    "emoji": "🦈",
    "scientific": "Galeocerdo cuvier",
    "status": "NT",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Tiger Shark",
      "es": "Tiburón Tigre"
    },
    "summary": {
      "en": "A big shark with dark stripes on its sides, like a tiger. The stripes fade as it grows older.",
      "es": "Un tiburón grande con rayas oscuras en los costados, como un tigre. Las rayas se desvanecen a medida que envejece."
    },
    "where": {
      "en": "Warm waters on both coasts, and around Cocos Island.",
      "es": "Aguas cálidas en ambas costas y alrededor de la Isla del Coco."
    },
    "threats": {
      "en": "Fishing for its fins, liver oil and meat.",
      "es": "La pesca por sus aletas, el aceite de su hígado y su carne."
    },
    "help": {
      "en": [
        "Never buy shark fin soup or shark products.",
        "Choose seafood from responsible fisheries.",
        "Support marine protected areas like Cocos Island."
      ],
      "es": [
        "Nunca compres sopa de aleta de tiburón ni productos de tiburón.",
        "Escoge mariscos de pesca responsable.",
        "Apoya las áreas marinas protegidas como la Isla del Coco."
      ]
    },
    "funFact": {
      "en": "It eats almost anything: fish, sea turtles, birds, and sometimes even trash. Its teeth can cut through turtle shells!",
      "es": "Come casi de todo: peces, tortugas marinas, aves, y a veces hasta basura. ¡Sus dientes pueden cortar caparazones de tortuga!"
    },
    "wiki": "Tiger_shark",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/587546933/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/587546933/large.jpg",
      "author": "Jay Brasher",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/587546933",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "giant-manta-ray",
    "group": "sea",
    "emoji": "🛸",
    "scientific": "Mobula birostris",
    "status": "EN",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Giant Oceanic Manta Ray",
      "es": "Mantarraya Gigante"
    },
    "summary": {
      "en": "The biggest ray in the world. Its 'wings' can be up to about 7 m (23 ft) wide, and it eats tiny plankton.",
      "es": "La raya más grande del mundo. Sus 'alas' pueden medir hasta unos 7 m de ancho, y come plancton diminuto."
    },
    "where": {
      "en": "The open Pacific, Cocos Island and the Bat Islands in Guanacaste.",
      "es": "El Pacífico abierto, la Isla del Coco y las Islas Murciélago en Guanacaste."
    },
    "threats": {
      "en": "Fishing nets, and people who catch them for their gill plates, which are sold in some countries.",
      "es": "Las redes de pesca y la gente que las captura por sus branquias, que se venden en algunos países."
    },
    "help": {
      "en": [
        "Never touch a manta: it can damage the slime that protects its skin.",
        "Choose seafood from responsible fisheries.",
        "Support marine protected areas."
      ],
      "es": [
        "Nunca toques una manta: puedes dañar la baba que protege su piel.",
        "Escoge mariscos de pesca responsable.",
        "Apoya las áreas marinas protegidas."
      ]
    },
    "funFact": {
      "en": "Mantas have one of the biggest brains of any fish, and they visit 'cleaning stations' where small fish clean their skin.",
      "es": "Las mantas tienen uno de los cerebros más grandes de todos los peces, y visitan 'estaciones de limpieza' donde pececitos les limpian la piel."
    },
    "wiki": "Giant_oceanic_manta_ray",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/594917798/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/594917798/large.jpg",
      "author": "Victor E. Chocho",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/594917798",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "spotted-eagle-ray",
    "group": "sea",
    "emoji": "🛸",
    "scientific": "Aetobatus narinari",
    "status": "EN",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Spotted Eagle Ray",
      "es": "Raya Águila Moteada"
    },
    "summary": {
      "en": "A graceful ray with a dark back covered in bright white spots. It 'flies' through the water like an eagle.",
      "es": "Una raya elegante con la espalda oscura llena de manchas blancas brillantes. 'Vuela' por el agua como un águila."
    },
    "where": {
      "en": "Reefs and sandy shallows of the Caribbean coast. A very close cousin lives on the Pacific side.",
      "es": "Arrecifes y bajos arenosos de la costa del Caribe. Una prima muy cercana vive en el lado del Pacífico."
    },
    "threats": {
      "en": "Fishing nets and lines, and fishing for its meat.",
      "es": "Las redes y líneas de pesca, y la pesca por su carne."
    },
    "help": {
      "en": [
        "Shuffle your feet when you walk in shallow water, so rays can swim away safely.",
        "Choose seafood from responsible fisheries.",
        "Support marine protected areas."
      ],
      "es": [
        "Arrastra los pies al caminar en aguas poco profundas, para que las rayas se alejen sin peligro.",
        "Escoge mariscos de pesca responsable.",
        "Apoya las áreas marinas protegidas."
      ]
    },
    "funFact": {
      "en": "It has flat teeth like a nutcracker that crush clams and snails, and it digs for them with its duck-like snout.",
      "es": "Tiene dientes planos como un cascanueces que trituran almejas y caracoles, y los busca escarbando con su hocico de pato."
    },
    "wiki": "Spotted_eagle_ray",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/490576649/medium.png",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/490576649/large.png",
      "author": "Robbie",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/490576649",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "munks-devil-ray",
    "group": "sea",
    "emoji": "🛸",
    "scientific": "Mobula munkiana",
    "status": "VU",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Munk's Devil Ray",
      "es": "Manta Diablo de Munk"
    },
    "summary": {
      "en": "A small manta-like ray that leaps high out of the water and lands with a big belly-flop!",
      "es": "Una raya pequeña parecida a una manta que salta muy alto fuera del agua y cae con un gran panzazo."
    },
    "where": {
      "en": "The Pacific coast, especially the Gulf of Papagayo, where big groups gather.",
      "es": "La costa del Pacífico, sobre todo el Golfo de Papagayo, donde se juntan grandes grupos."
    },
    "threats": {
      "en": "Being caught in fishing nets, especially near the coast.",
      "es": "Quedar atrapada en redes de pesca, sobre todo cerca de la costa."
    },
    "help": {
      "en": [
        "Shuffle your feet when you walk in shallow water, so rays can swim away safely.",
        "Choose seafood from responsible fisheries.",
        "Support marine protected areas."
      ],
      "es": [
        "Arrastra los pies al caminar en aguas poco profundas, para que las rayas se alejen sin peligro.",
        "Escoge mariscos de pesca responsable.",
        "Apoya las áreas marinas protegidas."
      ]
    },
    "funFact": {
      "en": "Nobody knows for sure why they jump. It could be to talk to each other, to impress mates, or to shake off parasites.",
      "es": "Nadie sabe con seguridad por qué saltan. Puede ser para comunicarse, para impresionar a su pareja o para quitarse parásitos."
    },
    "wiki": "Munk's_devil_ray",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/619672463/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/619672463/large.jpg",
      "author": "Carter Dorscht",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/619672463",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "pacific-chupare",
    "group": "sea",
    "emoji": "🛸",
    "scientific": "Styracura pacifica",
    "status": "VU",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Pacific Chupare Stingray",
      "es": "Chupare del Pacífico"
    },
    "summary": {
      "en": "A large, round stingray of shallow Pacific waters, with a long tail that has a venomous spine.",
      "es": "Una raya grande y redonda de aguas poco profundas del Pacífico, con una cola larga que tiene una espina venenosa."
    },
    "where": {
      "en": "Soft, sandy and muddy bottoms in shallow water along the Pacific coast and at Cocos Island.",
      "es": "Fondos suaves de arena y lodo en aguas poco profundas de la costa del Pacífico y la Isla del Coco."
    },
    "threats": {
      "en": "Fishing nets near the coast, and damage to shallow coastal habitats.",
      "es": "Las redes de pesca cerca de la costa y el daño a los hábitats costeros poco profundos."
    },
    "help": {
      "en": [
        "Shuffle your feet when you walk in shallow water, so rays can swim away safely.",
        "Choose seafood from responsible fisheries.",
        "Support marine protected areas."
      ],
      "es": [
        "Arrastra los pies al caminar en aguas poco profundas, para que las rayas se alejen sin peligro.",
        "Escoge mariscos de pesca responsable.",
        "Apoya las áreas marinas protegidas."
      ]
    },
    "funFact": {
      "en": "Its closest relatives are river stingrays from South America, even though it lives in the sea!",
      "es": "¡Sus parientes más cercanos son las rayas de río de Sudamérica, aunque ella vive en el mar!"
    },
    "wiki": "Styracura_pacifica",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/462049443/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/462049443/large.jpg",
      "author": "I. Matthew Acton",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/462049443",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "marble-ray",
    "group": "sea",
    "emoji": "🛸",
    "scientific": "Taeniurops meyeni",
    "status": "VU",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Marble Ray",
      "es": "Raya Marmoleada"
    },
    "summary": {
      "en": "A huge, round stingray with a dark marbled pattern that blends into rocky reefs. It can be more than 1.5 m wide.",
      "es": "Una raya enorme y redonda con un dibujo oscuro como de mármol que se camufla en los arrecifes rocosos. Puede medir más de 1,5 m de ancho."
    },
    "where": {
      "en": "Around Cocos Island, where divers often see it resting on the sand.",
      "es": "Alrededor de la Isla del Coco, donde los buzos la ven a menudo descansando en la arena."
    },
    "threats": {
      "en": "Fishing for big rays in many parts of the world.",
      "es": "La pesca de rayas grandes en muchas partes del mundo."
    },
    "help": {
      "en": [
        "Shuffle your feet when you walk in shallow water, so rays can swim away safely.",
        "Choose seafood from responsible fisheries.",
        "Support marine protected areas."
      ],
      "es": [
        "Arrastra los pies al caminar en aguas poco profundas, para que las rayas se alejen sin peligro.",
        "Escoge mariscos de pesca responsable.",
        "Apoya las áreas marinas protegidas."
      ]
    },
    "funFact": {
      "en": "Scientists think the marble rays of Cocos and the Galápagos might actually be a separate, still unnamed species!",
      "es": "¡Los científicos creen que las rayas marmoleadas del Coco y Galápagos podrían ser una especie distinta que todavía no tiene nombre!"
    },
    "wiki": "Taeniurops_meyeni",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/58204765/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/58204765/large.jpeg",
      "author": "fede2cr",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/58204765",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "southern-stingray",
    "group": "sea",
    "emoji": "🛸",
    "scientific": "Hypanus americanus",
    "status": "NT",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Southern Stingray",
      "es": "Raya Látigo Americana"
    },
    "summary": {
      "en": "A diamond-shaped stingray that buries itself in the sand of the Caribbean shallows, with only its eyes peeking out.",
      "es": "Una raya con forma de diamante que se entierra en la arena de las aguas poco profundas del Caribe, dejando solo los ojos afuera."
    },
    "where": {
      "en": "Sandy bottoms and seagrass near reefs on the Caribbean coast, like Cahuita.",
      "es": "Fondos arenosos y pastos marinos cerca de los arrecifes del Caribe, como en Cahuita."
    },
    "threats": {
      "en": "Fishing nets and too much fishing near the coast.",
      "es": "Las redes de pesca y la pesca excesiva cerca de la costa."
    },
    "help": {
      "en": [
        "Shuffle your feet when you walk in shallow water, so rays can swim away safely.",
        "Choose seafood from responsible fisheries.",
        "Support marine protected areas."
      ],
      "es": [
        "Arrastra los pies al caminar en aguas poco profundas, para que las rayas se alejen sin peligro.",
        "Escoge mariscos de pesca responsable.",
        "Apoya las áreas marinas protegidas."
      ]
    },
    "funFact": {
      "en": "To find hidden clams and worms, it blows jets of water into the sand to uncover them.",
      "es": "Para encontrar almejas y gusanos escondidos, sopla chorros de agua en la arena para destaparlos."
    },
    "wiki": "Southern_stingray",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/174694329/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/174694329/large.jpeg",
      "author": "er-birds",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/174694329",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "goliath-grouper",
    "group": "sea",
    "emoji": "🐟",
    "scientific": "Epinephelus itajara",
    "status": "VU",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Goliath Grouper",
      "es": "Mero Guasa"
    },
    "summary": {
      "en": "A giant reef fish that can grow to about 2.5 m long and weigh around 360 kg (800 pounds).",
      "es": "Un pez gigante de arrecife que puede medir unos 2,5 m de largo y pesar cerca de 360 kg."
    },
    "where": {
      "en": "Reefs, shipwrecks and mangroves of the Caribbean coast. Young ones grow up in mangroves.",
      "es": "Arrecifes, barcos hundidos y manglares de la costa del Caribe. Los jóvenes crecen en los manglares."
    },
    "threats": {
      "en": "It is big, slow and curious, so it was easy to overfish. Cutting mangroves also takes away its nurseries.",
      "es": "Es grande, lento y curioso, así que fue fácil pescarlo de más. La tala de manglares también le quita sus criaderos."
    },
    "help": {
      "en": [
        "Choose seafood from responsible fisheries, and never eat undersized fish.",
        "Practice catch-and-release when you go sportfishing.",
        "Keep plastic and trash out of the ocean."
      ],
      "es": [
        "Escoge mariscos de pesca responsable y nunca comas peces demasiado pequeños.",
        "Practica la pesca de captura y liberación cuando vayas a pescar.",
        "No dejes que el plástico ni la basura lleguen al mar."
      ]
    },
    "funFact": {
      "en": "It makes loud 'BOOM' sounds with its swim bladder that divers can feel in their chest!",
      "es": "¡Hace fuertes sonidos de 'BUM' con su vejiga natatoria que los buzos pueden sentir en el pecho!"
    },
    "wiki": "Atlantic_goliath_grouper",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/562934054/square.gif",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/562934054/square.gif",
      "author": "schneepschnorp",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/562934054",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "pacific-seahorse",
    "group": "sea",
    "emoji": "🐠",
    "scientific": "Hippocampus ingens",
    "status": "VU",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Pacific Seahorse",
      "es": "Caballito de Mar del Pacífico"
    },
    "summary": {
      "en": "One of the largest seahorses, up to about 30 cm long. It uses its curly tail to hold on to coral and sea fans.",
      "es": "Uno de los caballitos de mar más grandes, de hasta unos 30 cm. Usa su cola enrollada para sujetarse a corales y abanicos de mar."
    },
    "where": {
      "en": "Rocky reefs, sea fans and seaweed along the Pacific coast.",
      "es": "Arrecifes rocosos, abanicos de mar y algas de la costa del Pacífico."
    },
    "threats": {
      "en": "Shrimp nets that catch them by accident, and being sold dried for traditional medicine and souvenirs.",
      "es": "Las redes de camarón que los atrapan por accidente, y la venta de caballitos secos para medicina tradicional y recuerdos."
    },
    "help": {
      "en": [
        "Never buy dried seahorses or seahorse souvenirs.",
        "Choose shrimp from responsible fisheries.",
        "Never touch seahorses when you snorkel."
      ],
      "es": [
        "Nunca compres caballitos de mar secos ni recuerdos hechos con ellos.",
        "Escoge camarón de pesca responsable.",
        "Nunca toques caballitos de mar cuando hagas snorkel."
      ]
    },
    "funFact": {
      "en": "The dad seahorse carries the eggs in a pouch on his belly, and he gives birth to the babies!",
      "es": "¡El papá caballito de mar lleva los huevos en una bolsa en la panza y es él quien da a luz a las crías!"
    },
    "wiki": "Pacific_seahorse",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/625896004/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/625896004/large.jpg",
      "author": "Eric Klug",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/625896004",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "blue-marlin",
    "group": "sea",
    "emoji": "🐟",
    "scientific": "Makaira nigricans",
    "status": "VU",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Blue Marlin",
      "es": "Marlín Azul"
    },
    "summary": {
      "en": "A huge, super fast ocean fish with a long, spear-like bill. Females can grow much bigger than males.",
      "es": "Un pez enorme y súper rápido del océano, con un pico largo como una lanza. Las hembras pueden crecer mucho más que los machos."
    },
    "where": {
      "en": "Deep blue water far offshore in the Pacific and Caribbean.",
      "es": "Aguas azules y profundas lejos de la costa en el Pacífico y el Caribe."
    },
    "threats": {
      "en": "Being caught by long fishing lines set for tuna and swordfish.",
      "es": "Quedar atrapado en largas líneas de pesca puestas para atún y pez espada."
    },
    "help": {
      "en": [
        "Choose seafood from responsible fisheries, and never eat undersized fish.",
        "Practice catch-and-release when you go sportfishing.",
        "Keep plastic and trash out of the ocean."
      ],
      "es": [
        "Escoge mariscos de pesca responsable y nunca comas peces demasiado pequeños.",
        "Practica la pesca de captura y liberación cuando vayas a pescar.",
        "No dejes que el plástico ni la basura lleguen al mar."
      ]
    },
    "funFact": {
      "en": "It slashes through schools of fish with its bill to stun them before eating. Some marlins weigh more than 600 kg!",
      "es": "Atraviesa los cardúmenes golpeando con su pico para aturdir a los peces antes de comerlos. ¡Algunos marlines pesan más de 600 kg!"
    },
    "wiki": "Atlantic_blue_marlin",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/349147818/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/349147818/large.jpeg",
      "author": "Robin Fokker",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/349147818",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "cocos-barnacle-blenny",
    "group": "sea",
    "emoji": "🐟",
    "scientific": "Acanthemblemaria atrata",
    "status": "VU",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Cocos Island Barnacle Blenny",
      "es": "Trambollo de Percebe del Coco"
    },
    "summary": {
      "en": "A tiny fish, only about 3 cm long, that lives inside empty barnacle shells. It lives only around Cocos Island.",
      "es": "Un pez diminuto, de solo unos 3 cm, que vive dentro de conchas vacías de percebes. Solo vive alrededor de la Isla del Coco."
    },
    "where": {
      "en": "Rocky reefs around Cocos Island, from shallow water down to about 30 m, and nowhere else on Earth.",
      "es": "Arrecifes rocosos alrededor de la Isla del Coco, desde aguas poco profundas hasta unos 30 m, y en ningún otro lugar del mundo."
    },
    "threats": {
      "en": "Because it lives in only one small place, warmer seas from El Niño or damage to its reefs could hurt the whole species.",
      "es": "Como vive en un solo lugar pequeño, los mares más calientes de El Niño o el daño a sus arrecifes podrían afectar a toda la especie."
    },
    "help": {
      "en": [
        "Never touch or stand on coral when you snorkel or dive.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Never take shells, coral or animals from the reef."
      ],
      "es": [
        "Nunca toques ni te pares sobre el coral cuando hagas snorkel o buceo.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Nunca te lleves conchas, coral ni animales del arrecife."
      ]
    },
    "funFact": {
      "en": "The dad lays claim to a barnacle shell, and the mom lays her eggs on its walls. Then the dad guards them until they hatch.",
      "es": "El papá se adueña de una concha de percebe y la mamá pone los huevos en sus paredes. Luego el papá los cuida hasta que nacen."
    },
    "wiki": "Acanthemblemaria_atrata",
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Acanthemblemaria_atrata.jpg?width=500",
      "large": "https://commons.wikimedia.org/wiki/Special:FilePath/Acanthemblemaria_atrata.jpg?width=1024",
      "author": "D Ross Robertson",
      "license": "Public domain",
      "page": "https://commons.wikimedia.org/wiki/File:Acanthemblemaria_atrata.jpg",
      "source": "Wikimedia Commons",
      "cardOk": true
    }
  },
  {
    "id": "sailfish",
    "group": "sea",
    "emoji": "🐟",
    "scientific": "Istiophorus platypterus",
    "status": "LC",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Sailfish",
      "es": "Pez Vela"
    },
    "summary": {
      "en": "Famous for the giant, sail-like fin on its back and for being one of the fastest fish in the ocean.",
      "es": "Famoso por la enorme aleta en forma de vela en su espalda y por ser uno de los peces más rápidos del océano."
    },
    "where": {
      "en": "Warm waters of the Pacific coast, where it is the favorite fish of catch-and-release sportfishing.",
      "es": "Aguas cálidas de la costa del Pacífico, donde es el pez favorito de la pesca deportiva de captura y liberación."
    },
    "threats": {
      "en": "Being caught by commercial fishing boats. Studies show fewer sailfish in Costa Rica's Pacific in recent years.",
      "es": "Quedar atrapado en barcos de pesca comercial. Los estudios muestran menos peces vela en el Pacífico de Costa Rica en los últimos años."
    },
    "help": {
      "en": [
        "Choose seafood from responsible fisheries, and never eat undersized fish.",
        "Practice catch-and-release when you go sportfishing.",
        "Keep plastic and trash out of the ocean."
      ],
      "es": [
        "Escoge mariscos de pesca responsable y nunca comas peces demasiado pequeños.",
        "Practica la pesca de captura y liberación cuando vayas a pescar.",
        "No dejes que el plástico ni la basura lleguen al mar."
      ]
    },
    "funFact": {
      "en": "Sailfish hunt in teams. They raise their sails to herd sardines into a tight ball, then take turns slashing with their bills.",
      "es": "Los peces vela cazan en equipo. Levantan sus velas para arrear sardinas en una bola apretada y luego se turnan para golpear con el pico."
    },
    "wiki": "Sailfish",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/611278924/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/611278924/large.jpg",
      "author": "Kai Murphy",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/611278924",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "yellowfin-tuna",
    "group": "sea",
    "emoji": "🐟",
    "scientific": "Thunnus albacares",
    "status": "LC",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Yellowfin Tuna",
      "es": "Atún Aleta Amarilla"
    },
    "summary": {
      "en": "A torpedo-shaped fish with bright yellow fins that travels the ocean in fast schools.",
      "es": "Un pez con forma de torpedo y aletas amarillo brillante que recorre el océano en cardúmenes veloces."
    },
    "where": {
      "en": "The open Pacific Ocean, including the waters around Cocos Island.",
      "es": "El océano Pacífico abierto, incluidas las aguas alrededor de la Isla del Coco."
    },
    "threats": {
      "en": "It is one of the most fished fish in the world, so fishing must be carefully controlled.",
      "es": "Es uno de los peces más pescados del mundo, así que la pesca debe controlarse con cuidado."
    },
    "help": {
      "en": [
        "Choose seafood from responsible fisheries, and never eat undersized fish.",
        "Practice catch-and-release when you go sportfishing.",
        "Keep plastic and trash out of the ocean."
      ],
      "es": [
        "Escoge mariscos de pesca responsable y nunca comas peces demasiado pequeños.",
        "Practica la pesca de captura y liberación cuando vayas a pescar.",
        "No dejes que el plástico ni la basura lleguen al mar."
      ]
    },
    "funFact": {
      "en": "In the eastern Pacific, yellowfin tuna often swim together with dolphins.",
      "es": "En el Pacífico oriental, el atún aleta amarilla suele nadar junto con delfines."
    },
    "wiki": "Yellowfin_tuna",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/62043094/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/62043094/large.jpg",
      "author": "Michel Frisch",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/62043094",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "mahi-mahi",
    "group": "sea",
    "emoji": "🐟",
    "scientific": "Coryphaena hippurus",
    "status": "LC",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Mahi-Mahi",
      "es": "Dorado"
    },
    "summary": {
      "en": "A dazzling fish with neon blue, green and gold colors. Its name in Spanish, 'dorado', means golden.",
      "es": "Un pez deslumbrante de colores neón azul, verde y dorado. Por eso en español se llama 'dorado'."
    },
    "where": {
      "en": "Warm open waters of both coasts, often near floating logs and seaweed.",
      "es": "Aguas cálidas y abiertas de ambas costas, a menudo cerca de troncos y algas flotantes."
    },
    "threats": {
      "en": "Lots of fishing, though it grows so fast that its numbers can recover quickly.",
      "es": "Mucha pesca, aunque crece tan rápido que su población se puede recuperar pronto."
    },
    "help": {
      "en": [
        "Choose seafood from responsible fisheries, and never eat undersized fish.",
        "Practice catch-and-release when you go sportfishing.",
        "Keep plastic and trash out of the ocean."
      ],
      "es": [
        "Escoge mariscos de pesca responsable y nunca comas peces demasiado pequeños.",
        "Practica la pesca de captura y liberación cuando vayas a pescar.",
        "No dejes que el plástico ni la basura lleguen al mar."
      ]
    },
    "funFact": {
      "en": "It can change color in seconds, and the males have a tall, square forehead.",
      "es": "Puede cambiar de color en segundos, y los machos tienen la frente alta y cuadrada."
    },
    "wiki": "Mahi-mahi",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/237990889/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/237990889/large.jpeg",
      "author": "Attila Oláh",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/237990889",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "roosterfish",
    "group": "sea",
    "emoji": "🐟",
    "scientific": "Nematistius pectoralis",
    "status": "LC",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Roosterfish",
      "es": "Pez Gallo"
    },
    "summary": {
      "en": "A Pacific fish with seven long spines on its back that stand up just like a rooster's comb.",
      "es": "Un pez del Pacífico con siete espinas largas en la espalda que se paran igualito que la cresta de un gallo."
    },
    "where": {
      "en": "Sandy beaches and shallow waters of the Pacific coast.",
      "es": "Playas arenosas y aguas poco profundas de la costa del Pacífico."
    },
    "threats": {
      "en": "Fishing. It is popular with sport fishers, who usually release it.",
      "es": "La pesca. Es muy popular en la pesca deportiva, donde normalmente lo liberan."
    },
    "help": {
      "en": [
        "Choose seafood from responsible fisheries, and never eat undersized fish.",
        "Practice catch-and-release when you go sportfishing.",
        "Keep plastic and trash out of the ocean."
      ],
      "es": [
        "Escoge mariscos de pesca responsable y nunca comas peces demasiado pequeños.",
        "Practica la pesca de captura y liberación cuando vayas a pescar.",
        "No dejes que el plástico ni la basura lleguen al mar."
      ]
    },
    "funFact": {
      "en": "It is the only species in its whole family, and it lives only in the eastern Pacific Ocean.",
      "es": "Es la única especie de toda su familia, y solo vive en el océano Pacífico oriental."
    },
    "wiki": "Roosterfish",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/611277606/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/611277606/large.jpg",
      "author": "Kai Murphy",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/611277606",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "king-angelfish",
    "group": "sea",
    "emoji": "🐠",
    "scientific": "Holacanthus passer",
    "status": "LC",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "King Angelfish",
      "es": "Pez Ángel Rey"
    },
    "summary": {
      "en": "A bright blue reef fish with a bold white stripe on its side and a yellow tail.",
      "es": "Un pez de arrecife azul brillante con una franja blanca llamativa en el costado y la cola amarilla."
    },
    "where": {
      "en": "Rocky reefs of the Pacific coast, Caño Island and Cocos Island.",
      "es": "Arrecifes rocosos de la costa del Pacífico, la Isla del Caño y la Isla del Coco."
    },
    "threats": {
      "en": "Being collected for home aquariums, and damage to reefs.",
      "es": "La captura para acuarios caseros y el daño a los arrecifes."
    },
    "help": {
      "en": [
        "Never touch or stand on coral when you snorkel or dive.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Never take shells, coral or animals from the reef."
      ],
      "es": [
        "Nunca toques ni te pares sobre el coral cuando hagas snorkel o buceo.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Nunca te lleves conchas, coral ni animales del arrecife."
      ]
    },
    "funFact": {
      "en": "Babies look completely different: orange with thin blue stripes. They change colors as they grow up.",
      "es": "Las crías se ven totalmente distintas: anaranjadas con rayitas azules. Cambian de color al crecer."
    },
    "wiki": "King_angelfish",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/458750807/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/458750807/large.jpeg",
      "author": "Matt Berger",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/458750807",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "porcupine-pufferfish",
    "group": "sea",
    "emoji": "🐡",
    "scientific": "Diodon holocanthus",
    "status": "LC",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Porcupine Pufferfish",
      "es": "Pez Erizo"
    },
    "summary": {
      "en": "When it is scared, it gulps water and puffs up into a spiky balloon that predators can't swallow.",
      "es": "Cuando se asusta, traga agua y se infla como un globo lleno de espinas que los depredadores no pueden tragar."
    },
    "where": {
      "en": "Reefs and rocky areas on both coasts and at Cocos Island.",
      "es": "Arrecifes y zonas rocosas de ambas costas y de la Isla del Coco."
    },
    "threats": {
      "en": "Being caught and dried to sell as souvenirs, and damage to reefs.",
      "es": "La captura para secarlos y venderlos como recuerdos, y el daño a los arrecifes."
    },
    "help": {
      "en": [
        "Never buy dried pufferfish souvenirs.",
        "Never try to make a pufferfish puff up: it is very stressful for it.",
        "Keep plastic and trash out of the ocean."
      ],
      "es": [
        "Nunca compres peces erizo secos como recuerdo.",
        "Nunca intentes que un pez erizo se infle: le causa mucho estrés.",
        "No dejes que el plástico ni la basura lleguen al mar."
      ]
    },
    "funFact": {
      "en": "Its teeth are joined into a strong beak that cracks open snails and crabs.",
      "es": "Sus dientes están unidos en un pico fuerte que rompe caracoles y cangrejos."
    },
    "wiki": "Long-spine_porcupinefish",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/590275315/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/590275315/large.jpg",
      "author": "Uma Mezzanotte",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/590275315",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "rainbow-parrotfish",
    "group": "sea",
    "emoji": "🐠",
    "scientific": "Scarus guacamaia",
    "status": "NT",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Rainbow Parrotfish",
      "es": "Pez Loro Arcoíris"
    },
    "summary": {
      "en": "The biggest parrotfish in the Atlantic, with green, orange and bronze colors. It uses its beak-like teeth to scrape coral.",
      "es": "El pez loro más grande del Atlántico, de colores verde, anaranjado y bronce. Usa sus dientes en forma de pico para raspar el coral."
    },
    "where": {
      "en": "Caribbean reefs. Young ones grow up in mangroves, like those of Gandoca-Manzanillo.",
      "es": "Arrecifes del Caribe. Los jóvenes crecen en manglares, como los de Gandoca-Manzanillo."
    },
    "threats": {
      "en": "Fishing, and the loss of the mangroves it needs as a baby.",
      "es": "La pesca y la pérdida de los manglares que necesita cuando es pequeño."
    },
    "help": {
      "en": [
        "Never touch or stand on coral when you snorkel or dive.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Never take shells, coral or animals from the reef."
      ],
      "es": [
        "Nunca toques ni te pares sobre el coral cuando hagas snorkel o buceo.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Nunca te lleves conchas, coral ni animales del arrecife."
      ]
    },
    "funFact": {
      "en": "Parrotfish crunch rock and coral and poop out fine white sand. Some of the white sand on Caribbean beaches was made by parrotfish!",
      "es": "Los peces loro trituran roca y coral y hacen popó de arena blanca fina. ¡Parte de la arena blanca de las playas del Caribe la hicieron los peces loro!"
    },
    "wiki": "Rainbow_parrotfish",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/197075557/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/197075557/large.jpg",
      "author": "Pauline Walsh Jacobson",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/197075557",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "zebra-moray",
    "group": "sea",
    "emoji": "🐟",
    "scientific": "Gymnomuraena zebra",
    "status": "LC",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Zebra Moray Eel",
      "es": "Morena Cebra"
    },
    "summary": {
      "en": "A shy eel with black and white stripes, like a zebra, that hides in rocky cracks.",
      "es": "Una morena tímida con rayas negras y blancas, como una cebra, que se esconde en las grietas de las rocas."
    },
    "where": {
      "en": "Rocky reefs at Cocos Island and the southern Pacific coast.",
      "es": "Arrecifes rocosos de la Isla del Coco y la costa del Pacífico Sur."
    },
    "threats": {
      "en": "Damage to reefs and being collected for aquariums.",
      "es": "El daño a los arrecifes y la captura para acuarios."
    },
    "help": {
      "en": [
        "Never touch or stand on coral when you snorkel or dive.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Never take shells, coral or animals from the reef."
      ],
      "es": [
        "Nunca toques ni te pares sobre el coral cuando hagas snorkel o buceo.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Nunca te lleves conchas, coral ni animales del arrecife."
      ]
    },
    "funFact": {
      "en": "Instead of sharp fangs like other morays, it has flat, pebble-like teeth for crushing crabs.",
      "es": "En vez de colmillos filosos como otras morenas, tiene dientes planos como piedritas para triturar cangrejos."
    },
    "wiki": "Zebra_moray",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/458206022/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/458206022/large.jpeg",
      "author": "Lukas Zangl",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/458206022",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "moorish-idol",
    "group": "sea",
    "emoji": "🐠",
    "scientific": "Zanclus cornutus",
    "status": "LC",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Moorish Idol",
      "es": "Ídolo Moro"
    },
    "summary": {
      "en": "A striking black, white and yellow fish with a long, flowing fin on its back.",
      "es": "Un pez llamativo negro, blanco y amarillo con una aleta larga y ondulante en la espalda."
    },
    "where": {
      "en": "Rocky and coral reefs of the Pacific coast and Cocos Island.",
      "es": "Arrecifes rocosos y de coral de la costa del Pacífico y la Isla del Coco."
    },
    "threats": {
      "en": "Damage to reefs and being collected for aquariums, where it rarely survives.",
      "es": "El daño a los arrecifes y la captura para acuarios, donde casi nunca sobrevive."
    },
    "help": {
      "en": [
        "Never touch or stand on coral when you snorkel or dive.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Never take shells, coral or animals from the reef."
      ],
      "es": [
        "Nunca toques ni te pares sobre el coral cuando hagas snorkel o buceo.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Nunca te lleves conchas, coral ni animales del arrecife."
      ]
    },
    "funFact": {
      "en": "It lives in reefs all the way from Africa to the Americas, one of the widest homes of any reef fish.",
      "es": "Vive en arrecifes desde África hasta América, uno de los territorios más grandes de cualquier pez de arrecife."
    },
    "wiki": "Moorish_idol",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/399212403/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/399212403/large.jpg",
      "author": "Nick Tobler (Cowturtle)",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/399212403",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "scorpionfish",
    "group": "sea",
    "emoji": "🐟",
    "scientific": "Scorpaena plumieri",
    "status": "LC",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Spotted Scorpionfish",
      "es": "Pez Escorpión"
    },
    "summary": {
      "en": "A master of camouflage that looks just like an algae-covered rock, with venomous spines on its back.",
      "es": "Un maestro del camuflaje que parece una roca cubierta de algas, con espinas venenosas en la espalda."
    },
    "where": {
      "en": "Rocky and coral reefs of the Caribbean coast.",
      "es": "Arrecifes rocosos y de coral de la costa del Caribe."
    },
    "threats": {
      "en": "Damage to reefs and pollution.",
      "es": "El daño a los arrecifes y la contaminación."
    },
    "help": {
      "en": [
        "Never touch or stand on coral when you snorkel or dive.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Never take shells, coral or animals from the reef."
      ],
      "es": [
        "Nunca toques ni te pares sobre el coral cuando hagas snorkel o buceo.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Nunca te lleves conchas, coral ni animales del arrecife."
      ]
    },
    "funFact": {
      "en": "It waits perfectly still, then opens its mouth so fast that it sucks in a passing fish in a blink!",
      "es": "Espera perfectamente quieto y luego abre la boca tan rápido que se traga a un pez en un parpadeo."
    },
    "wiki": "Spotted_scorpionfish",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/680510975/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/680510975/large.jpg",
      "author": "Nigel Hoadley",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/680510975",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "yellowhead-jawfish",
    "group": "sea",
    "emoji": "🐟",
    "scientific": "Opistognathus aurifrons",
    "status": "LC",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Yellowhead Jawfish",
      "es": "Pez Bocón Cabeza Amarilla"
    },
    "summary": {
      "en": "A small fish with a yellow head that digs a burrow in the sand and peeks its head out.",
      "es": "Un pez pequeño de cabeza amarilla que excava una madriguera en la arena y asoma la cabeza."
    },
    "where": {
      "en": "Sandy and rubble areas near Caribbean reefs.",
      "es": "Zonas de arena y cascajo cerca de los arrecifes del Caribe."
    },
    "threats": {
      "en": "Being collected for aquariums and damage to reefs.",
      "es": "La captura para acuarios y el daño a los arrecifes."
    },
    "help": {
      "en": [
        "Never touch or stand on coral when you snorkel or dive.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Never take shells, coral or animals from the reef."
      ],
      "es": [
        "Nunca toques ni te pares sobre el coral cuando hagas snorkel o buceo.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Nunca te lleves conchas, coral ni animales del arrecife."
      ]
    },
    "funFact": {
      "en": "The dad keeps the eggs safe inside his mouth until they hatch!",
      "es": "¡El papá guarda los huevos dentro de su boca hasta que nacen!"
    },
    "wiki": "Yellowhead_jawfish",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/613491833/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/613491833/large.jpg",
      "author": "Daniel Z",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/613491833",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "staghorn-coral",
    "group": "sea",
    "emoji": "🪸",
    "scientific": "Acropora cervicornis",
    "status": "CR",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Staghorn Coral",
      "es": "Coral Cuerno de Ciervo"
    },
    "summary": {
      "en": "A coral that grows in branches that look like deer antlers. It was once one of the main builders of Caribbean reefs.",
      "es": "Un coral que crece en ramas parecidas a los cuernos de un venado. Antes era uno de los principales constructores de los arrecifes del Caribe."
    },
    "where": {
      "en": "Shallow Caribbean reefs, like those of Cahuita.",
      "es": "Arrecifes poco profundos del Caribe, como los de Cahuita."
    },
    "threats": {
      "en": "Coral diseases, warmer seas that cause bleaching, pollution and mud washing in from rivers.",
      "es": "Las enfermedades del coral, los mares más calientes que causan blanqueamiento, la contaminación y el lodo que llega de los ríos."
    },
    "help": {
      "en": [
        "Never touch, break or stand on coral.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Save energy at home: a cooler planet means fewer coral bleaching events."
      ],
      "es": [
        "Nunca toques, quiebres ni te pares sobre el coral.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Ahorra energía en casa: un planeta más fresco significa menos blanqueamiento del coral."
      ]
    },
    "funFact": {
      "en": "It is one of the fastest-growing corals. People now grow pieces in underwater 'coral nurseries' to replant reefs.",
      "es": "Es uno de los corales que crecen más rápido. Hoy la gente cultiva pedacitos en 'viveros de coral' bajo el agua para replantar arrecifes."
    },
    "wiki": "Staghorn_coral",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/693041474/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/693041474/large.jpg",
      "author": "Gregor Bailar",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/693041474",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "elkhorn-coral",
    "group": "sea",
    "emoji": "🪸",
    "scientific": "Acropora palmata",
    "status": "CR",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Elkhorn Coral",
      "es": "Coral Cuerno de Alce"
    },
    "summary": {
      "en": "A coral with big, flat branches like the antlers of an elk. Its thick thickets protect coastlines from big waves.",
      "es": "Un coral con ramas grandes y planas como los cuernos de un alce. Sus matorrales protegen las costas de las olas grandes."
    },
    "where": {
      "en": "Shallow, wavy Caribbean reefs, like those of Cahuita.",
      "es": "Arrecifes poco profundos y con oleaje del Caribe, como los de Cahuita."
    },
    "threats": {
      "en": "Coral diseases, warmer seas that cause bleaching, storms and pollution.",
      "es": "Las enfermedades del coral, los mares más calientes que causan blanqueamiento, las tormentas y la contaminación."
    },
    "help": {
      "en": [
        "Never touch, break or stand on coral.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Save energy at home: a cooler planet means fewer coral bleaching events."
      ],
      "es": [
        "Nunca toques, quiebres ni te pares sobre el coral.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Ahorra energía en casa: un planeta más fresco significa menos blanqueamiento del coral."
      ]
    },
    "funFact": {
      "en": "Coral is not a plant or a rock: it is made of thousands of tiny animals called polyps!",
      "es": "El coral no es una planta ni una roca: ¡está formado por miles de animalitos llamados pólipos!"
    },
    "wiki": "Elkhorn_coral",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/41235504/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/41235504/large.jpeg",
      "author": "lukeromaine",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/41235504",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "pillar-coral",
    "group": "sea",
    "emoji": "🪸",
    "scientific": "Dendrogyra cylindrus",
    "status": "CR",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Pillar Coral",
      "es": "Coral Pilar"
    },
    "summary": {
      "en": "A coral that grows straight up from the sea floor in tall columns, like underwater towers.",
      "es": "Un coral que crece hacia arriba desde el fondo del mar en columnas altas, como torres bajo el agua."
    },
    "where": {
      "en": "Caribbean reefs, where it has always been rare.",
      "es": "Arrecifes del Caribe, donde siempre ha sido raro."
    },
    "threats": {
      "en": "A coral disease that arrived in 2014 and kills it fast, plus bleaching. Its numbers fell by more than 80% since 1990.",
      "es": "Una enfermedad del coral que llegó en 2014 y lo mata rápido, además del blanqueamiento. Su población bajó más del 80% desde 1990."
    },
    "help": {
      "en": [
        "Never touch, break or stand on coral.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Save energy at home: a cooler planet means fewer coral bleaching events."
      ],
      "es": [
        "Nunca toques, quiebres ni te pares sobre el coral.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Ahorra energía en casa: un planeta más fresco significa menos blanqueamiento del coral."
      ]
    },
    "funFact": {
      "en": "Unlike most corals, it opens its tiny tentacles during the day, so its towers look soft and fuzzy.",
      "es": "A diferencia de la mayoría de los corales, abre sus tentáculos diminutos de día, así que sus torres se ven suaves y peluditas."
    },
    "wiki": "Pillar_coral",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/345234529/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/345234529/large.jpg",
      "author": "Pauline Walsh Jacobson",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/345234529",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "boulder-star-coral",
    "group": "sea",
    "emoji": "🪸",
    "scientific": "Orbicella annularis",
    "status": "EN",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Boulder Star Coral",
      "es": "Coral Estrella"
    },
    "summary": {
      "en": "A coral that forms massive, bumpy mounds. Some colonies are hundreds of years old.",
      "es": "Un coral que forma montículos enormes y abultados. Algunas colonias tienen cientos de años."
    },
    "where": {
      "en": "Caribbean reefs, like those of Cahuita and Gandoca-Manzanillo.",
      "es": "Arrecifes del Caribe, como los de Cahuita y Gandoca-Manzanillo."
    },
    "threats": {
      "en": "Bleaching from warmer seas, coral diseases, pollution and mud from rivers.",
      "es": "El blanqueamiento por mares más calientes, las enfermedades del coral, la contaminación y el lodo de los ríos."
    },
    "help": {
      "en": [
        "Never touch, break or stand on coral.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Save energy at home: a cooler planet means fewer coral bleaching events."
      ],
      "es": [
        "Nunca toques, quiebres ni te pares sobre el coral.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Ahorra energía en casa: un planeta más fresco significa menos blanqueamiento del coral."
      ]
    },
    "funFact": {
      "en": "It grows only about 1 cm per year, so a mound as big as a car may be older than your great-great-grandparents!",
      "es": "Crece solo como 1 cm por año, ¡así que un montículo del tamaño de un carro puede ser más viejo que tus tatarabuelos!"
    },
    "wiki": "Orbicella_annularis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/502113046/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/502113046/large.jpeg",
      "author": "Alex Doyle",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/502113046",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "cauliflower-coral",
    "group": "sea",
    "emoji": "🪸",
    "scientific": "Pocillopora damicornis",
    "status": "NT",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Cauliflower Coral",
      "es": "Coral Coliflor"
    },
    "summary": {
      "en": "A branching coral that looks like a little cauliflower. It is one of the main reef builders on Costa Rica's Pacific coast.",
      "es": "Un coral ramificado que parece una coliflor pequeña. Es uno de los principales constructores de arrecifes de la costa del Pacífico de Costa Rica."
    },
    "where": {
      "en": "Pacific reefs like those of Bahía Culebra, Caño Island, Golfo Dulce and Cocos Island.",
      "es": "Arrecifes del Pacífico como los de Bahía Culebra, la Isla del Caño, el Golfo Dulce y la Isla del Coco."
    },
    "threats": {
      "en": "Bleaching during hot El Niño years, pollution and mud from the land.",
      "es": "El blanqueamiento en los años calientes de El Niño, la contaminación y el lodo que viene de tierra."
    },
    "help": {
      "en": [
        "Never touch, break or stand on coral.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Save energy at home: a cooler planet means fewer coral bleaching events."
      ],
      "es": [
        "Nunca toques, quiebres ni te pares sobre el coral.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Ahorra energía en casa: un planeta más fresco significa menos blanqueamiento del coral."
      ]
    },
    "funFact": {
      "en": "Tiny crabs and shrimp live between its branches and defend it from coral-eating sea stars!",
      "es": "¡Cangrejitos y camarones viven entre sus ramas y lo defienden de las estrellas de mar que comen coral!"
    },
    "wiki": "Pocillopora_damicornis",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/436074072/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/436074072/large.jpeg",
      "author": "Bob",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/436074072",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "grooved-brain-coral",
    "group": "sea",
    "emoji": "🧠",
    "scientific": "Diploria labyrinthiformis",
    "status": "CR",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Grooved Brain Coral",
      "es": "Coral Cerebro"
    },
    "summary": {
      "en": "A round coral covered in winding grooves that make it look just like a human brain.",
      "es": "Un coral redondo cubierto de surcos ondulados que lo hacen parecer igualito a un cerebro humano."
    },
    "where": {
      "en": "Caribbean reefs.",
      "es": "Arrecifes del Caribe."
    },
    "threats": {
      "en": "A deadly coral disease spreading through the Caribbean, plus bleaching and pollution.",
      "es": "Una enfermedad mortal del coral que se está extendiendo por el Caribe, además del blanqueamiento y la contaminación."
    },
    "help": {
      "en": [
        "Never touch, break or stand on coral.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Save energy at home: a cooler planet means fewer coral bleaching events."
      ],
      "es": [
        "Nunca toques, quiebres ni te pares sobre el coral.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Ahorra energía en casa: un planeta más fresco significa menos blanqueamiento del coral."
      ]
    },
    "funFact": {
      "en": "Each groove is a valley where many tiny coral animals live side by side, sharing the same mouth line.",
      "es": "Cada surco es un valle donde muchos animalitos de coral viven lado a lado, compartiendo una misma línea de bocas."
    },
    "wiki": "Diploria",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/520923185/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/520923185/large.jpg",
      "author": "Pauline Walsh Jacobson",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/520923185",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "purple-sea-fan",
    "group": "sea",
    "emoji": "🪸",
    "scientific": "Gorgonia ventalina",
    "status": "NE",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Purple Sea Fan",
      "es": "Abanico de Mar Morado"
    },
    "summary": {
      "en": "A soft coral shaped like a giant purple fan that sways back and forth with the ocean current.",
      "es": "Un coral blando con forma de abanico morado gigante que se mece de un lado a otro con la corriente."
    },
    "where": {
      "en": "Shallow Caribbean reefs.",
      "es": "Arrecifes poco profundos del Caribe."
    },
    "threats": {
      "en": "A fungus disease, warmer seas and pollution.",
      "es": "Una enfermedad por hongos, los mares más calientes y la contaminación."
    },
    "help": {
      "en": [
        "Never touch, break or stand on coral.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Save energy at home: a cooler planet means fewer coral bleaching events."
      ],
      "es": [
        "Nunca toques, quiebres ni te pares sobre el coral.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Ahorra energía en casa: un planeta más fresco significa menos blanqueamiento del coral."
      ]
    },
    "funFact": {
      "en": "It always grows facing across the current, like a net, so its tiny polyps can catch more food floating by.",
      "es": "Siempre crece de frente a la corriente, como una red, para que sus pólipos diminutos atrapen más comida que pasa flotando."
    },
    "wiki": "Gorgonia_ventalina",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/413359789/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/413359789/large.jpeg",
      "author": "ritirene",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/413359789",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "giant-caribbean-anemone",
    "group": "sea",
    "emoji": "🪸",
    "scientific": "Condylactis gigantea",
    "status": "NE",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Giant Caribbean Sea Anemone",
      "es": "Anémona Gigante del Caribe"
    },
    "summary": {
      "en": "A big anemone with long tentacles, often with pink or purple tips. Its tentacles sting and catch small animals.",
      "es": "Una anémona grande con tentáculos largos, a menudo con puntas rosadas o moradas. Sus tentáculos pican y atrapan animalitos."
    },
    "where": {
      "en": "Caribbean reefs and seagrass beds, tucked into cracks in the rock.",
      "es": "Arrecifes y pastos marinos del Caribe, metida en grietas de las rocas."
    },
    "threats": {
      "en": "Being collected for aquariums, and damage to reefs.",
      "es": "La captura para acuarios y el daño a los arrecifes."
    },
    "help": {
      "en": [
        "Never touch or stand on coral when you snorkel or dive.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Never take shells, coral or animals from the reef."
      ],
      "es": [
        "Nunca toques ni te pares sobre el coral cuando hagas snorkel o buceo.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Nunca te lleves conchas, coral ni animales del arrecife."
      ]
    },
    "funFact": {
      "en": "Tiny shrimp live safely among its stinging tentacles, and some of them clean fish that visit!",
      "es": "¡Camaroncitos viven seguros entre sus tentáculos que pican, y algunos limpian a los peces que los visitan!"
    },
    "wiki": "Condylactis_gigantea",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/367521486/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/367521486/large.jpeg",
      "author": "R Vasconcellos",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/367521486",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "brown-sea-cucumber",
    "group": "sea",
    "emoji": "🥒",
    "scientific": "Isostichopus fuscus",
    "status": "EN",
    "checked": "2026-11-26",
    "needsCheck": false,
    "name": {
      "en": "Brown Sea Cucumber",
      "es": "Pepino de Mar Café"
    },
    "summary": {
      "en": "A soft, bumpy animal that works like an ocean vacuum cleaner, sifting through sand to recycle nutrients.",
      "es": "Un animal blando y lleno de bultos que funciona como una aspiradora del mar, cerniendo la arena para reciclar nutrientes."
    },
    "where": {
      "en": "Rocky reefs and sandy bottoms of the Pacific coast and Cocos Island.",
      "es": "Arrecifes rocosos y fondos arenosos de la costa del Pacífico y la Isla del Coco."
    },
    "threats": {
      "en": "Too much harvesting: it is sold dried as an expensive food in Asia.",
      "es": "La recolección excesiva: se vende seco como un alimento caro en Asia."
    },
    "help": {
      "en": [
        "Never buy dried sea cucumbers.",
        "Never pick up sea cucumbers on the beach or reef.",
        "Support marine protected areas."
      ],
      "es": [
        "Nunca compres pepinos de mar secos.",
        "Nunca recojas pepinos de mar en la playa o el arrecife.",
        "Apoya las áreas marinas protegidas."
      ]
    },
    "funFact": {
      "en": "Sea cucumbers breathe through their bottom! They pump water in and out through it.",
      "es": "¡Los pepinos de mar respiran por el trasero! Bombean agua hacia adentro y afuera por ahí."
    },
    "wiki": "Isostichopus_fuscus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/558531562/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/558531562/large.jpg",
      "author": "Uma Mezzanotte",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/558531562",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "caribbean-reef-octopus",
    "group": "sea",
    "emoji": "🐙",
    "scientific": "Octopus briareus",
    "status": "LC",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Caribbean Reef Octopus",
      "es": "Pulpo de Arrecife del Caribe"
    },
    "summary": {
      "en": "A bright blue-green octopus that can change the color and texture of its skin in less than a second.",
      "es": "Un pulpo verde azulado brillante que puede cambiar el color y la textura de su piel en menos de un segundo."
    },
    "where": {
      "en": "Caribbean reefs, rocks and seagrass.",
      "es": "Arrecifes, rocas y pastos marinos del Caribe."
    },
    "threats": {
      "en": "Fishing and damage to reefs.",
      "es": "La pesca y el daño a los arrecifes."
    },
    "help": {
      "en": [
        "Never touch or stand on coral when you snorkel or dive.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Never take shells, coral or animals from the reef."
      ],
      "es": [
        "Nunca toques ni te pares sobre el coral cuando hagas snorkel o buceo.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Nunca te lleves conchas, coral ni animales del arrecife."
      ]
    },
    "funFact": {
      "en": "It hunts at night and wraps its webbed arms around crabs and fish like a net.",
      "es": "Caza de noche y envuelve a cangrejos y peces con sus brazos unidos por una membrana, como una red."
    },
    "wiki": "Caribbean_reef_octopus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/238188630/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/238188630/large.jpeg",
      "author": "Dan Schofield",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/238188630",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "pacific-striped-octopus",
    "group": "sea",
    "emoji": "🐙",
    "scientific": "Octopus chierchiae",
    "status": "NE",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Lesser Pacific Striped Octopus",
      "es": "Pulpo Rayado del Pacífico"
    },
    "summary": {
      "en": "A small, striped octopus of the Pacific coast. Like all octopuses, it is smart, has three hearts and blue blood.",
      "es": "Un pulpo pequeño y rayado de la costa del Pacífico. Como todos los pulpos, es inteligente, tiene tres corazones y sangre azul."
    },
    "where": {
      "en": "Shallow muddy and sandy bottoms of the Pacific coast, from Nicaragua to Colombia.",
      "es": "Fondos poco profundos de lodo y arena de la costa del Pacífico, desde Nicaragua hasta Colombia."
    },
    "threats": {
      "en": "Pollution and damage to shallow coastal habitats.",
      "es": "La contaminación y el daño a los hábitats costeros poco profundos."
    },
    "help": {
      "en": [
        "Look, but don't touch or pick up sea creatures in tide pools.",
        "Keep plastic and trash off the beach.",
        "Put rocks back the way you found them."
      ],
      "es": [
        "Mira, pero no toques ni levantes a los animales de las pozas de marea.",
        "No dejes plástico ni basura en la playa.",
        "Deja las piedras como las encontraste."
      ]
    },
    "funFact": {
      "en": "Most octopus moms lay eggs only once, but this one can lay eggs many times in her life, which surprised scientists!",
      "es": "La mayoría de las mamás pulpo ponen huevos una sola vez, pero esta puede poner huevos muchas veces en su vida, ¡y eso sorprendió a los científicos!"
    },
    "wiki": "Lesser_Pacific_striped_octopus",
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Octopus_chierchiae.png?width=500",
      "large": "https://commons.wikimedia.org/wiki/Special:FilePath/Octopus_chierchiae.png?width=1024",
      "author": "Benjamin Liu, Leo Song, Saumitra Kelkar, Anna Ramji",
      "license": "CC BY",
      "page": "https://commons.wikimedia.org/wiki/File:Octopus_chierchiae.png",
      "source": "Wikimedia Commons",
      "cardOk": true
    }
  },
  {
    "id": "caribbean-reef-squid",
    "group": "sea",
    "emoji": "🦑",
    "scientific": "Sepioteuthis sepioidea",
    "status": "LC",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Caribbean Reef Squid",
      "es": "Calamar de Arrecife del Caribe"
    },
    "summary": {
      "en": "A squid that talks to other squid by flashing patterns of color across its skin.",
      "es": "Un calamar que se comunica con otros calamares mostrando dibujos de colores en su piel."
    },
    "where": {
      "en": "Shallow Caribbean reefs and seagrass, often in small groups.",
      "es": "Arrecifes poco profundos y pastos marinos del Caribe, a menudo en grupos pequeños."
    },
    "threats": {
      "en": "Pollution and damage to reefs and seagrass.",
      "es": "La contaminación y el daño a los arrecifes y pastos marinos."
    },
    "help": {
      "en": [
        "Never touch or stand on coral when you snorkel or dive.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Never take shells, coral or animals from the reef."
      ],
      "es": [
        "Nunca toques ni te pares sobre el coral cuando hagas snorkel o buceo.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Nunca te lleves conchas, coral ni animales del arrecife."
      ]
    },
    "funFact": {
      "en": "Scientists have seen these squid shoot out of the water and glide through the air, like flying fish!",
      "es": "¡Los científicos han visto a estos calamares salir disparados del agua y planear por el aire, como peces voladores!"
    },
    "wiki": "Caribbean_reef_squid",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/382542455/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/382542455/large.jpg",
      "author": "Pauline Walsh Jacobson",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/382542455",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "moon-jellyfish",
    "group": "sea",
    "emoji": "🪼",
    "scientific": "Aurelia aurita",
    "status": "NE",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Moon Jellyfish",
      "es": "Medusa Luna"
    },
    "summary": {
      "en": "A see-through jellyfish with four horseshoe-shaped rings visible inside its glowing bell.",
      "es": "Una medusa transparente con cuatro anillos en forma de herradura que se ven dentro de su campana brillante."
    },
    "where": {
      "en": "Coastal waters of both coasts, sometimes in huge groups.",
      "es": "Aguas costeras de ambas costas, a veces en grupos enormes."
    },
    "threats": {
      "en": "Not in danger. In fact, warmer and polluted seas can make jellyfish more common.",
      "es": "No está en peligro. De hecho, los mares más calientes y contaminados pueden hacer que haya más medusas."
    },
    "help": {
      "en": [
        "Keep plastic bags out of the ocean: sea turtles mistake them for jellyfish.",
        "Look, but never touch a jellyfish, even one washed up on the beach.",
        "Help keep the sea clean and healthy."
      ],
      "es": [
        "No dejes que las bolsas plásticas lleguen al mar: las tortugas marinas las confunden con medusas.",
        "Mira, pero nunca toques una medusa, ni siquiera una que esté en la playa.",
        "Ayuda a mantener el mar limpio y sano."
      ]
    },
    "funFact": {
      "en": "The four rings are its reproductive organs. Jellyfish have no brain, no heart and no bones!",
      "es": "Los cuatro anillos son sus órganos reproductivos. ¡Las medusas no tienen cerebro, ni corazón, ni huesos!"
    },
    "wiki": "Aurelia_aurita",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/305558239/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/305558239/large.jpeg",
      "author": "Andra Waagmeester",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/305558239",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "cannonball-jellyfish",
    "group": "sea",
    "emoji": "🪼",
    "scientific": "Stomolophus meleagris",
    "status": "NE",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Cannonball Jellyfish",
      "es": "Medusa Bola de Cañón"
    },
    "summary": {
      "en": "A firm, round jellyfish shaped like a dome, without the long dangling tentacles of other jellies.",
      "es": "Una medusa firme y redonda con forma de cúpula, sin los tentáculos largos que cuelgan en otras medusas."
    },
    "where": {
      "en": "Coastal waters, sometimes in huge swarms near the beach.",
      "es": "Aguas costeras, a veces en enjambres enormes cerca de la playa."
    },
    "threats": {
      "en": "Not in danger, but too much fishing for it in some countries could hurt local swarms.",
      "es": "No está en peligro, pero la pesca excesiva en algunos países podría afectar los enjambres locales."
    },
    "help": {
      "en": [
        "Keep plastic bags out of the ocean: sea turtles mistake them for jellyfish.",
        "Look, but never touch a jellyfish, even one washed up on the beach.",
        "Help keep the sea clean and healthy."
      ],
      "es": [
        "No dejes que las bolsas plásticas lleguen al mar: las tortugas marinas las confunden con medusas.",
        "Mira, pero nunca toques una medusa, ni siquiera una que esté en la playa.",
        "Ayuda a mantener el mar limpio y sano."
      ]
    },
    "funFact": {
      "en": "It is a favorite food of the leatherback sea turtle, the biggest turtle in the world.",
      "es": "Es una de las comidas favoritas de la tortuga baula, la tortuga más grande del mundo."
    },
    "wiki": "Cannonball_jellyfish",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/368252768/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/368252768/large.jpeg",
      "author": "Nonbinary-Naturalist",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/368252768",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "portuguese-man-o-war",
    "group": "sea",
    "emoji": "🪼",
    "scientific": "Physalia physalis",
    "status": "NE",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Portuguese Man o' War",
      "es": "Carabela Portuguesa"
    },
    "summary": {
      "en": "It looks like a floating blue bubble, but it is not one animal: it is a colony of tiny animals working together.",
      "es": "Parece una burbuja azul flotante, pero no es un solo animal: es una colonia de animalitos que trabajan juntos."
    },
    "where": {
      "en": "Floating on the surface of the open ocean. Winds sometimes blow many onto beaches.",
      "es": "Flotando en la superficie del océano abierto. A veces el viento empuja muchas a las playas."
    },
    "threats": {
      "en": "Not in danger.",
      "es": "No está en peligro."
    },
    "help": {
      "en": [
        "Never touch one, even if it is dead on the beach: it still stings!",
        "Tell a lifeguard if you see them on the beach.",
        "Keep plastic out of the ocean."
      ],
      "es": [
        "Nunca toques una, aunque esté muerta en la playa: ¡todavía pica!",
        "Avísale a un salvavidas si las ves en la playa.",
        "No dejes que el plástico llegue al mar."
      ]
    },
    "funFact": {
      "en": "Its bubble works like a sail, and its stinging tentacles can be more than 10 m long!",
      "es": "Su burbuja funciona como una vela, y sus tentáculos que pican pueden medir más de 10 m."
    },
    "wiki": "Portuguese_man_o'_war",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/713264658/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/713264658/large.jpg",
      "author": "Federico Muñoz",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/713264658",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "agassiz-nudibranch",
    "group": "sea",
    "emoji": "🐌",
    "scientific": "Hypselodoris agassizii",
    "status": "NE",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Agassiz's Nudibranch",
      "es": "Nudibranquio de Agassiz"
    },
    "summary": {
      "en": "A tiny, colorful sea slug, dark blue with bright yellow-orange stripes, that crawls over Pacific reefs.",
      "es": "Una babosa de mar diminuta y colorida, azul oscuro con rayas amarillo anaranjado, que se arrastra por los arrecifes del Pacífico."
    },
    "where": {
      "en": "Rocky reefs of the Pacific coast and Cocos Island.",
      "es": "Arrecifes rocosos de la costa del Pacífico y la Isla del Coco."
    },
    "threats": {
      "en": "Damage to reefs and pollution.",
      "es": "El daño a los arrecifes y la contaminación."
    },
    "help": {
      "en": [
        "Never touch or stand on coral when you snorkel or dive.",
        "Use reef-safe sunscreen, or wear a shirt in the water.",
        "Never take shells, coral or animals from the reef."
      ],
      "es": [
        "Nunca toques ni te pares sobre el coral cuando hagas snorkel o buceo.",
        "Usa bloqueador seguro para arrecifes, o una camisa en el agua.",
        "Nunca te lleves conchas, coral ni animales del arrecife."
      ]
    },
    "funFact": {
      "en": "Its bright colors are a warning: 'I taste terrible!' It gets bad-tasting chemicals from the sponges it eats.",
      "es": "Sus colores brillantes son una advertencia: '¡Sé horrible!'. Saca químicos de mal sabor de las esponjas que come."
    },
    "wiki": "Hypselodoris_agassizii",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/613179545/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/613179545/large.jpg",
      "author": "Uma Mezzanotte",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/613179545",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "chocolate-chip-sea-star",
    "group": "sea",
    "emoji": "⭐",
    "scientific": "Nidorellia armata",
    "status": "NE",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Chocolate Chip Sea Star",
      "es": "Estrella Chispas de Chocolate"
    },
    "summary": {
      "en": "A plump, five-sided sea star covered in dark brown spines that look like chocolate chips.",
      "es": "Una estrella de mar gordita de cinco lados, cubierta de espinas café oscuro que parecen chispas de chocolate."
    },
    "where": {
      "en": "Rocky reefs and sandy bottoms of the Pacific coast and Cocos Island.",
      "es": "Arrecifes rocosos y fondos arenosos de la costa del Pacífico y la Isla del Coco."
    },
    "threats": {
      "en": "Being collected as souvenirs, and warmer seas.",
      "es": "La recolección como recuerdo y los mares más calientes."
    },
    "help": {
      "en": [
        "Look, but don't touch or pick up sea creatures in tide pools.",
        "Keep plastic and trash off the beach.",
        "Put rocks back the way you found them."
      ],
      "es": [
        "Mira, pero no toques ni levantes a los animales de las pozas de marea.",
        "No dejes plástico ni basura en la playa.",
        "Deja las piedras como las encontraste."
      ]
    },
    "funFact": {
      "en": "A sea star eats by pushing its stomach out of its mouth and onto its food!",
      "es": "¡Una estrella de mar come sacando el estómago por la boca y poniéndolo sobre su comida!"
    },
    "wiki": "Nidorellia_armata",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/448668237/medium.jpeg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/448668237/large.jpeg",
      "author": "Chris Spain",
      "license": "CC0",
      "page": "https://www.inaturalist.org/photos/448668237",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  },
  {
    "id": "caribbean-spiny-lobster",
    "group": "sea",
    "emoji": "🦞",
    "scientific": "Panulirus argus",
    "status": "DD",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Caribbean Spiny Lobster",
      "es": "Langosta Espinosa del Caribe"
    },
    "summary": {
      "en": "A lobster with no big claws. Instead, it uses its long, spiky antennae to fight off predators.",
      "es": "Una langosta sin tenazas grandes. En cambio, usa sus antenas largas y espinosas para defenderse de los depredadores."
    },
    "where": {
      "en": "Caribbean reefs, rocks and seagrass, hiding in cracks during the day.",
      "es": "Arrecifes, rocas y pastos marinos del Caribe, escondida en grietas durante el día."
    },
    "threats": {
      "en": "Too much fishing, especially of young lobsters and of females carrying eggs.",
      "es": "La pesca excesiva, sobre todo de langostas jóvenes y de hembras con huevos."
    },
    "help": {
      "en": [
        "Never eat lobster during the closed season, when they are having babies.",
        "Never buy lobsters that are too small or carrying eggs.",
        "Support marine protected areas."
      ],
      "es": [
        "Nunca comas langosta en época de veda, cuando están teniendo crías.",
        "Nunca compres langostas muy pequeñas o con huevos.",
        "Apoya las áreas marinas protegidas."
      ]
    },
    "funFact": {
      "en": "In autumn, spiny lobsters migrate in long single-file lines, each one touching the one in front, like a conga line!",
      "es": "En otoño, las langostas migran en largas filas, cada una tocando a la de adelante, ¡como un trencito!"
    },
    "wiki": "Caribbean_spiny_lobster",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/304319157/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/304319157/large.jpg",
      "author": "Robin White",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/304319157",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": false
    }
  },
  {
    "id": "sally-lightfoot-crab",
    "group": "sea",
    "emoji": "🦀",
    "scientific": "Grapsus grapsus",
    "status": "NE",
    "checked": "2026-11-26",
    "needsCheck": true,
    "name": {
      "en": "Sally Lightfoot Crab",
      "es": "Cangrejo Zayapa"
    },
    "summary": {
      "en": "A bright red and yellow crab that scuttles super fast across dark, wet rocks along the shore.",
      "es": "Un cangrejo rojo y amarillo brillante que corre súper rápido por las rocas oscuras y mojadas de la costa."
    },
    "where": {
      "en": "Rocky shores of the Pacific coast and Cocos Island, just above the waves.",
      "es": "Costas rocosas del Pacífico y la Isla del Coco, justo arriba de las olas."
    },
    "threats": {
      "en": "Not in danger, but pollution on rocky shores can hurt it.",
      "es": "No está en peligro, pero la contaminación en las costas rocosas le puede hacer daño."
    },
    "help": {
      "en": [
        "Look, but don't touch or pick up sea creatures in tide pools.",
        "Keep plastic and trash off the beach.",
        "Put rocks back the way you found them."
      ],
      "es": [
        "Mira, pero no toques ni levantes a los animales de las pozas de marea.",
        "No dejes plástico ni basura en la playa.",
        "Deja las piedras como las encontraste."
      ]
    },
    "funFact": {
      "en": "Young ones are dark, to hide on black rocks. They turn bright red as they grow up. They can even jump from rock to rock!",
      "es": "Los jóvenes son oscuros para esconderse en las rocas negras, y se vuelven rojo brillante al crecer. ¡Hasta pueden saltar de roca en roca!"
    },
    "wiki": "Grapsus_grapsus",
    "photo": {
      "url": "https://inaturalist-open-data.s3.amazonaws.com/photos/32225395/medium.jpg",
      "large": "https://inaturalist-open-data.s3.amazonaws.com/photos/32225395/large.jpg",
      "author": "Don Loarie",
      "license": "CC BY",
      "page": "https://www.inaturalist.org/photos/32225395",
      "source": "iNaturalist",
      "cardOk": true,
      "inCostaRica": true
    }
  }
];
