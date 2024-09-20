import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { useContext, useEffect, useState } from "react";
import { Avatar, List } from "react-native-paper";
import { styled } from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TextCustom } from "../../../components/typography/textcustom.component";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async () => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
    if (photoUri) {
      setPhoto(photoUri);
    }
  };

  useFocusEffect(() => {
    getProfilePicture();
  });

  return (
    <SafeArea>
      <Spacer position="top" size="large" />
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          ) : (
            <Avatar.Image size={180} source={{ uri: photo }} />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <TextCustom variant="label">{user.email}</TextCustom>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
