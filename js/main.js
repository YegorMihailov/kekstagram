/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-console */

import {getPictures} from './data.js';
import {renderMiniatures} from './miniatures.js';
import {renderImageForm} from './form.js';
import { setScale } from './scale.js';

renderMiniatures(getPictures());
setScale();
