export const importAudioFiles = () => {
    function importAll(r) {
        let audios = {};
        r.keys().forEach((item, index) => {
            audios[item.replace('./', '')] = r(item);
        });
        return audios;
    }

    return importAll(require.context('../assets/audio', false, /\.(mp3|wav|ogg)$/));
}