import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, ScrollView, SafeAreaView } from "react-native";
import { styles } from "../components/base/Styles";
import Syllabus from "../components/Syllabus";
import { getCourseById } from "../services/firebase.service";

const CourseDetail = ({ route, navigation }) => {
  const { id } = route.params;
  const [data, setData] = useState();

  useEffect(() => {
    if (id) getCourseById(id).then((res) => setData(res));
  }, [id]);

  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{ flex: 1, paddingVertical: 5, paddingHorizontal: 10 }}>
        {data ? (
          <View style={{ flex: 1 }}>
            <ImageBackground
              source={{ uri: data.thumbnail }}
              style={{ flex: 1, resizeMode: "cover", aspectRatio: 1 / 0.5 }}
            ></ImageBackground>

            <Text style={{ padding: 10, fontSize: 20, fontWeight: 500 }}>
              {data.name}
            </Text>
            <Text
              style={{ paddingHorizontal: 10, fontSize: 20, fontWeight: 500 }}
            >
              {data.instructor}
            </Text>

            <Text
              style={{
                padding: 10,
                borderColor: "grey",
                borderBottomWidth: 1,
                marginBottom: 20,
              }}
            >
              {data.description}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
                paddingLeft: 10,
                paddingRight: 15,
              }}
            >
              <View>
                <Text style={{ color: "grey" }}>Duration </Text>
              </View>
              <View>
                <Text style={{ display: "flex", textAlign: "left" }}>
                  {data.duration}
                </Text>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
                paddingLeft: 10,
                paddingRight: 15,
              }}
            >
              <View>
                <Text style={{ color: "grey" }}>Schedule </Text>
              </View>
              <View>
                <Text>{data.schedule}</Text>
              </View>
            </View>

            <Text
              style={{
                display: "flex",
                textAlign: "right",
                padding: 10,
                color: "grey",
              }}
            >
              {data.location}
            </Text>

            <View
              style={{
                borderRadius: 10,
                backgroundColor:
                  data.enrollmentStatus == "In Progress"
                    ? "#FFFA75"
                    : "#73f783",
                width: "100%",
                justifyContent: "center",
                padding: 7,
              }}
            >
              <Text
                style={{
                  fontWeight: 600,
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                {data.enrollmentStatus}
              </Text>
            </View>

            <Text
              style={{
                display: "flex",
                textAlign: "right",
                padding: 10,
                color: "grey",
              }}
            >
              {data.prerequisites}
            </Text>
            <View
              style={{
                borderColor: "grey",
                borderTopWidth: 1,
                marginTop: 20,
                paddingTop: 20,
              }}
            >
              <Syllabus
                syllabus={data.syllabus.map((e) => {
                  return { ...e, expanded: false };
                })}
              />
            </View>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </ScrollView>
    </SafeAreaView>
    
  );
};

export default CourseDetail;
