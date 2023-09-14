import CrystalBarsIcon from "virtual:icons/game-icons/crystal-bars";
import CowboyBootIcon from "virtual:icons/game-icons/cowboy-boot";
import StarMedalIcon from "virtual:icons/game-icons/star-medal";
import PirateFlagIcon from "virtual:icons/game-icons/pirate-flag";
import ThrownKnifeIcon from "virtual:icons/game-icons/thrown-knife";
import FairyIcon from "virtual:icons/game-icons/angel-wings";
import TradeIcon from "virtual:icons/game-icons/gem-chain";
import TiaraIcon from "virtual:icons/game-icons/tiara";
import CrystalBallIcon from "virtual:icons/game-icons/crystal-ball";

export interface Character {
  path: string;
  icon: any;
  actor: string;
  character: string;
  tailwindColor: string;
  subtitle: string;
  blurb: string;
  riddle: string;
  answer: string;
  costume: string;
  images?: string[];
}

export const characters: Character[] = [
  {
    path: "collin",
    icon: CowboyBootIcon,
    actor: "Collin Webb",
    character: "Rex Randall",
    tailwindColor: "text-yellow-800",
    subtitle: "The Legendary Space Cowboy",
    blurb: `Rex is renowned across star systems for both his quick draw and silver tongue. Riding the astral winds aboard his famed ship, "The Cosmic Steed," he's celebrated for his tales of wild frontier adventures. Rex has even mapped out worlds that many once believed to be mere myths.`,
    riddle: `Not a gate or a door, but named as such, I warp time and space with a massive clutch. Through me, galaxies might connect, but entering me is a risky prospect. What am I?`,
    answer: `wormhole`,
    costume: `Opt for a jacket or vest made of material that resembles the night sky, glittering with stars. Underneath, wear a rugged shirt that hints at the adventures you've been through. While your quick draw is legendary, a futuristic holster (or faux laser gun) at your side would be essential. Make it look sleek and metallic. Choose boots that have a celestial touch, maybe with silver or holographic finishes. Top off your look with a hat that has space age modifications - perhaps embedded LEDs or a shimmering band. As someone who's mapped out mythical worlds, carry a futuristic "map" or a space-age compass. It not only adds depth to your character but showcases your explorer side.`,
    images: [
      "/rex/_3e983e71-aec8-41c6-a66f-5d01fa2de4f1.jpeg",
      "/rex/_16aaa4e0-1a70-43fa-9fb2-5d4cd3466d77.jpeg",
      "/rex/_39298a04-0684-43fa-bf70-a62d31514519.jpeg",
      "/rex/_ea44a7e1-7a0b-46a9-ba62-e681082579c5.jpeg",
      "/rex/_a0730b5a-da4d-4620-b637-63165238029c.jpeg",
    ],
  },
  {
    path: "dru",
    icon: TradeIcon,
    actor: "Dru Scott",
    character: "Eldric Estallor",
    tailwindColor: "text-green-700",
    subtitle: "The Renowned Merchant",
    blurb: `Eldric hails from the bustling trade moons of Mercara, specializing in rare cosmic artifacts and ancient interstellar relics. Among elite circles, his name is synonymous with procuring items that offer power, knowledge, or insights into the galaxy's distant past.`,
    riddle: `Not a beat of a heart, nor a flash in the pan, but I rhythmically emit, from a star's lifespan. Bright, rapid, and distant, in radio waves, I play. Who am I, showing patterns in such a way?`,
    answer: `pulsar`,
    costume: `Think deep-space elegance. Select a tailored suit or robe in galactic shades like deep blues, silvers, or metallics. The material should give off a subtle shimmer, reflecting your stature in the celestial trade scene.Adorn your outfit with "cosmic artifacts." A ring or pendant with a "mysterious" glowing gem or a merchant's satchel filled with "ancient" interstellar trinkets could be the perfect touch.Choose sleek, polished boots or shoes to convey your elite status in the galaxy's marketplaces. Remember, every piece of your ensemble tells of your vast trading voyages and connections.    `,
    images: [
      "/eldric/_e4916b49-ee7d-4b12-9b1a-1fb05d36e202.jpeg",
      "/eldric/_fa06af69-4f66-4352-b2b7-4bfda0f96d9b.jpeg",
      "/eldric/_34c9389e-d9a1-4b58-874d-9a81edd38e7a.jpeg",
      "/eldric/_9f20a1ee-251c-4846-b8c2-b38a003bfaaf.jpeg",
      "/eldric/_56a3849c-c7ac-4b83-845a-b379e3b57b6a.jpeg",
    ],
  },
  {
    path: "zach",
    icon: StarMedalIcon,
    actor: "Zach Bagley",
    character: "Draken D'Lor",
    tailwindColor: "text-cyan-700",
    subtitle: "The Disciplined Space Military Officer",
    blurb: `Draken stands as a symbol of honor and discipline within the cosmic forces. Having clashed with marauding space pirates and navigated treacherous black holes, he is both revered by his troops and feared by his enemies, never shying away from the face of danger.`,
    riddle: `An ancient tool I am to guide, with the star Polaris as my pride. Travelers in the dark I've led, yet I'm not used as much in this age's spread. What am I?`,
    answer: `astrolabe`,
    costume: `Step into Draken's boots by donning a sleek, futuristic military uniform in deep navy or black with silver accents, denoting his rank and experiences. A tailored jacket with epaulets, paired with matching trousers and polished space-age boots, would befit an officer of his stature. Wear medals, pins, or badges to signify the many battles won and challenges overcome. A utility belt, equipped with faux-futuristic tools or gadgets, showcases his readiness for any situation. Consider a rugged sidearm holster or an intricately designed space saber to showcase his combat readiness and martial expertise. Finish off with a dark, commanding cap or helmet and perhaps a holographic wrist communicator or arm shield. `,
    images: [
      "/draken/_2ee75a26-98b3-4967-92f8-151c1062c9ca.jpeg",
      "/draken/_505f666e-7cca-4905-97e2-6cbd6005aae8.jpeg",
      "/draken/_d5593087-1ee1-4c3e-968c-f58db161a387.jpeg",
      "/draken/_dc47d533-fa6f-4643-b141-674899d6730a.jpeg",
      "/draken/_66ffb7a6-31d9-459f-81e7-464b099551dc.jpeg",
    ],
  },
  {
    path: "andrew",
    icon: CrystalBarsIcon,
    actor: "Andrew Lee",
    character: "Viran Valerian",
    tailwindColor: "text-teal-500",
    subtitle: "The Luminous Crystalline Cave Alien",
    blurb: `His gleaming features cast brilliant patterns of refracted light, and his profound mastery over minerals and gem energies marks him as an esteemed player in the galaxy's most exclusive trades. Viran remains a steadfast guardian of his home planet's enigmas and a notable force in intergalactic trade.`,
    riddle: `I'm a star's final act, in brilliant displays, a cosmic explosion, a supernova's remains. What am I?`,
    answer: `nebula`,
    costume: `Embrace Viran's radiant nature with an outfit shimmering in metallic or iridescent fabrics. Opt for a fitted suit or tunic, adorned with faux crystal embellishments, capturing the essence of the crystalline caves. Accentuate with a cloak or drape, sprinkled with glow-in-the-dark elements, to mimic his gleaming aura. Footwear could be silver or crystal-clear boots. Given Viran's trade expertise, accessorize with necklaces or bracelets made of faux gems or mineral-like materials. Finalize the look with luminescent makeup or body paint, highlighting features that sparkle in different lights. As Viran, you're not just glowing; you're the embodiment of your celestial home.    `,
    images: [
      '/viran/_3e72d443-6a0e-4a7b-9f06-2858295a406e.jpeg',
      "/viran/_5de32a00-e3d3-47b7-b9f6-322335c5af81.jpeg",
      "/viran/_5d792842-2e47-4140-be1b-0dd7107b8c6b.jpeg",
      "/viran/_3b1c68dd-99e9-4249-871f-3cd946b4db50.jpeg",
      "/viran/_7bce48ee-1a56-429d-832c-558b892372bc.jpeg",
    ]
  },
  {
    path: "joseph",
    icon: PirateFlagIcon,
    actor: "Joseph Doman",
    character: "Thane Tiberius",
    tailwindColor: "text-blue-400",
    subtitle: "The Charismatic Space Pirate",
    blurb: `As a notorious figure, Thane combines allure with astuteness, making him one of the most evasive in the galaxy. While he's perpetually in pursuit of the grandest heist, rumors also abound about his days as a space smuggler, a period marked by a string of elusive escapes and unmatched craftiness.`,
    riddle: `Though named for the god of war, my surface bears no life so far. With mountains tall and valleys grand, who am I, with polar ice and desert sand?`,
    answer: `mars`,
    costume: `Step into the spotlight as the galaxy's most dashing rogue. For attire, consider a tailored jacket or coat, perhaps with ornate embroidery or patches. Underneath, a crisp shirt, dark pants, and rugged boots will complete the look. A vest with multiple pockets (for all those stolen treasures) and a wide belt with a statement buckle would add to the pirate charm. Given your smuggling past, accessories could include gloves (for those stealthy heists), a sash, and even a pirate hat with a futuristic twist. If you're feeling particularly bold, a faux drone on your shoulder could be a nod to the classic pirate companions. Incorporate elements of wear and tear to show the battles you've faced and narrow escapes you've had. `,
    images: [
      "/thane/_87f3147f-fd81-4e81-9037-d76b7cd62750.jpeg",
      "/thane/_6b268baf-2a54-49a9-8de1-0a7753d3e82b.jpeg",
      "/thane/_d682aa3e-9705-405e-aa0b-b7113a44af3f.jpeg",
      "/thane/_adde46db-d357-40d4-9a32-dea2f7375168.jpeg",
      "/thane/_89475589-c2b2-4d19-84aa-f55fe15074df.jpeg",
      "/thane/_44b0759b-69e5-42e5-8a66-9a48ade5ecef.jpeg",
    ],
  },
  {
    path: "rachel",
    icon: ThrownKnifeIcon,
    actor: "Rachel Bagley",
    character: "Adria Alden",
    tailwindColor: "text-red-800",
    subtitle: "The Elusive Space Bounty Hunter",
    blurb: `Renowned for her unyielding pursuit across galaxies and always securing her target, Adria moves with an undeniable stealth. Her razor-sharp instincts and peerless combat prowess make her both feared by those she hunts and respected by those familiar with her legendary feats.`,
    riddle: `I look like a star, but I'm not one. I'm far and bright, but I'm not a sun. I feed on black holes, but I don't get eaten. I'm old and fast, but I'm not beaten. What am I?`,
    answer: `quasar`,
    costume: `You're a hunter among the stars. Opt for attire that speaks to a galactic pursuit: think dark leather or metallic materials paired with boots made for a swift chase. Pockets, gloves, and anything tactical is appropriate. If interested, you may accentuate a scar or two on your face or arm. For a more sophisticated approach, consider a sleek, starlit gown that whispers of the cosmos.No matter the opulence of your attire, your experienced and stealthy nature ensures you'll always have the upper hand in any situation.Don't forget to accessorize with faux weapons, strap holsters, or even a touch of glitter on your face to hint at the vast expanse you roam.`,
    images: [
      "/adria/ranch.jpg",
      "/adria/ranch 1.jpg",
      "/adria/ranch 2.jpg",
      "/adria/ranch 3.jpg",
      "/adria/ranch 4.jpg",
      "/adria/ranch 5.jpg",
      "/adria/ranch 6.jpg",
    ]
  },
  {
    path: "karli",
    icon: FairyIcon,
    actor: "Karli Scott",
    character: "Zara of Zhentar",
    tailwindColor: "text-yellow-100",
    subtitle: "The Regal Faerie Alien",
    blurb: `Zara, with her bioluminescent glow and radiant wings, hails from a realm where starlight is both rare and revered. Possessing a song-like voice, her presence has the power to calm tempestuous hearts and captivate even the most stoic of souls.`,
    riddle: `I have rings but not a finger, storms that forever linger. Though not the largest, I stand out. Guess me, and you’ll have no doubt. What am I?`,
    answer: `saturn`,
    costume: `You're the embodiment of an interstellar fairy tale. Your attire should shimmer and glow, evoking the bioluminescent magic of your homeland. Go for ethereal gowns in silvery or pearlescent hues that flow as you move. Consider adding iridescent makeup or body paint to further enhance your otherworldly glow. No ensemble would be complete without wings, either crafted from translucent materials or LED-embedded for an extra touch of luminance. And, to capture the essence of your celestial voice, perhaps wear a sparkling choker or necklace that captures the light every time you speak.`,
    images: [
      '/zara/_434786ef-67a1-495d-92d3-dfbd394394ca.jpeg',
      '/zara/_00dc4e64-5aef-4e60-95aa-01541cf4ebe5.jpeg',
      '/zara/_3b3df338-6bc9-43fa-9f24-76419dfa872f.jpeg',
      '/zara/_f186cf4d-a06a-4fdf-aac8-cccb006a36b8.jpeg',
      '/zara/_ab43957a-a93b-49a7-ac3d-0ac1f7f91b94.jpeg',
    ]
  },
  {
    path: "miranda",
    icon: CrystalBallIcon,
    actor: "Miranda Doman",
    character: "Luna Lysandra",
    tailwindColor: "text-indigo-500",
    subtitle: "The Enigmatic Mistress of Whispers",
    blurb: `Shrouded in mystery, Luna is the foremost intelligence connoisseur, crafting complex networks of information, secrets, and clandestine endeavors. Whether it's the intrigues of planetary magnates or the movements of space rogues, her expansive web of sources misses nothing.`,
    riddle: `I'm the darkness that isn't night, the space void of stellar light. Absorbing all, even a photon's flight. What am I?`,
    answer: `black hole`,
    costume: `As the grand architect of galaxy-spanning information networks, your attire should be as intricate and enchanting as the webs you weave. Choose a dress or ensemble in deep, cosmic shades like midnight blues or nebula purples, adorned with shimmering patterns to represent constellations. Accessories might include a cloak, sheer cape, or veil, symbolizing your love for secrecy, and delicate jewelry pieces that hint at the countless secrets you hold. Glitter or jewels adorning your face, hands, or arms would be appropriate. Your ensemble should help ensure you remain an enigma, always observing, always listening.    `,
    images: [
      '/luna/miranda 1.jpg',
      '/luna/miranda 2.jpg',
      '/luna/miranda 3.jpg',
      '/luna/miranda 4.jpg',
      '/luna/miranda 5.jpg',
      '/luna/miranda 6.jpg',
    ]
  },
  {
    path: "eliza",
    icon: TiaraIcon,
    actor: "Eliza Webb",
    character: "Seraphina Selene",
    tailwindColor: "text-pink-400",
    subtitle: "The Celestial Space Princess",
    blurb: `Seraphina Selene is the celestial space princess of the Astralon Dominion, a domain sculpted from stardust and moonbeams. Radiating elegance that spans galaxies and an ageless cosmic aura, she journeys through the universe, captivating all who cross her path. A skilled diplomat and peacemaker, she employs her innate charm and wisdom to broker alliances and maintain harmony among the stars.`,
    riddle: `I am a spiral of stars and dust, but I’m not in the Milky Way. I'm named after a mythical princess and I’m getting closer every day. What am I?`,
    answer: `andromeda`,
    costume: `As the illustrious princess from a domain of stardust, your attire should be nothing short of ethereal. Opt for a gown that glimmers and shimmers, reminiscent of a starlit sky, in hues of silvery blues, soft purples, or iridescent whites. Adornments could include a tiara or diadem shaped like a crescent moon or twinkling stars, while flowing sleeves or a cape would evoke the vastness of the cosmos. For your makeup, consider accentuating with subtle glitter or delicate jewels. Footwear should be delicate, as if you're always ready to dance on moonbeams. Remember, as a diplomat among the stars, your look should strike a balance between regal grace and celestial wonder.    `,
    images: [
      '/seraphina/_d686c78d-cf2c-4efe-a0d0-bac8b69e28ad.jpeg',
      '/seraphina/_64c4a29e-af37-42c4-8a0a-080194d86fb4.jpeg',
      '/seraphina/eliza 2.jpg',
      '/seraphina/_61eeb458-f921-4c45-9f38-c98b88650843.jpeg',
      '/seraphina/_549475f4-c363-4568-b78f-472bf544d299.jpeg',
      '/seraphina/_4b9ada1d-5d2e-420d-bf1f-df7c321ef490.jpeg',
    ]
  },
];
