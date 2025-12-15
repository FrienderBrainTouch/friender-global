export type ChatbotType = 'home' | 'story' | 'dreamPath' | 'innoWorks';

export const useChatbot = () => {
  const chatbotType = useState<ChatbotType | null>('chatbotType', () => null);
  const isChatbotOpen = useState<boolean>('isChatbotOpen', () => false);

  const openChatbot = (type: ChatbotType) => {
    chatbotType.value = type;
    isChatbotOpen.value = true;
  };

  const closeChatbot = () => {
    isChatbotOpen.value = false;
  };

  return {
    chatbotType,
    isChatbotOpen,
    openChatbot,
    closeChatbot,
  };
};
