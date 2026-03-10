> Whenever you open docs:
>
> What problem am I solving?
>
> What prop controls that?
>
> What type does it expect?
>
> What does the example show?
>
> That’s it.

---

## Analysis of `analyst.tsx`

Based on the file `analyst.tsx`, here is a breakdown of what the code does:

- **Camera Integration**: It uses `CameraView` from `expo-camera` to display a front-facing camera feed inside a circular frame. It handles permission requests (`useCameraPermissions`).
- **Animations**: It uses `Animated` to create a "breathing" or pulsing effect (`scale` and `opacity`) on the capture button ring, indicating the app is ready or processing.
- **Simulation Logic**: The `capture` function simulates a skin analysis process:
  - It takes a picture.
  - It waits 3 seconds.
  - It starts a counter from 0 to 100% with a random duration (1-5 seconds).
  - It cycles through text states ("Analyzing.", "Analyzing..", "Analyzing...").
  - Once complete, it opens a `BottomSheet`.
- **UI Layout**: It features a custom header with a back button, the camera preview in the center, and a dynamic button at the bottom that changes from a "Start" image to a progress indicator.

---

## Essential `date-fns` Functions for a Calendar

To build a robust calendar (like a `FullCalendar` or `WeekCalendar`), you typically need a specific set of functions from the `date-fns` library. Here are the functions you need, categorized by their purpose:

### 1. Grid Generation (The Core Logic)

To render a calendar, you need to calculate which days belong in the view. A standard month view often includes days from the previous and next months to fill the grid (e.g., a 7x5 or 7x6 grid).

- `startOfMonth(date)`: Returns the first day of the month for the given date.
- `endOfMonth(date)`: Returns the last day of the month.
- `startOfWeek(date, { weekStartsOn: 0 })`: Returns the start of the week (usually Sunday or Monday). You use this on the start of the month to find the very first square in your calendar grid.
- `endOfWeek(date)`: Returns the end of the week. You use this on the end of the month to find the very last square in the grid.
- `eachDayOfInterval({ start, end })`: Returns an array of all dates within the specified range. This is the easiest way to generate the list of days to map over in your JSX.

### 2. Navigation (Changing Dates)

- `addMonths(date, amount)` / `subMonths(date, amount)`: Used for "Next Month" and "Previous Month" buttons.
- `addWeeks(date, amount)` / `subWeeks(date, amount)`: Used if you are building a `WeekCalendar` to jump between weeks.
- `addDays(date, amount)`: Useful if you are manually calculating the next day in a loop instead of using `eachDayOfInterval`.

### 3. Display & Formatting

- `format(date, formatString)`: The Swiss Army knife for displaying text.
  - `format(date, 'MMMM yyyy')` -> "October 2023" (Header)
  - `format(date, 'd')` -> "15" (Day cell)
  - `format(date, 'EEE')` -> "Mon" (Day headers)

### 4. Comparison (Active States)

- `isSameDay(dateLeft, dateRight)`: Checks if two dates are the exact same day. Essential for highlighting the **selected date**.
- `isSameMonth(dateLeft, dateRight)`: Checks if a day belongs to the currently viewed month. Essential for "graying out" days from the previous/next month in the grid.
- `isToday(date)`: Checks if the date is the current actual date (often highlighted with a circle or different color).
