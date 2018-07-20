export const addAlbum = 'ADD_ALBUM';
export function AddAlbum(id, title) {
    return {
      type: 'ADD_ALBUM',
      payload: {
        id,
        title
      }
    }
  }
