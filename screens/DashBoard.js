import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { getCourses } from '../services/firebase.service';
import * as Progress from 'react-native-progress'
//hard coded here it should be different schema
const courses = [
  { id: 'c1', name: 'Learn Python in 4 weeks', enrolled: false , progress:0},
  { id: 'c2', name: 'Introduction to React Native', enrolled: true,  progress:4 },
  { id: 'c3', name: 'Master Java with OOPS', enrolled: false , progress:0},
  { id: 'c4', name: 'Master Java with OOPS', enrolled: false , progress:0},
  // Add more courses
];

const EnrollmentDashboard = () => {
  const [courseData, setCourseData] = useState(courses);

  // useEffect(() => {
  //   // getCourses().then((res) => setData(res));
  // }, []);

  const handleEnrollToggle = (courseId) => {
    
    setCourseData((prevData) =>
      prevData.map((course) =>{
        course.id === courseId && !course.enrolled ? alert(`You have enrolled in \n ${course.name}`)
        :course.id === courseId && alert(`Your enrollement with \n ${course.name} \nhas been ended `)

        return course.id === courseId ? { ...course, enrolled: !course.enrolled } : course
      }
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enrollment Dashboard</Text>
      <FlatList
        data={courseData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
            <View>
            <Text style={styles.courseName}>{item.name}</Text>
            <Progress.Bar progress={item.progress/10} width={200} />
            </View>
            <Button
            style={styles.button}
              title={item.enrolled ? 'Drop' : 'Enroll'}
              onPress={() => handleEnrollToggle(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  courseName: {
    fontSize: 16,
    marginBottom:10
  },
  button:{
    padding:5,
    borderRadius:10
  }
});

export default EnrollmentDashboard;
