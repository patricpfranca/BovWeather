import styled from 'styled-components/native';
import { colors, sizes } from '~/styles';

export const BoxWeather = styled.View`
  margin: ${sizes.margin_min_1}px;
  padding: ${sizes.padding_minor}px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.purple};
  border-radius: ${sizes.border_major}px;
  flex: 3;
  box-shadow: 0px 4px 6px #000;
  shadow-opacity: 0.25;
  elevation: 5;
`;

export const TxtTemperature = styled.Text`
  font-size: ${sizes.font_max_1}px;
  color: ${colors.white};
  box-shadow: 3px 0px 1px #000;
  shadow-opacity: 0.25;
  elevation: 5;
`;

export const TxtDescription = styled.Text`
  font-size: ${sizes.font_med}px;
  color: ${colors.white};
`;

export const TxtDate = styled.Text`
  font-size: ${sizes.font_min}px;
  color: ${colors.white};
  margin-top: ${sizes.margin_min}px;
`;

export const TxTCity = styled.Text`
  font-size: ${sizes.font_max}px;
  color: ${colors.white};
`;

export const Sunrise = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Sunset = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextHrSun = styled.Text`
  margin-left: 2px;
  font-size: ${sizes.font_med}px;
  color: ${colors.white};
`;

export const BoxSun = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
`;
