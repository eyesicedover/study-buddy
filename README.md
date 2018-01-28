# Study Buddy
#### web app for creating and displaying flashcards, 1-29-18 
#### _By Sara Hamilton, Stephanie Faber, Bryce Frazier, and David_
## Description
_This is a group project for week #5 of the Intro to Programming course at Epicodus.  It allows a user to create and view flashcards._
### Specifications  
1. The program contains the following *objects* and *properties*:
    1. **Subject** - *object*
        1. name - *property* - typeof String ""  
        2. categories -  *property* - typeof ArrayList [] - list of Category objects 
            1. **example A** 
                1. **subject.name** = "Computer Programming Syntax"
                2. **subject.categories** = ["JavaScript", "Ruby", "C#"]  
            2. **example B**  
                1. **subject.name** = "Foreign Languages"  
                2. **subject.categories** = ["Spanish", "French", "German"]
    2. **Category** - *object* 
        1. name - *property* - typeof String ""
        2. subject - *property* - typeof Subject object  
            1. **example A**  
                1. **category.name** = "JavaScript"
                2. **category.subject** = "Computer Programming Syntax"  
            2. **example B**  
                1. **category.name** = foreign languages  
                2. **category.name** = ["English", "Spanish", "French"]
    3. **Term** - *object* 
        1. name - *property* - typeof String ""  (same as card.name)
        2. categories - *property* - typeof ArrayList [] - list of Category objects
             1. **example A**  
                1. **term.name** = "for loop"
                2. **term.categories** = ["JavaScript", "Ruby", "C#"]  
            2. **example B**  
                1. **term.name** = "thank you"
                2. **term.categories** = ["Spanish", "French", "German"]  
    4. **Card** - *object*  
        1. term - *property* - typeof String "" (assigned at same time as term.name)
        2. category - *property* - typeof Category object  
        3. definition - *property* - typeof String ""  
            1. **example A**  
                1. **card.term** = "for loop" (same as term.name)
                2. **card.category** = "JavaScript"
                1. **card.definition** = "for (var index = 0; index < arrayList.length; i++) {console.log(i);}"
            1. **example B**  
                1. **card.term** = "thank you" (same as term.name)
                2. **card.category** = "Spanish"
                1. **card.definition** = "gracias"
         
 ### Workflow  
 1. user chooses a subject - either select a subject from a list of existing subjects or create a new subject   
    * example A - "Computer Programming Syntax"
    * example B - "Foreign Languages"
 2. user creates a term 
    * example A - "for loop"
    * example B - "thank you"
 3. a card object is created that has the same name as the term name 
    * example A - "for loop"
    * example B - "thank you"
 4. user assigns a category to the card - either select a category from a list of existing categories or create a new category - category is assigned to the corresponding subject object
    * example A - "JavaScript"
    * example B - "Spanish"
 5. user fills in the definition of the card  
    * example A - "for (var index = 0; index < arrayList.length; i++) {console.log(i);}"
    * example B - "gracias"
 6. user can select an existing term and add additional cards
    * example A - 
        1. existing term - "for loop"  
        2. new category - "C#"  
        3. new definition - for (int a = 10; a < 20; a = a + 1) {
            Console.WriteLine("value of a: {0}", a);} Console.ReadLine();}
    * example B - 
        1. existing term - "thank you"  
        2. new category - "French"
        3. new definition - "merci"
 
 ## Setup/Installation Requirements

* _clone repository_

* _open in text editor_

* _open in browser_

view on [GitHub pages](https://sara-hamilton.github.io/study-buddy/)

## Support and contact details

_To suggest changes, submit a pull request in the GitHub repository._

## Technologies Used

* HTML
* CSS
* jQuery 3.2.1
* Bootstrap 3.3.7

### License

*MIT License*

Copyright (c) 2018 **_Sara Hamilton, Stephanie Faber, Bryce Frazier, and David_**

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
    
