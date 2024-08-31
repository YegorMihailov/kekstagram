/* eslint-disable no-console */
const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch('https://25.javascript.htmlacademy.pro/kekstagram/data');
    if (!response.ok) {
      throw new Error('Не удалось загрузить фотографии');
    }

    const miniatures = await response.json();
    console.log(miniatures);
    onSuccess(miniatures);
  } catch (error) {
    onFail('Не удалось загрузить фотографии');
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      'https://25.javascript.htmlacademy.pro/kekstagram',
      {
        method: 'POST',
        body,
      }
    );
    if (!response.ok) {
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
    }

    onSuccess('Успешно. YEAH BUDDDY!');
  } catch (error) {
    onFail('Не удалось отправить форму. Попробуйте ещё раз');
  }
};

export { getData, sendData };
