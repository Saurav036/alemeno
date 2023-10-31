import React, { useEffect, useState , useCallback} from "react";
import { Text,
  ScrollView,
  View,
  TouchableOpacity,
  RefreshControl,
  SafeAreaView, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../components/base/Styles";
import Card from "../components/base/Card";
import { getCourses } from "../services/firebase.service";

const CourseList = (props) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    getCourses().then((res) => setData(res));
  }, []);

  const goToPost = (id) => {
    return navigation.navigate("Course", { id });
  };
  const onRefresh = useCallback(() => {
    getCourses().then((res) => setData(res));
  }, []);

  const truncateStr = (str, length) => {
    return str.substring(0, length) + "...";
  };

  return (

    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >

    <View style={{ backgroundColor: "white" }}>
      <Text style={styles.h}>All courses</Text>
      <View style={styles.container}>
        {data &&
          Array.isArray(data) &&
          data?.map((p, index) => {
            return (
              <Card
                style={{
                  // height: 100,
                  width: "100%",

                  //   backgroundColor: "#C4E9FB",
                  borderRadius: 15,
                  // borderWidth:1,
                  // borderColor:'grey',
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 50,
                }}
                key={p?.id}
                thumbnail={p.thumbnail}
              >
                <TouchableOpacity
                  style={{
                    // height: 100,
                    width: "100%",
                  }}
                  onPress={() => goToPost(p.id)}
                >
                  <ImageBackground
                    source={{ uri: p.thumbnail }}
                    style={styles.backGroundImage}
                  ></ImageBackground>
                  <Text style={{ padding: 10, fontSize: 20, fontWeight: 500 }}>
                    {/* Title: */} {truncateStr(p.name, 23)}
                  </Text>
                  <Text style={{ padding: 10 }}>{p.description}</Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 10,
                      paddingLeft: 15,
                      paddingRight: 15,
                    }}
                  >
                    <View>
                      <Text>{p.instructor}</Text>
                    </View>
                    <View
                      style={{
                        borderRadius: 10,
                        backgroundColor:
                          p.enrollmentStatus == "In Progress"
                            ? "#FFFA75"
                            : "#73f783",
                        width: "30%",
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
                        {p.enrollmentStatus}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </Card>
            );
          })}
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default CourseList;
