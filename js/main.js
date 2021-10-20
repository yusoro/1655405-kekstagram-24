import './description.js';
import './comments.js';
import {addPictures} from './pictures.js';
import {pictures} from './pictures.js';
import {FRAGMENT} from './pictures.js';
import './form.js';
import {uploadFormOpen, uploadFormClose} from './form.js';
import './fullphoto.js';
//import {closeFullPhoto} from './fullphoto.js';

addPictures();
pictures.appendChild(FRAGMENT);
uploadFormOpen();
uploadFormClose();
//openFullPhoto();
//closeFullPhoto();
