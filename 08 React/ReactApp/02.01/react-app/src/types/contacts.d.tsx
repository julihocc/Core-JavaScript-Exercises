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

enum ActionType {
  ADD = "add",
  DELETE = "delete",
  TOGGLE_FAVORITE = "toggleFavorite",
}

interface IAddContactAction {
  type: ActionType.ADD;
  newContact: IContact;
}

interface IDeleteContactAction {
  type: ActionType.DELETE;
  targetId: ID;
}

interface IToggleFavoriteAction {
  type: ActionType.TOGGLE_FAVORITE;
  id: ID;
}

type Action = IAddContactAction | IDeleteContactAction | IToggleFavoriteAction;

type ContactFormProps = {
  onAddContact: (newContact: IContact) => void
};