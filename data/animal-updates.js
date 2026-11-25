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
  }
};

// Apply the updates
(function () {
  for (const [id, changes] of Object.entries(window.ANIMAL_UPDATES)) {
    const animal = (window.ANIMALS || []).find(a => a.id === id);
    if (animal) Object.assign(animal, changes);
  }
})();
