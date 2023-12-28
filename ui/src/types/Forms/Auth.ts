export interface LoginRegisterForm {
  email: string;
  password: string;
}

export interface ResetPasswordEmailForm {
  email: string;
}

export interface ResetPasswordForm {
  newPassword: string;
}

export interface ChangePasswordForm {
  newPassword: string;
}
