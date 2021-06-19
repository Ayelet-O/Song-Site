import { connect } from 'react-redux'
import { useCallback, useState, useEffect } from 'react';

const EditSong = (props) => {
    const [newSong, setnewSong] = useState();
    useEffect(() => {
        setnewSong({...props.song});
    }, [props.song])
    const creatNewSong = useCallback((param, type) => {
        let tempSong = {...newSong};
        switch (type) {
            case 'id':
                tempSong.id = param
                setnewSong(tempSong);
            case 'name':
                tempSong.name = param
                setnewSong(tempSong);
            case 'year':
                tempSong.year = param
                setnewSong(tempSong);
            case 'singer':
                tempSong.singer = param;
                setnewSong(tempSong);
            default:
                return;
        }
    }, [newSong]);
    const [addSong, setaddSong] = useState();
    const creatNewSongToAdd = useCallback((param, type) => {
        let tempSong = {...addSong};
        switch (type) {
            case 'id':
                tempSong.id = param
                setaddSong(tempSong);
            case 'name':
                tempSong.name = param
                setaddSong(tempSong);
            case 'year':
                tempSong.year = param
                setaddSong(tempSong);
            case 'singer':
                tempSong.singer = param;
                setaddSong(tempSong);
            default:
                return;
        }
    }, [addSong]);
    return props.song === null ? "" :

        <div>
            <h2>Edit Song</h2>
            <input value={props.song.id} onChange={(value) => creatNewSong(value, 'id')} />
            <input placeholder={props.song.name} onChange={(event) => creatNewSong(event.target.value, 'name')} />
            <input placeholder={props.song.year} onChange={(event) => creatNewSong(event.target.value, 'year')} />
            <input placeholder={props.song.singer} onChange={(event) => creatNewSong(event.target.value, 'singer')} />
            <button onClick={() => { props.EditSong(newSong) }}>Edit Song</button><hr/>
            <h2>Add Song</h2>
            <input name="id" type="text" placeholder="enter song id"  onChange={(event) => creatNewSongToAdd(event.target.value, 'id')}/>
            <input name="name" type="text" placeholder="enter song name"  onChange={(event) => creatNewSongToAdd(event.target.value, 'name')}/>
            <input name="year" type="text" placeholder="enter song year producer"  onChange={(event) => creatNewSongToAdd(event.target.value, 'year')}/>
            <input name="singer" type="text" placeholder="enter song singer" onChange={(event) => creatNewSongToAdd(event.target.value, 'singer')} />
            <button onClick={() => props.AddSong(addSong)}>Add Song</button>
        </div>
}
const mapDispatchToProps = dispatch => {
    return {
        AddSong: (song) => dispatch({ type: "ADD_SONG", payload: song }),
        EditSong: (song) => dispatch({ type: "UPDATE_SONG", payload: song })
    }
}

const mapStateToProps = state => {
    return {
        song: state.selectedSong,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditSong)