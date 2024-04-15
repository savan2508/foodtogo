import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { useContext, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TextCustom } from "../../../components/typography/textcustom.component";
import { ActivityIndicator } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <>
      <AccountBackground>
        <AccountCover />
        <Title>Welcome to Food to Go</Title>
        <AccountContainer>
          <AuthInput
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
          <Spacer size="large">
            <AuthInput
              label="Password"
              value={password}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              secure
              onChangeText={(p) => setPassword(p)}
            />
          </Spacer>
          <Spacer size="large">
            <AuthInput
              label="Repeat Password"
              value={repeatedPassword}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              secure
              onChangeText={(p) => setRepeatedPassword(p)}
            />
          </Spacer>
          {error && (
            <Spacer size="large">
              <ErrorContainer>
                <TextCustom variant="error">Something went wrong</TextCustom>
              </ErrorContainer>
            </Spacer>
          )}
          <Spacer size="large">
            {!isLoading ? (
              <AuthButton
                icon="lock-open-outline"
                mode="contained"
                onPress={() => onRegister(email, password, repeatedPassword)}
              >
                Register
              </AuthButton>
            ) : (
              <ActivityIndicator animating={true} color={Colors.blue} />
            )}
          </Spacer>
        </AccountContainer>
        <Spacer size="large">
          <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
        </Spacer>
      </AccountBackground>
    </>
  );
};
