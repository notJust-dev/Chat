import { useSupabase } from '@/providers/SupabaseProvider';
import { useQuery } from '@tanstack/react-query';
import { Image, ImageProps } from 'react-native';

type SupaImageProps = {
  path: string;
} & ImageProps;

export default function SupaImage({ path, ...imageProps }: SupaImageProps) {
  const supabase = useSupabase();

  const { data } = useQuery({
    queryKey: ['supa-image', path],
    queryFn: async () => {
      const { data } = await supabase.storage
        .from('images')
        .createSignedUrl(path, 3600);

      return data?.signedUrl;
    },
  });

  return <Image {...imageProps} source={{ uri: data }} />;
}
