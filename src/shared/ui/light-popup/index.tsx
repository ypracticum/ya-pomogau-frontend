import { OverlayingPopup } from 'shared/ui/overlaying-popup';
import { ReactNode } from 'react';

interface LightPopupProps {
  children: ReactNode;
  isPopupOpen: boolean;
}

export const LightPopup = ({ children, isPopupOpen }: LightPopupProps) => {
  return <OverlayingPopup isOpened={isPopupOpen}>{children}</OverlayingPopup>;
};
