import { FC, ReactNode } from 'react';
import { PanGestureHandler, TouchData } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

export type DraggableProps = {
  children: ReactNode;
  handleDrop: (event: TouchData) => void;
};

export const Draggable: FC<DraggableProps> = ({ children, handleDrop }) => {
  const dragStart = useSharedValue({ x: 0, y: 0 });
  const dragValue = useSharedValue({ x: 0, y: 0, opacity: 1 });

  const dragAble = useAnimatedStyle(() => ({
    zIndex: 999,
    transform: [{ translateX: dragValue.value.x }, { translateY: dragValue.value.y }] as any,
  }));

  return (
    <PanGestureHandler
      onGestureEvent={({ nativeEvent }) => {
        dragValue.value = {
          ...dragValue.value,
          x: nativeEvent.translationX,
          y: nativeEvent.translationY,
        };
      }}
      onBegan={() => {
        dragStart.value = { x: dragValue.value.x, y: dragValue.value.y };
      }}
      onEnded={({ nativeEvent }) => {
        dragValue.value = { opacity: 0, ...dragValue.value };
        dragValue.value = { ...dragStart.value, opacity: 1 };
        handleDrop(nativeEvent as unknown as TouchData);
        dragStart.value = { x: 0, y: 0 };
      }}>
      <Animated.View style={dragAble}>{children}</Animated.View>
    </PanGestureHandler>
  );
};
