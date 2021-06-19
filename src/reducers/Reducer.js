const insalseState = {
    songs: [
        { id: "1", name: "thank you hashem", year: 2020, singer: "yair" },
        { id: "2", name: "all from above", year: 2013, singer: "Avraam frid" },
        { id: "3", name: "second chance", year: 2019, singer: "haim" },
        { id: "4", name: "daddy come home", year: 2020, singer: "s.levi" },
        { id: "5", name: "the power", year: 2021, singer: "yaakov shweky" },
    ],
    selectedSong: null
}
const Reducer = (state = insalseState, action) => {
    switch (action.type) {
        case 'SELECT_SONG':
            return {
                ...state,
                selectedSong: action.payload
            }
        case 'ADD_SONG':
            const songs1 = [...state.songs];
            songs1.push(action.payload);
            return {
                ...state,
                songs: songs1
            }
        case 'UPDATE_SONG':
            const songs3 = [...state.songs];
            let updateSong = songs3.find(song => song.id === action.payload.id);
            let i=songs3.indexOf(updateSong);
            songs3.splice(i,1,action.payload);
            return {
                ...state,
                songs: songs3
            }
        case 'DELET_SONG':
            const songs2 = [...state.songs];
            let songToDelete = songs2.find(song => song.id === action.payload.id);
            let index=songs2.indexOf(songToDelete);
            songs2.splice(index,1);
            return {
                ...state,
                songs: songs2
            }
        default: return state;
    };
}
export default Reducer;