type ID = number | null;

interface IContact {
  id: ID;
  name: string;
  email?: string;
  favorite?: boolean;
  phone?: string;
}

interface IState {
  nextId: ID;
  contacts: IContact[];
}

enum ActionOnContactType {
  ADD = "add",
  DELETE = "delete",
  TOGGLE_FAVORITE = "toggleFavorite",
}

interface IAddContactAction {
  type: ActionOnContactType.ADD;
  newContact: IContact;
}

interface IDeleteContactAction {
  type: ActionOnContactType.DELETE;
  targetId: ID;
}

interface IToggleFavoriteAction {
  type: ActionOnContactType.TOGGLE_FAVORITE;
  id: ID;
}

type ActionOnContact =
  | IAddContactAction
  | IDeleteContactAction
  | IToggleFavoriteAction;

type ContactFormProps = {
  onAddContact: (newContact: IContact) => void;
};

type ContactListProps = {
  contacts: IContact[];
  onDeleteContact: (id: ID) => void;
  onToggleFavorite: (id: ID) => void;
};

type ContactProps = {
  id: ID;
  name: string;
  email?: string; // Make this optional
  phone?: string;
  favorite?: boolean;
  className?: string;
  onDeleteContact: () => void;
  onToggleFavorite: () => void;
};

type PhoneProps = {
  phone: string;
};

type ContactDeletingModalProps = {
  title: string;
  message: string;
  onDismiss: () => void;
  onDelete: () => void;
};

type CounterProps = {
  index: Index;
  count: Count;
  onChange: (index: Index, count: Count) => void;
};

type Count = number;
type Index = number;

type CounterReducerState = Count[];

enum ActionOnCounterType {
  ADD_COUNTER = "ADD_COUNTER",
  SET_COUNTERS = "SET_COUNTERS",
  UPDATE_COUNTER = "UPDATE_COUNTER",
}

interface IAddCounterAction {
  type: ActionOnCounterType.ADD_COUNTER;
}

interface ISetCountersAction {
  type: ActionOnCounterType.SET_COUNTERS;
  payload: Count[];
}

interface IUpdateCounterAction {
  type: ActionOnCounterType.UPDATE_COUNTER;
  index: Index;
  payload: Count;
}

type ActionOnCounter =
  | IAddCounterAction
  | ISetCountersAction
  | IUpdateCounterAction;

type Key = string;

type CounterInitialState = () => CounterReducerState;
