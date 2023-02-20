import { useContext } from "react";
import { TranslatorContext } from "../contexts/TranslatorContext";
import { dictionary } from "../dictionary";

type Key = keyof ((typeof dictionary)['pt' | 'en']);

export const useTranslate = () => {
  const { language }  = useContext(TranslatorContext);

  const translate = (key: Key, ...replacements: (string|number)[]) => {
    const values = dictionary[language][key];
    const text = values !== undefined ? values : key;

    return replacements.reduce((acc: string, replacement, index) => {
      return acc.replaceAll(`{{${index}}}`, `${replacement}`);
    }, text);
  };

  return translate;
}