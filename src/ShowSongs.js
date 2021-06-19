import { connect } from 'react-redux';
import Song from './Song';

const ShowSongs = props => (<div>{props.songs.map((x) => <Song song={x} />)}</div>)
const mapStateToProps = state => {
    return {
        songs: state.songs
    }
}
export default connect(mapStateToProps)(ShowSongs)