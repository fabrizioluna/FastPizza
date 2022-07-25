import { Layout } from '@/components/layout';
import { useLogin } from '@/hooks/useLogin';
import { ErrorProfile } from './components/showError.profile';
import { ShowProfile } from './components/showProfile.profile';

const ProfileClient = () => {
  const [loading, userData] = useLogin();
  return (
    <Layout>
      {!loading && userData.status ? (
        <ShowProfile user={userData.data} />
      ) : (
        <ErrorProfile />
      )}
    </Layout>
  );
};

export default ProfileClient;
