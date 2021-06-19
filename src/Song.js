import { connect } from 'react-redux';
import './Song.css';

const Song = props => {
  return (
    <div class="songStyle">
      <h3>Name: {props.song.name}</h3>
      <div>Id: {props.song.id}</div>
      <div>Year: {props.song.year}</div>
      <div>Singer: {props.song.singer}</div><hr />
      <button id="EditButton" onClick={() => props.EditSong(props.song)}>Edit Song</button>
      <button id="EditButton" onClick={() => props.Delete(props.song)}>Delete Song</button>
    </div>)
}

const mapDispatchToProps = dispatch => {
  return {
    EditSong: (song) => dispatch({ type: "SELECT_SONG", payload: song }),
    Delete: (song) => dispatch({ type: "DELET_SONG", payload: song })
  }
}
export default connect(null, mapDispatchToProps)(Song);