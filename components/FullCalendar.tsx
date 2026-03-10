import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  getDate,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  date: Date;
  onChange: (value: Date) => void;
};

const FullCalendar: React.FC<Props> = ({ date, onChange }) => {
  const [days, setDays] = useState<CalendarDay[]>([]);

  useEffect(() => {
    setDays(getMonthDays(date));
  }, [date]);

  return (
    <View style={styles.container}>
      {days.map((dayObj) => {
        const isSelected = isSameDay(dayObj.date, date);

        // Conditionally apply styles
        const containerStyles: ViewStyle[] = [styles.dayContainer];
        const textStyles: TextStyle[] = [styles.dayNumber];

        // Gray out days not in the current month
        if (!dayObj.isCurrentMonth) {
          textStyles.push(styles.disabledText);
        }

        // Highlight the selected day
        if (isSelected) {
          containerStyles.push(styles.selectedContainer);
          textStyles.push(styles.selectedText);
        }

        return (
          <TouchableOpacity
            key={dayObj.date.toISOString()}
            style={containerStyles}
            onPress={() => onChange(dayObj.date)}
          >
            <Text style={textStyles} className="font-home-semibold">
              {dayObj.day}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FullCalendar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexWrap: "wrap", // Allows days to wrap to the next line
  },
  dayContainer: {
    width: 48,
    height: 60,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedContainer: {
    backgroundColor: "white",
  },
  dayNumber: {
    fontSize: 19,
    fontWeight: "600",
    color: "white",
  },
  selectedText: {
    color: "black",
  },
  disabledText: {
    color: "gray",
  },
});

type CalendarDay = {
  date: Date;
  day: number;
  isCurrentMonth: boolean;
};

export const getMonthDays = (date: Date): CalendarDay[] => {
  // 1. Get the start and end of the month for the given date
  const monthStart = startOfMonth(date);
  const monthEnd = endOfMonth(date);

  // 2. Get the start and end of the full grid, including previous/next month days
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

  // 3. Generate an array of all days in that interval
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  // 4. Format the data for our component
  return days.map((day) => ({
    date: day,
    day: getDate(day),
    isCurrentMonth: isSameMonth(day, date),
  }));
};
