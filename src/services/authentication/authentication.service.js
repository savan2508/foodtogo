import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = async (email, password) => {
  const auth = getAuth();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
};
