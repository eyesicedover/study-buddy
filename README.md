# Study Buddy
#### web app for creating and displaying flashcards, 1-29-18  

#### _By Sara Hamilton, Stephanie Faber, Bryce Frazier, Ian Goodrich, and David Lewis_  

## Description
_This is a group project for week #5 of the Intro to Programming course at Epicodus.  It allows a user to create and view flashcards. The user can also use the search bar to look for cards by term or definition._  

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
            1. **example A**  
                1. **category.name** = "JavaScript"
            2. **example B**  
                1. **category.name** = foreign languages  
    4. **Card** - *object*  
        1. subject - *property* - typeof String "" (assigned at same time as term.name)
        2. category - *property* - typeof String "" (assigned at same time as term.name)
        3. term - *property* - typeof String "" (assigned at same time as term.name)
        4. definition - *property* - typeof String ""  
            1. **example A**  
                1. **card.subject** = "Computer Science"
                2. **card.category** = "JavaScript"
                3. **card.term** = "for loop" (same as term.name)
                4. **card.definition** = "for (var index = 0; index < arrayList.length; i++) {console.log(i);}"
            1. **example B**  
                1. **card.subject** = "Languages"  
                2. **card.category** = "Spanish"
                3. **card.term** = "thank you" (same as term.name)
                4. **card.definition** = "gracias"
        5. number - *property* - typeof int
    5. **CurrentSelections** - *object*
        1. subject - *property* - typeof Subject object
            1. **example A**  
                1. **currentSelections.subject** = "Computer Science"
            2. **example B**  
                1. **currentSelections.subject** = "Languages"
        2. categories - *property* - array list of Category objects
            1. **example A**  
                1. **currentSelections.categories** = ["JavaScript", "Ruby"]
            2. **example B**  
                1. **currentSelections.categories** = ["Spanish", "French"]

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

## Specs

1. A. User clicks on a subject and categories of the subject appear.
* Example input: User clicks on Computer Science
* Example output: Below it, Ruby, JavaScript, C#, Dot Net appear

1. B. User clicks on a subject and subject button is surrounded by lime green until another subject is selected.
* Example input: User clicks on Computer Science
* Example output: Computer Science button is surrounded by lime green

2. A. User clicks on a category and buttons for card options appear.
* Example input: User clicks on JavaScript
* Example output: Below it, Make a New Category, Add a Card to this Category, View All Cards, and View Cards in Slider buttons appear

2. B. User clicks on a category and category name turns red until another category is selected.
* Example input: User clicks on JavaScript
* Example output: JavaScript turns red

3. A. User clicks on Add a Card to this Category
* Example input: Add a Card to this Category
* Example output: A div appears with a form to enter a term and definition and a button to submit.

3. B. User enters information into the form for making a card and submits. The card appears and the form div hides.
* Example input: Term: Hola, Definition: Hello, user submits
* Example output: Card appears in the View All Cards div at the end of the list of all cards for that Subject and Category. The form disappears.

4. The cards in the View All and Slider areas show the card term and on hover they flip to show the back.
* Example input: The user floats over a card with the term Hola
* Example output: The card flips showing the backside with the definition of Hello.

5. User clicks on View All Cards button, all cards of the selected Subject and Category appear below.
* Example input: User clicks on View All Cards
* Example output: All cards for that Subject and Category appear in columns.

6. User clicks on View Cards in Slider button, the Slider area appears with a single card that has buttons allowing the user to cycle left and right through cards of that Subject and Category.
* Example input: User clicks on View Cards in Slider button
* Example output: A single card appears along with buttons allowing the user to cycle left and right through cards of that Subject and Category.

7. A. User clicks on Make a New Category, a form with a field and a submit button appears.
* Example input: User clicks on Make a New Category button
* Example output: A form to enter the category and submit it appears.

7. B. The user can submit their Category and it will appear in the list of categories for their currently selected subject.
* Example input: User inputs "Chinese" to field and submits
* Example output: Chinese is appended to list of Categories in that Subject, and it can be selected to add cards or view cards.

8. The user can click on links in the navbar to the Home, About, or Contact pages.
* Example input: User clicks on About button
* Example output: User is redirected to the About page showing a blurb About the Creators.

9. User can enter a word into the search bar in the navbar on the Home page and it will display all cards that contain the search term in either the card term or card definition. The search bar is not case sensitive.
* Example input: User inputs and submits "library"
* Example output: The cards for "Where is the library?" in French, Spanish, Indonesian, and Russian are displayed in the View All area.

10. When a user clicks on a button to show something, whatever was previously displayed is hidden.
* Example input: User clicks on View All Cards after having clicked Make a New Category button
* Example output: The form for Make a Category hides and the View All Cards area shows


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
* jQuery 3.3.1
* Bootstrap 3.3.7

### License

*MIT License*

Copyright (c) 2018 **_Sara Hamilton, Stephanie Faber, Bryce Frazier, Ian Goodrich, and David Lewis_**

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
