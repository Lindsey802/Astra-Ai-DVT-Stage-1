import { Constants } from 'librechat-data-provider';
import type { ConversationListResponse, TConversation, TMessage } from 'librechat-data-provider';

const now = Date.now();

export const mockConversations: TConversation[] = [
  {
    conversationId: 'mock-convo-1',
    title: 'Welcome to Astra',
    endpoint: 'openAI',
    messages: ['mock-msg-u-1', 'mock-msg-a-1'],
    createdAt: new Date(now - 1000 * 60 * 60).toISOString(),
    updatedAt: new Date(now - 1000 * 60 * 10).toISOString(),
  } as TConversation,
  {
    conversationId: 'mock-convo-2',
    title: 'Frontend Prototype Notes',
    endpoint: 'openAI',
    messages: ['mock-msg-u-2', 'mock-msg-a-2'],
    createdAt: new Date(now - 1000 * 60 * 60 * 6).toISOString(),
    updatedAt: new Date(now - 1000 * 60 * 30).toISOString(),
  } as TConversation,
  {
    conversationId: 'mock-convo-3',
    title: 'Code Review Sandbox',
    endpoint: 'openAI',
    messages: ['mock-msg-u-3', 'mock-msg-a-3'],
    createdAt: new Date(now - 1000 * 60 * 60 * 24).toISOString(),
    updatedAt: new Date(now - 1000 * 60 * 60 * 2).toISOString(),
  } as TConversation,
];

const mockMessagesByConvo: Record<string, TMessage[]> = {
  'mock-convo-1': [
    {
      messageId: 'mock-msg-u-1',
      parentMessageId: Constants.NO_PARENT,
      conversationId: 'mock-convo-1',
      sender: 'User',
      text: 'hello astra',
      isCreatedByUser: true,
    } as TMessage,
    {
      messageId: 'mock-msg-a-1',
      parentMessageId: 'mock-msg-u-1',
      conversationId: 'mock-convo-1',
      sender: 'Astra',
      text: 'Hey 👋',
      isCreatedByUser: false,
    } as TMessage,
  ],
  'mock-convo-2': [
    {
      messageId: 'mock-msg-u-2',
      parentMessageId: Constants.NO_PARENT,
      conversationId: 'mock-convo-2',
      sender: 'User',
      text: 'Can you summarize this prototype?',
      isCreatedByUser: true,
    } as TMessage,
    {
      messageId: 'mock-msg-a-2',
      parentMessageId: 'mock-msg-u-2',
      conversationId: 'mock-convo-2',
      sender: 'Astra',
      text: 'You said: Can you summarize this prototype?',
      isCreatedByUser: false,
    } as TMessage,
  ],
  'mock-convo-3': [
    {
      messageId: 'mock-msg-u-3',
      parentMessageId: Constants.NO_PARENT,
      conversationId: 'mock-convo-3',
      sender: 'User',
      text: 'Here is some code.',
      isCreatedByUser: true,
    } as TMessage,
    {
      messageId: 'mock-msg-a-3',
      parentMessageId: 'mock-msg-u-3',
      conversationId: 'mock-convo-3',
      sender: 'Astra',
      text: 'Send it, I’ll take a look',
      isCreatedByUser: false,
    } as TMessage,
  ],
};

export const getMockConversationPage = (): ConversationListResponse => ({
  conversations: mockConversations,
  nextCursor: null,
});

export const getMockMessagesByConversationId = (conversationId: string): TMessage[] => {
  return mockMessagesByConvo[conversationId] ?? [];
};
