# Messaging App MVP

A WhatsApp-style messaging application built with React Native, Expo, and Firebase.

## 📁 Project Structure

```
MessagingApp/
├── Docs/                    # Project documentation
│   ├── Architecture.md      # System architecture & diagrams
│   ├── MessagePRD.md        # Product Requirements Document
│   ├── MessageTasks.md      # Implementation task tracker
│   └── FIREBASE_SETUP.md    # Firebase setup guide
│
├── app/                     # Expo Router screens
│   ├── _layout.tsx          # Root layout
│   └── index.tsx            # Home/splash screen
│
├── components/              # Reusable UI components
│   ├── common/              # Generic components (Avatar, Button, etc.)
│   ├── chat/                # Chat-related components
│   └── conversation/        # Conversation list components
│
├── services/                # Firebase & API services
│   ├── firebase.config.ts   # Firebase configuration (gitignored)
│   └── firebase.config.template.ts  # Template for Firebase setup
│
├── stores/                  # Zustand state management
│
├── theme/                   # Styling & theming
│   └── colors.ts            # Color palette
│
├── types/                   # TypeScript type definitions
│   └── index.ts             # Main types (User, Message, Conversation)
│
└── utils/                   # Helper functions

```

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- Xcode (for iOS development)
- Expo Go app (for testing)

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up Firebase:

   - Follow instructions in `Docs/FIREBASE_SETUP.md`
   - Copy `services/firebase.config.template.ts` to `services/firebase.config.ts`
   - Add your Firebase credentials

3. Start the development server:

```bash
npm start
# or
npx expo start
```

4. Open in simulator:
   - Press `i` for iOS
   - Press `a` for Android
   - Scan QR code with Expo Go app

## 📊 Development Progress

**Day 0: Setup & Configuration** ✅ COMPLETE

- Project initialization
- Firebase configuration
- Dependencies installed
- Basic app structure

**Next: Day 1 - Foundation & Authentication**

- Navigation setup
- Auth screens (Login/Register)
- Firebase Authentication
- Session persistence

See `Docs/MessageTasks.md` for detailed progress tracking.

## 🛠️ Tech Stack

- **Frontend:** React Native with Expo
- **Navigation:** Expo Router
- **State Management:** Zustand
- **Backend:** Firebase (Auth, Firestore, Cloud Functions, FCM)
- **Storage:** AsyncStorage
- **Language:** TypeScript

## 📝 Available Scripts

- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run in web browser

## 🎨 Color Palette

- Primary: `#4361EE` (Blue)
- Secondary: `#AB4E68` (Pink)
- Accent: `#E6C0E9` (Lavender)
- Success: `#9DC183` (Green)
- Dark: `#1C0221` (Very Dark Purple)

## 📄 License

This is an MVP project for demonstration purposes.
