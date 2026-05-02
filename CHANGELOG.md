# Changelog

## v3.1.0 — May 2, 2025 🚀

### ✨ 14 New Features Added

#### 1. 📊 Polls & Quizzes
- `/poll` — Create Telegram polls with custom options
- `/quiz` — Create interactive quizzes with correct answers

#### 2. 🏷️ Sticker Creator
- `/sticker` — Convert photos to sticker format
- Sticker info viewer (emoji, set, file ID, animated/video status)

#### 3. 🎨 AI Image Generation
- `/imagine` — Generate images from text prompts using Pollinations.ai
- Free, no API key required

#### 4. 🌐 Multi-Language Support
- `/lang` — Set preferred language (14 languages supported)
- Languages: English, Hindi, Spanish, French, German, Arabic, Portuguese, Russian, Japanese, Korean, Chinese, Turkish, Indonesian, Italian

#### 5. 💰 Economy System
- `/balance` — Check wallet with rank system
- `/daily` — Daily rewards with streak bonuses (50-150 $REACT)
- `/transfer` — Send $REACT to other users
- `/leaderboard` — Top earners ranking
- `/referral` — Personal referral link with rewards

#### 6. 👋 Custom Welcome Messages
- `/welcome` — Configure group welcome messages
- Variables: `{name}`, `{username}`, `{group}`, `{count}`, `{id}`
- Toggle enable/disable, preview, edit, reset
- Auto-welcome on new member join

#### 7. ⚡ Inline Mode
- `@MultiFunctionsBot query` — Use bot inline
- Quick tools: QR code, translate, base64, hash, text stats, reverse
- Works in any chat without opening bot

#### 8. 📡 RSS Feed Reader
- `/rss` — Subscribe to RSS feeds
- Add, list, remove feeds

#### 9. ⏰ Message Scheduler
- `/schedule` — Schedule messages (e.g. `/schedule 2h Meeting reminder`)
- Supports minutes, hours, days

#### 10. 🛡️ Rate Limiting & Anti-Spam
- `/ratelimit` — Configure command rate limits
- Anti-flood protection for groups

#### 11. 🔗 Webhook Support
- `/webhook` — Configure webhook notifications
- GitHub webhooks (push, PR, issues)
- Custom webhook support

#### 12. ⚙️ User Settings Panel
- `/settings` — Central settings hub
- `/mystats` — Personal statistics dashboard
- Language, timezone, preferences

#### 13. 📦 Data Export
- `/export` — Export all user data as JSON
- GDPR-compliant data portability

#### 14. 🗑️ Data Deletion
- `/deldata` — Delete all personal data
- Confirmation prompt for safety

#### 15. 📁 File Store
- `/store` — Upload any file and get shareable link
- Supports photos, videos, audio, documents, stickers, GIFs
- `/store list` — View all stored files
- `/store get ID` — Retrieve file by ID
- `/store delete ID` — Delete a file
- Deep link access: `t.me/Bot?start=file_ID`

#### 16. 🖼️ Image Host
- `/img` — Upload image, get direct URL (telegra.ph)
- BB code, Markdown, and direct link formats
- Share button for easy distribution

#### 17. 📋 Pastebin
- `/paste` — Create paste from text/code
- Shareable deep link: `t.me/Bot?start=paste_ID`
- `/paste list` — View your pastes
- View counter and timestamps

#### 18. 📸 Screenshot Service
- `/ss` — Take screenshot of any website
- Full-page capture at 1280x720

#### 19. 📋 Cloud Clipboard
- `/clip save text` — Save text snippet
- `/clip get` — Retrieve saved text
- `/clip share` — Generate shareable link
- `/clip clear` — Clear clipboard
- Cross-device sync via bot

### 📝 Improvements
- **Help Menu** — Split into 5 paginated pages (under 4096 char limit)
- **Tools Menu** — Expanded from 7 to 10 pages
- **Command Count** — 60+ → 80+ commands

---

## v3.0.0 — May 2, 2025

### 🎨 UI/UX Overhaul
- Beautiful bordered welcome with user stats & quick access
- Help menu: all commands organized in tree layout
- Tools menu: 10 pages covering all features
- About page: cleaner layout with live user count
- Consistent navigation & small caps typography

### 👑 Admin Panel
- Redesigned control panel with stats & status
- Enhanced dashboard with progress bars
- Broadcast: voice/animation/GIF support + progress bar
- Feedback management system
- Maintenance mode with visual indicators

### 🐛 Bug Fixes
- Fixed _feedbacks.js unclosed tag
- Fixed _start.js template literal syntax
- Fixed warnBan.js deprecated API
- Fixed _warnings.js to show actual warning count
- Complete _warn.js rewrite with reply-based system
- Better error handler with admin context

### ✨ New Features (v3.0)
- /textcase, /hex, /8ball, /clap, /emojify, /mock
- /reverse, /vaporwave, /zalgo (text effects)
- /airquality (AQI index)
- /remind, /reminders, /clearreminders
- /afk (away status)

---

## v2.0.0 — January 25, 2025
- Initial release with 50+ features
- AI tools, GitHub integration, anime search, weather, and more
