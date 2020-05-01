export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        item
    }
}

export const deleteItem = (item) => {
    return {
        type: 'DELETE_ITEM',
        item
    }
}