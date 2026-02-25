// import { useRef, useState } from "react";
// import { View } from "react-native";
// import { LocaleConfig, WeekCalendar } from "react-native-calendars";

// LocaleConfig.locales["fr"] = {
//   monthNames: [
//     "Janvier",
//     "Février",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juillet",
//     "Août",
//     "Septembre",
//     "Octobre",
//     "Novembre",
//     "Décembre",
//   ],
//   monthNamesShort: [
//     "Janv.",
//     "Févr.",
//     "Mars",
//     "Avril",
//     "Mai",
//     "Juin",
//     "Juil.",
//     "Août",
//     "Sept.",
//     "Oct.",
//     "Nov.",
//     "Déc.",
//   ],
//   dayNames: [
//     "Dimanche",
//     "Lundi",
//     "Mardi",
//     "Mercredi",
//     "Jeudi",
//     "Vendredi",
//     "Samedi",
//   ],
//   dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
//   today: "Aujourd'hui",
// };

// LocaleConfig.defaultLocale = "fr";

// const Analyst = () => {
//   const [selected, setSelected] = useState("");
//   const marked = useRef(getMarkedDates());

//   return (
//     <View className="flex-1 bg-white pt-12">
//       <WeekCalendar
//         onDayPress={(day) => {
//           setSelected(day.dateString);
//         }}
//         markedDates={marked.current}
//         firstDay={1}
//       />
//     </View>
//   );
// };

// export default Analyst;

// // selected
// //   ? {
// //       [selected]: {
// //         selected: true,
// //         disableTouchEvent: true,
// //       },
// //     }
// //   : {}

// import { useState } from "react";
// import { View } from "react-native";
// import { WeekCalendar } from "react-native-calendars";

// const Analyst = () => {
//   const today = new Date().toISOString().split("T")[0];
//   const [selected, setSelected] = useState(today);

//   return (
//     <View className="flex-1 bg-white pt-12">
//       <WeekCalendar
//         firstDay={1}
//         current={today}
//         onDayPress={(day) => setSelected(day.dateString)}
//         markedDates={{
//           [selected]: { selected: true },
//         }}
//         theme={
//           {
//             selectedDayBackgroundColor: "#4630EB",
//             selectedDayTextColor: "#fff",

//             "stylesheet.day.basic": {
//               base: {
//                 width: 36,
//                 height: 48,
//                 alignItems: "center",
//                 justifyContent: "center",
//               },
//               selected: {
//                 borderRadius: 8,
//               },
//             },
//           } as any
//         }
//       />
//     </View>
//   );
// };

// export default Analyst;

import WeekCalendar from "@/components/calendars";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Analyst: React.FC = () => {
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView style={styles.safe}>
      <WeekCalendar date={date} onChange={(newDate) => setDate(newDate)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});

export default Analyst;
