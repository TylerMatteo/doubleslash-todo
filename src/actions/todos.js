export const CREATE_TODO = 'CREATE_TODO';
export function createTodo() {}

export const DELETE_TODO = 'DELETE_TODO';
export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }   
}

export const UPDATE_TODO_FIELD = 'UPDATE_TODO_FIELD';
export function updateTodoField() {}

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export function markTodoAsComplete(id) {
    return {
        type: MARK_TODO_AS_COMPLETED,
        id
    }
}

export const UNDO_TODO_COMPLETE = 'UNDO_TODO_COMPLETE';
export function undoTodoComplete(id) {
    return {
        type: UNDO_TODO_COMPLETE,
        id
    }
}

export const TOGGLE_TODO_EDIT_MODE = 'TOGGLE_TODO_EDIT_MODE';
export function toggleTodoEditMode(id) {
    return {
        type: TOGGLE_TODO_EDIT_MODE,
        id
    }
}

export const UPDATE_EDIT_TASK_FIELD = 'UPDATE_EDIT_TASK_FIELD';
export function updateEditField(field, value) {
    return {
        type: UPDATE_EDIT_TASK_FIELD,
        field,
        value
      }
}
