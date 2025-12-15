function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const DB = {
  anime: [
    "Akira",
    "Riku",
    "Hikari",
    "Yuu",
    "Kaito",
    "Kazuto",
    "Sora",
    "Mikasa",
    "Asuna",
    "Levi",
    "Shiro",
    "Zero",
    "Rengoku",
    "Itachi",
    "Sasuke",
    "Naruto",
    "Hinata",
    "Sakura",
    "Kagura",
    "Shinobu",
    "Tanjiro",
    "Zenitsu",
    "Nezuko",
    "Killua",
    "Gon",
    "Chopper",
    "Brook",
    "Zoro",
    "Kira",
    "Rikuo",
    "Natsu",
    "Gray",
    "Erza",
    "Mavis",
    "Touka",
    "Kaneki",
    "Shoto",
    "Bakugo",
    "Asta",
    "Yuno",
    "Jellal",
    "Lucifer",
    "Sukuna",
    "Megumi",
    "Yuta",
    "Mahito",
    "Trafalgar",
    "Reiner",
    "Armin",
    "Eren",
    "Akatsuki",
    "Ayato",
    "Yor",
    "Anya",
    "Obito",
    "Madara",
    "Giyu",
    "Sanemi",
    "Genya",
    "Senku",
    "Chrome",
    "Ryuk",
    "Rem",
    "Emilia",
    "Subaru",
    "Echidna",
    "GoblinSlayer",
    "Albedo",
    "Ainz",
    "Raphtalia",
    "Naofumi",
    "Kazuma",
    "Aqua",
    "Megumin",
    "Etna",
    "Flonne",
    "Mao",
    "Rias",
    "Akeno",
    "Yukino",
  ],

  myth: [
    "Zeus",
    "Odin",
    "Loki",
    "Ares",
    "Athena",
    "Hades",
    "Poseidon",
    "Apollo",
    "Hercules",
    "Fenrir",
    "Jormungandr",
    "Kratos",
    "Anubis",
    "Ra",
    "Bastet",
    "Osiris",
    "Set",
    "Freya",
    "Thor",
    "Heimdall",
    "Valkyrie",
    "Perseus",
    "Artemis",
    "Hephaestus",
    "Nemesis",
    "Pandora",
    "Medusa",
    "Cerberus",
    "Chimera",
    "Minotaur",
  ],

  gaming: [
    "NoScope",
    "ShadowStrike",
    "VenomKill",
    "HeadshotX",
    "CyberBlade",
    "GhostShot",
    "StormFang",
    "BulletRain",
    "Nightshade",
    "WarCry",
    "RageByte",
    "ToxicSoul",
    "SilentHit",
    "SniperWolf",
    "Flashbang",
    "Aimbot",
    "Glitcher",
    "Fatality",
    "LegendSlayer",
    "BossRush",
    "MetaRunner",
    "ComboBreaker",
    "UltraInstinct",
    "ShadowFlame",
    "PhantomStrike",
    "Dreadnought",
    "IronFist",
  ],

  hacker: [
    "Cipher",
    "NullSec",
    "GhostRoot",
    "ZeroDay",
    "KernelVoid",
    "DarkNet",
    "PacketLost",
    "SegFault",
    "BinaryReaper",
    "Overflow",
    "BitBreaker",
    "ShellGhost",
    "TraceKill",
    "ExploitX",
    "MetaByte",
    "RAMRaid",
    "ProxySoul",
    "RootShadow",
    "HackBlade",
    "DataWraith",
    "CodePhantom",
    "SysCrash",
    "BitNinja",
    "CryptoShade",
    "LogicBomb",
    "MalwareX",
    "TrojanHorse",
    "WormHole",
    "Firewall",
  ],

  tech: [
    "DataGhost",
    "NeonWave",
    "QuantumCore",
    "BinarySoul",
    "AlgoZen",
    "NeuralFlux",
    "ProtocolX",
    "KernelKnight",
    "RootKit",
    "ByteWalker",
    "CryptoPulse",
    "VoidSystem",
    "AI-01",
    "NanoCore",
    "FutureNet",
    "CyberForge",
    "CyberNova",
    "TechRift",
    "Statix",
    "DevKage",
    "MegaPixel",
    "NeuralZero",
    "LogicAlpha",
    "NeoDev",
    "ZeroKernel",
    "MacroDev",
    "DeepQuery",
    "HyperLink",
    "CloudSync",
    "DataStream",
    "PixelRush",
    "QuantumBit",
    "NanoByte",
    "TechWave",
  ],

  cute: [
    "Mochi",
    "Pudding",
    "Nekochan",
    "Fluffy",
    "Mimi",
    "Momo",
    "Cookie",
    "Koko",
    "Kawaii",
    "Nyanlee",
    "Honeybun",
    "Brownie",
    "Chewy",
    "Cherry",
    "PawPaw",
    "Cupcake",
    "Cotton",
    "Whisker",
    "SnowBell",
    "Berry",
    "Peachy",
    "Bubbles",
    "Daisy",
    "Pumpkin",
    "Snuggles",
    "Sprinkles",
    "Taffy",
    "Waffles",
    "Zuzu",
  ],

  aesthetic: [
    "Dreamyx",
    "VelvetRose",
    "Astryx",
    "Moonfall",
    "Elysian",
    "LilacMist",
    "SoftEcho",
    "NovaBloom",
    "Serenitea",
    "Lunalite",
    "Solstice",
    "Dusklight",
    "EchoVoid",
    "Starglide",
    "Nebulyn",
    "IrisDust",
    "Auroria",
    "Eclipta",
    "Mysthaven",
    "Velaris",
    "Celestia",
    "Opaline",
    "Frostine",
    "Glimmera",
    "Radianta",
  ],

  animal: [
    "Wolfy",
    "TigerX",
    "PandaKun",
    "KuroNeko",
    "FenrirPaw",
    "Clawfang",
    "Whiskerly",
    "NightWolf",
    "Foxen",
    "Cerberus",
    "Lionheart",
    "Kitsune",
    "DragonPaws",
    "HawkEye",
    "FalconX",
    "RavenSoul",
    "BearClaw",
    "CheetahDash",
    "LynxShadow",
    "EagleWing",
    "Otterly",
    "BunnyHop",
    "FoxyLoxy",
    "PuppyLove",
    "SlyFox",
    "SnappyTurtle",
    "Chirpy",
  ],

  cyberpunk: [
    "NeonShade",
    "PlasmaZero",
    "CircuitRider",
    "NightRunner",
    "SkyBreaker",
    "ChromeSoul",
    "GhostUnit",
    "NeonBlood",
    "VoidRunner",
    "SignalLost",
    "CyberVenom",
    "SynapseX",
    "PulseBlade",
    "Technomancer",
    "NeonSeraph",
    "HyperFlux",
    "GlitchNova",
    "SignalGhost",
    "DataShade",
    "PixelRogue",
    "CyberWraith",
    "NeonFang",
    "QuantumRift",
    "SynthWave",
    "TechnoKnight",
    "ByteRider",
    "LaserHawk",
    "CircuitFang",
    "ChromeRogue",
    "PulseRider",
  ],

  nature: [
    "Stormleaf",
    "Windborne",
    "Moonroot",
    "Solvine",
    "Wolfspring",
    "Riverdew",
    "Duskflower",
    "AstraBloom",
    "SunWhisper",
    "SkyPetal",
    "Starfern",
    "Thunderroot",
    "Frostbloom",
    "Cloudvine",
    "Rainshade",
    "Leafsong",
    "Breezefang",
    "Mistwalker",
    "Emberfern",
    "Shadowbloom",
    "Dawnpetal",
    "Nightvine",
    "Galeheart",
    "Fawnwhisper",
    "Cinderleaf",
    "Hollowbark",
    "Gladefire",
    "Pinewhisper",
    "Thornshade",
    "Brackenwolf",
  ],

  angelic: [
    "Seraphiel",
    "Gabriel",
    "Raphael",
    "Michael",
    "Azrael",
    "Uriel",
    "Astrael",
    "Celestine",
    "Lumina",
    "Aetherion",
    "HaloBringer",
    "Elysium",
    "Divinor",
    "RadiantWing",
    "SkySentry",
    "LightBearer",
    "Heavenly",
    "Solaria",
    "StarGuardian",
    "Celestial",
    "Angelus",
    "Luminara",
    "Sereniel",
    "Gloriana",
    "Ethereal",
    "Brightwing",
    "Holyflare",
    "Dawnbringer",
    "Skyward",
    "Radiance",
    "Luminary",
    "Divinity",
    "Faithborne",
  ],

  demon: [
    "Behemoth",
    "Belial",
    "Asmodeus",
    "Krampus",
    "Abaddon",
    "Raviel",
    "Diavolo",
    "Malphas",
    "Azazel",
    "Lilith",
    "Nightfiend",
    "Bloodvoid",
    "Hellbrand",
    "Dreadwing",
    "Shadowflame",
    "Infernosoul",
    "Darkbane",
    "Cinderclaw",
    "Voidreaper",
    "Doombringer",
    "Netherfang",
    "Abysswalker",
    "Soulstealer",
    "Grimshade",
    "Hellfire",
    "Demonix",
    "Nightmare",
    "Darkflame",
    "Bloodreign",
    "Fiendshadow",
    "Chaosbane",
    "Soulflame",
    "Infernal",
    "Dreadlord",
  ],

  esport: [
    "Striker",
    "BladeGod",
    "RushKing",
    "TalonX",
    "EliteShot",
    "MVPZero",
    "AceBreaker",
    "GodSpeed",
    "VoltRush",
    "DeadlyAim",
    "PhantomX",
    "FuryStrike",
    "RapidFire",
    "SniperAce",
    "ClutchMaster",
    "TurboShot",
    "HyperStrike",
    "VortexX",
    "BlitzKing",
    "Shockwave",
    "NitroRush",
    "StealthAce",
    "Tzy.",
    "RageShot",
    "FlashStrike",
    "PowerAim",
    "StormX",
    "Quickdraw",
    "FrostStrike",
    "VenomShot",
  ],
};

//==========================================================
// JAPANESE PHONETIC ENGINE
//==========================================================

const jpMap = {
  a: "a",
  b: "bu",
  c: "ki",
  d: "do",
  e: "e",
  f: "fu",
  g: "ga",
  h: "ha",
  i: "i",
  j: "ji",
  k: "ka",
  l: "ru",
  m: "mi",
  n: "na",
  o: "o",
  p: "pa",
  q: "ku",
  r: "ra",
  s: "sa",
  t: "ta",
  u: "u",
  v: "vu",
  w: "wa",
  x: "zu",
  y: "ya",
  z: "za",
};
function toJP(text) {
  return text
    .toLowerCase()
    .split("")
    .map((ch) => jpMap[ch] || ch)
    .join("");
}

//==========================================================
// HOBBY AI CLASSIFIER → detect theme
//==========================================================

function detectTheme(hobby) {
  hobby = hobby.toLowerCase();

  if (hobby.includes("anime")) return "anime";
  if (hobby.includes("myth")) return "myth";
  if (hobby.includes("game")) return "gaming";
  if (hobby.includes("hack")) return "hacker";
  if (hobby.includes("tech") || hobby.includes("code")) return "tech";
  if (hobby.includes("cute") || hobby.includes("kawaii")) return "cute";
  if (hobby.includes("nature")) return "nature";
  if (hobby.includes("animal") || hobby.includes("pet")) return "animal";
  if (hobby.includes("angel")) return "angelic";
  if (hobby.includes("dark") || hobby.includes("demon")) return "demon";
  if (hobby.includes("punk")) return "cyberpunk";
  if (hobby.includes("esport")) return "esport";

  return "anime"; // default fallback
}

//==========================================================
// DC Nickname Engine (Fusion + Styled DC output)
//==========================================================

window.AINick = function (name, hobby) {
  name = name.toLowerCase();
  hobby = hobby.toLowerCase();

  const parts = name.split(" ");
  const first = parts[0] || "";
  const second = parts[1] || "";
  const firstCap = first.charAt(0).toUpperCase() + first.slice(1);
  const secondCap = second
    ? second.charAt(0).toUpperCase() + second.slice(1)
    : "";

  const initials = parts.map((p) => p[0]?.toUpperCase() || "").join("");

  const fusion = (function () {
    if (!parts.length) return "";
    let base = parts[0].slice(0, 2);
    for (let i = 1; i < parts.length; i++) {
      let p = parts[i];
      base += p.slice(Math.floor(p.length / 2), Math.floor(p.length / 2) + 1);
    }
    let last = parts[parts.length - 1];
    base += last.slice(-1);
    return base.toUpperCase();
  })();

  const fullName = parts.join("");

  // JAPANESE CONVERSION
  const jp = toJP(first + second);
  const jpNick = jp.charAt(0).toUpperCase() + jp.slice(1);

  // pastikan ambil banyak kata tema berbeda
  const themeList = [...DB[hobby]];
  // acak array
  themeList.sort(() => Math.random() - 0.5);
  // ambil minimal 10 kata unik
  const themed = themeList.slice(0, 12);

  const suffix = pick(["X", "Z", "01", "99", "Edge", "Core", "Prime"]);

  const result = new Set();

  let i = 0;
  function T() {
    return themed[i++ % themed.length];
  }

  // Output Patterns
  result.add(`${initials} ${T()}`);
  result.add(`${fusion}${T()}`);
  result.add(`${fusion}-${T()}${suffix}`);
  result.add(`${pick(DB.cute)}-${fusion}`);
  result.add(`${jpNick}${T()}`);

  result.add(`${firstCap}${T()}`);
  result.add(`${firstCap}${secondCap}${T()}`);
  result.add(`${firstCap}${T()}${suffix}`);
  result.add(`${firstCap}${first[Math.floor(first.length / 2)]}${T()}`);
  result.add(second ? `${secondCap}${T()}` : `${firstCap}${T()}`);
  result.add(`${firstCap}${initials}${T()}`);
  result.add(
    `${fullName.slice(0, 2).toUpperCase()}${fullName
      .slice(-2)
      .toUpperCase()}${T()}`
  );
  result.add(`${T()}${firstCap}`);
  result.add(`${T()}-${firstCap}${suffix}`);

  return Array.from(result).slice(0, 10);
};
