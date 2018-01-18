# Pig Latin

#### webpage that translates a phrase into pig latin, 1-18-18

#### _By Sara Hamilton and Maggie Summers_

## Description

_This webpage takes in a string as input and returns the string translated into pig latin as output._

_The rules of Pig Latin:_

* For words beginning with a vowel, add "way" to the end.

* For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".

* If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!

* For words beginning with "y", treat "y" as a consonant.

### Specifications

1. The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
* Input Example: 3
* Output Example: 3
2. The program adds "ay" to single-letter words beginning with a vowel.
* Input Example: i
* Output Example: iay
3. The program adds "way" to the end of word beginning with a vowel.
* Input Example: object
* Output Example: objectway
4. The program treats "y" as a consonant for words beginning with "y".
* Input Example: your
* Output Example: ouryay
5. The program moves all of the first consecutive consonants to the end of words beginning with one or more consonants and adds "ay".
* Input Example: think
* Output Example: inkthay
6. The program moves the "q" and "u" together to the end of a word for words where "q" is one of the first consonants and is followed by "u" .
* Input Example: squeal
* Output Example: ealsquay


## Setup/Installation Requirements

* _Clone repository_

* _Open in text editor_

* _Open in Browser_

* _Mirror push to the new repository_

## Support and contact details

_To suggest changes, submit a pull request in the GitHub repository._

## Technologies Used

* HTML
* CSS
* jQuery 3.2.1
* Bootstrap 3.3.7

### License

*MIT License*

Copyright (c) 2018 **_Sara Hamilton and Maggie Summers_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
