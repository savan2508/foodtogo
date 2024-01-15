import { styled } from "styled-components/native";
import { TextCustom } from "../typography/textcustom.component";
import { Image, Platform } from "react-native";
import { View } from "react-native";
import WebView from "react-native-webview";

const CompactImage = styled(Image)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const RestaurantCardItem = styled(View)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;
  return (
    <RestaurantCardItem>
      <Image source={{ uri: restaurant.photos[0] }} />
      <TextCustom variant="caption">{restaurant.name}</TextCustom>
    </RestaurantCardItem>
  );
};
