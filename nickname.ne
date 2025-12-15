# ====================================
# Root production
# ====================================
Nickname -> Style1
          | Style2
          | Style3
          | Style4
          | Style5

# ====================================
# STYLE DEFINITIONS (matching JS return pattern)
# ====================================

# 1) Initials + themed nickname
Style1 -> Initials _ ThemedName

# 2) Fusion + themed nickname
Style2 -> Fusion ThemedName

# 3) Fusion + cyberpunk style
Style3 -> Fusion "-" Cyberpunk "X"

# 4) Cute fusion style
Style4 -> Cute Fusion "u"

# 5) Japanese phonetic style
Style5 -> JPName

# ====================================
#  CORE SYMBOLS
# ====================================

Initials -> Letter | Letter Letter | Letter Letter Letter

Fusion -> Letter Letter Letter Letter Letter? Letter?   # e.g. ABCXYZ

JPName -> JP | JP "n"

_ -> " "  # space

Letter -> "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J"
        | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T"
        | "U" | "V" | "W" | "X" | "Y" | "Z"

JP -> "a" | "ka" | "sa" | "ta" | "na" | "ha" | "ma" | "ya" | "ra" | "wa"
     | "i" | "ki" | "shi" | "chi" | "ni" | "hi" | "mi" | "ri"
     | "u" | "ku" | "su" | "tsu" | "nu" | "fu" | "mu" | "yu" | "ru"
     | "e" | "ke" | "se" | "te" | "ne" | "he" | "me" | "re"
     | "o" | "ko" | "so" | "to" | "no" | "ho" | "mo" | "yo" | "ro"


# ====================================
# Category terminals synced with JS DB buckets
# ====================================

ThemedName -> Anime | Myth | Gaming | Hacker | Tech | Cute | Aesthetic
            | Animal | Cyberpunk | Nature | Angelic | Demon | Esport

Anime -> "Akira" | "Riku" | "Hikari" | "Yuu" | "Kaito" | "Kazuto" | "Sora"
       | "Mikasa" | "Asuna" | "Levi" | "Zero" | "Naruto" | "Itachi"
       | "Sasuke" | "Gon" | "Killua" | "Senku" | "Aqua" | "Megumin"

Myth -> "Zeus" | "Odin" | "Loki" | "Athena" | "Kratos" | "Anubis" | "Ra"

Gaming -> "NoScope" | "ShadowStrike" | "StormFang" | "BossRush" | "UltraInstinct"

Hacker -> "Cipher" | "GhostRoot" | "NullSec" | "BinaryReaper" | "MetaByte"

Tech -> "QuantumCore" | "BinarySoul" | "AI-01" | "CyberForge" | "ZeroKernel"

Cute -> "Mochi" | "Mimi" | "Cookie" | "Kawaii" | "Cupcake"

Aesthetic -> "Dreamyx" | "VelvetRose" | "Moonfall" | "Solstice" | "Velaris"

Animal -> "Wolfy" | "TigerX" | "Kitsune" | "NightWolf" | "RavenSoul"

Cyberpunk -> "NeonShade" | "VoidRunner" | "GhostUnit"
           | "SignalLost" | "Technomancer" | "GlitchNova"

Nature -> "Stormleaf" | "Moonroot" | "Riverdew" | "Thunderroot"

Angelic -> "Seraphiel" | "Raphael" | "Lumina" | "Aetherion" | "Elysium"

Demon -> "Belial" | "Abaddon" | "Diavolo" | "Malphas" | "Bloodvoid"

Esport -> "Striker" | "RushKing" | "VoltRush" | "GodSpeed"
