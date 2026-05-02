# Changelog

## v2.0.0 - Major Overhaul (2 May 2025)

### 🔒 Security Fixes
- **Removed hardcoded Bitly API token** from `_bitly.js` — now uses `Bot.getProperty("bitly_token")`
- **Removed hardcoded admin ID** from `_start.js` — now uses dynamic `Bot.getProperty("admin")`
- Error handler no longer leaks user details to non-admin users

### 🐛 Bug Fixes
- Fixed broken HTML tags in `!master.js` (`</>` → `</b>`)
- Fixed trailing space in callback_data (`"!maintenance "` → `"!maintenance"`)
- Fixed variable name mismatch in `_bitlyShort.js` (`buttons` vs `Buttons`)
- Fixed non-existent `/tools3` and `/tool2` pagination in `_tools.js`
- Fixed wrong GitHub repo link in `_about.js` (was "ReactionBuilderBot")
- Fixed IST timezone calculation in `_quinx.js` (could exceed 24 hours)
- Fixed redundant `waitingForText` property set in `onText.js`
- Fixed misleading comment in `!Off.js` ("Set to On" → "Disable")
- Fixed broadcast using wrong variable for target chat ID

### ✨ Improvements
- **Extracted shared code** into `libs/Helpers.js`:
  - `getRandomAd()` — single source for ads array
  - `editOrSend()` — unified callback/message pattern
  - `getUserMention()` — consistent user link formatting
  - `getNavButtons()` — standard navigation keyboard
  - `getBackCloseButtons()` — standard back/close keyboard
  - `fancyOnOff()` — On/Off formatting
- **Reduced code duplication** across all 20+ command files
- **Consistent message formatting** with styled headers and ads footers
- **Better error handling** in translation and broadcast
- **Styled translation output** with source language detection
- **Broadcast now shows** sent/failed statistics
- **Password generator** now has length options (8, 12, 16, 24, 32) via buttons

### 🆕 New Features
- **`/help` command** — Lists all available commands with descriptions
- **QR Code Generator** (`/qrcode`) — Generate QR codes from text/URLs
- **Base64 Encode/Decode** (`/base64`) — Encode and decode Base64 text
- **Hash Generator** (`/hash`) — Generate MD5, SHA1, SHA256, SHA384, SHA512 hashes
- **Word Counter** (`/wordcount`) — Count words, characters, lines, sentences
- **UUID Generator** (`/uuid`) — Generate random UUID v4
- **Date/Time Display** (`/datetime`) — Current time across 10 timezones (UTC, IST, GST, SGT, JST, EST, PST, CET, MSK, AEST)

### 📝 Documentation
- Updated README.md with full feature list and architecture diagram
- Added CHANGELOG.md
- Added command help text to all commands

---

## v2.3.0 - Telegram & GitHub Features (2 May 2025)

### 🆕 New Features

**Telegram Tools (6 new):**
- **Sticker Info** (`/stickerinfo`) — Get sticker details (emoji, set, dimensions, file ID, animated/video)
- **Chat Info** (`/chatinfo`) — Get current chat or any chat's info (ID, type, members)
- **Channel Info** (`/channelinfo`) — Look up public channels/groups by username
- **Profile Photo** (`/pfp`) — Get user's profile photo in full size
- **Bot Check** (`/botcheck`) — Check if a user is a bot
- **Mention Link** (`/mention`) — Generate mention links (HTML, Markdown, plain)

**GitHub Tools (4 new):**
- **GitHub Repos** (`/ghrepos`) — List user's recent repos with stars/forks/languages
- **Repo Details** (`/ghrepoinfo`) — Detailed repo info (issues, license, topics, dates)
- **Search Repos** (`/ghsearch`) — Search GitHub repositories by keyword
- **Followers** (`/ghfollowers`) — List user's followers

### ✨ Improvements
- **Tools menu expanded to 5 pages** with proper navigation
- **Updated /help** with all 40+ commands

---

## v2.2.0 - Anime, Weather & More (2 May 2025)

### 🆕 New Features
- **Anime Search** (`/anime`) — Search anime with cover art, score, synopsis, studios, genres (Jikan/MyAnimeList API)
- **Manga Search** (`/manga`) — Search manga with cover art, chapters, volumes, authors (Jikan API)
- **Character Lookup** (`/character`) — Anime/manga character info with images
- **Current Weather** (`/weather`) — Real-time weather for any city (temp, humidity, wind, UV, forecast)
- **3-Day Forecast** (`/forecast`) — Multi-day weather forecast with sunrise/sunset
- **GitHub Profile** (`/github`) — Look up GitHub users (repos, followers, bio, avatar)
- **Wikipedia Search** (`/wiki`) — Search and read Wikipedia article summaries
- **Currency Converter** (`/exchange`) — Convert 160+ currencies with live rates
- **Random Jokes** (`/joke`) — Jokes from Official Joke API
- **Life Advice** (`/advice`) — Random wisdom from Advice Slip API

### ✨ Improvements
- **Tools menu expanded to 4 pages** with proper navigation
- **Updated /help** with all 30+ commands organized by category
- **README.md fully rewritten** with feature tables, architecture, and API list

---

## v2.1.0 - New Features (2 May 2025)

### 🆕 New Features
- **IP Lookup** (`/iplookup`) — Look up IP address details (country, city, ISP, timezone, coords)
- **Morse Code** (`/morse`) — Encode text to Morse code and decode Morse to text
- **Binary Converter** (`/binary`) — Text ↔ Binary conversion
- **Roman Numerals** (`/roman`) — Numbers ↔ Roman numerals (1-3999)
- **Random Quote** (`/quote`) — Inspirational quotes from Quotable API
- **Dice Roller** (`/roll`) — Roll any dice configuration (e.g. 2d6, 4d20)
- **Coin Flip** (`/flip`) — Heads or tails
- **Random Choice** (`/choose`) — Pick randomly from a comma-separated list
- **Number Facts** (`/numberfact`) — Interesting trivia about any number
- **Text Statistics** (`/textstats`) — Detailed analysis (chars, words, lines, reading time, etc.)

### ✨ Improvements
- **Tools menu now has 3 pages** with proper pagination
- **Updated `/help`** with all 20+ commands organized by category

---

## v1.0.5 Beta (5 March 2025)
- Initial public release
- URL Shortener (Bitly)
- Telegram ID viewer
- Password generator
- Text translation (20+ languages)
- Admin panel with maintenance mode
- Broadcast system
- Referral system
- Membership check
