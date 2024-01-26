import { useState } from 'react';
import { COMPONENT_LIST } from 'constant';
import { StatusBar } from 'expo-status-bar';
import { TouchData } from 'react-native-gesture-handler';
import { StyleSheet, View, Text, Image, LayoutRectangle } from 'react-native';
import { Draggable } from 'components';

export default function App() {
  const [dropZoneArea, setDropZoneArea] = useState<LayoutRectangle>();

  const handleDrop = (e: TouchData) => {
    if (
      dropZoneArea.x < e.absoluteX &&
      dropZoneArea.y < e.absoluteY &&
      dropZoneArea.width + dropZoneArea.x > e.absoluteX &&
      dropZoneArea.height + dropZoneArea.y > e.absoluteY
    ) {
      console.log('🚀 ~ handleDrop ~ e:');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ width: 300, backgroundColor: 'white', flexDirection: 'row' }}>
        <View style={{ width: 70 }}>
          {COMPONENT_LIST.map(e => (
            <View style={{ alignItems: 'center', marginVertical: 10 }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: e.darkColor,
                  backgroundColor: e.color,
                }}
              />
              <Text style={{ fontSize: 12, textAlign: 'center' }}>{e.title}</Text>
            </View>
          ))}
        </View>
        <View style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
          {COMPONENT_LIST.flatMap(e => e.data).map(item => (
            <View key={item.name}>
              <Text style={styles.componentListText}>{item.name}</Text>
              {item.icon && (
                <View>
                  <Image
                    source={item.icon}
                    style={[styles.componentListIcon, { position: 'absolute' }]}
                  />
                  <Draggable handleDrop={handleDrop}>
                    <Image source={item.icon} style={[styles.componentListIcon]} />
                  </Draggable>
                </View>
              )}
            </View>
          ))}
        </View>
      </View>
      <View
        style={{
          width: 300,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}
        onLayout={({ nativeEvent }) => setDropZoneArea(nativeEvent.layout)}>
        <Text>Drop Zone</Text>
      </View>
      <View style={{ flex: 1, zIndex: -1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>

      <View style={{ width: 300, backgroundColor: 'green', height: 'auto' }}>
        <Text>Right Side</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  componentListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
    marginBottom: 5,
    borderBottomWidth: 1,
  },
  componentListText: {
    fontSize: 14,
    color: 'black',
  },
  componentListIcon: {
    width: 80,
    height: 80,
  },
});
