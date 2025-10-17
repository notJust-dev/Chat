import { useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace('/');
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/guides/development/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));

      Alert.alert('Error', (err as Error).message);
    }
  };

  return (
    <View className='p-4 gap-4 bg-white flex-1'>
      <TextInput
        autoCapitalize='none'
        value={emailAddress}
        placeholder='Enter email'
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        className='border border-neutral-400 p-4 rounded-lg'
      />
      <TextInput
        value={password}
        placeholder='Enter password'
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        className='border border-neutral-400 p-4 rounded-lg'
      />
      <TouchableOpacity
        onPress={onSignInPress}
        className='bg-blue-500 p-4 rounded-full items-center'
      >
        <Text className='font-semibold text-white text-lg'>Continue</Text>
      </TouchableOpacity>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 3 }}>
        <Text>Don't have an account?</Text>
        <Link href='/sign-up'>
          <Text className='text-blue-600 font-bold'>Sign up</Text>
        </Link>
      </View>
    </View>
  );
}
