function getById(id, required = true) {
    let element = document.getElementById(id);
    if (!element && required) {
        throw new Error(`Element with id ${id} not found`);
    }
    return element;
}
export { getById };
