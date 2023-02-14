import { redirect } from "react-router-dom"
import { links } from "../app"

export const unAuthorizedRedirect = async () => {
  /*
  Когда подключим API авторизации здесь должен быть запрос пользователя.
  Если  не авторизован, то переход на страницу авторизации */
  const user = {}
  if (!user) {
    return redirect(links.login.path)
  }
  return true
}

export const authorizedRedirect = async () => {
  /*
  Когда подключим API авторизации здесь должен быть запрос пользователя.
  Если авторизован, то переход на страницу игры */
  const user = {}
  if (user) {
    return redirect(links.game.path)
  }
  return true
}

//Получаем склоненную форму слова из переданного массива
export function getDeclensionWord(value: number, words: string[]): string {
  const correct_value = Math.abs(value) % 100;

  if (correct_value > 10 && correct_value < 20) {
    return words[2];
  }

  const num = correct_value % 10;

  if (num > 1 && num < 5) {
    return words[1];
  }

  if (num == 1) {
    return words[0];
  }

  return words[2];
}
