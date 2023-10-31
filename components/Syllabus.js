import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ExpandableList = ({syllabus}) => {
  const [data, setData] = useState([
    ...syllabus
    // Add more items as needed
  ]);

  const toggleExpand = (id) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.sid === id) {
          return { ...item, expanded: !item.expanded };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.sid}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => toggleExpand(item.sid)}>
          <View style={styles.item}>
            <Text style={styles.title}>{item.expanded?"-":"+"}{" "}{item.topic}</Text>
            {item.expanded && <Text style={styles.description}>{item.content}</Text>}
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    borderRadius:10
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
  },
  description: {
    fontSize: 16,
    color: 'gray',
    paddingLeft:12,
    paddingVertical:10
  },
});

export default ExpandableList;
