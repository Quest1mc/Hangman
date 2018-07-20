import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import {connect} from 'react-redux'
// import { helloWorld,AddAlbum} from '../actions/test'
import {AddAlbum} from '../actions/albums.js'


class AlbumsListContainer extends React.PureComponent {
  

  componentDidMount() {
    request('https://jsonplaceholder.typicode.com/albums')
      //.then(response => this.props.albums({ albums: response.body }))


    
      //this.props.dispatch(helloWorld())
      //If we bind action creators using connect, this.props.dispatch is no longer available.
  }
// below you can see the error handler.
  render() {
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }
}
const mapStateToProps =(state) => {
  return {
    albums:state.albums
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     helloWorld: (firstName, lastName) => dispatch(helloWorld(firstName, lastName))
//   }
// }
// below are 3 ways to bind the actioncreator function to the dispacher thus making things cleaner and more resuable
//export default connect(mapStateToProps, mapDispatchToProps)(AlbumsListContainer)

// export default connect(mapStateToProps, { helloWorld: helloWorld })(AlbumsListContainer)
export default connect(mapStateToProps, {AddAlbum })(AlbumsListContainer)

