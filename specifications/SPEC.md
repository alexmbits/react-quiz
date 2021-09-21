# Specifications

Your challenge is to create a 10 question, true or false, trivia app with React Web.

The api url is: [https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean  
](https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean)

Sample returned json:

```
{
  "response_code": 0,
  "results": [
    {
      "category": "Entertainment: Video Games",
      "type": "boolean",
      "difficulty": "hard",
      "question": "Unturned originally started as a Roblox game.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },…]}
```

#

**Intro / Home Screen:**

![Intro](Intro.png)

- Static Text
- BEGIN button navigates to the Quiz screen and starts the Quiz

#

**Quiz Screen:**

![Quiz](Quiz.png)

- The headline is from question category
- The card element contains the current question
- The next question should appear after the current question is answered True or False
- After all questions have been answered, navigate to the Results Screen

#

**Results screen:**

![Score](Score.png)

- The Score shows correct and total
- Displays a list of the questions and whether the answer was correct or not
- PLAY AGAIN starts over and navigates to the Home Screen
