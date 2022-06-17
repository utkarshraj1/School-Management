export interface ILoginCredentials {
  username: string;
  roles: string[];
  user_reg_id: string;
  tokenDetails: {
    idToken: string;
    refreshToken: string;
    validTill: number;
    desc: string;
  };
}
