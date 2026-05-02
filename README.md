# MultiFunctionsBot - Telegram Bot

A feature-rich Telegram bot built on the [Bots.Business](https://bots.business) platform with **50+ utility tools**, free AI features, Telegram tools, GitHub integration, anime/manga search, weather, and more.

**[@MultiFunctionsBot](https://t.me/MultiFunctionsBot)**

---

## Features

### 📌 Menu
| Command | Description |
|---|---|
| `/start` | Start the bot & main menu |
| `/help` | List all available commands |
| `/about` | Bot information & credits |

### ⚙️ Core Tools
| Command | Description |
|---|---|
| `/shortener` | Shorten URLs via Bitly API |
| `/telegramId` | View your Telegram profile info |
| `/password` | Generate secure passwords (8-32 chars) |
| `/translate` | Translate text to 20+ languages |
| `/qrcode` | Generate QR codes from text/URLs |
| `/base64` | Base64 encode/decode |
| `/hash` | Generate MD5/SHA1/SHA256/SHA384/SHA512 hashes |
| `/wordcount` | Count words, characters, lines, sentences |
| `/uuid` | Generate random UUIDs (v4) |
| `/datetime` | Current date/time across 10 timezones |

### 🔄 Converters & Search
| Command | Description |
|---|---|
| `/morse` | Morse code encoder/decoder |
| `/binary` | Text ↔ Binary converter |
| `/roman` | Numbers ↔ Roman numerals (1-3999) |
| `/exchange` | Currency converter (160+ currencies) |
| `/iplookup` | IP address lookup (country, city, ISP) |
| `/github` | GitHub user profile lookup |
| `/wiki` | Search Wikipedia articles |
| `/textstats` | Detailed text analysis |
| `/numberfact` | Trivia facts about any number |

### 🤖 AI Tools (No API Keys Required)
| Command | Description |
|---|---|
| `/summarize` | Text summarization (extractive algorithm) |
| `/sentiment` | Sentiment analysis (positive/negative/neutral) |
| `/readability` | Flesch-Kincaid readability score & grade level |
| `/keyword` | Keyword extraction with frequency analysis |
| `/paraphrase` | Text paraphraser with synonym replacement |
| `/grammar` | Grammar & spelling checker |
| `/plagiarism` | Duplicate detection & originality score |
| `/chatbot` | AI chatbot (greetings, math, time, jokes) |

### 📲 Telegram Tools
| Command | Description |
|---|---|
| `/stickerinfo` | Get sticker details (emoji, set, file ID, animated/video) |
| `/chatinfo` | Get chat info & ID (any chat) |
| `/channelinfo` | Look up public channel/group info |
| `/pfp` | Get user's profile photo |
| `/botcheck` | Check if a user is a bot |
| `/mention` | Generate mention links (HTML/Markdown/plain) |

### 🐙 GitHub
| Command | Description |
|---|---|
| `/github` | GitHub user profile lookup |
| `/ghrepos` | List user's repositories (stars, forks, languages) |
| `/ghrepoinfo` | Detailed repo info (issues, license, topics) |
| `/ghsearch` | Search GitHub repositories |
| `/ghfollowers` | List user's followers |

### 🎌 Anime & Weather
| Command | Description |
|---|---|
| `/anime` | Search anime info (MyAnimeList) |
| `/manga` | Search manga info (MyAnimeList) |
| `/character` | Anime/manga character lookup |
| `/weather` | Current weather for any city |
| `/forecast` | 3-day weather forecast |

### 🎲 Fun & Random
| Command | Description |
|---|---|
| `/quote` | Random inspirational quotes |
| `/roll` | Roll dice (e.g. `2d6`, `4d20`) |
| `/flip` | Flip a coin |
| `/choose` | Random pick from a list |
| `/joke` | Random jokes |
| `/advice` | Random life advice |

### 👑 Admin
| Command | Description |
|---|---|
| `!ZeroTwo` | Claim admin access |
| `!master` | Admin control panel |
| `!broadcast` | Broadcast to all users |
| `!maintenance` | Toggle maintenance mode |
| `!status` | Bot statistics |
| `!restart` | Restart bot |
| `!profile` | Admin profile |
| `!logout` | Remove admin access |

---

## Setup

### Create your own bot from this repo

1. Create a bot with [@BotFather](https://telegram.me/BotFather) and get the Secret Token
2. Create a bot on [Bots.Business](https://bots.business) and add the Secret Token
3. Add the Public Key from the App as a [Deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys)
4. Import this git repo

### Configure Bitly (URL shortener)
```
Bot.setProperty("bitly_token", "YOUR_BITLY_TOKEN", "string")
```

### Set Admin
Send `!ZeroTwo` in the bot to claim admin access.

---

## Architecture

```
├── bot.json
├── libs/
│   ├── Helpers.js              # Shared utilities
│   ├── DateTimeFormat.js       # Date formatting
│   └── ReferralLib.js          # Referral tracking
├── commands/
│   ├── !.js                    # Error handler
│   ├── Mᴇɴᴜ/                   # Menu & navigation
│   ├── Aᴅᴍɪɴ/                  # Admin panel
│   ├── Sʜᴏʀᴛᴇɴᴇʀ/              # URL shortener
│   ├── Tᴇʟᴇɢʀᴀᴍ Iᴅ/           # Profile info
│   ├── Pᴀssᴡᴏʀᴅ/               # Password generator
│   ├── Tʀᴀɴsʟᴀᴛᴇ/             # Translation
│   ├── Uᴛɪʟɪᴛɪᴇs/              # Core utilities
│   │   ├── _qrcode.js, _base64.js, _hash.js
│   │   ├── _wordcount.js, _uuid.js, _datetime.js
│   │   ├── _morse.js, _binary.js, _roman.js
│   │   ├── _iplookup.js, _textstats.js, _numberfact.js
│   │   └── _quote.js, _roll.js, _flip.js, _choose.js
│   ├── Aɴɪᴍᴇ/                  # Anime & manga
│   │   ├── _anime.js, _manga.js, _character.js
│   │   └── (result handlers)
│   ├── Wᴇᴀᴛʜᴇʀ/                # Weather
│   │   ├── _weather.js, _forecast.js
│   │   └── (result handlers)
│   ├── Gɪᴛʜᴜʙ/                 # GitHub lookup
│   ├── Wɪᴋɪᴘᴇᴅɪᴀ/              # Wikipedia search
│   ├── Exᴄʜᴀɴɢᴇ/               # Currency converter
│   └── Fᴜɴ/                    # Fun commands
│       ├── _joke.js, _advice.js
│       └── (result handlers)
```

---

## APIs Used

| API | Used For |
|---|---|
| [Jikan API](https://jikan.moe) | Anime, manga & character search |
| [wttr.in](https://wttr.in) | Weather & forecasts |
| [GitHub API](https://api.github.com) | GitHub profile lookup |
| [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/) | Wikipedia search |
| [ExchangeRate API](https://exchangerate-api.com) | Currency conversion |
| [Google Translate](https://translate.googleapis.com) | Text translation |
| [Bitly API](https://dev.bitly.com) | URL shortening |
| [QR Server](https://goqr.me/api/) | QR code generation |
| [Numbers API](http://numbersapi.com) | Number trivia |
| [Quotable](https://quotable.io) | Inspirational quotes |
| [Official Joke API](https://github.com/15Dkatz/official_joke_api) | Jokes |
| [Advice Slip](https://api.adviceslip.com) | Life advice |
| [ip-api.com](http://ip-api.com) | IP geolocation |
| [Telegram Bot API](https://core.telegram.org/bots/api) | Sticker info, chat info, profile photos, bot check |

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for detailed changes.

---

## Credits

- **Developer:** [Shineii Nouzen](https://t.me/Shineii86)
- **Bot Owner:** [Quinx Official](https://t.me/QuinxOfficial)
- **UI Idea:** [Yukki Haruno](https://t.me/YukkiiHaruno)
- **Helper:** [Zoro Roronoa](https://t.me/Senpai86)
- **Network:** [Quinx Network](https://t.me/QuinxNetwork)
- **Offered by:** [Maxim 𝕏 Team](https://t.me/MaximXTeam)

---

## Links

- **Channel:** [Maxim 𝕏 Bots](https://t.me/MaximXBots)
- **Support:** [Maxim 𝕏 Group](https://t.me/MaximXGroup)
- **Donate:** [Donate Bot](https://t.me/DonateQxBot)

---

## Tech Stack

- **Platform:** [Bots.Business](https://bots.business) (CBPaaS)
- **Language:** JavaScript
- **Commands:** 50+
- **APIs:** 14 external services

---

## License

This project is maintained by [Maxim 𝕏 Team](https://t.me/MaximXTeam).

![](https://bots.business/images/web-logo.png)
