/**
 * You have a passage of text that needs to be retyped. Unfortunately, some of the letter keys on your keyboard are broken! Given an array letters representing the working letter keys and a string text, your task is to determine how many words from text can be typed in full using the broken keyboard. It is guaranteed that all non-letter keys (including digits, punctuation marks, and special characters) are working.

A word is defined as a sequence of consecutive characters (including digits, punctuation marks, and special characters) that does not contain any spaces. The given text consists of words separated by exactly one space. It is guaranteed that text does not contain any leading or trailing spaces.

Although the characters in letters are all lowercase, it is possible to type the corresponding uppercase characters (since the Shift key is working).

Example

For text = "Hello, this is CodeSignal!" and letters = ['e', 'i', 'h', 'l', 'o', 's'], the output should be solution(text, letters) = 2.

"Hello," can be typed since the characters 'h', 'e', 'l' and 'o' are all in letters. Note that the symbol ',' also belongs to the current word and can be typed.
"this" cannot be typed because the character 't' is not in letters.
"is" can be typed (both 'i' and 's' appear in letters).
"CodeSignal!" cannot be typed because the character 'c' is not in letters (nor are 'd', 'g', 'n', and 'a').
For text = "Hi, this is Chris!" and letters = ['r', 's', 't', 'c', 'h'], the output should be solution(text, letters) = 0.

Each word contains the character 'i' which does not appear in letters and thus cannot be typed on the keyboard.

For text = "2 + 3 = 5" and letters = [], the output should be solution(text, letters) = 5.

There are no working letters on the keyboard, but since each of these words consists of digits and special characters, they can all be typed, and there are 5 of them.
 */
