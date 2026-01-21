import { TouchableOpacity, Text } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { COLORS } from "@/constants/colors";

export const SignOutButton = () => {
  const { signOut } = useAuth();

  return (
    <TouchableOpacity
      onPress={() => signOut()}
      style={{
        backgroundColor: COLORS.expense,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 6,
      }}
    >
      <Text style={{ color: COLORS.white, fontWeight: "600" }}>Sign Out</Text>
    </TouchableOpacity>
  );
};