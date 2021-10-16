import './description.js';
import './comments.js';
import {addPictures} from './pictures.js';
import {pictures} from './pictures.js';
import {FRAGMENT} from './pictures.js';
import {uploadFormOpen, uploadFormClose} from './form.js';

addPictures();
pictures.appendChild(FRAGMENT);
uploadFormOpen();
uploadFormClose();
