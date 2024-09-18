import { CameraView, useCameraPermissions, CameraType } from "expo-camera";
import { styled } from "styled-components/native";
import { useEffect, useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { TextCustom } from "../../../components/typography/textcustom.component";
import { Button } from "react-native-paper";

const ProfileCamera = styled(CameraView)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = () => {
  const [facing, setFacing] = useState < CameraType > "back";
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <TextCustom>Access to camera has been denied.</TextCustom>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <ProfileCamera facing={facing}>
      <View>
        <TouchableOpacity onPress={toggleCameraFacing}>
          <TextCustom>Flip Camera</TextCustom>
        </TouchableOpacity>
      </View>
    </ProfileCamera>
  );
};
