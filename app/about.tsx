import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function AboutPage() {
  return (
    <View>
      <Text>About Page</Text>
      <Link href="/">Go to home</Link>
    </View>
  );
}
