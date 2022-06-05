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
      nationality: 'American',
    },
  ],
  locations: {
    'Train station': {
      name: 'Train station',
      background: 'trainstation.jpg',
      music: 'music/trainstation.mp3',
      conversation: [
        {
          text: "Charlie arrives in Tokyo, dead tired and jet-lagged. He can't read any signs and people are reluctant to talk to him so he starts questioning his resolve for this exchange trip. His teacher claimed that the Japanese study English as a compulsory subject but Charlie suspects he was deceived.",
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
          character: 'Charlie',
          mood: 'charlie_surprised.png',
        },
        {
          text: "Damn, I should have taken that Japanese language preparatory course when they were offering it. All I know are a few generic phrases from anime I've watched.",
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
          text: "My house is quite far from the station, let's take a takushii.",
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_neutral.png',
        },
        {
          text: 'Take what?!',
          type: 'monologue',
          character: 'Charlie',
          mood: 'charlie_surprised.png',
        },
        {
          text: 'Takushii タクシー',
          type: 'quiz',
          character: 'Charlie',
          mood: 'charlie_surprised.png',
          options: [
            { option: 'an underground train' },
            { option: 'a tram' },
            { option: 'a taxi' },
            { option: 'She wants to see if I did my taxes right?' },
          ],
          nextLocation: 'Home',
        },
      ],
    },
    Home: {
      name: 'Home',
      background: 'home.jpg',
      music: 'home.mp3',
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
          text: "It's quite hot but don't worry, we have eakon.",
          type: 'dialogue',
          character: 'Hanako',
          mood: 'hanako_neutral.png',
        },
        {
          text: 'They have what?!',
          type: 'quiz',
          character: 'Charlie',
          mood: 'charlie_surprised.png',
        },
        {
          text: 'Eakon エアコン',
          type: 'quiz',
          character: 'Charlie',
          mood: 'charlie_surprised.png',
          options: [
            { option: 'cooler' },
            { option: 'fridge' },
            { option: 'ice-cream' },
            { option: 'air conditioning' },
          ],
        },
      ],
    },
  },
};
