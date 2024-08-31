/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-console */

import { getPictures } from './data.js';
import { renderMiniatures } from './miniatures.js';
import { renderImageForm } from './form.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';

// renderMiniatures(getPictures());

const onLoadSucces = (data) => {
  renderMiniatures(data);
};

const onLoadError = (error) => {
  showAlert(error, false);
};

getData(onLoadSucces, onLoadError);
// sendData(d, onLoadError);
