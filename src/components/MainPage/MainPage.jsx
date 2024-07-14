import { useEffect, useState } from 'react';
import {
  MainPageContainer,
  MainPageTitle,
  MainPageContent,
  MainPageFooter,
} from './MainPage.Styled';

import { Modal } from 'components/Modal';
import { useShowModal } from 'hooks/useMobileModal';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);

  const [showMobileModal, , hideMobileModal] = useShowModal();

  useEffect(() => {
    return () => {
      if (showModal || showMobileModal) {
        hideMobileModal();
        setShowModal(false);
      }
    };
  }, [hideMobileModal, showMobileModal, showModal]);

  const { t } = useTranslation();
  return (
    <>
      <MainPageContainer>
        <MainPageTitle title={t('title')} />

        {(showModal || showMobileModal) && (
          <Modal showModal={showModal} setShowModal={setShowModal} />
        )}
      </MainPageContainer>
    </>
  );
};

export default MainPage;
