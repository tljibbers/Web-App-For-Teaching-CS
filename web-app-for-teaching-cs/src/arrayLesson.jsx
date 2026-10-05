import Header from './Header'
import './arrays.css'

function ArrayLesson() {
    return (
        <>
            <Header />
            <div className="arraysContainer">
                <div className="tableOfContentsArrays">
                    <div> Back To Roadmap </div>
                    <div>Table of Contents</div>
                    <div>What is an Array?</div>
                    <div>Storing Things in an Array</div>
                    <div>Indexes</div>
                    <div>Interactive Quiz</div>
                    <div>Removing Things in an Array</div>
                    <div>Swapping and Replacing Elements</div>
                    <div>Interactive Quiz #2</div>
                    <div>Some Extra Concepts</div>
                    <div>Conclusion</div>
                </div>
                <div className="lessonArrays">
                    <div>Arrays</div>
                    <div>What is an Array?</div>
                    <div>To put it in general terms, an array is considered to be an assortment of items, and can be placed in a row or a column. It’s good to look at arrays like lines. A nice exercise is to set a row or column of any size with your favorite fruit (or vegetable too, if you like those more). </div>
                    <img />
                    <div>Now in terms of Computer Science, an array is a data structure (we talk more about those in detail in the Data Structures and Algorithms section) that contains a list of items of the same type (well, usually). Since we are using Python to learn, what is usually called an Array in other places is actually called a List here. Python loves to be different. Remember just earlier when it was mentioned that an array contains items of the same type? With Python, it actually can have different types, this is due to it being what is called a Dynamically Typed language (not completely important to this lesson, but it's a fun little factoid if anybody ever asks you why Python allows for different types, just tell them no comment when they ask for more information afterwards).</div>
                    <div>Storing Things in an Array</div>
                    <div>The main reason arrays even exist is so objects can have something to be stored in. It’s one of the most convenient things in programming. You wouldn’t want to have a bunch of variables floating around your program, so it’s best to put all of it in one nice bundle. You’re probably itching to see what storing things in arrays actually looks like, so we’ll take that example of your favorite fruit from earlier and turn it into code form.</div>
                    <img />
                    <div>Here’s what it displays if you print out the array:</div>
                    <img />
                    <div>Did I guess your favorite fruit right? Well depending on how many people read this I’m bound to get one of them right. Either way, very simple right? Now you’re probably wondering, “Well I have this array of my favorite fruits, but I remembered some other fruits I wanted to add. Do I have to make an entirely new array for that?” </div>
                    <div>The answer is no! You don’t have to. This is where we talk about the append function. The append function allows you to add new elements to the array without having to annoyingly make a new array. Here's how you would do it:</div>
                    <img />
                    <div>Let’s look at the print of before the append and after!</div>
                    <img />
                    <div>Indexes:</div>
                    <div>So now that you know how to store things in an array, let’s talk about indexes. An index, in the context of an array, is essentially a way to look up what element is in what position. Think of it like asking someone who's worked at a retail store for a long time where an item is instead of having to look for it solo. That would take forever! Indexes are one of the most convenient aspects of arrays. If you wanted to find out what the 10th element in your array was, you would use an index to find it. Here’s an example of what an index would look like in programming form.</div>
                    <img />
                    <div>You’re probably wondering to yourself, why does that say 0? Well, in a majority of programming languages, the first element in an array is actually represented by an index of 0 instead of 1. This can be a very common source of confusion, so please take note of that when you use indexes. Let's try something interesting. Let’s say you have a huge array, and you don’t know exactly how many elements are in said array, but you want to know what the last element in the array is. How exactly would we do that? Well, it’s very simple!</div>
                    <img />
                    <div>The last thing I want to cover with indexes is what happens when you put an index that doesn’t exist. If you had 7 elements in an array, and then you tried to look to see for a potential 8th, what would happen? This will throw you an out of bounds error, because your array is not big enough to have an 8th element.</div>
                    <img/>
                    <div>Interactive Quiz:</div>
                    <div>Let's take a break from all of the reading and get into some questions!</div>
                    <div>Removing Things in an Array</div>
                    <div>So we can add stuff to our array, but what if we want to take something out? Let’s say you made your array of favorite fruits, and then realized that you didn’t actually like one of them that much. You’d want to get rid of it, it shouldn’t be there! To do that though in Python, there are actually a couple of different methods you could do.</div>
                    <div>The first two methods use the index as a parameter to remove the element:</div>
                    <div>del Keyword: Deletes whatever item you choose at a specific position. </div>
                    <img />
                    <div>You can even use it to delete multiple elements in succession. Instead of just putting in a single index, you would put in the parameter a start index and an end index, separated by a double colon, which is referred to as a slice.</div>
                    <img />
                    <div>pop() Method: The pop method takes out a specific item and returns said item as an individual value. This means that if you were to create a new variable that uses the method, the new variable’s value would be the removed item. Take a look below:</div>
                    <img />
                    <div>The next one uses the value as the parameter instead of the index number:</div>
                    <div>remove() Method: As said above, the remove method gets rid of an element using the actual element’s name instead of its index.</div>
                    <img />
                    <div>If you want to wipe everything clean off the array, there is a method for that, it’s called the clear() method.</div>
                    <img />
                    <div>Swapping and Replacing Elements</div>
                    <div>Lets get into swapping places! Imagine you were doing some ranking of your favorite fruits, and you realized you put grapes in the place where tomatoes were supposed to be (tomatoes are versatile, but over grapes? Really? It’s your list friend.) Let’s work through this step by step.</div>
                    <img/>
                    <div>Here we see the initial array. We want that second place to go into the fifth place, and vice versa. Some reading this might think of a solution like this:</div>
                    <img />
                    <div>This would be wrong. Look at what happens when you print out the index elements:</div>
                    <img />
                    <div>You see that the second place and the fifth place are now the exact same element. We obviously don’t want that, so we need to have something hold onto the first index element, which we will lose in the initial swap. This is some like to call a temp, or temporary variable. Doesn’t have to be called that when you make it, it’s just a common name you’ll see when swapping is done. Here's what it would look like:</div>
                    <img />
                    <div>Now you know how to swap index elements! Let's get into something a lot more straightforward, which is just replacing an element with a new element. Instead of removing tomatoes from the fruits list, you want to get rid of grapes entirely, and replace them with Honeydew (wow). All you have to do is assign a new element to the array’s index.</div>
                    <img />
                    <div>Interactive Quiz #2</div>
                    <div>Let's take a break from all of the reading and get into some questions!</div>
                    <div>Some Extra Concepts:</div>
                    <div>Sometimes you’re going to want to know exactly how long your array is. You can do that with the len() method, which returns a number that represents the total amount of elements in the array.</div>
                    <img />
                    <div>If you want to copy your array list, you can do so with the copy() method, which is self-explanatory.</div>
                    <img />
                    <div>If you had an array full of numbers out of order and wanted to immediately sort them, you can use the sort() method to put them in place (there are other methods of doing this as well, but there are a lot of ways to go before you learn those).</div>
                    <img />
                    <div>If you want to add an element at a specific position, you would use the insert() method, which inserts a new element into the array and extends the array length.</div>
                    <img />
                    <div>Realized that you wrote your list wrong and you actually meant to have it in reverse? No problem! Just use the reverse() method!</div>
                    <img />
                    <div>Conclusion</div>
                    <div>There is so much more to learn about what you can do with arrays, but that is for another time. With this lesson the basics were covered, and that is what really matters in this roadmap. Arrays are some of the most important elements of programming, and understanding them will open up a lot of possibilities when it comes to developing projects. In the next lesson, we’ll take a look at if/then/else. One thing about programming if you haven’t already caught on, is that a lot of things build upon each other, so you will most definitely see arrays return in the next lesson to help with your understanding. For the meantime, if you’re feeling up to it, take some time to play the game that accompanies this lesson!</div>
                    <div>Game Link</div>

                </div>
            </div>
        </>
    )
}
export default ArrayLesson

