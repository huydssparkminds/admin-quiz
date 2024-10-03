export interface UserTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface UserLoginRequest {
  email: string;
  password: string;
  mfaCode?: string;
}

export interface UserAuthDetail {
  isAuthenticated?: boolean;
  tokenExpiresIn?: number;
}

export interface UserDetail {
  id: number;
  firstName: string;
  lastName: string;
  avatar?: string;
  email: string;
  role: string;
  registerType: string;
}

export interface UserMenu {
  link: string;
  label: string;
  icon?: string;
  childrens?: UserMenu[];
}

export interface UserResetPasswordRequest {
  email: string;
}