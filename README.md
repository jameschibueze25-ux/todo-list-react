# To-Do List (React)

A to-do list app built with React. This is a rebuild of my [vanilla JavaScript version](https://github.com/jameschibueze25-ux/To-Do-List) — same idea, different approach.

## Features

- Add tasks by typing and pressing Enter or clicking Add
- Check off tasks to mark them complete
- Filter tasks by All / Active / Completed
- Delete individual tasks or clear all completed at once
- Tasks persist across page refreshes using localStorage

## Tech Stack

- React 19
- Vite
- CSS (no UI library)

## Getting Started

```bash
npm install
npm run dev
```

## What I learned

Building this in React after doing it in vanilla JS made the difference between the two approaches very clear — managing state with `useState`, persisting data with `useEffect`, and keeping the UI in sync automatically instead of manually updating the DOM.
