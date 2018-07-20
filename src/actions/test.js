
export const NEW_HELLO_WORLD = 'HELLO_WORLD';
export const ADD_ALBUM = 'ADD_ALBUM';

export function helloWorld(firstName, lastName) {
    return {
      type: 'HELLO_WORLD',
      payload: {
        firstName: firstName,
        lastName: lastName
      }
    }
  }

 export function AddAlbum(id, title) {
    return {
      type: 'ADD_ALBUM',
      payload: {
        id: id,
        title: title
      }
    }
  }

  