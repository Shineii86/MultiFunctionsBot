# Changelog

## v3.3.1 — May 2, 2025 🐛👑

### 🐛 Bug Fixes
- **Fixed Help pagination buttons** — `/help2`–`/help5` callbacks were silently dropped because aliases weren't registered. Added all page aliases.
- **Fixed Tools pagination buttons** — `/tools2`–`/tools10` callbacks had the same issue. Added all page aliases.

### 👑 Admin Panel Upgrade (11 new/enhanced commands)

#### Enhanced
- `!master` — Redesigned with quick stats bar (users, commands, feedback), 6-button grid, aliases `!admin` `!panel`
- `!status` — Full dashboard with progress bars, top 5 commands, recent users, version 3.3.0
- `!profile` — Added bot owner stats (total users, commands, stored IDs)
- `getAdsFooter()` — Now respects `ads_enabled` toggle

#### New Commands
- `!users` — User management overview (total, stored, banned, last 10 users)
- `!usersearch` — Search any user by Telegram ID
- `!banlist` — View all banned users
- `!exportids` — Export all user IDs in chunks
- `!logs` — Activity logs with top 10 commands, recent activity, latest feedback
- `!settings` — Bot settings toggle panel
- `!toggle_welcome` — Toggle welcome messages on/off
- `!toggle_ads` — Toggle advertisements on/off
- `!toggle_joins` — Toggle join notifications on/off
- `!toggle_ratelimit` — Toggle rate limiting on/off
- `!toggle_antispam` — Toggle anti-spam on/off

#### Infrastructure
- `_middleware.js` — Tracks recent users (name, username, ID) for admin visibility
- `_start.js` — Stores user profile info on first join
- `Helpers.js` — `getAdsFooter()` checks `ads_enabled` property

---

## v3.3.0 — May 2, 2025 🚀

### ✨ 5 Major Features Added

#### 1. 🤖 AI Chat (GPT-level)
- `/ai` — Multi-turn AI conversation via Pollinations.ai
- Supports context (last 10 messages)
- `/ai` aliases: `/gpt`, `/chat`
- `aiReset` — Clear conversation history
- Free, no API key required

#### 2. 👑 Premium Subscription
- `/premium` — View/purchase premium
- 500 $REACT/month or 3-day free trial
- Benefits: ad-free, 2x daily rewards, unlimited AI, 10x file storage, premium badge
- Auto-expiry after 30 days

#### 3. 📊 Bot Analytics
- `/analytics` — Command counts, most used commands, user growth
- Tracks total & daily command usage
- Progress bars for milestones

#### 4. 👤 User Profiles & XP System
- `/profile` — View profile with XP, level, badges, stats
- XP system: +5 XP per command, level up = +10 $REACT bonus
- `/setbio` — Set custom bio (150 chars)
- `/setTitle` — Set custom title (30 chars)
- Badges: 👑 Premium, 🔥 Streak, ⚡ Level 10+, 💰 Whale, 🔗 Referrer
- View other users: `/profile @user` or `/profile ID`

#### 5. 🔔 Price Alerts
- `/pricealert` — Set crypto/stock price alerts
- Above/below threshold support
- Multiple alerts per user
- `/pricealert add BTC 60000 above`

### 🔧 Technical
- Added XP tracking middleware (runs on every command)
- Command usage analytics tracking

---

## v3.2.0 — May 2, 2025

### 22 Features Added
- Downloaders: `/yt`, `/ig`, `/tiktok`, `/music`
- Finance: `/crypto` (18 coins), `/stock` (Yahoo Finance)
- Dictionary: `/dict`, `/synonym`
- Games: `/trivia`, `/wordgame`, `/counting`
- Group: `/antispam`, `/logchannel`, `/automod`, `/captcha`, `/reactionrole`
- GitHub: `/ghwatch`
- Weather: `/alert`
- Translation: `/tm`
- Developer: `/run` (8 langs), `/api`, `/json`, `/regex`

---

## v3.1.0 — May 2, 2025

### 19 Features Added
- Polls & Quizzes, Sticker Creator, AI Image Generation
- Multi-Language (14 languages), Economy System
- Custom Welcome, Inline Mode, RSS Feeds
- Scheduler, Rate Limiting, Webhooks
- User Settings, Data Export/Deletion
- File Store, Image Host, Pastebin, Screenshot, Cloud Clipboard

---

## v3.0.0 — May 2, 2025

### UI/UX Overhaul + Admin Panel + 12 Features
- Bordered layouts, tree-style help, 10-page tools menu
- Text effects: textcase, hex, 8ball, clap, emojify, mock, reverse, vaporwave, zalgo
- airquality, remind, afk
- Bug fixes: HTML tags, template literals, deprecated APIs, warning system

---

## v2.0.0 — January 25, 2025
- Initial release with 50+ features
