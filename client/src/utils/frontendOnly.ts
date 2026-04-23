export const isFrontendOnlyMode = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  const frontendOnlyFlag = (window as Window & { __LIBRECHAT_FRONTEND_ONLY__?: boolean })
    .__LIBRECHAT_FRONTEND_ONLY__;

  return frontendOnlyFlag !== false;
};
