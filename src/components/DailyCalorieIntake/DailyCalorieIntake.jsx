import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Title, Text, Span, Wrapper } from './DailyCalorieIntake.styled';
import { useGetBannedProductsMutation } from '../../redux/apis/userNormaApi';
import { List } from './List';
import { useTranslation } from 'react-i18next';
import authSelectors from '../../redux/auth/authSelector';
import Loader from 'components/Loader/Loader';

export const DailyCalorieIntake = () => {
  const { t } = useTranslation();
  const userInfo = useSelector(authSelectors.getUserData);

  const [getBannedProducts, { data, isLoading }] =
    useGetBannedProductsMutation();
  useEffect(() => {
    if (!userInfo) return;
    const { height, age, currentWeight, desiredWeight, bloodType } = userInfo;

    getBannedProducts({
      currentWeight,
      height,
      age,
      desiredWeight,
      bloodType,
    });
  }, [getBannedProducts, userInfo]);

  const formula = data?.results?.dailyRate;

  return (
    <>
      <Title>{t('recommendation')}</Title>
      <Wrapper>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Text>
              {formula} <Span>{t('kcal')}</Span>
            </Text>

            <List user={userInfo} data={data} isLoading={isLoading} />
          </>
        )}
      </Wrapper>
    </>
  );
};
