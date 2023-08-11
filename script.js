'use stict';

const keyboardWrapper = document.createElement('div');
const keyboardBody = document.createElement('div');
const currentOpperandTextElement = document.createElement('textarea');
const main = document.createElement('div');
const keysContainer = document.createElement('div');
const description = document.createElement('p');
let keyButton;

keyboardWrapper.classList.add('keyboard-container');
keyboardBody.classList.add('keyboard');
currentOpperandTextElement.classList.add('keyboard-input');
currentOpperandTextElement.setAttribute('autofocus', '');
main.classList.add('keys-container--2');
keysContainer.classList.add('keys-container');
description.classList.add('description');

document.body.appendChild(description);
document.body.appendChild(keyboardWrapper);
keyboardWrapper.appendChild(keyboardBody);
keyboardBody.appendChild(currentOpperandTextElement);
keyboardBody.appendChild(main);
main.appendChild(keysContainer);

description.innerHTML = 'This keyboard was created in Windows. The keyboard shortcut for changing language is ctrl+alt.';

class Keyboard {
  constructor(
    currentOp,
    capsLock,
    shift,
    ctrl,
    language,
  ) {
    this.currentOp = currentOp;
    this.capsLock = capsLock;
    this.shift = shift;
    this.ctrl = ctrl;
    this.language = language;
  }

  initiate() {
    keysContainer.appendChild(this.updateKeys(this.language));
    document.querySelector('.keyboard-input').addEventListener('input', (e) => {
      this.value = e.composedPath();
    });
  }

  removeDisplay(language) {
    keysContainer.replaceChildren(this.updateKeys(language));
  }

  updateKeys(language) {
    const fragment = document.createDocumentFragment();

    let keys;
    if (language === 'lithuanian') {
      keys = [
        '`',
        'ą',
        'č',
        'ę',
        'ė',
        'į',
        'š',
        'ų',
        'ū',
        '9',
        '0',
        '-',
        'ž',
        'Backspace',
        'Tab',
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        '[',
        ']',
        '\\',
        'Del',
        'CapsLock',
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        ';',
        '"',
        'Enter',
        'Shift',
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm',
        ',',
        '.',
        '/',
        '▲',
        'ShiftRt',
        'Ctrl',
        'Win',
        'Alt',
        'Space',
        'Alt',
        'Ctrl',
        '◄',
        '▼',
        '►',
      ];
    } else if (language === 'lithuanianShift') {
      keys = [
        '~',
        'Ą',
        'Č',
        'Ę',
        'Ė',
        'Į',
        'Š',
        'Ų',
        'Ū',
        '(',
        ')',
        '_',
        'Ž',
        'Backspace',
        'Tab',
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        '{',
        '}',
        '|',
        'Del',
        'CapsLock',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        ':',
        '"',
        'Enter',
        'Shift',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
        '<',
        '>',
        '?',
        '▲',
        'ShiftRt',
        'Ctrl',
        'Win',
        'Alt',
        'Space',
        'Alt',
        'Ctrl',
        '◄',
        '▼',
        '►',
      ];
    } else if (language === 'englishShift') {
      keys = [
        '~',
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '+',
        'Backspace',
        'Tab',
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        '{',
        '}',
        '|',
        'Del',
        'CapsLock',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        ':',
        '"',
        'Enter',
        'Shift',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
        '<',
        '>',
        '?',
        '▲',
        'ShiftRt',
        'Ctrl',
        'Win',
        'Alt',
        'Space',
        'Alt',
        'Ctrl',
        '◄',
        '▼',
        '►',
      ];
    } else {
      keys = [
        '`',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '-',
        '=',
        'Backspace',
        'Tab',
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        '[',
        ']',
        '\\',
        'Del',
        'CapsLock',
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        ';',
        "'",
        'Enter',
        'Shift',
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm',
        ',',
        '.',
        '/',
        '▲',
        'ShiftRt',
        'Ctrl',
        'Win',
        'Alt',
        'Space',
        'Alt',
        'Ctrl',
        '◄',
        '▼',
        '►',
      ];
    }

    keys.forEach((key) => {
      keyButton = document.createElement('button');
      keyButton.classList.add('keyboard-key');

      keyButton.textContent = key;

      function cursorEnd(textarea) {
        const end = textarea.value.length;
        textarea.setSelectionRange(end, end);
        textarea.focus();
      }

      switch (key) {
        case 'Backspace':
          keyButton.classList.add('keyboard-key--wide', 'keyboard-key--dark');

          keyButton.addEventListener('click', () => {
            const startPosition = this.currentOp.selectionStart;

            if (startPosition === this.currentOp.value.length) {
              this.currentOp.value = this.currentOp.value.slice(0, -1);
              cursorEnd(this.currentOp);
            } else {
              const newString = this.currentOp.value
                .slice(0, startPosition)
                .slice(0, -1);

              const addStr = this.currentOp.value.slice(startPosition);
              this.currentOp.value = newString + addStr;

              const end = newString.length;
              this.currentOp.setSelectionRange(end, end);
              this.currentOp.focus();
            }
          });

          break;
        case 'Del':
          keyButton.classList.add('keyboard-key--dark');

          keyButton.addEventListener('click', () => {
            const startPosition = this.currentOp.selectionStart;

            if (startPosition === 0) {
              cursorEnd(this.currentOp);
            } else {
              const newString = this.currentOp.value
                .slice(startPosition)
                .slice(0, -1);

              const addStr = this.currentOp.value.slice(0, startPosition);

              this.currentOp.value = addStr + newString;

              this.currentOp.setSelectionRange(startPosition, startPosition);
              this.currentOp.focus();
            }
          });

          break;
        case 'Enter':
          keyButton.classList.add('keyboard-key--wide');
          keyButton.classList.add('keyboard-key--dark');
          keyButton.addEventListener('click', () => {
            this.currentOp.value += '\n';
            cursorEnd(this.currentOp);
          });
          break;
        case 'Tab':
          keyButton.classList.add('keyboard-key--dark');
          keyButton.addEventListener('click', () => {
            this.currentOp.value += '   ';
            cursorEnd(this.currentOp);
          });
          break;
        case '`':
          keyButton.classList.add('keyboard-key--dark');
          keyButton.addEventListener('click', () => {
            this.currentOp.value += key;
            cursorEnd(this.currentOp);
          });
          break;

        case 'CapsLock':
          keyButton.classList.add(
            'keyboard-key--wide',
            'keyboard-key--dark',
            'keyboard-key--active2',
          );
          keyButton.addEventListener('click', (e) => {
            this.capsLock = !this.capsLock;
            e.target.classList.toggle('keyboard-key-capslock', this.capsLock);
            cursorEnd(this.currentOp);
          });
          break;

        case 'Ctrl':
          keyButton.classList.add('keyboard-key--wide', 'keyboard-key--dark');
          keyButton.addEventListener('click', () => {
            cursorEnd(this.currentOp);
          });

          break;
        case 'Alt':
          keyButton.classList.add('keyboard-key--dark');
          keyButton.addEventListener('click', () => {
            this.changeLanguage();
            cursorEnd(this.currentOp);
          });

          break;
        case '◄':
          keyButton.classList.add('keyboard-key--dark');
          keyButton.addEventListener('click', () => {
            this.currentOp.value += key;
          });
          break;
        case '▼':
          keyButton.classList.add('keyboard-key--dark');
          keyButton.addEventListener('click', () => {
            this.currentOp.value += key;
          });
          break;
        case '►':
          keyButton.classList.add('keyboard-key--dark');
          keyButton.addEventListener('click', () => {
            this.currentOp.value += key;
          });
          break;
        case '▲':
          keyButton.classList.add('keyboard-key--dark');
          keyButton.addEventListener('click', () => {
            this.currentOp.value += key;
          });
          break;

        case 'ShiftRt':
          keyButton.classList.add('keyboard-key--dark');
          keyButton.addEventListener('mousedown', () => {
            this.shift = !this.shift;
            this.changeLanguageShift();
            cursorEnd(this.currentOp);
          });
          keyButton.addEventListener('mouseup', () => {
            this.shift = !this.shift;
            this.changeLanguageShift();
            cursorEnd(this.currentOp);
          });

          break;
        case 'Space':
          keyButton.classList.add('keyboard-key--very--wide');
          keyButton.addEventListener('click', () => {
            this.value += ' ';
            this.currentOp.value += ' ';
            cursorEnd(this.currentOp);
          });
          break;
        case 'Shift':
          keyButton.classList.add(
            'keyboard-key--wide-shift',
            'keyboard-key--dark',
          );

          keyButton.addEventListener('mousedown', () => {
            this.shift = !this.shift;
            this.changeLanguageShift();
            cursorEnd(this.currentOp);
          });
          keyButton.addEventListener('mouseup', () => {
            this.shift = !this.shift;
            this.changeLanguageShift();
            cursorEnd(this.currentOp);
          });
          break;
        case 'Win':
          keyButton.classList.add('keyboard-key--dark');
          keyButton.addEventListener('click', () => {
            cursorEnd(this.currentOp);
          });
          break;
        default:
          keyButton.addEventListener('click', () => {
            this.currentOp.value += this.capsLock
              ? key.toUpperCase()
              : key.toLowerCase();

            cursorEnd(this.currentOp);
          });
          break;
      }

      fragment.appendChild(keyButton);
    });

    return fragment;
  }

  changeLanguage() {
    if (this.language === 'english') {
      this.removeDisplay('lithuanian');
      sessionStorage.setItem('language', 'lithuanian');
      this.language = 'lithuanian';
      // this.currentOp.value = this.currentOp.value;
    } else if (this.language === 'lithuanian') {
      this.removeDisplay('english');
      sessionStorage.setItem('language', 'english');
      this.language = 'english';
      // this.currentOp.value;
    }
  }

  changeLanguageShift() {
    if (this.language === 'english' && this.shift) {
      this.removeDisplay('englishShift');
      this.language = 'english';
      sessionStorage.setItem('language', 'english');
    } else if (this.language === 'lithuanian' && this.shift) {
      this.removeDisplay('lithuanianShift');
      this.language = 'lithuanian';
      sessionStorage.setItem('language', 'lithuanian');
    }
    if (this.language === 'english' && !this.shift) {
      this.removeDisplay('english');
      sessionStorage.setItem('english', 'english');
      this.language = 'english';
    } else if (this.language === 'lithuanian' && !this.shift) {
      this.removeDisplay('lithuanian');
      sessionStorage.setItem('language', 'lithuanian');
      this.language = 'lithuanian';
    }
  }

  eventListenerKeyboard() {
    document.addEventListener('keydown', (e) => this.keyDownHandler(e));
    document.addEventListener('keyup', (e) => this.keyUpHandler(e));
  }

  keyDownHandler(e) {
    e.preventDefault();

    const eventclick = new Event('click');
    const eventmousedown = new Event('mousedown');
    const keybordCodes = [
      'Backquote',
      'Digit1',
      'Digit2',
      'Digit3',
      'Digit4',
      'Digit5',
      'Digit6',
      'Digit7',
      'Digit8',
      'Digit9',
      'Digit0',
      'Minus',
      'Equal',
      'Backspace',
      'Tab',
      'KeyQ',
      'KeyW',
      'KeyE',
      'KeyR',
      'KeyT',
      'KeyY',
      'KeyU',
      'KeyI',
      'KeyO',
      'KeyP',
      'BracketLeft',
      'BracketRight',
      'Backslash',
      'Delete',
      'CapsLock',
      'KeyA',
      'KeyS',
      'KeyD',
      'KeyF',
      'KeyG',
      'KeyH',
      'KeyJ',
      'KeyK',
      'KeyL',
      'Semicolon',
      'Qute',
      'Enter',
      'ShiftLeft',
      'KeyZ',
      'KeyX',
      'KeyC',
      'KeyV',
      'KeyB',
      'KeyN',
      'KeyM',
      'Comma',
      'Period',
      'Slash',
      'ArrowUp',
      'ShiftRight',
      'ControlLeft',
      'MetaLeft',
      'AltLeft',
      'Space',
      'AltRight',
      'ControlRight',
      'ArrowLeft',
      'ArrowDown',
      'ArrowRight',
    ];
    const keysKeyboard = [...document.querySelectorAll('.keyboard-key')];
    const keyPressedIndex = keybordCodes.indexOf(e.code);

    if (e.code === 'CapsLock') {
      keysKeyboard[keyPressedIndex].classList.toggle('keyboard-key--active');
      keysKeyboard[keyPressedIndex].dispatchEvent(eventclick);
    } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      if (e.repeat) {
        keysKeyboard[keyPressedIndex].classList.add('keyboard-key--active');
      } else {
        keysKeyboard[keyPressedIndex].classList.add('keyboard-key--active');
        keysKeyboard[keyPressedIndex].dispatchEvent(eventmousedown);
      }
    } else if (e.code === 'ControlLeft') {
      this.ctrl = true;
      keysKeyboard[keyPressedIndex].classList.add('keyboard-key--active');
    } else if (e.code === 'AltLeft') {
      keysKeyboard[keyPressedIndex].classList.add('keyboard-key--active');
      if (this.ctrl) this.changeLanguage();
      else this.ctrl = false;
      // this.ctrl === true ? this.changeLanguage() : (this.ctrl = false);
    } else if (keyPressedIndex === -1) {
      description.innerHTML = 'No such character';
    } else {
      keysKeyboard[keyPressedIndex].dispatchEvent(eventclick);
      keysKeyboard[keyPressedIndex].classList.add('keyboard-key--active');
    }
  }

  keyUpHandler(e) {
    e.preventDefault();
    const eventMouseUp = new Event('mouseup');
    const keybordCodes2 = [
      'Backquote',
      'Digit1',
      'Digit2',
      'Digit3',
      'Digit4',
      'Digit5',
      'Digit6',
      'Digit7',
      'Digit8',
      'Digit9',
      'Digit0',
      'Minus',
      'Equal',
      'Backspace',
      'Tab',
      'KeyQ',
      'KeyW',
      'KeyE',
      'KeyR',
      'KeyT',
      'KeyY',
      'KeyU',
      'KeyI',
      'KeyO',
      'KeyP',
      'BracketLeft',
      'BracketRight',
      'Backslash',
      'Delete',
      'CapsLock',
      'KeyA',
      'KeyS',
      'KeyD',
      'KeyF',
      'KeyG',
      'KeyH',
      'KeyJ',
      'KeyK',
      'KeyL',
      'Semicolon',
      'Qute',
      'Enter',
      'ShiftLeft',
      'KeyZ',
      'KeyX',
      'KeyC',
      'KeyV',
      'KeyB',
      'KeyN',
      'KeyM',
      'Comma',
      'Period',
      'Slash',
      'ArrowUp',
      'ShiftRight',
      'ControlLeft',
      'MetaLeft',
      'AltLeft',
      'Space',
      'AltRight',
      'ControlRight',
      'ArrowLeft',
      'ArrowDown',
      'ArrowRight',
    ];
    const keysKeyboard2 = [...document.querySelectorAll('.keyboard-key')];
    const keyPressedIndex2 = keybordCodes2.indexOf(e.code);

    if (e.code === 'CapsLock') {
      keysKeyboard2[keyPressedIndex2].classList.remove('keyboard-key--active');
    } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      keysKeyboard2[keyPressedIndex2].dispatchEvent(eventMouseUp);
      keysKeyboard2[keyPressedIndex2].classList.remove('keyboard-key--active');
    } else if (e.code === 'ControlLeft') {
      this.ctrl = false;
      keysKeyboard2[keyPressedIndex2].classList.remove('keyboard-key--active');
    } else if (e.code === 'AltLeft') {
      keysKeyboard2[keyPressedIndex2].classList.remove('keyboard-key--active');
    } else if (keyPressedIndex2 === -1) {
      description.innerHTML = 'This keyboard was created in Windows. The keyboard shortcut for changing language is ctrl+alt.';
    } else {
      keysKeyboard2[keyPressedIndex2].classList.remove('keyboard-key--active');
    }
  }
}
function init() {
  const storedMode = sessionStorage.getItem('language');

  if (!storedMode) {
    return sessionStorage.setItem('language', 'english');
  }
  return storedMode;
}

window.addEventListener('DOMContentLoaded', () => {
  const keyboard = new Keyboard(
    currentOpperandTextElement,
    false,
    false,
    false,
    init(),
  );

  keyboard.eventListenerKeyboard();
  keyboard.initiate();
});
