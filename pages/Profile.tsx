import { StyleSheet, Text, View } from "react-native";
import { Button, List, Avatar } from "react-native-paper";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import type { RootStackParamList } from "../App";

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, "Profile">;

const MyPhoto = () => (
  <Avatar.Image size={128} source={require("../assets/avatar.png")} />
);

export function ProfileScreen({ navigation }: ProfileScreenProps) {
  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.avatarWrapper}>
        <MyPhoto></MyPhoto>
        <Text style={styles.avatar}>Tinsley Li</Text>
      </View>
      <List.Section style={{ flex: 1 }}>
        <List.Item
          title="188 0400 4850"
          description="Phone number"
          left={(props) => <List.Icon {...props} icon="cellphone" />}
        ></List.Item>
        <List.Item
          title="tinsley.li@cn.pwc.com"
          description="Email"
          left={(props) => <List.Icon {...props} icon="email-outline" />}
        ></List.Item>
        <List.Item
          title="en-US"
          description="Language"
          left={(props) => <List.Icon {...props} icon="web" />}
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        ></List.Item>
      </List.Section>

      <View style={styles.signOutWrapper}>
        <Button
          onPress={() => navigation.navigate("Home")}
          style={{ marginTop: 10 }}
        >
          Sign out
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatarWrapper: {
    marginVertical: 'auto',
    alignItems: "center",
    justifyContent: "center",
    height: 340,
  },
  avatar: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  signOutWrapper: {
    height: 100,
    marginHorizontal: 'auto',
  }
});
