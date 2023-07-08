import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Page() {
  return (
    <View>
      <Text className="font-bold text-lime-500">Hello React Native!</Text>
      <Link href="/about">Go to about page</Link>
    </View>
  );
}
