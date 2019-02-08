const KEY_PRESS = 'keyPress';
const ENTER = 'Enter';
const CLICK = 'click';
const CHANGE = 'change';

const changeEvent = (value: any) => ({ target: { value } });

const keyPressEvent = (value: any) => ({ key: value });

const pressEnter = () => keyPressEvent(ENTER);

export const simulateEnter = (wrapper: any) => {
  wrapper.simulate(KEY_PRESS, pressEnter());
};

export const simulateChange = (wrapper: any, value: any) => {
  wrapper.simulate(CHANGE, changeEvent(value));
};

export const simulateClick = (wrapper: any) => {
  wrapper.simulate(CLICK);
};
