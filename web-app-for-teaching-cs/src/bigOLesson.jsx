import Header from './Header'
import './arrays.css'
import { useNavigate } from 'react-router-dom';
import {useRef} from 'react';
import { BigOQuizQuestionsQuiz1 } from './bigOQuestions';
import { BigOQuizQuestionsQuiz2 } from './bigOQuestions2';

import bigO1 from './lessonScreenshots/big-o/bigO1.png'
import bigO2 from './lessonScreenshots/big-o/bigO2.png'
import bigO3 from './lessonScreenshots/big-o/bigO3.png'
import bigO4 from './lessonScreenshots/big-o/bigO4.png'
import bigO5 from './lessonScreenshots/big-o/bigO5.png'
import bigO6 from './lessonScreenshots/big-o/bigO6.png'
import bigO7 from './lessonScreenshots/big-o/bigO7.png'
import bigO8 from './lessonScreenshots/big-o/bigO8.png'
import bigO9 from './lessonScreenshots/big-o/bigO9.png'
function BigOLesson() {
    const navigate = useNavigate();

    const jumpRef = useRef(null);
    const scroll = () => {
        jumpRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef2 = useRef(null);
    const scroll2 = () => {
        jumpRef2.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef3 = useRef(null);
    const scroll3 = () => {
        jumpRef3.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef4 = useRef(null);
    const scroll4 = () => {
        jumpRef4.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef5 = useRef(null);
    const scroll5 = () => {
        jumpRef5.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef6 = useRef(null);
    const scroll6 = () => {
        jumpRef6.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef7 = useRef(null);
    const scroll7 = () => {
        jumpRef7.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    return (
        <>
            <Header />
            <div className="arraysContainer">
                <div className="tableOfContentsArrays">
                    <div onClick={() => navigate('/intro-to-programming')}> Back To Roadmap </div>
                    <div>Table Of Contents</div>
                    <div id="the-big-bad-o" onClick={scroll}>The Big Bad O</div>
                    <div id="what-is-big-o" onClick={scroll2}>What Is Big O Notation</div>
                    <div id="time-and-space-complexity" onClick={scroll3}>Time and Space Complexity</div>
                    <div id="interactive-quiz-1" onClick={scroll4}>Interactive Quiz #1</div>
                    <div id="the-big-o-complexities" onClick={scroll5}>The Big O Complexities</div>
                    <div id="interactive-quiz-2" onClick={scroll6}>Interactive Quiz #2</div>
                    <div id="conclusion" onClick={scroll7}>Conclusion</div>
                </div>
                <div className="lessonArrays">
                    <div>
                        <div id='arrayTitle'>Big O</div>
                        <div ref={jumpRef} className="arrayHeader" id="jump1">The Big Bad O</div>
                        <div className="arrayTextContent">Here we are, the lesson that I was fearing the most to make. I call Big O notation “The Big Bad O”, because it in theory is simple to comprehend but also very easy to get confused about. In Data Structures and Algorithms (which I will be calling DSA going forward), Big O is the starting building block to understand everything you need to know about DSA. If you’re looking to get a job in the Computer Science field, knowing Big O and DSA as a whole is pivotal. I really don’t want to mess up this explanation, so this time around there is gonna be more text than usual.</div>
                    </div>
                    <div>
                        <div ref={jumpRef2} className="arrayHeader" id="jump2">What Is Big O Notation</div>
                        <div className="arrayTextContent">Big O notation in the most simplest terms is a way to see how fast or slow an algorithm is going to be. It focuses on the asymptotic upper bound, which is a tool that looks at the max growth rate for a function (things like time and space complexity, which we will get into soon. ) as the input size n increases. With Big O, we have to look at the worst case scenario over anything else (best case, which is also known as Big Omega, and average case, which is known as Big Theta, both of which we won’t be talking about in detail). Knowing the worst case scenario means knowing that what you see cannot get worse than what it is (unless somehow in trying to make the algorithm better, you make it work worse), it’s only up from there. It’s the maximum amount of steps needed for the algorithm to run.</div>
                        <div className="arrayTextContent">Let’s say you’re throwing a party at your house, and you want to know how much food you need to buy. To get an adequate amount of food so that everyone is fed, you would need to plan for the worse case scenario (in this case it is at least, in others it’s a great thing of course), which would be every single person you invited showing up, and if you allowed them to bring a plus one, adding those all together and allotting costs for food based on that. You wouldn’t plan on an average amount, because you wouldn’t know, and in this case, you wouldn’t plan with the best case in terms of saving money, which would be nobody coming or just a very few people coming, which is sad.</div>
                        <img></img>
                    </div>
                    <div>
                        <div ref={jumpRef3} className="arrayHeader" id="jump3">Time and Space Complexity</div>
                        <div className="arrayTextContent">Before we get into the nitty gritty with the individual time complexities, I wanted to first define what time and space complexity actually is.</div>
                        <div className="arrayTextContent">Well, with Time Complexity, its definition is basically what I said Big O was earlier. It’s a measure that looks at how much computational time it takes to get an algorithm running as the input size increases. But to add onto that, Time Complexity is not measured using execution time, usually done in milliseconds. This is because of the fact that execution time can vary from use case to use case. You might have a slower computer than someone else, you might be using a different programming language that is faster than someone using another, etc. Because of this lack of consistency, Time Complexity is counted using how many actual code statements have been executed in the algorithm. This is where Big O notation comes in, which we will go more in depth about in The Big O Complexities section.</div>
                        <div className="arrayTextContent">Space Complexity looks at how much memory space the algorithm needs to run fully as the input size increases. Space Complexity can be split into two parts, those being the input space, which is the memory needed to store the input data from the algorithm, and auxiliary space, which would be any leftover memory that the algorithm allocates over the course of execution, things like local variables, recursive calls, loop counts, etc.</div>
                        <div className="arrayTextContent">It’s important to note that Time and Space Complexity are not always going to be the exact same. I’ll explain this more when we get to talk about the Big O complexities, but just remember that they work off of two different things, time being execution time, and space being how much memory has been used. </div>
                        <div className="arrayTextContent">The last thing I want to point out here is that there will be sacrifices made when thinking about time and space complexity. Using certain data structures like dictionaries can help with your time complexity when it comes to the amount of instructions the algorithm has to use, but would have the algorithm chugging memory to keep the structure going, which affects the space complexity heavily. </div>
                    </div>
                    <div>
                        <div ref={jumpRef4} className="arrayHeader" id="jump4">Interactive Quiz #1</div>
                        <div className="arrayTextContent">Time to take a break from all that informational reading, let's start reading and answering some questions!</div>
                        <div className='quizContainer'><BigOQuizQuestionsQuiz1/></div>
                    </div>
                    <div>
                        <div ref={jumpRef5} className="arrayHeader" id="jump5">The Big O Complexities</div>
                        <div className="arrayTextContent">Okay, this part's gonna be a lot, but I’ll try to make it as digestible as possible. There weren’t too many pictures used in this lesson so far, but that changes here. We’re gonna need them. To start with, let’s take a look at this graph.</div>
                        <img></img>
                        <div className="arrayTextContent">This is the Big O graph, with the most important complexities to look out for. It goes worst complexity (O(n!)) to best (O(1)). There are obviously more than what you see here, but it gets to a point where it gets super negligible. Things like O(3n), O(4n), and so on, don’t really need to be on your radar because you aren’t going to see them as much. In your time developing things though, what you see on this graph, you will and already have come across. Let’s take a look at them individually, starting with O(1).</div>
                        <div className="miniHeader">O(1)</div>
                        <div className="arrayTextContent">O(1) is called constant time, which means that no matter what, the instruction will always take the same amount of time to get through, even if the input value were to increase. </div>
                        <img className= "arrayImg" src={bigO1}></img>
                        <div className="arrayTextContent">An array’s element getting accessed is a good example of O(1). It doesn’t matter how many elements are in the array, it will always take the same amount of time to access a single element of the array. </div>
                        <img></img>
                        <div className="arrayTextContent">Pushing or popping an element is constant time, because they are always using a fixed reference point to insert or remove the element. You either remove from the end of the array, or you add to the top of it. Note that this is only O(1) when you aren’t trying to push or pop a specific index or element.</div>
                        <div className="arrayTextContent">Constant time also applies to things like doing simple math with fixed size numbers.</div>
                        <img className= "arrayImg" src={bigO2}></img>
                        <div className="miniHeader">O(log n)</div>
                        <div className="arrayTextContent">O(log n) is Logarithmic Time, which is where the algorithm's execution time increases slowly as the input size does. Aside from constant time, O(log n) is the fastest complexity and one of the most efficient when algorithms aim for it. Any algorithm that is an O(log n) aims for having the work get cut in half every time it runs. Now, I know that we haven’t covered it just yet, but for the sake of this lesson, I’m going to have to show you searches for the first time. They will be explored in a later lesson, but they are needed now to help illustrate how this works.</div>
                        <img  className= "arrayImg"src={bigO3}></img>
                        <div className="arrayTextContent">What you’re seeing above is an algorithm called binary search. Its purpose is to find the specific position of an element in a sorted array. How it does this is by finding the middle value of the array, and checking to see if the middle value is bigger, smaller, or equal to the element. If it’s the middle, then return the index of the middle, if it’s bigger, then split the array in half and make the new endpoint the midpoint - 1, and if it’s smaller, split the array in half and make the new endpoint the midpoint + 1, and for both, you would calculate a new midpoint. You would continue to split the array in half until the middle value is equal to the element or until the search was used up and the element was not in the array.</div>
                        <div className="miniHeader">O(n)</div>
                        <div className="arrayTextContent">O(n) is Linear Time, which means that the execution time of the algorithm is grown directly proportional to the input size. It’s kind of like being in a neighborhood and knocking on every door until you find your friend's house. Why they didn’t give you their exact address is beyond me, but you might be knocking on 1 door, or you might be knocking on 8. Below is an example of a linear search representing the hunt for your friend's house.</div>
                        <img  className= "arrayImg"src={bigO4}></img>
                        <div className="arrayTextContent">Simple for loops that have an n size to go through and iterate by 1 are usually going to be O(n).</div>
                        <div className="arrayTextContent">There is something I want to bring up with O(n) that is important to know. It is the use of constants. To put it simply, they are not important. Take a look at this.</div>
                        <img  className= "arrayImg"src={bigO5}></img>
                        <div className="arrayTextContent">So you see how there are 2 for loops, and three operations at the top of the function? Since one for loop is n, you would add both for loops and get 2n. The three operations up top add up to 3, since there are three operations, duh. You could write it out like O(2n + 3), but like I said earlier, since the constants aren’t important, you can just turn it into O(n).</div>
                        <div className="miniHeader">O(n log n)</div>
                        <div className="arrayTextContent">O(n log n) is called log-linear time complexity. It’s where the algorithm does a logarithmic operation an n amount of times. It shines at its best when it’s used in sorting algorithms, like Merge Sort. I won’t get too in depth about this here, since I want to cover these in a later lesson, but for now, just know that with merge sort, the array gets split in half over and over again (if there were 20 elements in the array, then log(20) base 2 means its splitting around 4 times) until there’s only 1 element in each subarray, and then the elements get merged back together in pairs and sorted (this is where o(n) comes in), until the entire array is connected again. This is probably confusing now, but once again, I promise I’ll go over this in detail in a future lesson that isn’t too far away.</div>
                        <div className="miniHeader">O(n^2)</div>
                        <div className="arrayTextContent">O(n^2) is called Quadratic Time. This is where the execution time is grown proportional to the square of the input size. </div>
                        <img  className= "arrayImg"src={bigO6}></img>
                        <div className="arrayTextContent">This can occur in a nested loop, because when you put a loop into a loop, instead of it being something like O(n) + O(n), it’s actually O(n) * O(n). Algorithms like Bubble Sort and Insertion Sort are O(n^2) because of this (once again, don’t worry too much about this just yet.)</div>
                        <div className="arrayTextContent">Two things I want to mention. The first being an addendum to what I said about the complexities you don’t see. You could have things like O(n^3) by having 3 loops chained together, but you may not always use that and anything beyond that is just straight spaghetti. The second thing I want to talk about is dominant terms. </div>
                        <img  className= "arrayImg"src={bigO7}></img>
                        <div className="arrayTextContent">This above is an O(n^2 + n + 2) complexity. If you’ve been keeping what I’ve been saying in mind, then you already know the 2 can be dropped. Now we have O(n^2 + n). I wouldn’t really be talking about this if we just left it at that, so it’s important to let you know that with Big O, not only do you remove any constants, but you also have to drop any complexities that are lower than the largest one. This means you only need to write out O(n^2) here. </div>
                        <div className="miniHeader">O(2^n)</div>
                        <div className="arrayTextContent">O(2^n) is called Exponential Time. With it, every new input causes the execution time to double. This is where we start to get to the tier of, not great complexities, because they scale badly and any algorithm that uses it becomes ridiculous to use when the inputs get high. These apply to algorithms like the fibonacci sequence.</div>
                        <img className= "arrayImg" src={bigO8}></img>
                        <div className="arrayTextContent">As you can see, with the last return function having 2 different sequences fibonacci(n - 1) and fibonacci(n - 2), the function gets called recursively twice each step and splits off into two different trees that keep doubling until they reach the base case. If you were to add a third part fibonacci(n - 3), then it would be O(3^n). Just something to remember, but not completely necessary.</div>
                        <div className="miniHeader">O(n!)</div>
                        <div className="arrayTextContent">O(n!) is called Factorial Time. This is the slowest complexity on the graph, and means that the execution time of the algorithm grows at a factorial rate based on input size. This is the least practical complexity you could use, and would probably turn your computer into a microwave if you went anywhere past the number 10. You see this used in finding every permutation of a set of items, or in something like the Traveling Salesman Problem, where you need to find the shortest route that visits every city at least once and ends at the first city provided you have a list of said cites and their distances between each other (though this is used when you want to brute force the problem, there are much better ways of trying to figure this one out). If you put a recursive function in a for loop, that can also cause O(n!). You’d do best to try and avoid doing that.</div>
                        <img className= "arrayImg" src={bigO9}></img>
                    </div>
                    <div>
                        <div ref={jumpRef6} className="arrayHeader" id="jump6">Interactive Quiz #2</div>
                        <div className="arrayTextContent">I know your heads are probably spinning right now, so let's make it spin some more with some questions!</div>
                        <div className='quizContainer'><BigOQuizQuestionsQuiz2/></div>
                    </div>
                    <div>
                        <div ref={jumpRef7} className="arrayHeader" id="jump7">Conclusion</div>
                        <div className="arrayTextContent">That was a lot, right? Well, just remember that these are building blocks for later lessons, so it’s not like they will go away any time soon. The thing is though, as you continue to program and learn to optimize your programs, these things become second nature. You’ll see when I go in depth on some of the algorithms that were mentioned in this lesson, hopefully it should click better if it hasn’t already. I’ll make sure to keep bringing up Big O as much as possible until you’re sick of it! I hope that this lesson helped you out, because it certainly helped me a bit. Below you can click the link to play the game that relates to this lesson!</div>
                        <div className="arrayTextContent">[GAME UNDER CONSTRUCTION]</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BigOLesson