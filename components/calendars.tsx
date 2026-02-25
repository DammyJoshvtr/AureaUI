import { addDays, format, getDate, isSameDay, startOfWeek } from "date-fns";
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

const WeekCalendar: React.FC<Props> = ({ date, onChange }) => {
  const [week, setWeek] = useState<WeekDay[]>([]);

  useEffect(() => {
    setWeek(getWeekDays(date));
  }, [date]);

  return (
    <View style={styles.container}>
      {week.map((weekDay) => {
        const isSelected = isSameDay(weekDay.date, date);

        const containerStyles: ViewStyle[] = [styles.dayContainer];
        const textStyles: TextStyle[] = [styles.dayNumber];
        const labelStyles: TextStyle[] = [styles.dayLabel];

        if (isSelected) {
          containerStyles.push(styles.selectedContainer);
          textStyles.push(styles.selectedText);
          labelStyles.push(styles.selectedText);
        }

        return (
          <TouchableOpacity
            key={weekDay.date.toISOString()}
            style={containerStyles}
            onPress={() => onChange(weekDay.date)}
          >
            <Text style={labelStyles} className="font-home-semibold">
              {weekDay.formatted}
            </Text>
            <Text style={textStyles} className="font-home-semibold">
              {weekDay.day}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },

  dayContainer: {
    width: 48,
    height: 60,
    borderRadius: 12, // rounded square
    alignItems: "center",
    justifyContent: "center",
  },

  selectedContainer: {
    backgroundColor: "white", // white
  },

  dayLabel: {
    fontSize: 12,
    color: "white",
    marginBottom: 4,
  },

  dayNumber: {
    fontSize: 19,
    fontWeight: "600",
    color: "white",
  },

  selectedText: {
    color: "black",
  },
});

type WeekDay = {
  formatted: string;
  date: Date;
  day: number;
};

export const getWeekDays = (date: Date): WeekDay[] => {
  const start = startOfWeek(date, { weekStartsOn: 1 });

  const final: WeekDay[] = [];

  for (let i = 0; i < 7; i++) {
    const newDate = addDays(start, i);
    final.push({
      formatted: format(newDate, "EEE"),
      date: newDate,
      day: getDate(newDate),
    });
  }

  return final;
};

export default WeekCalendar;
