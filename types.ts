
export interface InquiryData {
  name: string;
  email: string;
  company: string;
  industry: 'Food' | 'Electronics' | 'Handicrafts' | 'Other';
  quantity: string;
  message: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
