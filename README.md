# MultiFunctionsBot - Telegram Bot

A feature-rich Telegram bot built on the [Bots.Business](https://bots.business) platform with multiple utility tools and admin features.

**[@MultiFunctionsBot](https://t.me/MultiFunctionsBot)**

---

## Features

### Menu
- `/start` - Start the bot & main menu
- `/help` - List all available commands
- `/about` - Bot information & credits

### Tools
- `/shortener` - Shorten URLs via Bitly API
- `/telegramId` - View your Telegram profile info
- `/password` - Generate secure passwords (8-32 chars)
- `/translate` - Translate text to 20+ languages
- `/qrcode` - Generate QR codes from text/URLs
- `/base64` - Base64 encode/decode
- `/hash` - Generate MD5/SHA1/SHA256/SHA384/SHA512 hashes
- `/wordcount` - Count words, characters, lines, sentences
- `/uuid` - Generate random UUIDs (v4)
- `/datetime` - Current date/time across 10 timezones

### Admin Panel
- `!ZeroTwo` - Claim admin access
- `!master` - Open admin control panel
- `!profile` - View admin profile
- `!maintenance` - Toggle maintenance mode
- `!broadcast` - Broadcast messages to all users
- `!status` - View bot statistics
- `!restart` - Restart bot for all users
- `!logout` - Remove admin access

### Referral System
- Deep link referral tracking
- Special referral bonuses
- Referral notifications

---

## Setup

### Create your own bot from this repo

1. Create a bot with [@BotFather](https://telegram.me/BotFather) and get the Secret Token
2. Create a bot on [Bots.Business](https://bots.business) and add the Secret Token
3. Add the Public Key from the App as a [Deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys) with read access
4. Import this git repo

### Configure Bitly (for URL shortener)
Set your Bitly API token in bot properties:
```
Bot.setProperty("bitly_token", "YOUR_BITLY_TOKEN", "string")
```

### Set Admin
Send `!ZeroTwo` in the bot to claim admin access (first user becomes admin).

---

## Architecture

```
├── bot.json                    # Bot configuration
├── libs/
│   ├── Helpers.js              # Shared utilities (ads, editOrSend, etc.)
│   ├── DateTimeFormat.js       # Date formatting library
│   └── ReferralLib.js          # Referral tracking library
├── commands/
│   ├── !.js                    # Global error handler
│   ├── Mᴇɴᴜ/                   # Menu commands
│   │   ├── _start.js           # /start command
│   │   ├── _quinx.js           # Membership check handler
│   │   ├── _about.js           # /about command
│   │   ├── _tools.js           # /tools menu
│   │   ├── _help.js            # /help command
│   │   ├── _close.js           # Close menu
│   │   └── @.js                # Maintenance check handler
│   ├── Aᴅᴍɪɴ/                  # Admin commands
│   │   ├── !ZeroTwo.js         # Claim admin
│   │   ├── !master.js          # Admin panel
│   │   ├── !profile.js         # Admin profile
│   │   ├── !maintenance.js     # Maintenance toggle
│   │   ├── !On.js              # Enable maintenance
│   │   ├── !Off.js             # Disable maintenance
│   │   ├── !broadcast.js       # Broadcast messages
│   │   ├── !status.js          # Bot statistics
│   │   ├── !restart.js         # Restart bot
│   │   └── !logout.js          # Remove admin
│   ├── Sʜᴏʀᴛᴇɴᴇʀ/              # URL shortener
│   ├── Tᴇʟᴇɢʀᴀᴍ Iᴅ/           # Telegram ID tool
│   ├── Pᴀssᴡᴏʀᴅ/               # Password generator
│   ├── Tʀᴀɴsʟᴀᴛᴇ/             # Translation tool
│   └── Uᴛɪʟɪᴛɪᴇs/              # Utility tools
│       ├── _qrcode.js          # QR code generator
│       ├── _base64.js          # Base64 encode/decode
│       ├── _hash.js            # Hash generator
│       ├── _wordcount.js       # Word counter
│       ├── _uuid.js            # UUID generator
│       └── _datetime.js        # Date/time display
```

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
- **APIs:** Telegram Bot API, Bitly API, Google Translate API, QR Server API

---

## License

This project is maintained by [Maxim 𝕏 Team](https://t.me/MaximXTeam).

![](https://bots.business/images/web-logo.png)
