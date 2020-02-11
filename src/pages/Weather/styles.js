import styled from 'styled-components/native';
import { colors, sizes } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

export const BoxOtherWeather = styled.View`
  margin-top: ${sizes.margin_med}px;
  flex: 2;
`;

export const TitleWeeks = styled.Text`
  font-size: ${sizes.font_med_1}px;
  margin-left: ${sizes.margin_min_1}px;
  font-weight: bold;
`;
