// Simple in-memory conversation storage for Twilio AI Voice

interface ConversationSession {
  id: string;
  phoneNumber: string;
  messages: Array<{ role: string; content: string; timestamp: Date }>;
  createdAt: Date;
}

const conversations = new Map<string, ConversationSession>();

export function getOrCreateSession(callSid: string, phoneNumber: string): ConversationSession {
  if (!conversations.has(callSid)) {
    conversations.set(callSid, {
      id: callSid,
      phoneNumber,
      messages: [],
      createdAt: new Date(),
    });
  }
  return conversations.get(callSid)!;
}

export function addMessage(callSid: string, role: 'user' | 'assistant', content: string): void {
  const session = conversations.get(callSid);
  if (session) {
    session.messages.push({ role, content, timestamp: new Date() });
  }
}

export function getConversationHistory(callSid: string): Array<{role: string; content: string}> {
  const session = conversations.get(callSid);
  if (!session) return [];
  return session.messages.map(msg => ({ role: msg.role, content: msg.content }));
}

export function getLastAssistantMessage(callSid: string): string | null {
  const session = conversations.get(callSid);
  if (!session) return null;
  for (let i = session.messages.length - 1; i >= 0; i--) {
    if (session.messages[i].role === 'assistant') return session.messages[i].content;
  }
  return null;
}

export function endConversation(callSid: string): void {
  conversations.delete(callSid);
}
