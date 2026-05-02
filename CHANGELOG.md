# Changelog

## v3.0.0 — May 2, 2025 🚀

### 🎨 UI/UX Overhaul
- **Complete Welcome Redesign** — Beautiful bordered layout with user stats & quick access buttons
- **Help Menu Reorganization** — All 60+ commands properly categorized with tree-style layout
- **Tools Menu Expansion** — 7 pages covering all features (was 6)
- **About Page Refresh** — Cleaner layout with live user count
- **Consistent Navigation** — All commands use standardized button patterns
- **Small Caps Typography** — Professional look across all bot messages
- **Decorative Borders** — `╭━━╮` / `╰━━╯` frame pattern for key messages

### 👑 Admin Panel Upgrades
- **Redesigned Control Panel** — Organized with stats, quick actions, and status indicators
- **Enhanced Status Dashboard** — Progress bars, system status, formatted stats
- **Broadcast Improvements** — Support for voice, animations, GIFs; progress bar on completion
- **Feedback Management** — View, store, and manage user feedback directly
- **Admin Profile** — Better formatted with danger zone for logout
- **Maintenance Mode** — Improved toggle with visual status indicators

### 🐛 Bug Fixes
- **Fixed `_feedbacks.js`** — Unclosed `<b` tag corrected
- **Fixed `_start.js`** — Template literal syntax `${...}` replaced with proper concatenation
- **Fixed `warnBan.js`** — Deprecated `kickChatMember` replaced with `banChatMember`
- **Fixed `_warnings.js`** — Now shows actual warning count with progress bar
- **Fixed `_warn.js`** — Complete rewrite with proper reply-based warning system
- **Fixed `!.js`** — Better error reporting with message context for admin
- **Fixed `_quinx.js`** — Proper empty handler for membership checks

### ✨ New Features
- **Text Case Converter** (`/textcase`) — Upper, Lower, Title, Swap case
- **Hex Converter** (`/hex`) — Text to/from hex encoding
- **Magic 8-Ball** (`/8ball`) — Ask the magic ball a question
- **Clap Text** (`/clap`) — Add 👏 between 👏 words
- **Emojify** (`/emojify`) — Convert text to emoji letters
- **Mock Case** (`/mock`) — sPoNgEbOb text
- **Reverse Text** (`/reverse`) — Flip text backwards
- **Vaporwave** (`/vaporwave`) — Ｗｉｄｅ ｔｅｘｔ
- **Zalgo** (`/zalgo`) — G̵l̷i̶t̸c̵h̷ text
- **Air Quality** (`/airquality`) — AQI index for any city
- **Reminders** (`/remind`, `/reminders`, `/clearreminders`) — Set timed reminders
- **AFK Mode** (`/afk`) — Set away status with reason

### 📝 Improvements
- **Better Error Handler** — Shows error details to admin, includes user context
- **Consistent Button Layouts** — All commands follow the same navigation pattern
- **Help Command** — Now lists ALL 60+ commands including new ones
- **Chatbot** — Cleaner code, better response formatting
- **Warning System** — Full rewrite with progress bars and auto-ban
- **Admin Auth** — All admin commands now properly check authorization

### 🔧 Code Quality
- **Helpers.js** — Added `getStatusEmoji`, `formatDuration`, `chunkArray`, `createPaginatedList`
- **Consistent HTML Escaping** — All user input properly escaped
- **Reduced Code Duplication** — Shared patterns extracted to helpers
- **Better Variable Naming** — Cleaner, more readable code throughout

---

## v2.0.0 — January 25, 2025
- Initial release with 50+ features
- AI tools, GitHub integration, anime search, weather, and more
