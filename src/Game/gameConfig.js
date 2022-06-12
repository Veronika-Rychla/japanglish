export const gameConfig = {
  characters: [
    {
      name: 'Hanako',
      gender: 'female',
      nationality: 'Japanese',
    },
    {
      name: 'Charlie',
      gender: 'male',
      nationality: 'Canadian',
    },
  ],
  locations: {
    'Train station': {
      name: 'Train station',
      background: 'trainstation.jpg',
      music: '/music/trainstation.mp3',
      conversation: [
        {
          text: 'Charlie arrives in Tokyo, dead tired and jet-lagged.',
          type: 'description',
          character: '',
          mood: '',
        },
        {
          text: "He can't read any signs and people are reluctant to talk to him so he starts questioning his resolve for this exchange trip.",
          type: 'description',
          character: '',
          mood: '',
        },
        {
          text: 'His teacher claimed that the Japanese study English as a compulsory subject but Charlie suspects he was deceived.',
          type: 'description',
          character: '',
          mood: '',
        },
        {
          text: "I have a feeling that the lady who sold me the train ticket did it out of mercy and to get rid of me because she didn't even take my money.",
          type: 'dialogue',
          character: 'Charlie',
          mood: 'charlie_sad.png',
        },
        {
          text: "Charlie looks around, nervous. People stare at him because he's the only foreigner here. He isn't in a tourist destination after all.",
          type: 'description',
          character: 'Charlie',
          mood: 'charlie_neutral.png',
        },
        {
          text: "Am I even in the right town? Isn't someone supposed to pick me up?",
          type: 'dialogue',
          character: 'Charlie',
          mood: 'charlie_surprised.png',
        },
        {
          text: "He tries talking to the people nearby and some of them answer something that might be English but he can't understand a word.",
          type: 'description',
        },
        {
          text: 'Damn, I should have taken that Japanese language preparatory course when they were offering it.',
          type: 'dialogue',
          character: 'Charlie',
          mood: 'charlie_sad.png',
        },
        {
          text: " All I know are a few generic phrases from anime I've watched.",
          type: 'dialogue',
          character: 'Charlie',
          mood: 'charlie_sad.png',
        },
        {
          text: 'Suddenly, Charlie gets startled by a cheerful female voice.',
          type: 'description',
          character: 'Charlie',
          mood: 'charlie_excited.png',
        },
        {
          text: 'Yahooo!',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_excited.png',
        },
        {
          text: "Is yahoo a common greeting here? I thought it's a search engine.",
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_surprised.png',
        },
        {
          text: 'Konnichiwa, are you the person who is supposed to pick me up?',
          type: 'dialogue',
          character: 'Charlie',
          mood: 'charlie_neutral.png',
        },
        {
          text: 'Yep, Hanako desu. Naisu to meet yuu.',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_happy.png',
        },
        {
          text: "At least she speaks English a bit. But what's with those clothes? Is she into that kind of fashion?",
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_neutral.png',
        },
        {
          text: "My house is quite far from the station, let's take a タクシー.",
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_happy.png',
        },
        {
          text: 'Take what?!',
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_surprised.png',
        },
        {
          text: 'Takushii',
          type: 'quiz',
          options: [
            { option: 'an underground train' },
            { option: 'a tram' },
            { option: 'a taxi', correct: true },
            { option: 'She wants to see if I did my taxes right?' },
          ],
        },
        {
          text: 'Say, do you have a スマホ?',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_excited.png',
        },
        {
          text: 'What is she talking about now?',
          type: 'dialogue',
          character: 'Charlie',
          mood: 'charlie_sad.png',
        },
        {
          text: 'Sumaho',
          type: 'quiz',
          options: [
            { option: 'smart watch' },
            { option: 'smart phone', correct: true },
            { option: 'credit card' },
            { option: 'cash' },
          ],
        },
        {
          text: "She takes Charlie's mobile phone and calls for a taxi.",
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_happy.png',
          nextLocation: 'Home',
        },
      ],
    },
    Home: {
      name: 'Home',
      background: 'home.jpg',
      music: '/music/home.mp3',
      conversation: [
        {
          text: 'That was a weird ride. Hanako kept talking but I barely understood half of what she was saying. At least I could see the city.',
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_neutral.png',
        },
        {
          text: 'Tadaima! Take off your shoes here, Charlie.',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_happy.png',
        },
        {
          text: "Right, I almost forgot the Japanese hate when their guests don't change into slippers.",
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_neutral.png',
        },
        {
          text: "It's quite hot but don't worry, we have エアコン.",
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_neutral.png',
        },
        {
          text: 'They have what?!',
          type: 'dialogue',
          character: 'Charlie',
          mood: 'charlie_surprised.png',
        },
        {
          text: 'Eakon',
          type: 'quiz',
          options: [
            { option: 'cooler' },
            { option: 'fridge' },
            { option: 'ice-cream' },
            { option: 'air conditioning', correct: true },
          ],
        },
        {
          text: 'This is your room. Feel free to use the ラジオ and テーブル. ライト is here.',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_neutral.png',
        },
        {
          text: 'What what WHAT?',
          type: 'dialogue',
          character: 'Charlie',
          mood: 'charlie_sad.png',
        },
        {
          text: 'Rajio - Teeburu - Raito',
          type: 'quiz',
          options: [
            { option: 'TV - tea bags - armchair' },
            { option: 'Radio - table - light', correct: true },
            { option: 'Rations - bubble tea - cereal' },
            { option: 'Razor - teapot - right' },
          ],
        },
        {
          text: "Just watch for our ペット, don't let her on the ベッド.",
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_happy.png',
        },
        {
          text: 'petto - beddo',
          type: 'quiz',
          options: [
            { option: 'Cat - dining table' },
            { option: 'Dog - sofa' },
            { option: 'Parrot - suitcase' },
            { option: 'Pet - bed', correct: true },
          ],
        },
        {
          text: 'Oyasumi! Good night!',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_excited.png',
        },
        {
          text: 'Oyasumi, Hanako.',
          type: 'dialogue',
          character: 'Charlie',
          mood: 'charlie_happy.png',
          nextLocation: 'Shopping centre',
        },
      ],
    },
    'Shopping centre': {
      name: 'Shopping centre',
      background: 'shoppingcentre.jpg',
      music: '/music/shoppingcentre.mp3',
      conversation: [
        {
          text: 'Gomen, my parents are still on their business trip and I can’t really cook. Let’s go to the デパート to eat.',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_neutral.png',
        },
        {
          text: 'Okay, you can do this. She wants us to go where?',
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_excited.png',
        },
        {
          text: 'depaato ',
          type: 'quiz',
          options: [
            { option: 'restaurant' },
            { option: 'bistro' },
            { option: 'department store', correct: true },
            { option: 'street kiosk' },
          ],
        },
        {
          text: "Let's go then, I'm super hungry!",
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_happy.png',
        },
        {
          text: 'Ok, the names are differently pronounced but I can see the brands at least.',
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_neutral.png',
        },
        {
          text: 'I think you can never go wrong with McDonalds when unsure in a foreign country.',
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_neutral.png',
        },
        {
          text: "The man behind the counter doesn't look like he's thrilled to speak English so Hanako offers to translate. For better or the worse.",
          type: 'description',
        },
        {
          text: 'Hmm… what shall we have? ハンバーガー? ソーセージ?',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_excited.png',
        },
        {
          text: 'Hambaagaa - Sooseeji ',
          type: 'quiz',
          options: [
            { option: 'Hamburger - sausage', correct: true },
            { option: 'Hamburger - meat balls' },
            { option: 'Special kind of ham from Hamburg - cheese' },
            { option: 'European ham - fried cheese' },
          ],
        },
        {
          text: 'フライドポテト? ',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_excited.png',
        },
        {
          text: 'Fraido potato',
          type: 'quiz',
          options: [
            { option: 'Potato croquette' },
            { option: 'Filled dumplings' },
            { option: 'Mashed potatoes' },
            { option: 'Chips', correct: true },
          ],
        },
        {
          text: ' サラダ?',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_excited.png',
        },
        {
          text: 'Sarada',
          type: 'quiz',
          options: [
            { option: 'Salt' },
            { option: 'Salad', correct: true },
            { option: 'Sardines' },
            { option: 'Salary? Now?' },
          ],
        },
        {
          text: ' サンドイッチ?',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_excited.png',
        },
        {
          text: 'Sandoicchi',
          type: 'quiz',
          options: [
            { option: 'Toast bread' },
            { option: 'Sunny-side eggs' },
            { option: 'Sand? We are going to the beach?' },
            { option: 'Sandwich', correct: true },
          ],
        },
        {
          text: 'What the hell did I order?',
          type: 'dialogue',
          character: 'Charlie',
          mood: 'charlie_angry.png',
        },
        {
          text: "And for a dessert, let's go to Starbucks! Let's have アイスコーヒー!",
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_happy.png',
        },
        {
          text: 'aisu koohii',
          type: 'quiz',
          options: [
            { option: 'Iced coffee', correct: true },
            { option: 'Decaf coffee' },
            { option: 'Coffee with ice-cream' },
            { option: 'Pumpkin latté' },
          ],
        },
        {
          text: 'Oh, look, they have a matcha キットカット!',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_excited.png',
        },
        {
          text: "I know matcha, that's Japanese powder green tea, but the second thing?",
          type: 'dialogue',
          character: 'Charlie',
          mood: 'charlie_surprised.png',
        },
        {
          text: 'kitto katto',
          type: 'quiz',
          options: [
            { option: 'Cake' },
            { option: 'Milkshake' },
            { option: 'Something with cutting?' },
            { option: 'Kit Kat', correct: true },
          ],
        },
        {
          text: "Don't tell me you don't have a matcha Kit Kat in Canada? Poor you!",
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_sad.png',
        },
        {
          text: "Let's also get my parents some ケーキ  when they come back. And for us, we can buy some アイスクリーム.",
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_neutral.png',
        },
        {
          text: 'Keeki - Aisukuriimu ',
          type: 'quiz',
          options: [
            { option: 'Candy - lollipop' },
            { option: 'Cake - ice-cream', correct: true },
            { option: 'Candy - whipped cream' },
            { option: 'Quiche - take away ice coffee' },
          ],
        },
        {
          text: 'Grrr, サービス is really lacking today.',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_angry.png',
        },
        {
          text: 'Saabisu ',
          type: 'quiz',
          options: [
            { option: 'waiter' },
            { option: 'Sweet filling' },
            { option: 'packaging' },
            { option: 'service', correct: true },
          ],
        },
        {
          text: "Oh, we forget to buy some ビール for my parents, let's go to the コンビニ near my house.",
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_surprised.png',
        },
        {
          text: "That's beer, right? But the other word?",
          type: 'dialogue',
          character: 'Charlie',
          mood: 'charlie_neutral.png',
        },
        {
          text: 'konbini',
          type: 'quiz',
          options: [
            { option: 'convenience store', correct: true },
            { option: 'supermarket' },
            { option: 'liquor shop' },
            { option: 'kiosk' },
          ],
        },
        {
          text: "Damn, they won't sell アルコール to the minors.",
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_sad.png',
        },
        {
          text: 'arukooru ',
          type: 'quiz',
          options: [
            { option: 'fizzy drink' },
            { option: 'alkaloid batteries' },
            { option: 'Coca-cola' },
            { option: 'alcohol', correct: true },
          ],
        },
        {
          text: "I can't believe I survived today. I didn't even kill myself at the エスカレーター how they call it.",
          type: 'dialogue',
          character: 'Charlie',
          mood: 'charlie_happy.png',
        },
        {
          text: 'esukareetaa ',
          type: 'quiz',
          options: [
            { option: 'escalator', correct: true },
            { option: 'elevator' },
            { option: 'escalating bus line' },
            { option: 'automatic door' },
          ],
        },
        {
          text: "Sleep tight, tomorrow we're visiting my school!",
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_happy.png',
          nextLocation: 'School',
        },
      ],
    },
    School: {
      name: 'School',
      background: 'school.jpg',
      music: '/music/school.mp3',
      conversation: [
        {
          text: 'Welcome to my school, Charlie!',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_excited.png',
        },
        {
          text: "Cool, I've always wanted to visit an authentic Japanese school. It looks exactly like from all those anime I'm watching.",
          type: 'dialogue',
          character: 'Charlie',
          mood: 'charlie_excited.png',
        },
        {
          text: 'Do you want to see a lesson? I think they should have English now.',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_happy.png',
        },
        {
          text: "Sweet, I'll finally see how they teach it. Maybe I'll discover why their pronunciation is so… off the mark.",
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_excited.png',
        },
        {
          text: 'Being the only foreigner in the class and a native speaker, Charlie naturally becomes a spectacle.',
          type: 'description',
        },
        {
          text: "Won't we speak? All they're doing are grammar exercises… non-stop!",
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_surprised.png',
        },
        {
          text: 'The teacher then asks Charlie if he likes playing バレーボール.',
          type: 'description',
        },
        {
          text: 'bareebooru ',
          type: 'quiz',
          options: [
            { option: 'basketball' },
            { option: 'handball' },
            { option: 'football' },
            { option: 'volleyball', correct: true },
          ],
        },
        {
          text: "Why are they looking at me as if they're doubting I'm a native speaker?",
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_angry.png',
        },
        {
          text: 'Charlie, give us your メール.',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_excited.png',
        },
        {
          text: 'My what?',
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_sad.png',
        },
        {
          text: 'meeru ',
          type: 'quiz',
          options: [
            { option: 'phone number' },
            { option: 'email', correct: true },
            { option: 'social media profile' },
            { option: 'lunch money' },
          ],
        },
        {
          text: 'Cool. ハイタッチ for that!',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_happy.png',
        },
        {
          text: 'Uff, she wants me to…?',
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_surprised.png',
        },
        {
          text: 'haitacchi ',
          type: 'quiz',
          options: [
            { option: 'clap my hands' },
            { option: 'touch her hair' },
            { option: 'high five', correct: true },
            { option: 'cheer' },
          ],
        },
        {
          text: 'Say… when I visit America, could you take me to ディズニーランド?',
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_excited.png',
        },
        {
          text: 'Dizuniirando ',
          type: 'quiz',
          options: [
            { option: 'Dinosaurland' },
            { option: 'Star Wars museum' },
            { option: 'Dakota' },
            { option: 'Disneyland', correct: true },
          ],
        },
        {
          text: 'Okay, sure, why not. Our exchange trip story will continue… this time in my home country.',
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_happy.png',
        },
        {
          text: 'The HAPPY END',
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_happy.png',
          nextLocation: '/credits',
        },
      ],
    },
  },
};
