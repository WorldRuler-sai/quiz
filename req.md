# Quiz App — Functional Specification

## 1. Quiz Flow

### 1.1 Intro Screen
When the app opens, the user should first see:
- A **Start** button
- A short description or details about the quiz

### 1.2 Starting the Quiz
When the user clicks **Start**:
- The first multiple-choice question is displayed

## 2. Question Display

- Each question is shown inside a **card**
- The possible answers are shown as **buttons** on that card

## 3. Answering a Question

When the user selects an answer:
- The selected answer is **highlighted**
- The answer buttons change color:
  - 🟢 **Green** for the correct answer
  - 🔴 **Red** for an incorrect answer (if the selected one was wrong)
- The app **reveals the correct answer**

## 4. Scoring

- If the user answers correctly, the **score increases by 1**

## 5. End of Quiz

After the last question:
- Show the user's **final score**
- Show a **summary of all results** for each question

## 6. Optional: Timer Feature

- Add a **1-minute timer** for each question
- If the user does not answer within 1 minute:
  - Automatically move to the **next question**
  - **Decrease the score by 1**

## 7. Summary

This quiz app should:
- Start with an **intro screen**
- Show **one card-based multiple-choice question at a time**
- Give **immediate visual feedback** for answers
- **Track score**
- Show a **final results screen**
- Optionally include a **countdown timer** with a penalty for unanswered questions

## 8. Possible Next Steps

- Turn this into a **technical specification**
- Break it down into **React components**
- Write out **step-by-step implementation logic**