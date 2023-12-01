import CollapsibleWidget from './CollapsibleWidget';
import FeedbackWidget from './FeedbackWidget';
import LikerWidget from './LikerWidget';

const collapseBox = document.querySelector('.collapse_box');
const collapsible = new CollapsibleWidget(collapseBox);
collapsible.activation();

const chatBox = document.querySelector('.chat_box');
const feedback = new FeedbackWidget(chatBox);
feedback.activation();

const likerBox = document.querySelector('.liker_box');
const animationBox = [
  'flying-heart-1',
  'flying-heart-2',
  'flying-heart-3',
  'flying-heart-4',
];
const liker = new LikerWidget(likerBox, animationBox);
liker.actiation();
