# React useEffect Hook: Incorrect Logic for Single Data Fetch

This repository demonstrates a common error in React's `useEffect` hook where the logic for fetching data only once is implemented incorrectly, leading to unexpected behavior such as multiple fetches or infinite loops. 

The `bug.js` file contains the erroneous code. The `bugSolution.js` file shows the corrected implementation.

## Problem

The provided `useEffect` hook attempts to fetch data only on mount. However, updating `count` within the asynchronous operation triggers a re-render, potentially leading to multiple fetches.  This is a subtle but common mistake when working with asynchronous operations in `useEffect`.

## Solution

The solution involves using a flag to prevent re-rendering and subsequent unnecessary fetches after the initial data fetch is complete.
