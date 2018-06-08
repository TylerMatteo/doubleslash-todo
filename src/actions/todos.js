export const CREATE_TODO = 'CREATE_TODO';
export function createTodo() {}

export const DELETE_TODO = 'DELETE_TODO';
export function deleteTodo() {}

export const UPDATE_TODO_FIELD = 'UPDATE_TODO_FIELD';
export function updateTodoField() {}

export const MARK_TODO_AS_COMPLETE = 'MARK_TODO_AS_COMPLETED';
export function markTodoAsComplete(id) {
    return {
        type: MARK_TODO_AS_COMPLETE,
        id
    }
}
