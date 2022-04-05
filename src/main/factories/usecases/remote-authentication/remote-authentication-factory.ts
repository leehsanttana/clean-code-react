import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication';
import { MakeAxiosHttpClient } from '../../http/axios-http-client-factory';
import { Authentication } from '@/domain/usecases';
import { MakeApiUrl } from '../../http/api-url-factory';

export const MakeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(MakeApiUrl('/login'), MakeAxiosHttpClient());
};
