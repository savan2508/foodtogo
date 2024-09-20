import { CameraView, useCameraPermissions } from "expo-camera";
import { styled } from "styled-components/native";
import { useContext, useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { TextCustom } from "../../../components/typography/textcustom.component";
import { Button, Icon } from "react-native-paper";
import { useIsFocused } from "@react-navigation/native";
import { useAppState } from "@react-native-community/hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const CameraScreen = ({ navigation }) => {
  const [facing, setFacing] = useState("front");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const { user } = useContext(AuthenticationContext);

  const isFocused = useIsFocused();
  const appState = useAppState();
  const isActive = isFocused && appState === "active";

  const Snap = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <CameraContainer>
        <NoPermissionMessage>
          Access to camera has been denied.
        </NoPermissionMessage>
        <Button onPress={requestPermission} title="grant permission">
          Grant Permission
        </Button>
      </CameraContainer>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "front" ? "back" : "front"));
  }

  return (
    <CameraContainer>
      {isActive && (
        <ProfileCamera
          facing={facing}
          ref={(camera) => (cameraRef.current = camera)}
          ratio="1:1"
          active={isActive}
        >
          <ButtonContainer>
            <FlipCameraButton onPress={toggleCameraFacing}>
              <Icon
                name="camera-flip"
                size={35}
                color="white"
                source="camera-flip"
              />
            </FlipCameraButton>
            <SnapButton onPress={Snap}>
              <Icon name="camera" size={35} color="black" source="camera" />
            </SnapButton>
          </ButtonContainer>
        </ProfileCamera>
      )}
    </CameraContainer>
  );
};

const ProfileCamera = styled(CameraView)`
  width: 100%;
  height: 100%;
`;

const NoPermissionMessage = styled(TextCustom)`
  text-align: center;
  padding-bottom: 10px;
`;

const CameraContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 30px;
  width: 100%;
`;

const FlipCameraButton = styled(TouchableOpacity)`
  width: 70px;
  height: 70px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  border-width: 4px;
  border-color: rgba(0, 0, 0.6, 0.2);
`;

const SnapButton = styled(TouchableOpacity)`
  width: 70px;
  height: 70px;
  background-color: white;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  border-width: 4px;
  border-color: rgba(0, 0, 0, 0.2);
`;
