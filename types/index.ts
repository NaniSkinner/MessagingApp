// Type definitions for the messaging app

export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  isOnline: boolean;
  lastSeen: Date;
  pushToken?: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  localId?: string;
  conversationId: string;
  text: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  timestamp: Date;
  status: "sending" | "sent" | "delivered" | "read" | "failed";
  readBy: string[];
}

export interface Conversation {
  id: string;
  type: "direct" | "group";
  participants: string[];
  participantDetails: {
    [userId: string]: {
      displayName: string;
      photoURL?: string;
      isOnline: boolean;
      lastSeen: Date;
    };
  };
  lastMessage?: {
    text: string;
    senderId: string;
    timestamp: Date;
  };
  groupName?: string;
  groupPhoto?: string;
  createdBy?: string;
  createdAt: Date;
}

export interface UserConversation {
  conversationId: string;
  unreadCount: number;
  lastMessageTimestamp: Date;
  lastMessagePreview: string;
}
