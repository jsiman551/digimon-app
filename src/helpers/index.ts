export const underlineFirstWord = (sentence: string): string => {
    const [firstWord, ...restOfSentence] = sentence.split(' ');
    return `<u>${firstWord}</u> ${restOfSentence.join(' ')}`;
};
