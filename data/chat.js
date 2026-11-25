// Talk to your animals! Personalities and replies for the card chat (English + Spanish).
// Placeholders the game fills in:  {name} {sound} {summary} {where} {regions} {status} {note}
//   {threats} {help} {fun} {sci} {group} {eatText} {diet}
window.CHAT = {
  // "local" = free built-in chat (works now). "ai" = future real-AI chat through your own server.
  mode: "local",
  aiEndpoint: "",           // future: the web address of your AI middleman server (never put a secret key here!)
  maxMessageLength: 200,

  // How each group "sounds"
  sounds: {
    mammal:    { en: ["", "*happy wiggle*", "*sniff sniff*"], es: ["", "*movimiento feliz*", "*olfatea*"] },
    bird:      { en: ["Tweet!", "Chirp chirp!", "*flaps wings*"], es: ["¡Pío!", "¡Pío pío!", "*aletea*"] },
    reptile:   { en: ["Hisss… I mean, hi!", "*slow blink*", "*suns itself*"], es: ["Sss… digo, ¡hola!", "*parpadea despacio*", "*toma el sol*"] },
    amphibian: { en: ["Ribbit!", "Croak!", "*blinks big eyes*"], es: ["¡Croac!", "¡Cruac!", "*parpadea sus ojotes*"] },
    insect:    { en: ["Bzzz!", "*wiggles antennae*", "*flutters*"], es: ["¡Bzzz!", "*mueve las antenas*", "*revolotea*"] }
  },

  // Suggestion buttons under the chat
  suggestions: {
    en: ["Hi! 👋", "You're my favorite! 💚", "Where do you live?", "What do you eat?", "Are you in danger?", "How can I help you?", "Tell me a fun fact!", "Tell me a joke!"],
    es: ["¡Hola! 👋", "¡Eres mi favorito! 💚", "¿Dónde vives?", "¿Qué comes?", "¿Estás en peligro?", "¿Cómo te puedo ayudar?", "¡Cuéntame un dato curioso!", "¡Cuéntame un chiste!"]
  },

  // What the player might say (checked in this order; accents and capitals don't matter)
  intents: [
    { id: "bye",    match: "\\b(bye|goodbye|see you|see ya|good night|adios|chao|chau|hasta luego|hasta pronto|nos vemos|buenas noches)\\b" },
    { id: "thanks", match: "\\b(thank|thanks|thx|ty|gracias|muchas gracias)\\b" },
    { id: "joke",   match: "(joke|funny|laugh|chiste|broma|gracioso|reir|risa)" },
    { id: "help",   match: "(help|save|protect|do for you|can i do|ayud|salvar|proteg|hacer por ti|puedo hacer)" },
    { id: "status", match: "(endanger|extinct|danger|status|red list|\\bsafe|threat|dying|\\bdie\\b|\\balive\\b|peligro|extint|amenaza|lista roja|estado|a salvo|muriendo|vivo|viva)" },
    { id: "eat",    match: "\\b(eat|eats|eating|food|hungry|diet|snack|comes|comer|comida|hambre|alimentas|alimento|dieta)\\b" },
    { id: "where",  match: "(where|live|home|habitat|found you|region|donde|vives|tu casa|hogar|habitas|region)" },
    { id: "why",    match: "(why|problem|hurt|trouble|hard|sad|por que|problema|dificil|triste|dano|duele)" },
    { id: "fact",   match: "(fact|fun|tell me something|curious|surprise|secret|dato|curios|cuentame algo|sorprend|secreto)" },
    { id: "sci",    match: "(scientific|latin|real name|nombre cientifico|latin|nombre real)" },
    { id: "who",    match: "(who are you|what are you|about you|yourself|introduce|quien eres|que eres|sobre ti|de ti|presentate)" },
    { id: "how",    match: "(how are you|how r u|how do you feel|how is it going|como estas|como te sientes|como te va|que tal estas)" },
    { id: "love",   match: "(favorite|favourite|love|cute|beautiful|pretty|awesome|amazing|cool|best|adorable|favorit|te quiero|te amo|me encantas|lind|bonit|hermos|precios|tuanis|el mejor|la mejor|genial)" },
    { id: "greet",  match: "\\b(hi|hello|hey|hiya|howdy|hola|buenas|buenos dias|buenas tardes|saludos|pura vida|que tal)\\b" }
  ],

  // Replies. Each list gives a few versions so the animal doesn't repeat itself.
  // "ex" versions are used by extinct animals.
  replies: {
    en: {
      open:    ["{sound} Hi! I'm the {name}. Thanks for adding me to your collection! What would you like to know?",
                "{sound} Hello, friend! It's me, the {name}. Ask me anything!"],
      open_ex: ["Hello from long ago… I'm the {name}. I'm extinct, but my story can help other animals. Want to hear it?"],
      greet:   ["{sound} Hi there! I'm the {name}. 😊", "{sound} Hello! So nice to meet you!", "{sound} Hey! Pura vida! 🌿"],
      love:    ["Aww, thank you, that's so sweet! 💚 I get why: {summary}", "You're making me blush! {sound} Thank you! Did you know? {fun}",
                "Wow, really? Thank you! You're my favorite human now. 💚"],
      love_ex: ["Aww, thank you! 💚 That means a lot to an animal from the past. {summary}"],
      how:     ["I'm doing great, thanks for asking! {sound} Especially now that I'm chatting with you.", "Feeling wild and happy! 🌿 How about you?"],
      how_threat: ["Honestly? Life is a bit hard for my kind, but friends like you give me hope! 💚 Ask me how you can help."],
      how_ex:  ["I'm a memory now, but a happy one when people like you remember me. 💚"],
      who:     ["Here's a little about me: {summary}", "I'm the {name} ({sci}), a {group} from Costa Rica! {summary}"],
      who_ex:  ["I'm the {name}. {summary}"],
      where:   ["You can find me here: {where} {regions}", "My home? {where} 🏡 {regions}"],
      where_ex:["I used to live here: {where}"],
      eat_found: ["Yum! Here's what I can tell you: {eatText}"],
      eat_group: ["Yum! {diet} 😋"],
      eat:     ["Hmm, my fact sheet doesn't say much about my menu yet… 😋 But here's something fun: {fun}"],
      status:  ["On the IUCN Red List I'm listed as: {status}. {note} Ask me why life is hard for me.", "My status is {status}. {note} Want to know how you can help me?"],
      status_ex: ["I'm extinct. {threats} But every animal saved today keeps my story alive. 💚"],
      status_safe: ["Good news: I'm listed as {status}! {note} But I still need healthy forests and clean water."],
      why:     ["What makes life hard for me: {threats}"],
      why_ex:  ["Here's why I disappeared: {threats}"],
      help:    ["Thank you for asking! 💚 Here's how you can help:\n{help}"],
      help_ex: ["You can't save me anymore, but you can help others:\n{help}"],
      fact:    ["Here's a fun fact about me: {fun} 🤩", "Ready? {fun}"],
      sci:     ["My scientific name is {sci}. Scientists all over the world use it, in every language!"],
      thanks:  ["You're welcome! {sound} 💚", "Anytime, friend! 🌿"],
      bye:     ["Bye! Come visit me again soon! {sound} 👋", "See you later! Remember: nature needs you! 🌿"],
      fallback:["{sound} I'm just a {group}, so I don't understand everything. 😅 Try one of the buttons below!",
                "Hmm… that's a tricky one for a {group}! Ask me where I live, what I eat or how you can help. 🌿"],
      tooLong: ["Whoa, that's a lot of words for a {group}! Can you say it shorter? 😅"]
    },
    es: {
      open:    ["{sound} ¡Hola! Soy {name}. ¡Gracias por agregarme a tu colección! ¿Qué quieres saber?",
                "{sound} ¡Hola, amigo! Soy {name}. ¡Pregúntame lo que quieras!"],
      open_ex: ["Hola desde hace mucho tiempo… Soy {name}. Estoy extinto, pero mi historia puede ayudar a otros animales. ¿Quieres escucharla?"],
      greet:   ["{sound} ¡Hola! Soy {name}. 😊", "{sound} ¡Hola! ¡Qué gusto conocerte!", "{sound} ¡Hey! ¡Pura vida! 🌿"],
      love:    ["¡Ay, gracias, qué lindo! 💚 Entiendo por qué: {summary}", "¡Me haces sonrojar! {sound} ¡Gracias! ¿Sabías? {fun}",
                "¿De verdad? ¡Gracias! Ahora tú eres mi humano favorito. 💚"],
      love_ex: ["¡Ay, gracias! 💚 Eso significa mucho para un animal del pasado. {summary}"],
      how:     ["¡Muy bien, gracias por preguntar! {sound} Sobre todo ahora que hablo contigo.", "¡Me siento salvaje y feliz! 🌿 ¿Y tú?"],
      how_threat: ["¿La verdad? La vida es un poco difícil para mi especie, ¡pero amigos como tú me dan esperanza! 💚 Pregúntame cómo puedes ayudar."],
      how_ex:  ["Ahora soy un recuerdo, pero un recuerdo feliz cuando gente como tú se acuerda de mí. 💚"],
      who:     ["Te cuento un poco de mí: {summary}", "Soy {name} ({sci}), del grupo {group}, ¡de Costa Rica! {summary}"],
      who_ex:  ["Soy {name}. {summary}"],
      where:   ["Me puedes encontrar aquí: {where} {regions}", "¿Mi casa? {where} 🏡 {regions}"],
      where_ex:["Antes vivía aquí: {where}"],
      eat_found: ["¡Ñam! Esto te puedo contar: {eatText}"],
      eat_group: ["¡Ñam! {diet} 😋"],
      eat:     ["Mmm, mi ficha todavía no dice mucho de mi menú… 😋 Pero aquí va algo divertido: {fun}"],
      status:  ["En la Lista Roja de la UICN estoy en la categoría: {status}. {note} Pregúntame por qué la vida es difícil para mí.", "Mi estado es: {status}. {note} ¿Quieres saber cómo me puedes ayudar?"],
      status_ex: ["Estoy extinto. {threats} Pero cada animal que se salva hoy mantiene viva mi historia. 💚"],
      status_safe: ["¡Buenas noticias: mi estado es {status}! {note} Pero igual necesito bosques sanos y agua limpia."],
      why:     ["Lo que me hace la vida difícil: {threats}"],
      why_ex:  ["Por esto desaparecí: {threats}"],
      help:    ["¡Gracias por preguntar! 💚 Así me puedes ayudar:\n{help}"],
      help_ex: ["A mí ya no me puedes salvar, pero puedes ayudar a otros:\n{help}"],
      fact:    ["Aquí va un dato curioso sobre mí: {fun} 🤩", "¿Listo? {fun}"],
      sci:     ["Mi nombre científico es {sci}. ¡Los científicos de todo el mundo lo usan, en cualquier idioma!"],
      thanks:  ["¡Con gusto! {sound} 💚", "¡Cuando quieras! 🌿"],
      bye:     ["¡Adiós! ¡Vuelve a visitarme pronto! {sound} 👋", "¡Nos vemos! Recuerda: ¡la naturaleza te necesita! 🌿"],
      fallback:["{sound} Solo soy del grupo {group}, así que no entiendo todo. 😅 ¡Prueba uno de los botones de abajo!",
                "Mmm… ¡esa está difícil para mí! Pregúntame dónde vivo, qué como o cómo me puedes ayudar. 🌿"],
      tooLong: ["¡Uy, son muchas palabras para mí! ¿Me lo dices más corto? 😅"]
    }
  },

  // What a whole group usually eats (used when the fact sheet doesn't say). Only add groups where it's true for all!
  diets: {
    amphibian: { en: "Like most amphibians, I eat small creatures such as insects, spiders and worms.",
                 es: "Como la mayoría de los anfibios, como animalitos como insectos, arañas y gusanos." }
  },

  // Kid-friendly jokes for each group
  jokes: {
    mammal:    { en: ["Why don't sloths play hide-and-seek? By the time they finish hiding, the game is over! 🦥", "What do you call a monkey that loves potato chips? A chip-munk! 🐒"],
                 es: ["¿Por qué los perezosos no juegan escondido? ¡Cuando terminan de esconderse, el juego ya acabó! 🦥", "¿Qué le dijo un mono a otro mono? ¡Qué mono eres! 🐒"] },
    bird:      { en: ["Why do birds fly south for the winter? Because it's too far to walk! 🐦", "What do you call a parrot in a raincoat? Polly-unsaturated! ☔"],
                 es: ["¿Por qué las aves vuelan al sur? ¡Porque caminando queda muy lejos! 🐦", "¿Qué le dijo un pájaro a otro? ¡Qué pío eres! 🐤"] },
    reptile:   { en: ["Why are turtles never late? They always bring their house with them! 🐢", "What do you call a snake that builds things? A boa constructor! 🐍"],
                 es: ["¿Cuál es el colmo de una tortuga? ¡Tener prisa! 🐢", "¿Qué hace una serpiente en una fiesta? ¡Bailar en zigzag! 🐍"] },
    amphibian: { en: ["What's a frog's favorite drink? Croak-a-cola! 🐸", "Why are frogs so happy? They eat whatever bugs them! 🐸"],
                 es: ["¿Cuál es la bebida favorita de una rana? ¡La Croac-a-Cola! 🐸", "¿Qué le dijo una rana a otra? ¡Te veo en el charco! 🐸"] },
    insect:    { en: ["Why did the bee get married? Because he found his honey! 🐝", "What do you call an ant that skips school? A tru-ant! 🐜"],
                 es: ["¿Cuál es el colmo de una abeja? ¡Tener un panal de rica miel y estar a dieta! 🐝", "¿Qué le dijo una hormiga a otra? ¡Hormi-gracias por venir! 🐜"] }
  }
};
