import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ContinueButton from "./button";

interface Props {
  isActive: boolean;
  onClose?: () => void;
}

// Store Tailwind styles in an object for cleaner JSX
const ui = {
  overlay: "flex-1 justify-end bg-black/50",
  sheet: "bg-[#383838] rounded-t-[40px] min-h-[500px] items-center relative",
  handle: "absolute top-3 self-center w-28 h-2 bg-white rounded-lg",
  header: "w-full h-32 px-8 flex-row items-center",
  headerScore: "text-white text-[60px] font-home-bold",
  headerTitle: "text-white font-home-semibold text-[18px] mx-auto",
  progressBar: "w-28 h-3 bg-gray-300 rounded-lg overflow-hidden",
  progressBarFill: "bg-white h-full rounded-lg",
  contentContainer: "flex-1 w-full rounded-t-[2.5rem] bg-gray-200 p-6 gap-y-4",
  statsRow: "flex-row justify-between items-center",
  statCard:
    "h-[12rem] w-[48%] rounded-xl bg-white shadow-sm px-4 py-3 justify-between",
  statValueContainer: "h-[75%] justify-center items-center",
  statValue: "text-[60px] font-home-bold",
  statLabelContainer: "h-[15%] w-full rounded-xl justify-center items-center",
  statLabelText: "font-home-regular text-gray-100",
  descriptionBox: "bg-white rounded-xl p-4 gap-1",
  descriptionTitle: "font-home-bold text-[16px]",
  descriptionText: "text-gray-500 font-home-regular leading-5",
  actualDescriptionTitle: "Overall Health Skin",
  actualDescriptionText:
    "Your skin is in excellent condition, well hydrated, smooth in texture, and showing minimal signs of stress. Keep up the consistent care for long-term radiance.",
};

export default function BottomSheet({ isActive, onClose }: Props) {
  const panY = useRef(new Animated.Value(0)).current;
  const screenHeight = Dimensions.get("window").height;

  // Reset <posit></posit>ion when the modal opens
  useEffect(() => {
    if (isActive) {
      panY.setValue(0);
    }
  }, [isActive]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Only allow dragging down (positive values)
        if (gestureState.dy > 0) {
          panY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        // If dragged down more than 100px, close the sheet
        if (gestureState.dy > 100) {
          onClose?.();
        } else {
          // Otherwise, spring back to the open position
          Animated.spring(panY, {
            toValue: 0,
            useNativeDriver: true,
            bounciness: 4,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isActive}
        onRequestClose={onClose}
      >
        <TouchableOpacity
          className={ui.overlay}
          activeOpacity={1}
          onPress={onClose}
        >
          {/* Stop propagation so clicking the sheet doesn't close it */}
          <TouchableWithoutFeedback>
            <Animated.View
              style={[{ transform: [{ translateY: panY }] }]}
              className={ui.sheet}
            >
              {/* Draggable Area (Handle + Header) */}
              <View
                className="w-full items-center"
                {...panResponder.panHandlers}
              >
                <View className={ui.handle} />

                <View className={ui.header}>
                  <Text className={ui.headerScore}>87</Text>
                  <Text className={ui.headerTitle}>Overall Skin Health</Text>
                  <View className={ui.progressBar}>
                    <View
                      className={ui.progressBarFill}
                      style={{ width: "87%" }}
                    />
                  </View>
                </View>
              </View>

              <View className={ui.contentContainer}>
                <View className={ui.statsRow}>
                  {/* First Square */}
                  <View className={ui.statCard}>
                    <View className={ui.statValueContainer}>
                      <Text className={ui.statValue}>83</Text>
                    </View>
                    <View className={`${ui.statLabelContainer} bg-[#767A61]`}>
                      <Text className={ui.statLabelText}>Skin Health</Text>
                    </View>
                  </View>

                  {/* Second Square */}
                  <View className={ui.statCard}>
                    <View className={ui.statValueContainer}>
                      <Text className={ui.statValue}>27</Text>
                    </View>
                    <View className={`${ui.statLabelContainer} bg-[#CABEA6]`}>
                      <Text className={ui.statLabelText}>Skin Age</Text>
                    </View>
                  </View>
                </View>

                <View className={ui.descriptionBox}>
                  <Text className={ui.descriptionTitle}>
                    {ui.actualDescriptionTitle}
                  </Text>
                  <Text className={ui.descriptionText}>
                    {ui.actualDescriptionText}
                  </Text>
                </View>

                <ContinueButton title="Analyst Again" showIcon={false} />
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
