function getById<T extends HTMLElement>(id: string, required?: true): T;
function getById<T extends HTMLElement>(id: string, required?: false): T | null;
function getById(id: string, required: boolean = true) {
  let element = document.getElementById(id);

  if (!element && required) {
    throw new Error(`Element with id ${id} not found`);
  }

  return element;
}

export { getById };
