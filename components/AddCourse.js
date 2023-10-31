import React ,{useState} from 'react'
import {View, Text , TextInput} from 'react-native'
import {styles} from './base/Styles'
import Button from './base/Button'

const AddCourse = ()=>{
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const initialData = {
    id: '', // Unique identifier for the course
    name: '',
    instructor: '', // Name of the course instructor
    description: '',
    enrollmentStatus: '', // Can be 'Open', 'Closed', or 'InProgress 
    thumbnail: '', //Link to the course thumbnail
    duration: '', // Duration of the course
    schedule: "" , //'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: '',
    prerequisites: [],//['Basic JavaScript knowledge', 'Familiarity withReact'],
    // syllabus: [
    // {
    // week: 1,
    // topic: 'Introduction to React Native',
    // content: 'Overview of React Native, setting up your development environment.'
    // },
    // {
    // week: 2,
    // topic: 'Building Your First App',
    // content: 'Creating a simple mobile app using React Native components.'
    // },
    // // Additional weeks and topics...
    // ],
    syllabus:[],
    // students: [
    // {
    // id: 101,
    // name: 'Alice Johnson',
    // email: 'alice@example.com',
    // },
    // {
    // id: 102,
    // name: 'Bob Smith',
    // email: 'bob@example.com',
    // },
    // // Additional enrolled students...
    // ],
    students:[]
    };
  
const [data, setData]  = useState(initialData)


  const handleAddCourse = () => {
    // You can add your registration logic here
    if (password === confirmPassword) {
      // Registration is successful, implement your registration logic.
      console.log('Registration successful');
    } else {
      // Passwords do not match, show an error message.
      console.log('Passwords do not match');
    }
  };


//   const updateField=(e)=>{
//     setData(prev=>{...prev, [e.target.name]: e.target.value})
//   }


    return <View style={styles.container}>
    <Text style={styles.header}>Register</Text>
    <TextInput
      style={styles.input}
      placeholder="ID"
      onChange={(text,e) => console.log(text)}
      value={email}
    />
    {/* <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}
      value={password}
    />
    <TextInput
      style={styles.input}
      placeholder="Confirm Password"
      secureTextEntry={true}
      onChangeText={(text) => setConfirmPassword(text)}
      value={confirmPassword}
    /> */}
    <Button onChangeAction={handleAddCourse} buttonText="Add Course" />
          </View>
}

export default AddCourse