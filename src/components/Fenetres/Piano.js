import { Piano, MidiNumbers, KeyboardShortcuts } from "react-piano";
import "react-piano/dist/styles.css";
import SoundfontProvider from "./SoundfontProvider";

function BasicPiano() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";
  const noteRange = {
    first: MidiNumbers.fromNote("c3"),
    last: MidiNumbers.fromNote("g4mù*"),
  };


  const shortcuts = [
    { key: 'q', midiNumber: 48 },
     { key: 'z', midiNumber: 49 },
      { key: 's', midiNumber: 50 },
       { key: 'e', midiNumber: 51 }, 
       { key: 'd', midiNumber: 52 },
       { key: 'f', midiNumber: 53 },
       { key: 't', midiNumber: 54 }, 
       { key: 'g', midiNumber: 55 },
       { key: 'y', midiNumber: 56 },
       { key: 'h', midiNumber: 57 },
       { key: 'u', midiNumber: 58 },
       { key: 'j', midiNumber: 59 },
      { key: 'k', midiNumber: 60 },
      { key: 'o', midiNumber: 61 },
      { key: 'l', midiNumber: 62 },
      { key: 'p', midiNumber: 63 },
      { key: 'm', midiNumber: 64 },
      { key: 'ù', midiNumber: 65 },
      { key: '$', midiNumber: 66 },
      { key: '*', midiNumber: 67 },]

  return (

      <SoundfontProvider
        instrumentName="acoustic_grand_piano"
        audioContext={audioContext}
        hostname={soundfontHostname}
        render={({ isLoading, playNote, stopNote }) => (
          <Piano
            noteRange={noteRange}
            width={490}
            playNote={playNote}
            stopNote={stopNote}
            disabled={isLoading}
    keyboardShortcuts={shortcuts}
          />
        )}
      />

  );
}
export default BasicPiano;
