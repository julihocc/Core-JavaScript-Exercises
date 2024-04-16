type ContactType = {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  favorite?: boolean;
};

type ContactProps = {
  name: string;
  email?: string;
  phone?: string;
  favorite?: boolean;
  onDeleteContact: () => void;
  onToggleFavorite: () => void;
};

type AppState = {
  contacts: ContactType[];
  nextId: number;
};

type ContactListProps = {
  contacts: ContactType[];
  onDeleteContact: (id: number) => void;
  onToggleFavorite: (id: number) => void;
};

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
};

type ContactFormProps = {
  onAddContact: (contact: ContactFormState) => void;
};

type PhoneProps = {
  phone: string;
};
