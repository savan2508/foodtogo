import { signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = async (auth, email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential?.user;
  } catch (error) {
    throw error;
  }
};
