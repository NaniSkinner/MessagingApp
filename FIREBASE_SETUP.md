# Firebase Setup Guide

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `messaging-app-mvp` (or your preferred name)
4. Disable Google Analytics (optional for MVP)
5. Click "Create project"

## Step 2: Enable Firebase Services

### Authentication

1. In Firebase Console, go to **Authentication**
2. Click "Get started"
3. Enable **Email/Password** sign-in method
4. Save

### Firestore Database

1. Go to **Firestore Database**
2. Click "Create database"
3. Select **Start in test mode** (we'll add security rules later)
4. Choose your region (closest to your users)
5. Click "Enable"

### Cloud Functions

1. Go to **Functions**
2. Click "Get started" to initialize
3. Follow the prompts (we'll deploy functions later)

### Firebase Cloud Messaging (FCM)

1. Go to **Project Settings** → **Cloud Messaging**
2. Note: FCM is automatically enabled

## Step 3: Get Your Firebase Config

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to "Your apps"
3. Click the **Web app** icon (`</>`)
4. Register app:

   - App nickname: `messaging-app`
   - Skip Firebase Hosting setup
   - Click "Register app"

5. Copy the `firebaseConfig` object

## Step 4: Add Config to Your App

1. In your project, locate: `services/firebase.config.template.ts`
2. Copy it to: `services/firebase.config.ts`
3. Replace the placeholder values with your actual Firebase config:

```typescript
const firebaseConfig = {
  apiKey: "AIza...", // Your actual API key
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef...",
};
```

4. Save the file

## Step 5: Verify Setup

Run your app:

```bash
npm start
```

The app should load without Firebase errors (though it won't have data yet).

## Step 6: Set Up Firestore Security Rules (Later)

We'll add these after testing:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }

    // Conversations
    match /conversations/{conversationId} {
      allow read: if request.auth != null &&
        request.auth.uid in resource.data.participants;
      allow create: if request.auth != null;
      allow update: if request.auth != null &&
        request.auth.uid in resource.data.participants;

      // Messages subcollection
      match /messages/{messageId} {
        allow read: if request.auth != null &&
          request.auth.uid in get(/databases/$(database)/documents/conversations/$(conversationId)).data.participants;
        allow create: if request.auth != null &&
          request.auth.uid in get(/databases/$(database)/documents/conversations/$(conversationId)).data.participants;
      }
    }

    // User conversations
    match /users/{userId}/conversations/{conversationId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Troubleshooting

### "Firebase not initialized"

- Check that `firebase.config.ts` exists (not just the template)
- Verify all config values are filled in correctly

### "Permission denied"

- Ensure Firestore is in test mode initially
- Check that authentication is enabled

### Network errors

- Verify internet connection
- Check Firebase project billing status (Spark plan should be sufficient for MVP)
