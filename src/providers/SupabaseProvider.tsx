import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  createClient,
  processLock,
  SupabaseClient,
} from '@supabase/supabase-js';
import { NativeModule, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSession } from '@clerk/clerk-expo';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABSAE_ANON_KEY;

type SupabaseContextType = {
  supabase: SupabaseClient;
};

const SupabaseContext = createContext<SupabaseContextType>({
  supabase: createClient(supabaseUrl, supabaseAnonKey),
});

export default function SupabaseProvider({ children }: PropsWithChildren) {
  const { session } = useSession();
  const [supabase, setSupabase] = useState<SupabaseClient>(
    createClient(supabaseUrl, supabaseAnonKey)
  );

  useEffect(() => {
    const newClient = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        ...(Platform.OS !== 'web' ? { storage: AsyncStorage } : {}),
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
        lock: processLock,
      },
      async accessToken() {
        return session?.getToken() ?? null;
      },
    });

    setSupabase(newClient);
  }, [session]);

  return (
    <SupabaseContext.Provider value={{ supabase }}>
      {children}
    </SupabaseContext.Provider>
  );
}

export const useSupabase = () => {
  const { supabase } = useContext(SupabaseContext);

  return supabase;
};
