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
