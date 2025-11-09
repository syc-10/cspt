import { Chat, Member } from '@tribeplatform/gql-client/types'

export const MESSAGING_POST_TYPE_SLUG = 'tribe-message'

export const generateChatPath = (chatId: Chat['_id']) => `/messaging/${chatId}`

export const generateNewChatPath = (member: Partial<Member> = undefined) =>
  member?.id ? `/messaging/new?member=${member.id}` : '/messaging/new'
