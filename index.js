/**
 * @format
 */

import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import { playbackService } from './musicPlayerServices';

import AppPlus from './Musicapp/AppPlus';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => AppPlus);
TrackPlayer.registerPlaybackService(() => playbackService);