import Header from "./Header";
import './ifElse.css'
import {useNavigate} from 'react-router-dom';
import {useRef} from 'react';

import if1 from './lessonScreenshots/if-else/if1.png'
import if2 from './lessonScreenshots/if-else/if2.png'
import if3 from './lessonScreenshots/if-else/if3.png'
import if4 from './lessonScreenshots/if-else/if4.png'
import if5 from './lessonScreenshots/if-else/if5.png'
import if6 from './lessonScreenshots/if-else/if6.png'
import if7 from './lessonScreenshots/if-else/if7.png'
import if8 from './lessonScreenshots/if-else/if8.png'
import if9 from './lessonScreenshots/if-else/if9.png'
import if10 from './lessonScreenshots/if-else/if10.png'
import if11 from './lessonScreenshots/if-else/if11.png'
import if12 from './lessonScreenshots/if-else/if12.png'
import if13 from './lessonScreenshots/if-else/if13.png'
import if14 from './lessonScreenshots/if-else/if14.png'

function IfElseLesson() {

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

    const jumpRef8 = useRef(null);
    const scroll8 = () => {
        jumpRef8.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef9 = useRef(null);
    const scroll9 = () => {
        jumpRef9.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef10 = useRef(null);
    const scroll10 = () => {
        jumpRef10.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    const jumpRef11 = useRef(null);
    const scroll11 = () => {
        jumpRef11.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
    }


    return (
        <>
            <Header />
            <div className="ifElseContainer">
                <div className="tableOfContentsIfElse">
                    <div onClick={() => navigate('/intro-to-programming')}> Back To Roadmap </div>
                    <div>Table of Contents</div>
                    <div id="what-even-is-an-if-statement" onClick={scroll}>What Even Is An If Statement?</div>
                    <div id="using-if" onClick={scroll2}>Using If</div>
                    <div id="adding-else" onClick={scroll3}>Adding Else</div>
                    <div id="and-or-not" onClick={scroll4}>And, Or, Not Equals To</div>
                    <div id="in" onClick={scroll5}>In</div>
                    <div id="interactive-quiz" onClick={scroll6}>Interactive Quiz #1</div>
                    <div id="elif" onClick={scroll7}>Elif(else if)</div>
                    <div id="ifception" onClick={scroll8}>Ifception</div>
                    <div id="shorthand-if-statements" onClick={scroll9}>Shorthand If Statements</div>
                    <div id="interactive-quiz-2" onClick={scroll10}>Interactive Quiz #2</div>
                    <div id="conclusion" onClick={scroll11}>Conclusion</div>
                </div>
                <div className="lessonIfElse">
                    <div>
                        <div id="ifElseTitle">If, Then, Else</div>
                        <div ref={jumpRef} className="ifElseHeader">What Even Is An If Statement?</div>
                        <div className="ifElseTextContent">Here we are, talking about what should be considered to be one of the major fundamentals of programming. The If/Else/Then statement. Understanding how it works gets you a lot farther into your programming journey, as it opens up a lot of different avenues for what you can do and create. But all that talk aside, what exactly is an If/Else/Then statement (we will be calling it an if statement from now on for the sake of keeping things short.)?</div>
                        <div className="ifElseTextContent">An if statement is a conditional statement that allows for the program to make different choices depending on whether the statement is true or not. If the statement is true, the program executes that part of the program, if not, it skips over it entirely. If something is true, then something happens, cause and effect. </div>
                    </div>
                    <div>
                        <div ref={jumpRef2} className="ifElseHeader">Using If</div>
                        <div className="ifElseTextContent">Actually using If in code is very simple. Going forward we’ll bring back your favorite fruit to illustrate this. We’ll take your top favorite fruit and assign it to a variable. If the variable matches the value we put in the if statement parameters, then we’ll print out something.</div>
                        <img className="ifElseImg" src={if1}></img>
                        <div className="ifElseTextContent">See, super simple! Now we can take a look at what happens if the if statement is actually a false statement. We’ll add a print statement after the if statement to showcase what’s going on.</div>
                        <img className="ifElseImg" src={if2}></img>
                        <div className="ifElseTextContent">As you can see above, because the if statement was false, the entire thing got skipped. That’s basically the basics of the if part of the if statement, so let’s see what happens if we add else to it!</div>
                    </div>
                    <div>
                        <div ref={jumpRef3} className="ifElseHeader">Adding Else</div>
                        <div className="ifElseTextContent">As I said in the first section, if something is true, then something happens. But with Else, if something isn’t true, it gets skipped and the other option gets evaluated to see if it can fulfill conditions. The else is the alternate direction that the program could take essentially. Here's how it looks in action:</div>
                        <img className="ifElseImg" src={if3}></img>
                    </div>
                    <div>
                        <div ref={jumpRef4} className="ifElseHeader">And, Or, Not</div>
                        <div className="ifElseTextContent">Let’s start to spice things up! Now you know how to make a basic if statement, but we gotta make it a little more complex so you can get a better look at the full picture. Might get a little scary, but we’re gonna make sure you get it. What if you wanted to have a statement that had multiple conditional parts? How would you represent that? Enter logical operators. These are words/symbols that can be added to your conditional statements to give more options or more conditions to a statement. Let's get a closer look at each one.</div>
                        <div className="ifElseTextContent">And: If used in a conditional, the program checks to see if all parts are true. If even one part is false, the entire statement is false and the program moves on.</div>
                        <img className="ifElseImg" src={if4}></img>
                        <div className="ifElseTextContent">You can keep it going as long as you want. Not that I would recommend that though. That gets into messy spaghetti code territory, and that is something you don’t want. There are more clever ways to get what you want without having to slow your computer down. As you continue to program, you’ll start to figure out more ways to condense things as much as possible. </div>
                        <div className="ifElseTextContent">Or: Unlike the And operator, if you use or in a conditional, the program will check to see what if one part is true. If all parts of the statement are false, then it is overall false. </div>
                        <img className="ifElseImg" src={if5}></img>
                        <div className="ifElseTextContent">Might not be too important since the results are the same anyways (still good to know), but as soon as a true statement is found, the conditional is immediately considered true and the program goes into the then part of the if statement.</div>
                        <div className="ifElseTextContent">!= (not equal to): This is basically an inverse of the normal if statement. Left is right, right is left. Basically, if the if conditional is not something specific, then the statement is true and the then part of the if statement can run. </div>
                        <img className="ifElseImg" src={if6}></img>
                        <div className="ifElseTextContent">Now that you know how these work individually, let's get a little brave and start to combine them together!</div>
                        <div className="ifElseTextContent">And + Or:</div>
                        <img className="ifElseImg" src={if7}></img>
                        <div className="ifElseTextContent">As you can see, since the first and section was false, it looked at the other and section and determined that the statement overall was true since that part was true.</div>
                        <div className="ifElseTextContent">And + Or + !=:</div>
                        <img className="ifElseImg" src={if8}></img>
                        <div className="ifElseTextContent">Since the first statement was true, the entire conditional was validated and the program went into the then part of the if statement.</div>
                    </div>
                    <div>
                        <div ref={jumpRef5} className="ifElseHeader">In</div>
                        <div className="ifElseTextContent">The “In” keyword is something that you will see again when we talk about for loops, but for right now I’ll talk about it in the context of if statements. The “in” keyword when it comes to if statements can check to see if one thing is a part of something else. For this example, we are going to use our fruit arrays to see if grapes are in the array. If there are grapes in the array, we’ll print “Better than tomatoes”, and if not, we’ll print “What is even the purpose of a grape”.</div>
                        <img className="ifElseImg" src={if9}></img>
                        <div className="ifElseTextContent">I really don’t understand your hatred of grapes. Well either way, you can see that the if statement checked to see if grapes were in there, and since they weren’t, they went straight to the else statement instead. </div>
                    </div>
                    <div>
                        <div ref={jumpRef6} className="ifElseHeader">Interactive Quiz #1</div>
                        <div className="ifElseTextContent">No more reading for now! Let’s solve some questions!</div>
                        <div className="quizContainer2"></div>
                    </div>
                    <div>
                        <div ref={jumpRef7} className="ifElseHeader">Elif (else if)</div>
                        <div className="ifElseTextContent">We’ve learned a lot about if statements. But we haven’t seen what it looks like to make more than just 1 single if statement in 1 full block of code. This is where elif comes in. It means else if. If you had more than 1 specific if statement that you wanted to try, more alternative pathways, you would use elif. Here's what it would look like.</div>
                        <img className="ifElseImg" src={if10}></img>
                        <div className="ifElseTextContent">As you can see, the first statement wasn’t true, so it went to the elif statement and checked to see if that one was true. It fulfilled the conditional, so that block of code was run.</div>
                        <div className="ifElseTextContent">You can do as many elifs as you want, but as I said earlier, you don’t want to make messy spaghetti code. Make sure that you work on cutting down on the stuff that isn’t as needed.</div>
                    </div>
                    <div>
                        <div ref={jumpRef8} className="ifElseHeader">Ifception</div>
                        <div className="ifElseTextContent">We’ve gotten very far today learning about if statements. But there's just 2 more things I want to talk about before ending the lesson. The first being nested if statements. Very simple, you basically place an entire if statement in another if statement. This means that if the outer if statement is true, then the program will try to run the inner if statement. If the inner statement is true, then it will do its then statement, but if it’s false, then only the outer statement runs and the inner gets skipped over. Here’s what it looks like.</div>
                        <img className="ifElseImg" src={if11}></img>
                        <div className="ifElseTextContent">Once again, you could try to do this as much as you want, but really, please don’t. It’s just bad code and makes the program run slower. </div>
                        <img className="ifElseImg" src={if12}></img>
                        <div className="ifElseTextContent">It also just looks really messy. We want our stuff to look pretty and neat. </div>
                    </div>
                    <div>
                        <div ref={jumpRef9} className="ifElseHeader">Shorthand If Statements</div>
                        <div className="ifElseTextContent">Let’s look at a short and clean way to do if statements! These are called shorthand if statements, where the if statement can be written on a single line. In Python, there are two different ways to write shorthand. These ways depend on whether or not you’re including else in the statement. Let’s see how these look.</div>
                        <div className="ifElseTextContent">Without Else:</div>
                        <img className="ifElseImg" src={if13}></img>
                        <div className="ifElseTextContent">So you have the if statement, followed by the then statement afterwards. Pretty easy!</div>
                        <div className="ifElseTextContent">With Else:</div>
                        <img className="ifElseImg" src={if14}></img>
                        <div className="ifElseTextContent">Here you have the then statement first, followed by the if statement, and then ending off with the else statement.</div>
                        <div className="ifElseTextContent">You could chain together multiple if statements into one shorthand condition, but that isn’t something I would recommend. Just stick to the normal elif technique. Readability is important, so we don’t want to have a long line of if statements, it would become hard to interpret. </div>
                    </div>
                    <div>
                        <div ref={jumpRef10} className="ifElseHeader">Interactive Quiz #2</div>
                        <div className="ifElseTextContent">Let's get some questions going!</div>
                        <div className="quizContainer2"></div>
                    </div>
                    <div>
                        <div ref={jumpRef11} className="ifElseHeader">Conclusion</div>
                        <div className="ifElseTextContent">So that was the if statement. Not too bad right? Once again reiterating from the beginning, the if statement is probably one of if not the most important fundamental to learn in programming, because it is literally everywhere. You’d do great to do a little bit of practice making if statements to try to get a full hang of it, because our next lesson, loops, will heavily involve if statements. From now on, there won’t be a lesson that doesn’t have a mention of the if statement. If you do want to get more practice, you can play the game that is linked to this lesson!</div>
                        <div className="ifElseTextContent">Game Link</div>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default IfElseLesson