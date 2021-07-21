// Задача: поиск самого длинного слова
// Задание
// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом(параметр string) и возвращает самое длинное слово в этой строке.

//     Тесты
// Объявлена функция findLongestWord(string)
// Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
// Вызов функции findLongestWord("Google do a roll") возвращает Google
// Вызов функции findLongestWord("May the force be with you") возвращает force
// Вызов функции findLongestWord() со случайной строкой возвращает правильное значение



function findLongestWord(string) {
    // Change code below this line
    
    let stringSplit = string.split(" ")
    let longestWord = ""
    for (let i = 0; i < stringSplit.length; i += 1) {
        if (stringSplit[i].length > longestWord.length)
            longestWord = stringSplit[i]
    }
    console.log(longestWord)

    // Change code above this line
}

findLongestWord("The quick brown fox jumped over the lazy dog")
findLongestWord("Google do a roll")
findLongestWord("May the force be with you")