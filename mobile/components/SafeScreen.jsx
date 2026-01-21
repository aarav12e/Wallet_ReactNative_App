import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "@/constants/colors";

const SafeScreen = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ 
      paddingTop: insets.top, 
      flex: 1, 
      backgroundColor: COLORS?.background || "#FFF8F3" 
    }}>
      {children}
    </View>
  );
};

export default SafeScreen;
